---
title: "API Overview"
description: "Get started with the LinkMe API to integrate digital business cards and contact management into your applications."
order: 1
category: "API Documentation"
tags: ["api", "overview", "getting-started"]
lastUpdated: 2025-04-15
---

# LinkMe API Overview

Welcome to the LinkMe API documentation. Our API allows you to integrate LinkMe's digital business cards, contact management, and networking intelligence into your own applications.

## API Capabilities

The LinkMe API enables you to:

- Create and manage digital business cards
- Access and update contact information
- Manage networking relationships
- Generate QR codes and shareable links
- Retrieve network analytics and insights
- Automate follow-ups and relationship management

## Getting Started

To use the LinkMe API, you'll need to:

1. [Create a LinkMe account](/docs/creating-account/)
2. Generate API keys in your [developer dashboard](https://getlinkme.io/account/api-keys)
3. Authenticate your requests using these keys
4. Make API calls to our endpoints

## Authentication

All API requests require authentication. We use API keys to authenticate requests. You can learn more in our [Authentication guide](/docs/api/authentication/).

## API Endpoints

Our REST API is available at `https://api.getlinkme.io/v1/`. For a complete list of available endpoints and their parameters, see our [Endpoints Reference](/docs/api/endpoints/).

Here's a quick example of creating a digital business card using our API:

```javascript
const response = await fetch('https://api.getlinkme.io/v1/business-cards', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    name: 'Jane Doe',
    title: 'Product Manager',
    company: 'Acme Inc.',
    email: 'jane@example.com',
    phone: '+1234567890',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe'
    }
  })
});

const card = await response.json();
console.log(card.id); // The new business card ID
```

## Rate Limits

Our API enforces rate limits to ensure service stability. The current limits are:

- Free tier: 100 requests per day
- Pro tier: 1,000 requests per day
- Business tier: 10,000 requests per day

Rate limit information is included in the response headers:

- `X-RateLimit-Limit`: Total number of requests allowed
- `X-RateLimit-Remaining`: Number of requests remaining
- `X-RateLimit-Reset`: Time when the limit resets (Unix timestamp)

## Error Handling

Our API uses standard HTTP status codes to indicate success or failure of requests. In addition, error responses will include a JSON object with more information:

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid. Please check your parameters.",
    "details": { ... }
  }
}
```

## Next Steps

- [Authentication](/docs/api/authentication/): Learn how to authenticate your API requests
- [Endpoints Reference](/docs/api/endpoints/): Explore all available API endpoints
- [Integration Examples](/docs/api/examples/): See common integration patterns

If you have questions or need help, please [contact our support team](/support/).