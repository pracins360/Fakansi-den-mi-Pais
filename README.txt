VACATION CLUB SYSTEM - DEPLOYMENT GUIDE

1. FOLDER STRUCTURE:
vacation-club/
├── index.html              # Member portal (main)
├── hotel-verification.html # Hotel staff verification
├── admin.html             # Founder admin panel
├── data.js                # Your database (update this!)
├── styles.css             # All styling
├── images/                # Add hotel logos here
└── README.txt

2. SETUP INSTRUCTIONS:

Step 1: Save all files in the same folder
Step 2: Update data.js with YOUR real data:
   - Add your 300 members
   - Add your 30 hotels
   - Set real passwords
   - Add hotel logos to images/ folder

Step 3: Test locally:
   - Open index.html in browser
   - Login with VC-001 / 1234
   - Test hotel verification with SUNSET123
   - Test admin with admin123

Step 4: Deploy to free hosting:

OPTION A: Netlify (Easiest)
1. Go to netlify.com
2. Drag & drop your folder
3. Get instant URL

OPTION B: GitHub Pages
1. Create GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch
5. Your site: https://username.github.io/repo

OPTION C: Firebase Hosting (Free)
1. Create Firebase project
2. Install Firebase CLI
3. Run: firebase init hosting
4. Run: firebase deploy

3. CUSTOMIZATION:

A. Change colors in styles.css:
   Primary: #667eea (lines 137, 158, etc.)
   Secondary: #764ba2

B. Add hotel logos:
   Create images/ folder
   Add hotel1-logo.png, etc.
   Update data.js with correct paths

C. Change passwords:
   - Member PINs in data.js
   - Hotel passwords in data.js (verification.password)
   - Admin password in admin.html line 187

4. SECURITY NOTES:
- This is a FRONTEND ONLY demo
- For production, add backend validation
- Change all demo passwords
- Consider adding HTTPS

5. NEXT ENHANCEMENTS:
1. Add backend (Firebase/Firestore)
2. Add email notifications
3. Add SMS verification
4. Add payment integration
5. Add real QR scanning

6. SUPPORT:
For questions, email: [your-email]
Demo URL: [your-netlify-url]
