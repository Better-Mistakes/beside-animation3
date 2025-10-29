# Circle Pulse Sync Integration 🎯

## ✅ What Was Implemented

The **circle pulse animation** now syncs perfectly with the **card changes** in the Beside Animation component!

---

## 🔧 How It Works

### **React Component → Webflow Communication**

1. **React Component (`beside-animation.tsx`)**:

   - Every time a card changes, it emits a custom event: `'beside-card-change'`
   - This happens after the card transition completes (500ms)
   - Event includes the interval duration for opacity fade timing
   - Event is dispatched to `window` so it crosses the Shadow DOM boundary

2. **Webflow Script (`script.js`)**:

   - Listens for the `'beside-card-change'` event
   - **Alternates between two pulse elements**: `.circle-pulse.is--1` and `.circle-pulse.is--2`

   **For the ANIMATING pulse (OUT):**

   - Opacity: `1` → `0` (with ease, 4s)
   - Y position: `0` → `-17.5rem` (with ease, 4s)
   - Scale: `1` → `1.5` (with ease, 4s)

   **For the RESETTING pulse (IN) - happens simultaneously:**

   - Scale & Y: **Instantly snap** back to `1` and `0` (no animation)
   - Opacity: Gradually fades `0` → `1` **linearly** over **4 seconds** (matches pulse out duration)

---

## 🎬 Complete Animation Timeline

### **With Default Settings (3s hardcoded delay, interval=5s):**

**t=0s (Page Load):**

```
Heading 1: Visible (opacity: 1, blur: 0)
Headings 2-10: Hidden (opacity: 0, blur: 1rem)
Card: Not visible yet
homeHeroContainer: Hidden (opacity: 0, y: 1rem)
reactComponent: Hidden (opacity: 0, y: 1rem)
.is--1: Ready (opacity: 1, y: 0, scale: 1)
.is--2: Ready (opacity: 1, y: 0, scale: 1)
```

**t=3s (Card Loads - "beside-card-load" event):**

```
Card 1: Appears + jiggle animation
"beside-card-load" event emitted ← FIRST EVENT
homeHeroContainer: Slides up (0.8s)
reactComponent: Fades in + slides up (0.8s)
.is--1: Animates out (opacity/y/scale over 4s)
Heading 1 → 2: Instant switch (no fade/blur animation)
```

**t=8s (First Card CHANGE - Card 1 → Card 2):**

```
Card 2: Appears
"beside-card-change" event emitted
Heading 2: Fades out
Heading 3: Fades in + deblurs
.is--1: Scale/Y snap + opacity fade 0→1
.is--2: Animates out (opacity/y/scale over 4s)
```

**t=13s (Card 2 → Card 3):**

```
Card 3: Appears
Heading 3: Fades out
Heading 4: Fades in + deblurs
.is--1: Animates out
.is--2: Scale/Y snap + opacity fade 0→1
```

**t=18s (Card 3 → Card 4):**

```
Card 4: Appears
Heading 4: Fades out
Heading 5: Fades in + deblurs
.is--1: Scale/Y snap + opacity fade 0→1
.is--2: Animates out
```

And continues alternating through all 9 cards + 10 headings...

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

### **Step 3: Add Pulse Elements to Page**

**IMPORTANT:** You need **TWO** elements with the class `.circle-pulse` on your Webflow page for the alternating effect to work:

```html
<div class="circle-pulse is--1"></div>
<!-- First pulse -->
<div class="circle-pulse is--2"></div>
<!-- Second pulse -->
```

The script will automatically alternate between `.is--1` and `.is--2`, creating a seamless continuous pulse effect.

---

## 🎯 Key Features

✅ **Alternating Pulses** - Two pulses alternate for continuous effect  
✅ **Seamless Sync** - Pulse triggers exactly when card changes  
✅ **Smart Reset** - Scale/Y instant snap, opacity linear fade  
✅ **Synchronized Animation** - Both pulses animate for 4 seconds simultaneously (one in, one out)  
✅ **No Gaps** - One pulse fades in while the other pulses out  
✅ **Cross-Shadow DOM** - Works despite component isolation  
✅ **Configurable** - Adjust interval to match your desired timing

---

## 🔄 Customization Options

### **In Webflow (Properties Panel):**

- **Interval (seconds)**: How long each card displays (default: 5)
- **Note**: The 3-second initial delay is hardcoded and cannot be changed

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
4. **Add TWO pulse elements** to your page with classes `.circle-pulse.is--1` and `.circle-pulse.is--2` (required for alternating effect)
5. **Publish and test** - you should see:
   - Page loads with Heading 1 visible
   - After 3 seconds: card appears, homeHeroContainer slides up, reactComponent fades in
   - Heading instantly switches from 1 → 2 (no animation)
   - `.is--1` pulses out when card appears
   - Pulses alternate between `.is--2` and `.is--1` on each card change
   - While one pulse animates out, the other fades back in
   - Headings cycle through 2-10 with fade/blur transitions, then loop back
   - Seamless continuous effect!

---

## 💡 Technical Notes

### **Events:**

- **`beside-card-load`**: Emitted when card first appears (after 3s delay)
  - Triggers: homeHeroContainer (slide up), reactComponent (fade in + slide up), circlePulse1 (animate out), Heading 1→2 (instant switch)
- **`beside-card-change`**: Emitted on each subsequent card transition
  - Triggers: pulse alternation, heading cycling (2-10 with fade/blur animations)
  - Event Data: `{ interval: number }` - seconds between card changes

### **Requirements:**

- **Event Type**: `CustomEvent`
- **Scope**: Global `window` object
- **SSR Safe**: Checks for `window` before dispatching
- **GSAP Required**: Script uses GSAP for animations
- **Minimum Elements**: Requires `.circle-pulse.is--1` and `.circle-pulse.is--2` for alternating effect
- **Pulse Timing**: `.is--1` animates when card loads, then pulses alternate on each change
