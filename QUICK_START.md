# Virtuality.Fashion - Quick Start Guide

## ⚡ Get Up and Running in 5 Minutes

### Step 1: Setup Web3Forms (2 minutes)
```bash
# 1. Go to https://web3forms.com
# 2. Create account and verify email
# 3. Get your Access Key from Settings → Access Keys
# 4. Update .env.local file:
echo "NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here" > .env.local
```

### Step 2: Install Dependencies (1 minute)
```bash
npm install
```

### Step 3: Run Development Server (1 minute)
```bash
npm run dev
# Visit http://localhost:3000
```

### Step 4: Test the Application (1 minute)
- Navigate through all pages
- Test forms (they'll work once API key is set)
- Check mobile responsiveness

---

## 📱 Pages to Visit

| URL | Purpose | Status |
|-----|---------|--------|
| `http://localhost:3000` | Home page | ✅ Working |
| `http://localhost:3000/marketplace` | Marketplace access | ✅ Working |
| `http://localhost:3000/employees` | Team projects | ✅ Working |
| `http://localhost:3000/projects` | Portfolio | ✅ Working |
| `http://localhost:3000/projects/1` | Project details | ✅ Working |
| `http://localhost:3000/inquiry` | Inquiry form | ✅ Working |
| `http://localhost:3000/experts` | Team members | ✅ Working |

---

## 🔧 Common Tasks

### Run Linting
```bash
npm run lint
```

### Check TypeScript
```bash
npx tsc --noEmit
```

### Build for Production
```bash
npm run build
npm run start
```

### Format Code
```bash
npx prettier --write app/**/*.{ts,tsx}
```

---

## 📧 Email Configuration

### For Inquiry Form
Edit `app/inquiry/page.tsx` (line 127):
```typescript
to_email: `your-email@example.com,${formData.email}`,
```

### For Contact Form
Edit `app/components/ContactSection.tsx` (line 41):
```typescript
to_email: `your-email@example.com,${formData.email}`,
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
# 1. Push to GitHub
git push

# 2. Go to vercel.com
# 3. Import your repository
# 4. Add environment variable: NEXT_PUBLIC_WEB3FORMS_KEY
# 5. Deploy!
```

### Alternative Hosting
1. Build locally: `npm run build`
2. Upload `.next` folder to hosting
3. Set environment variables on hosting platform
4. Point domain to hosting URL

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev
# Will automatically use next available port
```

### Forms Not Sending
- Check Web3Forms API key in `.env.local`
- Verify email addresses are correct
- Check browser console for errors (F12)
- Wait 2-3 minutes for email delivery

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
npx tsc --noEmit
# Shows all type errors
```

---

## 📚 Documentation Files

- **PRE_LAUNCH_VERIFICATION.md** - QA checklist
- **LAUNCH_CHECKLIST.md** - Comprehensive launch guide
- **PROJECT_SUMMARY.md** - Technical overview
- **DEVELOPER_GUIDE.md** - Development reference
- **WEB3FORMS_SETUP.md** - Email integration guide

---

## ✅ Verification Checklist

Before deploying, verify:
- [ ] Web3Forms API key configured
- [ ] All pages load without errors
- [ ] Forms validate correctly
- [ ] Navigation works everywhere
- [ ] Responsive design looks good
- [ ] No console errors (F12)

---

## 🚀 Ready to Deploy?

1. Test locally: `npm run dev`
2. Build locally: `npm run build`
3. Fix any issues shown
4. Deploy to Vercel or your hosting
5. Test on live domain

---

## 💡 Tips

- Use `npm run lint` before committing
- Run `npm run build` before pushing to ensure production works
- Check `.env.example` for all available environment variables
- Use Vercel Analytics for monitoring
- Enable error tracking with Sentry (optional)

---

## 📞 Need Help?

- Check WEB3FORMS_SETUP.md for email issues
- Check DEVELOPER_GUIDE.md for code questions
- Check LAUNCH_CHECKLIST.md for deployment help
- Review browser console (F12) for errors

---

**Last Updated:** November 23, 2025
**Project Status:** Production Ready
