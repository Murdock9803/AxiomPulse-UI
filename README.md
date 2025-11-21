# Axiom Pulse UI
A Next.js-powered cryptocurrency dashboard that replicates Axiom Pulse's real-time token discovery interface. Built for traders who need instant market intelligence across multiple analytical dimensions. The site also contains a beautiful `ErrorBoundary` to handle errors gracefully in the UI.


## Screenshots
### Desktop UI
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/8a05238a-0835-4036-8b5f-f0a6f38e97b8" />

### Error Boundary
<img width="1393" height="746" alt="image" src="https://github.com/user-attachments/assets/38d1b2b8-52fd-49b5-a9cd-1e882987263a" />

### Mobile UI
<img width="410" height="758" alt="image" src="https://github.com/user-attachments/assets/6dd22e31-c948-4a64-9e25-9d8bd8f548af" />


## Features at a glance
- Real Time Updates: users can see live updates around `SOL` and `BNB`, across three columns - New Pairs, Final Stretch, Migrated
- Pixel Perfect UI: The interface is deeply inspired by Axiom Pulse UI, and aims to achieve absolute similarity with it.
- Skeletons, Interactions: The website loads beautifully with a skeleton loading animation and contains micro-interactions all throughout.
- Responsiveness: The website follows responsiveness down to mobile-sized screens. The columns become horizontally scrollable in narrow screens.
- Clear Icons: Clear icons from lucide-icons allow the page to be intuitive to the user.
- Modals: The UI also features modals that can be explored by clicking on the right items. (example - `Display Modal`)
- Error Boundary: to handle errors gracefully in the UI.


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
