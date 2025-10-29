# Upload Animation to Webflow 🚀

Your animation is **ready to upload** with all rem units converted!

## ✅ What's Ready:

- ✅ All `px` converted to `rem`
- ✅ Dark theme colors configured
- ✅ 9-card full-featured animation
- ✅ Rolling text animations
- ✅ Configurable timing (interval + startDelay)
- ✅ Event sync for headings and pulse animations
- ✅ Components bundled successfully

---

## 🎯 Upload to Webflow:

### Step 1: Run Upload Command

Open your terminal and run:

```bash
cd /Users/tarikjamil/Dropbox/Work/Github/beside-animation3
npx webflow library share
```

### Step 2: Answer Prompts

The CLI will ask:

1. **Help us improve Webflow CLI?** → Answer **Y** (Yes)
2. **Save this choice?** → Answer **Y** (Yes)

### Step 3: Authentication (if needed)

- A browser window will open for authentication
- Log in to your Webflow workspace
- The CLI will save your token to `.env`

### Step 4: Wait for Upload

You'll see:

```
✔ Collecting metadata
✔ Generating library bundle
✔ Uploading to Webflow...
✔ Library shared successfully!
```

---

## 📦 What's Being Uploaded:

### **Beside Animation** - Full 9-Card Sequence ⭐

- Complete animation exactly as seen on localhost:3001
- All 9 cards with smooth transitions
- All assets load from Netlify (no missing images!)
- Dark theme colors
- Uses `rem` units for responsive scaling
- Configurable: interval (card change speed), startDelay (3s default)
- Emits events for heading and pulse sync

### **Rolling Text Component**

- Animated character-by-character text
- Configurable: text, visibility, delay
- Uses `rem` units for responsive scaling

---

## 🎨 After Upload:

1. **Open your Webflow site**
2. **Press "L"** to open Libraries panel
3. **Find "Beside Animation Components"**
4. **Click Install**
5. **Press "⇧C"** to access components
6. **Find your components:**
   - **"Beside Animation"** - Full 9-card sequence
   - **"Rolling Text"** - Individual text animation component
7. **Drag onto your page**
8. **Customize in Properties panel:**
   - **Beside Animation**: interval (seconds), startDelay (seconds)
   - **Rolling Text**: text content, visibility, delay

---

## 🔄 Updating Components:

After making changes:

```bash
npx webflow library share
```

The components will automatically update in Webflow!

---

## ✨ Features:

- 🎯 **Rem units** - Responsive and accessible
- 🌑 **Dark theme** - Matches your design
- ⚡ **Smooth animations** - 60fps performance
- 🎭 **All 9 cards** - Complete animation sequence
- 🖼️ **Netlify assets** - All images/icons load from besideanimation-code.netlify.app
- 📱 **Responsive** - Works on all screen sizes
- ⏱️ **Configurable timing** - Adjust interval (5s default) and start delay (3s default)
- 🔄 **Event sync** - Emits `beside-card-change` events for circle pulse and heading synchronization
- 📝 **Heading sync** - Coordinates with 10 heading elements that transition on each card change

---

## 🎯 **Circle Pulse & Heading Integration**

The component now emits a `'beside-card-change'` event every time a card changes, allowing you to sync external animations!

📖 **See `PULSE_SYNC_INTEGRATION.md` for detailed setup instructions** including:

- How to add `script.js` to Webflow Custom Code
- How to configure the pulse animation
- How to sync 10 heading elements with card changes
- Complete animation timeline
- Testing and customization options

---

**Ready to upload!** Just run the command above. 🚀
