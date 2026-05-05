/**
 * WORLD CUP 2026 PREDICTOR — Firebase Config
 *
 * FREE SETUP (Spark plan):
 *  1. Go to https://console.firebase.google.com
 *  2. Click "Add project" → name it (e.g. wc2026) → Create
 *  3. Authentication → Sign-in method → Enable "Email/Password"
 *  4. Firestore Database → Create database → Start in Production mode → us-central1
 *  5. Project Settings (gear icon) → Your apps → Add app (</> Web icon)
 *  6. Register app, copy the firebaseConfig object below, paste your values
 *  7. Publish firestore.rules before inviting players.
 *  8. Restrict Auth authorized domains + API key HTTP referrers to your domain/GitHub Pages.
 *  9. Enable App Check enforcement for Firestore and restrict reCAPTCHA to your domain.
 * 10. To make someone an admin: Firestore → users → find their document → add field isAdmin = true (boolean)
 *
 * Production mode is still free. It only means Firestore starts locked down.
 * Do not leave Firestore in Test mode for this game.
 */

const firebaseConfig = {
  apiKey: "AIzaSyDML5hFjv8VnvEv29SSYjyPeB1S4EoV9Qc",
  authDomain: "wc-2026-d56e6.firebaseapp.com",
  projectId: "wc-2026-d56e6",
  storageBucket: "wc-2026-d56e6.firebasestorage.app",
  messagingSenderId: "610861143468",
  appId: "1:610861143468:web:9094853337d5741db29609"
};
