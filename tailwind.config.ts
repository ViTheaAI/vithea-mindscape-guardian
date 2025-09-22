import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          secondary: "hsl(var(--card-secondary))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },
        // Status Colors with Glow Effects
        critical: {
          DEFAULT: "hsl(var(--critical))",
          glow: "hsl(var(--critical-glow))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          glow: "hsl(var(--warning-glow))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          glow: "hsl(var(--success-glow))",
        },
        // Chart Colors
        chart: {
          cyan: "hsl(var(--chart-cyan))",
          orange: "hsl(var(--chart-orange))",
          green: "hsl(var(--chart-green))",
          red: "hsl(var(--chart-red))",
          yellow: "hsl(var(--chart-yellow))",
          purple: "hsl(var(--chart-purple))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      // Holographic Gradients
      backgroundImage: {
        'holographic': 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card-secondary)) 50%, hsl(var(--card)) 100%)',
        'neon-glow': 'radial-gradient(circle, hsl(var(--primary-glow)) 0%, transparent 70%)',
        'status-critical': 'radial-gradient(circle, hsl(var(--critical-glow)) 0%, transparent 70%)',
        'status-warning': 'radial-gradient(circle, hsl(var(--warning-glow)) 0%, transparent 70%)',
        'status-success': 'radial-gradient(circle, hsl(var(--success-glow)) 0%, transparent 70%)',
      },
      // Glow Effects
      boxShadow: {
        'glow': '0 0 20px hsl(var(--primary) / 0.5)',
        'glow-strong': '0 0 40px hsl(var(--primary) / 0.8)',
        'critical-glow': '0 0 20px hsl(var(--critical) / 0.6)',
        'warning-glow': '0 0 20px hsl(var(--warning) / 0.6)',
        'success-glow': '0 0 20px hsl(var(--success) / 0.6)',
        'holographic': '0 8px 32px hsl(var(--card-border) / 0.15), 0 0 0 1px hsl(var(--card-border) / 0.2)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // Holographic Effects
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 40px hsl(var(--primary) / 0.8)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "led-flicker": {
          "0%, 100%": { opacity: "1" },
          "2%": { opacity: "0.9" },
          "4%": { opacity: "1" },
          "6%": { opacity: "0.95" },
          "8%": { opacity: "1" },
        },
        "scan-line": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "holographic-shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "led-flicker": "led-flicker 0.15s ease-in-out",
        "scan-line": "scan-line 2s linear infinite",
        "holographic-shimmer": "holographic-shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
