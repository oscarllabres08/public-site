## Public Site APK Download Link (Always Latest)

This public site reads the APK link from a Vite environment variable:

- `VITE_LAKBAY_APK_URL`

### What to do every time you create a new APK

1. Build a new APK in the main project (EAS):

```bash
eas build --platform android --profile production
```

2. Copy the **new** APK download URL from the EAS build output / build page.

3. Create/update this file (DO NOT commit it):

`public-site/.env`

Example:

```bash
VITE_LAKBAY_APK_URL=https://expo.dev/artifacts/eas/YOUR_LATEST_BUILD.apk
```

4. Rebuild the public site and deploy the generated `public-site/dist`:

```bash
cd public-site
npm run build
```

### Notes

- The code intentionally has **no hardcoded fallback URL** to prevent serving an old APK by mistake.
- `.env` is ignored by git via `public-site/.gitignore`.

