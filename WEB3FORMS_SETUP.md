# Web3Forms Integration Setup Guide

## Overview
This project uses Web3Forms to handle form submissions and send emails automatically to both the company and the inquiring customer.

## Setup Instructions

### Step 1: Create a Web3Forms Account
1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Get Your Access Key
1. Log in to your Web3Forms dashboard
2. Navigate to **Settings** → **Access Keys**
3. Click **Create Access Key** or copy your existing access key
4. This is a unique identifier for your forms

### Step 3: Configure Your Access Key
The access key is already set up in the inquiry form. Replace the placeholder:

**File:** `app/inquiry/page.tsx`

Find this line (line 9):
```typescript
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';
```

Replace `'YOUR_WEB3FORMS_ACCESS_KEY_HERE'` with your actual access key from Web3Forms:
```typescript
const WEB3FORMS_ACCESS_KEY = 'your_actual_access_key_here';
```

### Step 4: Set Up Email Recipients
The form is configured to send emails to:
- **Company Email:** `inquiry@virtuality.fashion`
- **Customer Email:** The email entered in the form

#### To change the company email:
**File:** `app/inquiry/page.tsx`

Find this line (line 127):
```typescript
to_email: `inquiry@virtuality.fashion,${formData.email}`,
```

Replace `inquiry@virtuality.fashion` with your preferred company email:
```typescript
to_email: `your-company@example.com,${formData.email}`,
```

### Step 5: Test the Integration
1. Run your development server: `npm run dev`
2. Navigate to `/inquiry`
3. Fill out the form completely (all 4 steps)
4. Click **Get Quote** button
5. You should receive confirmation emails within 1-2 minutes

## Email Format

### Email Subject
The email subject line is automatically generated as:
```
New Project Inquiry: [Product Name] from [Company Name]
```

Example:
```
New Project Inquiry: Premium Tee Collection from StylePro Fashion
```

### Email Body
The email includes all form data:

**Personal Details:**
- First Name
- Last Name
- Email Address
- Phone Number
- Company Name

**Product Details:**
- Product Name
- Product Type
- Estimated Quantity
- Target Market

**Project Information:**
- Budget Range
- Timeline
- Additional Notes

## Form Fields Sent to Email

The following fields are automatically sent in each submission:

| Field | Description |
|-------|-------------|
| firstName | Customer's first name |
| lastName | Customer's last name |
| email | Customer's email address |
| phone | Customer's phone number |
| company | Customer's company name |
| productName | Name of the product/project |
| productType | Type of product (Apparel, Footwear, Accessories, Mixed) |
| quantity | Estimated quantity |
| targetMarket | Target market regions |
| budgetRange | Budget range (Starter, Standard, Premium, Enterprise) |
| timeline | Project timeline (Urgent, 1-2 Months, 3 Months, 6 Months, Flexible) |
| additionalNotes | Additional project requirements and notes |
| subject | Email subject line |
| from_name | Sender's name |

## Security Considerations

1. **Access Key Protection:** Store your access key securely. In a production environment, use environment variables:
   ```typescript
   const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
   ```

2. **Rate Limiting:** Web3Forms has built-in rate limiting to prevent abuse

3. **Data Privacy:** All data is processed through Web3Forms' secure servers

4. **HTTPS:** Ensure your website uses HTTPS in production

## Using Environment Variables (Recommended)

### Step 1: Create `.env.local` file
In the root of your project, create a `.env.local` file:
```
NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_access_key_here
```

### Step 2: Update the code
**File:** `app/inquiry/page.tsx`

Replace line 9:
```typescript
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
```

### Why `NEXT_PUBLIC_`?
- The prefix `NEXT_PUBLIC_` makes the variable accessible in the browser
- This is necessary for client-side form submissions
- Only expose non-sensitive configuration this way

## Troubleshooting

### Form submission fails silently
- Check that your access key is correct
- Verify the email addresses are valid
- Check browser console for errors (F12 → Console)

### Emails not received
- Check the **Activity** tab in Web3Forms dashboard
- Verify the recipient email addresses
- Check spam/junk folders
- Wait 2-3 minutes for email delivery

### "Error submitting form" message
- Verify your internet connection
- Check that Web3Forms API is accessible
- Ensure access key hasn't expired

## Additional Features

### Custom Email Templates
Web3Forms allows custom email templates in your dashboard:
1. Log in to Web3Forms
2. Go to **Forms** → Select your form
3. Click **Email Template**
4. Customize the email design

### Webhooks
You can set up webhooks to trigger actions when forms are submitted:
1. Go to **Settings** → **Webhooks**
2. Add webhook endpoint URL
3. Configure events to trigger

### File Uploads
To add file upload functionality:
```javascript
// The current setup doesn't include file uploads
// But you can enable them by adding input type="file" to the form
// and Web3Forms will handle the attachment
```

## Support
- **Web3Forms Documentation:** https://docs.web3forms.com
- **Web3Forms Support:** support@web3forms.com

## Contact Information
For Virtuality.Fashion inquiries, emails will be sent to:
- **Company:** inquiry@virtuality.fashion
- **Customer:** The email they provided in the form

---

**Last Updated:** November 2024
**Status:** Production Ready
