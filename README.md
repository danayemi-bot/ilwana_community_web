# Ilwana Community Heritage

> **Preserving the History, Language, Culture, and Heritage of the Wailwana.**

A digital community heritage and knowledge-preservation platform dedicated to documenting, organizing, and safeguarding the history, language, customs, traditional governance, and indigenous knowledge of the **Ilwana Community (Wailwana)** of the River Tana basin in Kenya.

---

## 🏛️ Project Sections & Overview

The platform features 12 dedicated, interconnected heritage sections:

1. **Home**: Overview of community identity, mission, and featured heritage gateways.
2. **History & Identity**: Origins from the Congo Basin, maritime journey via the Comoros and Shungwaya, arrival at the River Tana, self-identification as free people (*Ilwana*), and correction of the external label "Malakote".
3. **Geography & Homeland**: Connection to the River Tana (*Chaana*), settlement distribution across Tana River County (Bura Constituency, Gariseni, Minjila, Hola, Witu), roster of 34 documented ancestral villages, neighboring communities (Pokomo, Orma, Somali, Munyoya), and environmental challenges (invasive *Prosopis juliflora* / Mathenge, seasonal floods, historical security).
4. **Kilwana Language Centre**: Independent Bantu classification, everyday language status, regional multilingualism, modern preservation challenges, and interactive vocabulary explorer.
5. **Social Structure & Culture**: Extended family support systems, respect for elders, gender roles, traditional communication methods (Ululations, Town Crier, River Calling), marriage customs (*A'LIMA*), sacred childbirth celebrations (*Ukaamwaale*), and traditional lifeways.
6. **Religion & Belief Systems**: Islam as the faith of >99% of Wailwana, leadership of Sheikhs and Imams, village Madrasas, coastal scholarship centers (*Riyadha* in Lamu, Mambrui, Malindi), and indigenous environmental forecasting wisdom.
7. **Traditional Governance & Leadership**: The **Hayu** (Traditional King), the **Gasa** (Supreme Consultative Council for restorative justice and land boundary arbitration), and the 8 recognized traditional clans (*Wayu, Karari, Mamboya, Hajeji, Abole, Karayu, Ilaani, Galgedha*).
8. **Arts, Music & Cultural Expressions**: Traditional dances (*Kitoko, Koras, Mashingwe, Ukaamwaale, Kingika*), verbatim documented song lyrics preserved in original Kilwana, musical instruments (*Ngoma, Bati, Bunki, Firiimbi*), and oral storytelling.
9. **Material Culture & Indigenous Technology**: Traditional clothing (*Haagoodo, Banaadiri, Wiili, Gapsara, Kikoi*), alluvial cuisine (*Buyuyu, Haradya Buyuyu, Makaaruka, Haradya Makaaruka, Konole, Kumbu, Matole, Matolya Sehe*), beekeeping (*Mwaato, Nooma, Kimmule, Begele & Begelimo, Oki*), and river implements (*Waato, Mokoobi, Boodo, Locholo, Lupekecho, Mwiko, Kapu, Uta & Tiyya*).
10. **Glossary of Kilwana Words & Cultural Terms (Mandatory)**: Complete, searchable, filterable A–Z dictionary with cultural context, cross-references, and verification flags for unconfirmed translations.
11. **Sources & Documentation**: Transparent methodology based on elder oral histories and authentic community accounts.
12. **Community Knowledge & Future Contributions**: Intergenerational guide and interactive drafting tool for elders and youth to submit terms and oral narratives for elder review.

---

## 🔒 Community Safeguards & Privacy Protocol

- **Pure Community Focus**: Dedicated exclusively to the collective history, language, and culture of the Wailwana.
- **Zero Book Front Matter**: Completely excludes private author biographies, personal dedications, academic acknowledgements, book covers, publisher notices, ISBNs, and publication timelines.
- **Linguistic Integrity**: Terms without verified English meanings are explicitly labeled as *"English meaning not yet confirmed"*, ensuring that no speculative translations are published.

---

## 💻 Local Development

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation & Launch
```bash
# 1. Clone the repository
git clone https://github.com/your-username/ilwana-community-heritage.git
cd ilwana-community-heritage

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🚀 GitHub Pages Static Deployment

This website is architected as a lightweight, zero-dependency client-side application that builds to standard HTML, CSS, and JavaScript.

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "feat: Ilwana Community Heritage digital archive"
   git branch -M main
   git remote add origin https://github.com/your-username/ilwana-community-heritage.git
   git push -u origin main
   ```
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Create a workflow file at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Set up Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build static files
           run: npm run build

         - name: Setup Pages
           uses: actions/configure-pages@v5

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

### Option 2: Deploying to Vercel via GitHub (Recommended)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: Ilwana Community Heritage platform"
   git branch -M main
   git remote add origin https://github.com/your-username/ilwana-community-heritage.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** > **"Project"**.
4. Import your **`ilwana-community-heritage`** repository.
5. Vercel automatically detects the **Vite** framework:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **"Deploy"**.
7. In under a minute, your project will be live with an SSL certificate and automatic continuous deployment on every git push!

### Option 3: Deploying the `/dist` Folder Directly
```bash
# Build production bundle
npm run build

# The output in /dist is a static site ready to upload to any static host:
# GitHub Pages, Vercel, Netlify, Cloudflare Pages, or Apache/Nginx web server.
```

---

## 📜 Neutral Colophon

*Ilwana Community Heritage — Preserving the history, language, culture, and heritage of the Wailwana.*
