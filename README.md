# TikTok Ads Creative Flow – Frontend Assignment

## Overview
This project is a frontend-only application that simulates a simplified **TikTok Ads creative creation flow**.

The goal of this assignment is **not** to build a complete Ads Manager, but to demonstrate:
- OAuth integration understanding
- Conditional validation logic
- Real-world API failure handling
- Clear, user-friendly error communication

Visual polish is intentionally kept minimal to focus on correctness and reasoning.

---

## Features Implemented

### 1. TikTok OAuth Integration (Simulated)
- “Connect TikTok Ads Account” button
- OAuth Authorization Code flow simulation
- Callback handling using `?code=valid`
- Access token storage using `localStorage`

> **Note:** TikTok Ads APIs are geo-restricted in India.  
> Due to this limitation, the OAuth token exchange and API calls are **mocked**, while still following the real OAuth flow structure.

---

### 2. Ad Creation Form (Single Page)
The app provides a single-page form with the following validations:

| Field | Validation Rule |
|-----|----------------|
| Campaign Name | Required, minimum 3 characters |
| Objective | Traffic or Conversions |
| Ad Text | Required, maximum 100 characters |
| CTA | Required |
| Music Option | Conditional logic enforced |

All field-level validation errors are displayed inline.

---

### 3. Music Selection Logic (Key Requirement)

The app supports **all three required music options**:

#### Option A: Existing Music ID
- User enters a Music ID
- ID is validated via a mocked API
- Invalid IDs block submission with a clear error message

#### Option B: Upload / Custom Music
- No real file upload required
- A mock Music ID is generated
- ID is validated via mocked API
- Rejection is handled with user-friendly messaging

#### Option C: No Music
- Allowed only when Objective = **Traffic**
- Blocked when Objective = **Conversions**
- This rule is enforced both in the UI and validation logic

---

### 4. Submission & Error Handling
On submission, the app simulates a TikTok Ads API call and gracefully handles:

- Invalid or expired OAuth token
- Missing permissions
- Invalid Music ID
- Geo-restriction errors (403)

---

## UX & Error Handling
- **Field-level errors** → displayed inline near inputs
- **System-level errors** → displayed in a global error banner
- No raw API error JSON is exposed to users
- All errors guide users on how to fix the issue

---

## Tech Stack
- **React**
- **Vite**
- **JavaScript**
- **CSS (minimal styling)**

No backend services are used.

---

## How to Run the Project

```bash
npm install
npm run dev
```
Open the application in the browser:
[http://localhost:5173](http://localhost:5173)

## OAuth Flow Explanation
Because TikTok Ads APIs are geo-restricted in India:
- Clicking the OAuth button redirects to TikTok (blocked page)
- OAuth callback is simulated using: [http://localhost:5173/?code=valid](http://localhost:5173/?code=valid)
- Token exchange and API calls are mocked
This approach aligns with the assignment instructions to focus on reasoning rather than production completeness.

## Assumptions & Limitations

- No backend is implemented
- TikTok Ads APIs are mocked
- OAuth token exchange is simulated
- Geo-restriction scenarios are handled logically
- UI design is intentionally minimal

## Improvements With More Time

- Backend service for secure OAuth token handling
- Real TikTok Ads API integration in supported regions
- Improved UI/UX and accessibility
- Retry mechanisms for failed API calls
- Logging and monitoring support
