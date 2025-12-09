# Developer Guide - Virtuality.Fashion

## Quick Start

### 1. Installation
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`

### 2. Environment Setup
Create `.env.local`:
```
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

### 3. Key Directories
- `app/` - All routes and pages
- `app/components/` - Reusable components
- `public/` - Static assets

---

## Common Tasks

### Add a New Page
1. Create folder: `app/my-page/`
2. Create file: `app/my-page/page.tsx`
3. Add Header & Footer imports
4. Import necessary components

Example:
```typescript
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyPage() {
  return (
    <>
      <Header />
      {/* Your content */}
      <Footer />
    </>
  );
}
```

### Create a New Component
1. Create file: `app/components/MyComponent.tsx`
2. Add `'use client'` if using hooks
3. Export as default

Example:
```typescript
'use client';

import { useState } from 'react';

export default function MyComponent() {
  const [state, setState] = useState(false);

  return (
    <div className="space-y-4">
      {/* Content */}
    </div>
  );
}
```

### Style with Tailwind
Always use canonical class names:

✅ Correct:
```tsx
className="bg-linear-to-r from-purple-600 to-blue-600"
className="hidden md:flex"
className="gap-8 py-20"
```

❌ Wrong:
```tsx
className="bg-gradient-to-r from-purple-600 to-blue-600"
className="hidden md:block" // Use flex if needed
```

### Add a Form with Web3Forms
1. Import useState
2. Create form state and handlers
3. Add Web3Forms API call in handleSubmit
4. Include error handling

Template:
```typescript
const [formData, setFormData] = useState({field: ''});
const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData(prev => ({...prev, [name]: value}));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const formPayload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    ...formData,
    to_email: 'email@example.com',
    subject: 'Subject line',
  };

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formPayload),
  });

  const result = await response.json();
  if (result.success) {
    setSubmitted(true);
  }
};
```

### Update Email Recipients
**Inquiry Form:** `app/inquiry/page.tsx` line 124
**Contact Form:** `app/components/ContactSection.tsx` line 41

Find this line:
```typescript
to_email: `inquiry@virtuality.fashion,${formData.email}`,
```

Change `inquiry@virtuality.fashion` to your email.

### Create Responsive Grid
```tsx
{/* 2 cols on tablet, 3 cols on desktop */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map(item => (
    <div key={item.id}>{item.name}</div>
  ))}
</div>
```

---

## Color System

### Use These Colors
```
// Text
text-gray-900        // Primary text
text-gray-600        // Secondary text
text-gray-500        // Tertiary text

// Backgrounds
bg-white            // Main background
bg-gray-50          // Light section background
bg-gray-100         // Card backgrounds

// Gradients
bg-linear-to-r from-purple-600 to-blue-600  // Buttons
bg-linear-to-br from-purple-50 to-blue-50   // Sections

// Borders
border-gray-200     // Card borders
```

### Don't Use
- Dark colors (bg-black, bg-gray-900)
- Bright neon colors
- Multiple gradient directions inconsistently

---

## Spacing Scale

### Padding/Margin
```
p-6 or px-6 py-6    // Component padding
m-4, m-6, m-8       // Margins between elements
mt-1, mb-2, etc.    // Single side margins
```

### Section Spacing
```
py-20               // Between major sections
py-12               // Between subsections
gap-8               // Between grid items
gap-12              // Larger gaps
```

### Example Section:
```tsx
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12">Title</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Content */}
    </div>
  </div>
</section>
```

---

## Responsive Design

### Breakpoints
```
Mobile      < 768px    (default styles)
Tablet      768px+     (md: prefix)
Desktop     1024px+    (lg: prefix)
```

### Common Patterns
```tsx
// Hide on mobile, show on tablet+
className="hidden md:block"

// 1 col mobile, 2 cols tablet, 3 cols desktop
className="grid md:grid-cols-2 lg:grid-cols-3"

// Full width mobile, max-width on desktop
className="w-full max-w-6xl mx-auto"

// Smaller font on mobile
className="text-2xl md:text-4xl"

// Flex column mobile, row on tablet+
className="flex flex-col md:flex-row"
```

---

## Form Validation

### Email Validation
```typescript
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

### General Pattern
```typescript
const [errors, setErrors] = useState({field: ''});

const validateStep = (step: number) => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = 'Name is required';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

// In form:
{errors.field && <p className="text-red-600 text-sm mt-1">{errors.field}</p>}
```

---

## Hover Effects

### Standard Pattern
```tsx
<div className="group">
  {/* Base state */}
  <p className="text-gray-600 group-hover:text-purple-600 transition-colors">Text</p>

  {/* Hover overlay */}
  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity">
    {/* Content shown on hover */}
  </div>
</div>
```

### Button Hover
```tsx
<button className="px-8 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
  Click Me
</button>
```

---

## Common Issues & Fixes

### Form Not Submitting
- Check Web3Forms access key is set
- Verify email addresses are valid
- Check browser console for errors (F12)
- Test with a fresh incognito window

### Styling Not Applied
- Make sure class name is spelled correctly
- Check for conflicting classes
- Rebuild with `npm run dev`
- Clear browser cache (Ctrl+Shift+Delete)

### Navigation Not Working
- Verify path is correct (case-sensitive)
- Check file is in correct `app/[route]/page.tsx` location
- Restart dev server after adding new routes

### localStorage Errors
- Check browser allows localStorage
- Use try-catch for localStorage access
- Test in browser DevTools (F12 → Application → Local Storage)

---

## Testing

### Manual Testing Checklist
- [ ] Load page and check styling
- [ ] Test form validation (empty fields, invalid email)
- [ ] Test form submission
- [ ] Check email delivery
- [ ] Test on mobile (DevTools F12 → Toggle device toolbar)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1920px+ width)
- [ ] Test navigation between pages
- [ ] Test localStorage (if applicable)

### Browser DevTools
```
F12                         Open DevTools
Ctrl+Shift+M               Toggle device toolbar
Ctrl+Shift+Delete          Clear storage/cookies
Console tab                View errors
Network tab                Check API calls
Application tab            View localStorage
```

---

## Performance Tips

1. **Images:** Use next/image for optimization
2. **Components:** Split large components
3. **State:** Keep state as local as possible
4. **Effects:** Clean up timeouts/intervals
5. **CSS:** Use Tailwind utilities (already optimized)

---

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "Add: new feature description"

# Push to remote
git push origin feature/my-feature

# Create pull request on GitHub
```

---

## Deployment

### Before Deploying
- [ ] Set NEXT_PUBLIC_WEB3FORMS_KEY in hosting dashboard
- [ ] Update email addresses if needed
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Run build: `npm run build`

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Automatically deploys on Vercel
# Set environment variables in Vercel dashboard
```

### Other Hosts
```bash
npm run build
npm run start
```

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Production
npm run build            # Build for production
npm run start            # Run production server

# Linting
npm run lint             # Check code quality

# Type checking
npx tsc --noEmit         # Check TypeScript errors
```

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Hooks Reference](https://react.dev/reference/react/hooks)
- [Web3Forms Docs](https://docs.web3forms.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## Support

For issues or questions:
1. Check PROJECT_SUMMARY.md
2. Check WEB3FORMS_SETUP.md
3. Check browser console (F12)
4. Check build output: `npm run build`

---

**Last Updated:** November 2024
**Version:** 1.0
