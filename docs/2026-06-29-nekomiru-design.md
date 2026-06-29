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
- **Email:** mewmirus@gmail.com (contact form delivery + displayed)
- **LINE:** https://lin.ee/t4dVKcp (official add-friend link; the LINE ID is not shown publicly)
- **Service area:** 大阪市内 (within Osaka City)
- **Pricing** (per client request — same tiers as reference, daily rate changed to ¥3,500):
  - 日々のお世話 (daily care: feeding, litter, health check, play, report): once-daily **¥4,000** (≈45 min) / twice-daily (morning & evening) **¥7,000** — tax incl.; any number of cats, no extra charge; Osaka-City travel included
  - わんにゃんプラン (Cat & Dog Plan): once-daily **¥5,000** (≈60 min) / twice-daily **¥9,000** — tax incl.; cats plus a cohabiting non-walking dog; no pet limit; vaccines & flea/tick prevention required
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

## Aesthetic direction — "Quiet home warmth / おうちのぬくもり"
- **Palette:** warm cream/oat backgrounds, ginger-apricot primary, soft sage secondary, warm-brown ink.
- **Type:** Fraunces (soft serif, display/EN accents) + Zen Maru Gothic (rounded JP headings) + Zen Kaku Gothic New (body).
- **Details:** hand-drawn SVG paws/whiskers/sleeping-cat, organic curved section dividers, subtle grain, soft layered shadows, large rounded corners, staggered page-load reveals.

## Tech approach
- Plain static site (HTML + custom CSS + vanilla JS). No framework, no build step, no database.
- **Contact form:** Netlify Forms (`data-netlify`), honeypot spam field, submissions emailable to mewmirus@gmail.com.
- Bilingual via a `data-i18n` dictionary populated on load; toggle updates text + `<html lang>` + `<title>`.
- Deploy: GitHub repo → Netlify (publish root). Show the `*.netlify.app` preview URL.

## Sections (single page)
Header (logo + anchor nav + LINE + JA/EN toggle) → Hero → 安心ポイント (4) → サービス内容 (6) →
料金 → ご利用の流れ (first-time 5 / repeat 3) → よくある質問 → お客様の声 (sample) →
お問い合わせ (form + email + LINE + area) → Footer (registration-number placeholder).
