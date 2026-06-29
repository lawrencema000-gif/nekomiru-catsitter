# ねこみるキャットシッター — Design Spec

**Date:** 2026-06-29
**Type:** Bilingual (JA/EN) single-page marketing site for an Osaka cat-sitting business.

## Goal
An original marketing site for *ねこみるキャットシッター / Nekomiru Cat Sitter*, a cat-only,
women-staffed pet-sitting service operating within Osaka City. Information architecture is
**inspired by** the structure of nekorusu.com/sitting (sections, flow, pricing tiers) but all
copy, imagery, branding, and design are **original**. No text, photos, store name, reviews, or
registration number are copied from the reference site.

## Confirmed requirements
- **Name:** ねこみるキャットシッター / Nekomiru Cat Sitter
- **Email:** mewmirus@gmail.com (back-office only — NOT displayed on site; contact is LINE-only as of 2026-06-30)
- **LINE:** https://lin.ee/t4dVKcp (official add-friend link; the LINE ID is not shown publicly)
- **Service area:** 大阪市内 (within Osaka City)
- **Pricing** (per client request — same tiers as reference, daily rate changed to ¥3,500):
  - 日々のお世話 (daily care: feeding, litter, health check, play, report) — tiers by visit duration: **30 min ¥3,500** / **60 min ¥4,500** (tax incl.; any number of cats, no extra charge)
  - わんにゃんプラン (Cat & Dog Plan) — by visit duration: **30 min ¥4,000** / **60 min ¥5,000** (tax incl.; cats plus a cohabiting dog; no pet limit; vaccines & flea/tick prevention required)
  - オプション (add-on): お散歩 dog walk — 15 min **¥700** / 30 min **¥1,000** (tax incl.)
  - 交通費 (travel fee): flat **¥500** within the service area (tax incl.); outside the area by consultation. Shown as a small visible chip (modest, not hidden).
  - 初回カルテ作成 (one-time chart-creation fee, first booking only): **¥1,000** (tax incl.). Shown as subtle fine print.
  - 通院サポート (vet-visit support): **¥3,000 / hour**
  - その他カスタムサポート (other custom support): **¥2,000〜**
  - お電話でのご相談 (phone consult, active clients): **無料 / free**
  - Cancellation: 50% within 15 days, 100% within 10 days of the booked date
- **Trust points:** women staff only, cat-focused (cohabiting non-walking dogs also cared for via the Cat & Dog Plan), photo report every visit
- **Photos:** client has them — placeholders/illustrations used now, swap later
- **Registration number:** none yet → **not displayed** (HTML placeholder kept for later). Compliance
  note delivered to client: 第一種動物取扱業 registration is legally required before operating.
- **Language:** JA + EN with a toggle (default JA, persisted in localStorage)
- **Vibe:** gentle / warm / cat-like

## Aesthetic direction — "Clean cream + blue" — updated 2026-06-30
Simple, professional, readable. Per client: near-white **cream** background, **black** body text, **blue** headings, **max 3 text colors**, thicker frame borders, no cat silhouettes/illustrations.
- **Background:** near-white warm cream (`#FBF8F1`); soft-cream alt sections (`#F3EEE1`); white cards with a subtle resting shadow. Hero & footer also cream (consistent).
- **Text — exactly 3 colors:** black `#1A1A1A` (body), gray `#666666` (secondary/notes), blue `#0F5E7C` (headings, links, emphasis). White text only on colored fills (buttons/pills). Icons may use blue-family accents (graphical, not counted).
- **Headings:** larger and blue (section titles `clamp(1.85→2.6rem)`, hero `clamp(2.6→4.4rem)`).
- **Borders:** thicker (2px) card/frame borders for clearer, more readable framing.
- **Type:** headings Zen Kaku Gothic New 900 (clean); brand + price numbers Zen Maru Gothic; body Zen Kaku Gothic New 16.5px.
- **Hero art:** clean photo placeholder (camera icon + "お写真はこちらに" tag) on a soft light-blue panel. No illustrations or silhouettes.
- **Removed:** grain, blobs, floating paws, morphing frame, wave divider, cat silhouettes.

## Tech approach
- Plain static site (HTML + custom CSS + vanilla JS). No framework, no build step, no database.
- **Contact:** LINE only — a prominent "友だち追加・ご相談" button to `https://lin.ee/t4dVKcp`. (The email display and Netlify contact form were removed 2026-06-30 per client.)
- Bilingual via a `data-i18n` dictionary populated on load; toggle updates text + `<html lang>` + `<title>`.
- Deploy: GitHub repo → Netlify (publish root). Show the `*.netlify.app` preview URL.

## Sections (single page)
Header (logo + anchor nav + LINE + JA/EN toggle) → Hero → 安心ポイント (4) → サービス内容 (6) →
料金 → ご利用の流れ (first-time 5 / repeat 3) → よくある質問 → お客様の声 (sample) →
お問い合わせ (form + email + LINE + area) → Footer (registration-number placeholder).
