# EcoSort – Learn to Recycle, Save the Planet
A responsive English/Arabic recycling education game built with React, Vite, JavaScript, CSS and Lucide React. No backend, accounts, API keys, or paid services.

## Run locally
Install Node.js 22 LTS or newer, then:
```sh
npm install
npm run dev
```
Open the address printed by Vite.
```sh
npm test
npm run build
npm run preview
```
The production files are generated in `dist/`.

## Publish to Vercel (public URL)
1. Upload this project to a GitHub repository (exclude node_modules and dist).
2. Sign in to Vercel and choose **Add New → Project**; import the repository.
3. Choose the Vite preset. Build command: `npm run build`. Output directory: `dist`. No environment variables are needed.
4. Click **Deploy**. Vercel provides a public `https://your-project.vercel.app` URL. Share that URL with your classmates. Future pushes redeploy automatically.
The included vercel.json supplies the build configuration. Navigation uses in-app state, so no server routing rewrites are required.

## Publish to GitHub Pages
An Actions workflow is included. Push to the main branch, then open repository **Settings → Pages → Build and deployment → Source → GitHub Actions**. Run the Deploy workflow or push a new commit. After success, the public URL appears in Settings → Pages (normally `https://USERNAME.github.io/REPOSITORY/`).
Vite uses a relative base so assets work under repository paths.

## Game
- 22 fully translated items; Fisher–Yates shuffle selects 10 unique questions.
- Correct answers earn 10 points. Answers lock until Next Item.
- Results show score, correct count, accuracy, rank and best score.
- Best score is stored in `localStorage` under `ecosort-best`; unavailable storage does not prevent play.
- Share uses Web Share where supported, then clipboard, then selectable text.
- English is the default; Arabic switches document language and direction to RTL.
- Restart immediately begins a new session. Navigation away from the game returns to other sections; Start Playing starts fresh.
- Semantic buttons, visible focus, feedback announcements, progress semantics and reduced-motion support.
- No sound, tracking, authentication, database or external data API.
- Optional Google Fonts have local system-font fallbacks.

## Educational scope
EcoSort teaches general material identification, not universal curbside acceptance. Check your local collector’s guidelines. Items describe clean, empty, single-material packaging where appropriate. Glass means container glass, not ceramic or drinking glasses. Local acceptance of plastic forms, foil, trays, lids and paper products varies. Hazardous waste is not part of the sorting bank. No numerical environmental savings are claimed.

## Source map
- src/main.jsx: navigation, bilingual interface, game, results and share behavior
- src/data.js: bilingual question bank, tips, learning content and session selection
- src/style.css: responsive styles and RTL support
- src/game.test.js: content, random-session integrity and rank threshold tests
- vercel.json: Vercel configuration
- .github/workflows/deploy.yml: GitHub Pages deployment
