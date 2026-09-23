'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Download, X, Share2, PlusSquare, WifiOff, CheckCircle2 } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

// Subscriptions for browser capabilities
function subscribeStandalone(callback: () => void) {
  const mql = window.matchMedia('(display-mode: standalone)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getStandaloneSnapshot() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    // @ts-expect-error - Safari iOS specific property
    window.navigator.standalone === true
  );
}

function getStandaloneServerSnapshot() {
  return false;
}

function subscribeOnline(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getOnlineSnapshot() {
  return navigator.onLine;
}

function getOnlineServerSnapshot() {
  return true;
}

function subscribeStatic() {
  return () => {};
}

function getIosSnapshot() {
  return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
}

function getIosServerSnapshot() {
  return false;
}

export function PwaRegistrar() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showIosSheet, setShowIosSheet] = useState(false);
  const [showOnlineToast, setShowOnlineToast] = useState(false);

  const isStandalone = useSyncExternalStore(subscribeStandalone, getStandaloneSnapshot, getStandaloneServerSnapshot);
  const isOnline = useSyncExternalStore(subscribeOnline, getOnlineSnapshot, getOnlineServerSnapshot);
  const isIos = useSyncExternalStore(subscribeStatic, getIosSnapshot, getIosServerSnapshot);

  // Monitor network transitions to show a brief recovery toast
  useEffect(() => {
    if (isOnline) {
      const dismissed = sessionStorage.getItem('vithea_initial_online');
      if (dismissed) {
        const timer = setTimeout(() => {
          setShowOnlineToast(true);
          const hideTimer = setTimeout(() => setShowOnlineToast(false), 3000);
          return () => clearTimeout(hideTimer);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        sessionStorage.setItem('vithea_initial_online', '1');
      }
    }
  }, [isOnline]);

  useEffect(() => {
    // 1. Service Worker Registration
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((reg) => {
            console.log('[ViThea PWA] Service Worker active, scope:', reg.scope);
          })
          .catch((err) => {
            console.warn('[ViThea PWA] SW registration failed:', err);
          });
      });
    }

    if (isStandalone) return;

    // Check recent dismissal
    const dismissedAt = localStorage.getItem('vithea_pwa_dismissed');
    const isDismissedRecently =
      dismissedAt && Date.now() - parseInt(dismissedAt, 10) < 1000 * 60 * 60 * 24 * 7;

    // iOS prompt trigger
    if (isIos && !isDismissedRecently) {
      const timer = setTimeout(() => setShowInstallBanner(true), 3500);
      return () => clearTimeout(timer);
    }

    // Android/Chrome beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      if (!isDismissedRecently) {
        setShowInstallBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [isStandalone, isIos]);

  const handleInstallClick = async () => {
    if (isIos) {
      setShowIosSheet(true);
      return;
    }

    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBanner(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    localStorage.setItem('vithea_pwa_dismissed', Date.now().toString());
  };

  return (
    <>
      {/* Offline Alert Toast */}
      {!isOnline && (
        <div className="fixed top-20 left-4 right-4 z-50 flex items-center justify-center pointer-events-none animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-amber-500/90 backdrop-blur-md text-slate-950 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-xl border border-amber-400">
            <WifiOff className="w-4 h-4" />
            <span>Offline Mode — Cached pages available</span>
          </div>
        </div>
      )}

      {/* Back Online Toast */}
      {showOnlineToast && (
        <div className="fixed top-20 left-4 right-4 z-50 flex items-center justify-center pointer-events-none animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-emerald-500/90 backdrop-blur-md text-slate-950 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-xl border border-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Connection restored</span>
          </div>
        </div>
      )}

      {/* Floating PWA Install Prompt Banner (Mobile & Desktop) */}
      {showInstallBanner && !isStandalone && (
        <aside
          aria-label="Install ViThea App"
          className="fixed bottom-20 md:bottom-6 left-3 right-3 sm:left-auto sm:right-6 sm:w-96 z-40 bg-[#070e1c]/95 border border-sky-500/30 backdrop-blur-xl p-4 rounded-2xl shadow-2xl shadow-black/80 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0e1d2e] via-[#07111c] to-[#040911] border border-sky-400/40 flex items-center justify-center p-2 shrink-0">
              <Image
                src="/vithea-mark.png"
                alt="ViThea"
                width={26}
                height={26}
                className="object-contain drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Install ViThea App</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  PWA
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                Fast, app-like experience on home screen
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handleInstallClick}
              className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-all shadow-md active:scale-95 flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install</span>
            </button>
            <button
              type="button"
              onClick={handleDismiss}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
              aria-label="Dismiss install banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* iOS Safari "Add to Home Screen" Bottom Sheet Modal */}
      {showIosSheet && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div
            className="w-full max-w-sm rounded-3xl bg-[#091022] border border-white/10 p-6 space-y-4 shadow-2xl relative animate-in slide-in-from-bottom-6 duration-300"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setShowIosSheet(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0e1d2e] via-[#07111c] to-[#040911] border border-sky-400/40 flex items-center justify-center p-2.5">
                <Image
                  src="/vithea-mark.png"
                  alt="ViThea"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Add ViThea to Home Screen</h3>
                <p className="text-xs text-sky-400">iOS Safari Web App</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Install ViThea on your iPhone/iPad home screen for instant access, fullscreen display, and smooth app-like navigation:
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Share2 className="w-4 h-4" />
                </div>
                <span>1. Tap the <strong>Share</strong> icon in the bottom Safari bar.</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <PlusSquare className="w-4 h-4" />
                </div>
                <span>2. Scroll down and tap <strong>Add to Home Screen</strong>.</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowIosSheet(false)}
              className="w-full py-2.5 rounded-xl bg-sky-500 text-slate-950 font-semibold text-xs hover:bg-sky-400 transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
