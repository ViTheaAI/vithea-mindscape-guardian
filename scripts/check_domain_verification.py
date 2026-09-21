import json, urllib.request, time

def verify_domain():
    try:
        with open("/Users/iris/Library/Application Support/com.vercel.cli/auth.json") as f:
            data = json.load(f)
        token = data.get("token")
    except Exception as e:
        print("Could not load auth.json:", e)
        return False

    url = "https://api.vercel.com/v9/projects/prj_ZQlMKK9eJL19QSwDQYGOv1WMfbtw/domains/vithea.online/verify"
    req = urllib.request.Request(url, data=b"{}", headers={
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    })

    try:
        with urllib.request.urlopen(req) as resp:
            res = json.loads(resp.read().decode())
            print("Verified successfully:", res)
            return True
    except urllib.error.HTTPError as e:
        print("Status:", e.code, e.read().decode())
        return False
    except Exception as e:
        print("Error:", e)
        return False

if __name__ == "__main__":
    verify_domain()
