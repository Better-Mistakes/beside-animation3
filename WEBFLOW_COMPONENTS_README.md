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
- `Avatar URL`: URL for the avatar image
- `Icon URL`: URL for the icon image
- `Show Shake Animation`: Enable shake animation on entrance

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
│   ├── rolling-text.tsx                 # React component
│   ├── rolling-text.webflow.tsx         # Webflow definition
│   ├── notification-card.tsx            # React component
│   └── notification-card.webflow.tsx    # Webflow definition
├── webflow.json                         # Library configuration
└── dist/                                # Generated bundle (after build)
```

## Tips

- **Assets**: Upload your avatar/icon images to Webflow Assets first, then use those URLs in the component props
- **Styling**: The components use inline Tailwind classes and will work out-of-the-box
- **Animation Library**: Uses Framer Motion for smooth animations
- **Shadow DOM**: Components render in isolated Shadow DOM (prevents style conflicts)

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

- Upload images to Webflow Assets
- Use the Webflow-hosted URLs in component props

## Next Steps

Want to add more components? Create:

1. New React component in `/components`
2. Corresponding `.webflow.tsx` definition file
3. Run `npx webflow library share` to upload

For more information, see the [Webflow Code Components documentation](https://developers.webflow.com/code-components).
