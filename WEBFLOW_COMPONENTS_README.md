# Webflow Code Components - Beside Animations

Your animation components are now ready to be imported into Webflow! 🎉

## Components Available

### 1. **Rolling Text**

Animated text that rolls in character-by-character with a smooth 3D rotation effect.

**Props:**

- `Text Content`: The text to animate
- `Is Visible`: Controls visibility and animation trigger
- `Delay (seconds)`: Delay before animation starts

### 2. **Notification Card**

Animated notification card with rolling text, avatar, smooth entrance animations, and optional shake effect.

**Props:**

- `Title`: Main title text
- `Subtitle`: Subtitle or secondary text
- `Avatar URL`: URL for the avatar image (defaults to Netlify hosted asset)
- `Icon URL`: URL for the icon image (defaults to Netlify hosted asset)
- `Show Shake Animation`: Enable shake animation on entrance

### 3. **Notification Carousel** ⭐ **Recommended - Full Featured**

Complete animated showcase of Beside's AI features with 8 different notification cards, exactly matching the localhost animation! This is a production-ready demo component.

**Props:**

- `Auto Play`: Start playing automatically (default: true)
- `Interval (seconds)`: Seconds between cards (default: 5, range: 1-30)

**The 8 Cards:**

1. 📞 **Incoming call** - with shake animation and Beside badge
2. 🤖 **Beside is answering** - AI receptionist greeting
3. 👤 **New Lead: Sarah Nguyen** - with HubSpot integration and expandable content
4. 💬 **Follow-up text message** - automated follow-up
5. 👥 **Your team joined** - team avatars group display
6. ⚡ **Meeting Prep** - 5-minute prep with rich content area
7. ✍️ **Writing notes** - live meeting notes
8. 📝 **Meeting notes ready** - summary with participants

**Features:**

- ✅ 8 fully-featured cards with hard-coded content
- ✅ Expandable content areas (cards 3, 6, 8)
- ✅ Rounded & square avatar support
- ✅ Beside logo badge overlays
- ✅ Team avatar groups
- ✅ HubSpot integration icon
- ✅ Rich content: meeting prep, notes, summaries
- ✅ Smooth entrance/exit animations
- ✅ All assets hosted on Netlify (no upload needed!)
- ✅ Production-ready demo component

## How to Share to Webflow

### Step 1: Authenticate with Webflow

```bash
npx webflow library share
```

The CLI will:

1. Open a browser window for Workspace authentication
2. Save your authentication token to `.env` file
3. Upload your component library to Webflow

### Step 2: Install on Your Webflow Site

1. Open your Webflow site
2. Press **"L"** or click the Libraries icon in the left sidebar
3. Find **"Beside Animation Components"** in the available libraries
4. Click **Install**

### Step 3: Use the Components

1. Press **"⇧C"** or click the Components icon
2. Find your components under the **"Animations"** group
3. Drag and drop onto your page
4. Customize props in the Properties panel on the right

## Local Development

To test changes before uploading:

```bash
# Bundle locally
npx webflow library bundle --public-path http://localhost:4000/

# Share to Webflow (after testing)
npx webflow library share
```

## Updating Components

After making changes to your components:

1. Save your changes
2. Run `npx webflow library share` to upload the updated library
3. The components will automatically update in Webflow

**Note:** Renaming `.webflow.tsx` files creates new components and breaks existing instances.

## Project Structure

```
beside-animation3/
├── components/
│   ├── rolling-text.tsx                     # React component
│   ├── rolling-text.webflow.tsx             # Webflow definition
│   ├── notification-card.tsx                # React component
│   ├── notification-card.webflow.tsx        # Webflow definition
│   ├── notification-carousel.tsx            # Carousel component
│   └── notification-carousel.webflow.tsx    # Carousel Webflow definition
├── og-animation/
│   └── page.tsx                             # Original animation backup
├── webflow.json                             # Library configuration
└── dist/                                    # Generated bundle (after build)
```

## Tips

- **Assets**: All assets are hosted on Netlify and work out-of-the-box!
- **Styling**: The components use Tailwind CSS and will work out-of-the-box with proper styling
- **Animation Library**: Uses Framer Motion for smooth animations
- **Shadow DOM**: Components render in isolated Shadow DOM (prevents style conflicts)
- **Original Animation**: The original Next.js animation is backed up in `og-animation/page.tsx`
- **Demo Component**: The Notification Carousel is a production-ready demo showcasing all Beside features

## Troubleshooting

**Bundle errors?**

```bash
# Clear .next cache and node_modules
rm -rf .next node_modules
npm install
npx webflow library bundle --public-path http://localhost:4000/
```

**Components not showing?**

- Make sure the library is installed on your site
- Check that you're in the Components panel (⇧C)
- Look under the "Animations" group

**Assets not loading?**

- Default assets are hosted on Netlify (https://besideanimation-code.netlify.app)
- For custom assets, upload images to Webflow Assets and update the component props
- Make sure your Webflow site can access external URLs

## Next Steps

Want to add more components? Create:

1. New React component in `/components`
2. Corresponding `.webflow.tsx` definition file
3. Run `npx webflow library share` to upload

For more information, see the [Webflow Code Components documentation](https://developers.webflow.com/code-components).
