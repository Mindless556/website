# API Documentation

## Overview

This document provides detailed information about the e-commerce platform's API endpoints, authentication, and usage guidelines.

## Base URL

```
https://api.yourdomain.com/v1
```

## Authentication

### JWT Authentication

All API requests require authentication using JWT tokens.

```http
Authorization: Bearer <your_jwt_token>
```

### Obtaining a Token

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your_password"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 3600
}
```

## API Endpoints

### Products

#### List Products

```http
GET /products
```

Query Parameters:
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)
- `category` (string): Filter by category
- `sort` (string): Sort field (price, name, created_at)
- `order` (string): Sort order (asc, desc)

Response:
```json
{
  "data": [
    {
      "id": "123",
      "name": "Product Name",
      "description": "Product description",
      "price": 99.99,
      "category": "Electronics",
      "stock": 100,
      "images": ["url1", "url2"]
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

#### Get Product Details

```http
GET /products/:id
```

Response:
```json
{
  "id": "123",
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "stock": 100,
  "images": ["url1", "url2"],
  "variants": [
    {
      "id": "v1",
      "name": "Small",
      "price": 89.99,
      "stock": 50
    }
  ],
  "reviews": [
    {
      "id": "r1",
      "rating": 5,
      "comment": "Great product!",
      "user": {
        "id": "u1",
        "name": "John Doe"
      }
    }
  ]
}
```

### Orders

#### Create Order

```http
POST /orders
Content-Type: application/json

{
  "items": [
    {
      "productId": "123",
      "quantity": 2,
      "variantId": "v1"
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "City",
    "state": "State",
    "zipCode": "12345",
    "country": "Country"
  },
  "paymentMethod": "card",
  "paymentDetails": {
    "cardNumber": "4242424242424242",
    "expiryMonth": 12,
    "expiryYear": 2025,
    "cvc": "123"
  }
}
```

Response:
```json
{
  "id": "order_123",
  "status": "pending",
  "total": 199.98,
  "items": [...],
  "shippingAddress": {...},
  "createdAt": "2024-03-20T10:00:00Z"
}
```

#### Get Order Status

```http
GET /orders/:id
```

Response:
```json
{
  "id": "order_123",
  "status": "processing",
  "total": 199.98,
  "items": [...],
  "shippingAddress": {...},
  "trackingNumber": "TRK123456",
  "estimatedDelivery": "2024-03-25T10:00:00Z",
  "createdAt": "2024-03-20T10:00:00Z",
  "updatedAt": "2024-03-20T10:30:00Z"
}
```

### Users

#### Register User

```http
POST /users/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password",
  "name": "John Doe",
  "phone": "+1234567890"
}
```

Response:
```json
{
  "id": "user_123",
  "email": "user@example.com",
  "name": "John Doe",
  "createdAt": "2024-03-20T10:00:00Z"
}
```

#### Update User Profile

```http
PATCH /users/profile
Content-Type: application/json

{
  "name": "John Updated",
  "phone": "+1987654321",
  "preferences": {
    "newsletter": true,
    "language": "en"
  }
}
```

### Admin Endpoints

#### Product Management

```http
POST /admin/products
Content-Type: application/json

{
  "name": "New Product",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "stock": 100,
  "images": ["url1", "url2"],
  "variants": [
    {
      "name": "Small",
      "price": 89.99,
      "stock": 50
    }
  ]
}
```

#### Order Management

```http
PATCH /admin/orders/:id/status
Content-Type: application/json

{
  "status": "shipped",
  "trackingNumber": "TRK123456",
  "estimatedDelivery": "2024-03-25T10:00:00Z"
}
```

## Error Handling

All API errors follow this format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {
      "field": "Additional error details"
    }
  }
}
```

Common Error Codes:
- `AUTH_REQUIRED`: Authentication required
- `INVALID_TOKEN`: Invalid or expired token
- `INVALID_REQUEST`: Invalid request parameters
- `NOT_FOUND`: Resource not found
- `VALIDATION_ERROR`: Request validation failed
- `SERVER_ERROR`: Internal server error

## Rate Limiting

- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users
- Rate limit headers included in response:
  - `X-RateLimit-Limit`
  - `X-RateLimit-Remaining`
  - `X-RateLimit-Reset`

## Webhooks

### Available Events

- `order.created`
- `order.updated`
- `order.completed`
- `payment.succeeded`
- `payment.failed`
- `inventory.updated`

### Webhook Payload

```json
{
  "event": "order.created",
  "timestamp": "2024-03-20T10:00:00Z",
  "data": {
    "orderId": "order_123",
    "status": "pending",
    "total": 199.98
  }
}
```

## SDKs and Libraries

- [JavaScript SDK](https://github.com/your-org/sdk-js)
- [Python SDK](https://github.com/your-org/sdk-python)
- [PHP SDK](https://github.com/your-org/sdk-php)

## Support

For API support:
1. Check the [troubleshooting guide](../README.md#troubleshooting-guide)
2. Search existing [issues](https://github.com/Mindless556/website/issues)
3. Create a new issue if needed 