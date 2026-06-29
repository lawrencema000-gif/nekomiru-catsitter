# ねこみるキャットシッター / Nekomiru Cat Sitter

大阪市内専門の猫ペットシッター事業のための、日本語／英語バイリンガル・ワンページサイト。
A bilingual (JA/EN) single-page marketing site for a cat-only pet-sitting service in Osaka City.

## 構成 / Stack
- Plain static site — HTML + CSS + vanilla JS. No build step, no database.
- Bilingual via `data-i18n` dictionary (`js/i18n.js`), default Japanese, language stored in `localStorage`.
- Contact form via **Netlify Forms** (no backend).
- Deployed on **Netlify**.

## ファイル / Files
```
index.html        — page markup (all sections, SVG icon sprite, Netlify form)
css/styles.css    — design system + layout + responsive + animations
js/i18n.js         — JA/EN translation dictionary + language toggle
js/main.js         — menu, scroll reveals, form submit
assets/favicon.svg — cat favicon
netlify.toml       — publish config + headers
docs/              — design spec
```

## ローカルで見る / Run locally
Open `index.html` directly, or serve the folder:
```bash
python -m http.server 8080   # then visit http://localhost:8080
```

## あとで差し替える項目 / To replace later
- 🐱 **ロゴ画像 / Logo** — hero uses `assets/nekomiru-cat.jpg` (the line-art profile image the client provided). Swap if updated.
- ⭐ **お客様の声 / Testimonials** — the three entries in the Voices section are samples.
- 📋 **動物取扱業登録番号 / Animal-handling registration number** — currently **not displayed**.
  A commented placeholder is in the footer of `index.html`; add the number once registered.
  > Note: operating a paid pet-sitting business in Japan legally requires 第一種動物取扱業 registration.
- 💬 **LINE link** — both LINE buttons point to `https://lin.ee/t4dVKcp` (official add-friend link). The LINE ID is intentionally not shown.

## お問い合わせ / Contact
Contact is **LINE only** (per client). The contact section is a single prominent
"友だち追加・ご相談" button linking to `https://lin.ee/t4dVKcp`. The email address and the
old Netlify contact form have been removed from the site.
