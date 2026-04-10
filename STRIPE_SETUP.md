# Stripe Integration Guide

## Environment Variables

Add the following to your `.env.local` file:

```env
# Stripe Keys (get from https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY
STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLIC_KEY

# Webhook Secret (from https://dashboard.stripe.com/webhooks)
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET

# App URL for redirects
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Setup Steps

### 1. Create a Stripe Account
- Go to [stripe.com](https://stripe.com)
- Create a free account
- Navigate to the Dashboard

### 2. Get API Keys
- Go to Developers > API Keys
- Copy your Secret Key (starts with `sk_test_` for test mode)
- Copy your Publishable Key (starts with `pk_test_`)
- Add both to `.env.local`

### 3. Set Up Webhooks (for production confirmation)
- Go to Developers > Webhooks
- Click "Add endpoint"
- Enter your endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
- Select events:
  - `checkout.session.completed` - Order confirmation
  - `charge.failed` - Failed payments
  - `payment_intent.payment_failed` - Payment failures
- Copy the Signing Secret and add to `.env.local` as `STRIPE_WEBHOOK_SECRET`

**For local development (testing):**
- Download Stripe CLI: https://stripe.com/docs/stripe-cli
- Run: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- Copy the webhook signing secret and add to `.env.local`

### 4. Add Products to Database
Products need to be created in MongoDB with the following fields:
```json
{
  "name": "Reset Your Body",
  "description": "Workout Program",
  "price": 27,
  "image": "https://...",
  "fileUrl": "https://...",
  "category": "workout",
  "upsellProducts": null,
  "upsellDiscount": null
}
```

### 5. Test Checkout

**Test Cards (use in test mode):**
- Visa: `4242 4242 4242 4242`
- Mastercard: `5555 5555 5555 4444`
- Expiry: Any future date
- CVC: Any 3 digits

## API Endpoints

### POST `/api/checkout`
Creates a Stripe checkout session.

**Request:**
```json
{
  "userId": "user_id_from_db",
  "items": [
    {
      "productId": "product_id_from_db",
      "isUpsell": false
    }
  ]
}
```

**Response:**
```json
{
  "sessionId": "cs_test_...",
  "url": "https://checkout.stripe.com/pay/cs_test_..."
}
```

### POST `/api/webhooks/stripe`
Handles Stripe webhook events. Automatically updates order status when payment is completed.

## File Structure

```
src/
├── lib/
│   └── stripe.ts              # Stripe client initialization
├── app/
│   ├── api/
│   │   ├── checkout/
│   │   │   └── route.ts       # Checkout session creation
│   │   └── webhooks/
│   │       └── stripe/
│   │           └── route.ts   # Webhook handler
│   └── checkout/
│       └── success/
│           └── page.tsx       # Success page
└── components/
    └── checkout-button.tsx    # Checkout button component
```

## Database Fields

The `Order` model tracks payments:
- `stripeSessionId` - Stripe checkout session ID
- `paymentStatus` - pending | completed | failed
- `downloadUrl` - Link to product file (set on completion)

## Troubleshooting

**"Stripe_SECRET_KEY is not defined"**
- Check `.env.local` exists and has the correct key
- Restart the dev server after adding env vars

**Webhooks not being called**
- For local testing, ensure Stripe CLI is running
- Check `.next` and `.next/dev/logs` for error messages
- Verify webhook URL is correct in Stripe Dashboard

**Orders not updating after payment**
- Check the webhook secret is correct
- Verify webhook handler logs in terminal/dev logs
- Ensure MongoDB connection is working

## Next Steps

1. Implement user authentication (for real userId)
2. Add payment confirmation emails
3. Generate and serve download links
4. Add subscription support
5. Implement admin dashboard for orders
