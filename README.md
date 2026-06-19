# Kiddo Assignment

🌐 Live Application:
https://kiddo-assignment.vercel.app/

**Note:** This project is built using React Native (Expo). To experience the mobile layout on a desktop/laptop browser:

1. Open the live demo link.
2. Press **F12** or **Right Click → Inspect**.
3. Click the **Toggle Device Toolbar** (mobile/tablet icon) or press **Ctrl + Shift + M**.
4. Select a mobile device (e.g., iPhone 14 Pro, Pixel 7, Samsung Galaxy S20).
5. Refresh the page if required.

This provides a mobile-like viewing experience similar to how the application is intended to be used.

### GitHub Repository
💻 https://github.com/DarshanPawar07/kiddo-assignment

## Overview

This project implements a production-inspired **Server Driven UI (SDUI)** architecture using **React Native**, **Expo**, **TypeScript**, **Zustand**, and **FlashList**.

The application acts as a dynamic rendering engine that consumes a backend-driven JSON payload and generates the complete homepage UI at runtime. The architecture is designed to support rapid campaign launches, theme changes, new content layouts, and action configurations without requiring app updates through the Play Store or App Store.

The implementation focuses on:

* Scalability
* Runtime configurability
* Component isolation
* Type safety
* Rendering performance
* Fault tolerance

---

# Technology Stack

* React Native
* Expo
* TypeScript (Strict Mode)
* Zustand
* FlashList (@shopify/flash-list)
* React Context API
* Lottie Animation Support
* JSON Driven UI Architecture

---

# Features Implemented

## 1. Server Driven UI Engine

The homepage is rendered entirely from a backend-style JSON payload.

The renderer dynamically processes incoming nodes and creates the corresponding UI components at runtime.

Supported component types:

* BANNER_HERO
* PRODUCT_GRID_2X2
* DYNAMIC_COLLECTION
* FULL_SCREEN_OVERLAY

This allows new layouts and campaigns to be introduced without application releases.

---

## 2. Component Registry Pattern

A centralized Component Registry maps backend component identifiers to React Native implementations.

Example:

```typescript
{
  BANNER_HERO,
  PRODUCT_GRID_2X2,
  DYNAMIC_COLLECTION,
  FULL_SCREEN_OVERLAY
}
```

Benefits:

* Scalable architecture
* No large switch statements
* Easy future component onboarding
* Clean separation between backend payloads and frontend rendering

---

## 3. Defensive Rendering & Fault Isolation

The rendering engine safely handles unknown component types.

Example:

```json
{
  "type": "NEW_COMPONENT_V2"
}
```

Unsupported nodes are ignored without crashing the application.

This preserves feed stability and demonstrates resilience against unexpected backend payloads.

---

## 4. Dynamic Collections

The application supports nested horizontal collections rendered inside the primary vertical feed.

Example:

* Lunchboxes & Bags
* Summer Essentials
* Snacks Under ₹99

Implementation:

* Horizontal FlashList inside vertical FlashList
* Stable key extraction
* Memoized item rendering

Goals:

* Smooth scrolling
* No gesture conflicts
* No frame drops
* Efficient memory usage

---

## 5. Universal Action Dispatcher

All user interactions are routed through a centralized dispatcher.

Example payloads:

```json
{
  "type": "ADD_TO_CART",
  "payload": {
    "id": "123"
  }
}
```

```json
{
  "type": "DEEP_LINK",
  "payload": {
    "url": "/category/snacks"
  }
}
```

The UI components never contain business logic.

Instead:

```typescript
handleAction(action)
```

is called from the UI layer.

Benefits:

* Decoupled architecture
* Easier testing
* Scalable action management
* Consistent behavior

---

## 6. Campaign Engine

The application supports runtime campaign switching.

Implemented campaigns:

### Back To School

Features:

* Bright educational theme
* School focused banner
* Lunchboxes & Bags collection
* Campaign specific assets

### Summer Playhouse

Features:

* Ocean blue theme palette
* Summer promotional configuration
* Event based content support

### Mystery Gift Carnival

Features:

* Carnival red theme
* Confetti overlay support
* Coupon action support

Campaigns are fully configurable through payload data.

---

## 7. Full Screen Overlay Support

Overlay components can be injected dynamically through the campaign configuration.

Example:

```json
{
  "type": "FULL_SCREEN_OVERLAY"
}
```

Design considerations:

* Overlay rendered above feed
* Non-blocking interactions
* pointerEvents="none"
* Safe rendering lifecycle

This allows campaign animations without disrupting user interaction.

---

## 8. Runtime Theme Injection

Theme values are supplied by the payload.

Example:

```json
{
  "theme": {
    "primary": "#FF9933",
    "background": "#FFF5E6"
  }
}
```

Theme values are injected into the application through React Context.

Benefits:

* Dynamic branding
* Campaign personalization
* OTA theme updates
* Consistent styling

---

## 9. Local State Optimization

Cart state is managed using Zustand.

Requirements addressed:

* Cart updates occur instantly
* Product card state updates remain isolated
* Entire feed does not re-render
* Minimal rendering overhead

Example:

```typescript
addToCart(productId)
```

Only affected components update.

---

## 10. Performance Optimizations

Several optimizations were applied.

### FlashList

Used for efficient list virtualization.

### React.memo

Applied to:

* Product cards
* Renderer nodes
* Collections
* Banner components

### Stable Keys

Implemented keyExtractor strategy.

### Isolated State Updates

Zustand selectors prevent unnecessary updates.

### Component Registry

Reduces conditional rendering overhead.

---

# Project Structure

```text
src
│
├── types
│
├── store
│
├── hooks
│
├── core
│   ├── dispatcher
│   ├── registry
│   ├── campaign
│   ├── theme
│   └── engine
│
├── components
│   ├── common
│   ├── cards
│   ├── blocks
│   └── overlays
│
├── mocks
│
└── utils
```

---

# Assignment Requirement Coverage

| Requirement                 | Status |
| --------------------------- | ------ |
| Component Registry          | ✅      |
| JSON Driven UI              | ✅      |
| Dynamic Collections         | ✅      |
| Nested Virtualization       | ✅      |
| Universal Action Dispatcher | ✅      |
| Runtime Themes              | ✅      |
| Campaign Engine             | ✅      |
| Overlay Support             | ✅      |
| Zustand State Management    | ✅      |
| TypeScript Strict Mode      | ✅      |
| React.memo Optimization     | ✅      |
| Fault Tolerance             | ✅      |
| Unknown Component Handling  | ✅      |

---

# Running the Project

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npx expo start
```

Run on web:

```bash
npx expo start --web
```

Type check:

```bash
npx tsc --noEmit
```

---

# Notes

* Product assets and campaign assets are mock/demo assets used to simulate a production SDUI payload.
* The implementation prioritizes architecture, scalability, rendering performance, and fault tolerance.
* The project is structured to allow future component types to be added with minimal changes.

---

# Author

Darshan Pawar

Bachelor of Engineering (Information Technology)

React • TypeScript • MERN Stack • React Native
