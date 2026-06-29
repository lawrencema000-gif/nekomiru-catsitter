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

## Aesthetic direction — "Soft sky" (simple, light-blue) — updated 2026-06-30
Redesigned from the original warm "Quiet home warmth" palette to a simpler, soft light-blue (水色) look per client request.
- **Palette:** soft blue-white backgrounds (`#EFF8FC` / `#DBEEF7`), clean white cards, a watery blue primary (`#15789C`, AA with white), soft-blue tints (`#CBE9F4`), blue-grey ink (`#21404E`). LINE green kept for LINE buttons.
- **Type:** Zen Maru Gothic (rounded headings/display) + Zen Kaku Gothic New (body). Fraunces serif dropped for a cleaner look.
- **Simplified:** removed grain overlay, decorative blobs, floating paws, the morphing organic hero frame, and the wave divider. Calmer shadows, clean rounded corners, gentle scroll reveals retained.

## Tech approach
- Plain static site (HTML + custom CSS + vanilla JS). No framework, no build step, no database.
- **Contact form:** Netlify Forms (`data-netlify`), honeypot spam field, submissions emailable to mewmirus@gmail.com.
- Bilingual via a `data-i18n` dictionary populated on load; toggle updates text + `<html lang>` + `<title>`.
- Deploy: GitHub repo → Netlify (publish root). Show the `*.netlify.app` preview URL.

## Sections (single page)
Header (logo + anchor nav + LINE + JA/EN toggle) → Hero → 安心ポイント (4) → サービス内容 (6) →
料金 → ご利用の流れ (first-time 5 / repeat 3) → よくある質問 → お客様の声 (sample) →
お問い合わせ (form + email + LINE + area) → Footer (registration-number placeholder).
