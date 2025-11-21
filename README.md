# Axiom Pulse UI
A Next.js-powered cryptocurrency dashboard that replicates Axiom Pulse's real-time token discovery interface. Built for traders who need instant market intelligence across multiple analytical dimensions. The site also contains a beautiful `ErrorBoundary` to handle errors gracefully in the UI.


## Screenshots
### Desktop UI

### Mobile UI


## Features at a glance
- Real Time Updates: users can see live updates around `SOL` and `BNB`, across three columns - New Pairs, Final Stretch, Migrated
- Pixel Perfect UI: The interface is deeply inspired from Axiom Pulse UI, and aims to achieve absolute similarity with it.
- Skeletons, Interactions: The website loads beautifully with a skeleton loading animation, and contains micro-interactions all throughout.
- Responsiveness: The website follows responsiveness down to mobile-sized screens. The columns become horizontally scrollable in narrow screens.
- Clear Icons: Clear icons from lucide-icons allow the page to be intuitive to the user.
- Modals: The UI also features modals, that can be explored by clicking on the right items. (example - `Display Modal`)


## Technical Architecture
- Next JS
- TypeScript
- useWebSocket Hook
- Tailwind CSS
- Context API
- and more...


## Local Development
Follow the below steps to develop the site locally:

1. Clone the repository
```
git clone https://github.com/Murdock9803/AxiomPulse-UI.git
```
2. Change directory
```
cd AxiomPulse-UI
```
3. Install all dependencies
```
npm install
```
4. Start the dev server
```
npm run dev
```

The site can be seen live at http://localhost:3000/