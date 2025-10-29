# Circle Pulse Sync Integration 🎯

## ✅ What Was Implemented

The **circle pulse animation** now syncs perfectly with the **card changes** in the Beside Animation component!

---

## 🔧 How It Works

### **React Component → Webflow Communication**

1. **React Component (`beside-animation.tsx`)**:

   - Every time a card changes, it emits a custom event: `'beside-card-change'`
   - This happens after the card transition completes (500ms)
   - Event is dispatched to `window` so it crosses the Shadow DOM boundary

2. **Webflow Script (`script.js`)**:
   - Listens for the `'beside-card-change'` event
   - When triggered, plays the pulse animation:
     - Opacity: `1` → `0`
     - Y position: `0` → `-17.5rem`
     - Scale: `1` → `1.5`
     - Duration: `4 seconds`
   - **After animation completes**: Instantly resets to starting position (no animation back)

---

## 🎬 Animation Timeline

```
Card Change → Event Fires → Pulse Starts → Pulse Completes → Instant Reset → Ready for Next Card
    ↓             ↓              ↓               ↓                 ↓
  500ms         0ms           0-4s            4s              instant
```

---

## 📦 What's Ready to Upload

### **Components:**

1. **Beside Animation** - React component with event emission
2. **Rolling Text** - Character animation component

### **Script Integration:**

- `script.js` contains the `initCardChangePulse()` function
- Must be added to Webflow's **Custom Code** section

---

## 🚀 Webflow Setup Instructions

### **Step 1: Upload Components**

```bash
npx webflow library share
```

### **Step 2: Add Script to Webflow**

1. **Open Webflow Project Settings**
2. Go to **Custom Code** → **Head Code** or **Footer Code**
3. **Add this script tag:**

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
```

4. **Then paste the contents of `script.js`** wrapped in `<script>` tags:

```html
<script>
  // Paste entire script.js contents here
</script>
```

### **Step 3: Add Pulse Element to Page**

Make sure you have an element with the class `.circle-pulse` on your Webflow page where you want the pulse effect to appear.

---

## 🎯 Key Features

✅ **Seamless Sync** - Pulse triggers exactly when card changes  
✅ **Instant Reset** - No animation back, pulse snaps to start position  
✅ **No Overlap** - Each pulse completes before next card change  
✅ **Cross-Shadow DOM** - Works despite component isolation  
✅ **Configurable** - Adjust interval to match your desired timing

---

## 🔄 Customization Options

### **In Webflow (Properties Panel):**

- **Interval (seconds)**: How long each card displays (default: 5)
- **Start Delay (seconds)**: Delay before animation starts (default: 0)

### **In `script.js`:**

- `duration: 4` - How long the pulse animation takes
- `y: "-17.5rem"` - How far the pulse moves up
- `scale: 1.5` - How much the pulse scales up
- `ease: "power4.out"` - Animation easing function

---

## 🧪 Testing

1. **Upload the component** to Webflow
2. **Add the script** to Custom Code
3. **Add the component** to your page
4. **Add a `.circle-pulse` element** to your page
5. **Publish and test** - the pulse should trigger on every card change!

---

## 💡 Technical Notes

- **Event Name**: `beside-card-change`
- **Event Type**: `CustomEvent`
- **Scope**: Global `window` object
- **SSR Safe**: Checks for `window` before dispatching
- **GSAP Required**: Script uses GSAP for animations
