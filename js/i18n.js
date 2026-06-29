/* ねこみるキャットシッター — bilingual dictionary (JA default / EN) */
(function () {
  "use strict";

  const I18N = {
    docTitle: {
      ja: "ねこみるキャットシッター｜大阪市内・猫歴14年以上の猫専門家",
      en: "Nekomiru Cat Sitter | Cat-only pet sitting in Osaka",
    },
    skip: { ja: "本文へスキップ", en: "Skip to content" },

    brand: { ja: "ねこみる", en: "Nekomiru" },
    brandSub: { ja: "CAT SITTER · OSAKA", en: "CAT SITTER · OSAKA" },

    navAbout: { ja: "安心ポイント", en: "Why us" },
    navServices: { ja: "サービス", en: "Services" },
    navPricing: { ja: "料金", en: "Pricing" },
    navFlow: { ja: "ご利用の流れ", en: "How it works" },
    navFaq: { ja: "よくある質問", en: "FAQ" },
    navVoices: { ja: "お客様の声", en: "Voices" },
    navContact: { ja: "お問い合わせ", en: "Contact" },

    heroEyebrow: { ja: "大阪市内 ・ 猫歴14年以上 ・ 女性シッター", en: "Osaka City · 14+ yrs with cats · Female sitter" },
    heroTitle1: { ja: "猫ちゃんは、", en: "Cats are" },
    heroTitle2: { ja: "おうちがいちばん。", en: "happiest at home." },
    heroLead: {
      ja: "お留守のあいだも、いつものお部屋で。大阪市内専門の猫シッターが、やさしくお世話して、毎回お写真付きでご報告します。",
      en: "While you're away, your cat stays in its own familiar room. Our Osaka cat sitters care for them gently and send photo updates after every visit.",
    },
    heroCta1: { ja: "お問い合わせ", en: "Get in touch" },
    heroCta2: { ja: "LINEで相談", en: "Chat on LINE" },
    heroBadge1: { ja: "女性のペットシッター", en: "Female pet sitter" },
    heroBadge2: { ja: "猫歴14年以上", en: "14+ years with cats" },
    heroBadge3: { ja: "毎回お写真でご報告", en: "Photo report every visit" },
    heroBadge4: { ja: "オーダーメイドプランも可", en: "Custom plans available" },
    heroChip: { ja: "「今日も元気です」", en: "“Doing great today!”" },

    aboutLabel: { ja: "安心ポイント", en: "Why choose us" },
    aboutTitle: { ja: "「うちの子をまかせて大丈夫？」に、しっかりお応えします", en: "Everything you need to feel at ease leaving your cat with us" },
    about1Title: { ja: "猫が怖がりにくい女性シッター", en: "A female sitter cats fear less" },
    about1Body: { ja: "猫ちゃんが怖がりにくいよう、お伺いするのは女性のペットシッター。猫ちゃんもご家族も、安心してお任せいただけます。", en: "Cats tend to be calmer with a woman, so your sitter is always female — keeping your cat and your family at ease." },
    about2Title: { ja: "猫歴14年以上の猫専門家", en: "A cat expert — 14+ years with cats" },
    about2Body: { ja: "猫歴14年以上。猫の気持ちと習性を知り尽くした専門家が、ていねいにお世話します。猫ちゃんと同居のわんちゃんも、わんにゃんプランで一緒に。", en: "With 14+ years caring for cats, an expert who truly understands their needs looks after your cat. Cohabiting dogs are welcome via the Cat & Dog Plan." },
    about3Title: { ja: "毎回お写真でご報告", en: "Photo report every visit" },
    about3Body: { ja: "お世話のたびに、猫ちゃんのようすをお写真とメッセージでお届け。離れていても安心です。", en: "After each visit we send photos and a message, so you stay close even from afar." },
    about4Title: { ja: "大阪市内に対応", en: "All across Osaka City" },
    about4Body: { ja: "大阪市内ならどこでもお伺いします。ご旅行・ご出張・里帰りなど、さまざまな場面で。", en: "We visit anywhere within Osaka City — for travel, business trips, family visits and more." },
    about5Title: { ja: "寄り添うカスタムプランも", en: "Flexible custom plans too" },
    about5Body: { ja: "お客様と猫ちゃんに寄り添って、内容も時間もご相談に応じて自由にお決めいただけます。", en: "We tailor everything — content and timing — to you and your cat, by consultation." },
    about6Title: { ja: "英語OK・海外の方も歓迎", en: "English OK — visitors welcome" },
    about6Body: { ja: "英語での会話に対応しています。日本語にご不安のある方も、どうぞお気軽にご相談ください。", en: "We can chat in English, so international cat owners are warmly welcome." },

    svcLabel: { ja: "サービス内容", en: "Our services" },
    svcTitle: { ja: "いつもの暮らしを、そのまま守るお世話", en: "Care that keeps everyday life unchanged" },
    svcLead: { ja: "ごはんからトイレ、健康チェック、遊びまで。猫ちゃんがリラックスして過ごせるよう、ていねいにお世話します。", en: "From meals and litter to health checks and play — gentle, careful care so your cat stays relaxed." },
    svc1Title: { ja: "ごはん・お水", en: "Food & water" },
    svc1Body: { ja: "いつものごはんを、いつもの時間に。新鮮なお水へのお取り替えもおまかせください。", en: "The usual food at the usual time, plus fresh water — leave it to us." },
    svc2Title: { ja: "トイレ掃除", en: "Litter cleaning" },
    svc2Body: { ja: "猫ちゃんが気持ちよく過ごせるよう、トイレをきれいに。体調の変化もあわせて確認します。", en: "We keep the litter clean and comfortable, and watch for any changes in condition." },
    svc3Title: { ja: "健康チェック", en: "Health check" },
    svc3Body: { ja: "食欲・ようす・お部屋の様子をやさしく観察。気になることはすぐにご連絡します。", en: "We gently check appetite, mood and surroundings, and contact you about anything of concern." },
    svc4Title: { ja: "遊び・ふれあい", en: "Play & companionship" },
    svc4Body: { ja: "その子のペースに合わせて、遊んだり、そっと見守ったり。さみしくないよう寄り添います。", en: "We play or quietly watch over them at their own pace, so they never feel lonely." },
    svc5Title: { ja: "お写真付きご報告", en: "Photo report" },
    svc5Body: { ja: "お世話のたびに、写真とメッセージでようすをご報告。スマホでいつでも確認できます。", en: "Photos and a message after each visit, viewable any time on your phone." },
    svc6Title: { ja: "通院サポート", en: "Vet-visit support" },
    svc6Body: { ja: "かかりつけ医への通院もサポート。猫ちゃんの状態によってはお受けできない場合があります。", en: "We can accompany visits to your vet (may be declined depending on your cat's condition)." },

    priceLabel: { ja: "料金", en: "Pricing" },
    priceTitle: { ja: "わかりやすい、シンプルな料金", en: "Simple, clear pricing" },
    priceLead: { ja: "大阪市内を中心にお伺いします。ご不明な点はお気軽にお問い合わせください。", en: "We serve mainly Osaka City. Please ask us about anything unclear." },
    priceBest: { ja: "いちばん人気", en: "Most popular" },
    price1Title: { ja: "日々のお世話", en: "Daily care" },
    price1Desc: { ja: "給餌・トイレ・健康チェック・遊び・お写真付きご報告", en: "Feeding, litter, health check, play & a photo report" },
    price1Freq1Label: { ja: "30分", en: "30 min" },
    price1Freq2Label: { ja: "60分", en: "60 min" },
    price1Note: { ja: "税込・猫は何匹でも追加料金なし", en: "Tax included · any number of cats, no extra charge" },
    price2Title: { ja: "通院サポート", en: "Vet-visit support" },
    price2Desc: { ja: "かかりつけ医への通院に付き添います", en: "We accompany visits to your regular vet" },
    priceHour: { ja: "／時間", en: "/ hour" },
    price2Note: { ja: "猫ちゃんの状態により応相談", en: "Subject to your cat's condition" },
    price6Tag: { ja: "オーダーメイド", en: "Made to order" },
    price6Title: { ja: "カスタムプラン", en: "Custom Plan" },
    price6Desc: { ja: "内容も時間も、ご相談に応じて自由に決められます", en: "Content and timing, freely tailored by consultation" },
    price6Amount: { ja: "応相談", en: "Ask us" },
    price6Note: { ja: "個人が責任を持って運営しているからこそ、お客様と猫ちゃんに寄り添ったお世話を。", en: "Personally run with care — we stay close to you and your cat." },
    price4Title: { ja: "お電話でのご相談", en: "Phone consultation" },
    price4Desc: { ja: "ご利用中のお客様向け", en: "For current clients" },
    priceFree: { ja: "無料", en: "Free" },
    price4Note: { ja: "いつでもお気軽にどうぞ", en: "Reach out any time" },
    price5Tag: { ja: "猫＋わんちゃん", en: "Cats + dog" },
    price5Title: { ja: "わんにゃんプラン", en: "Cat & Dog Plan" },
    price5Desc: { ja: "猫ちゃんと同居のわんちゃんも一緒にお世話", en: "Care for your cats plus a cohabiting dog" },
    price5Freq1Label: { ja: "30分", en: "30 min" },
    price5Freq2Label: { ja: "60分", en: "60 min" },
    price5Note: { ja: "税込・頭数制限なし・ワクチン＆ノミダニ予防が条件", en: "Tax incl. · no pet limit · vaccines & flea/tick prevention required" },
    optTitle: { ja: "オプション：お散歩", en: "Option: Dog walk" },
    optSub: { ja: "わんにゃんプランに追加できます（税込）", en: "Add-on for the Cat & Dog Plan (tax incl.)" },
    optWalk2: { ja: "お散歩30分", en: "30-min walk" },
    feeNote: { ja: "交通費：対象エリア内一律500円（税込）／エリア外は別途ご相談", en: "Travel fee: flat ¥500 within our service area (tax incl.) / outside the area by consultation" },
    kartNote: { ja: "初回のみ・カルテ作成料 1,000円（税込）", en: "First booking only — ¥1,000 chart-creation fee (tax incl.)" },
    priceCancel: {
      ja: "キャンセル料：ご利用日の15日前以内は50％、10日前以内は100％を申し受けます。料金は税込表示です。",
      en: "Cancellation: 50% within 15 days of the booked date, 100% within 10 days. Prices include tax.",
    },

    flowLabel: { ja: "ご利用の流れ", en: "How it works" },
    flowTitle: { ja: "はじめてでも、安心の流れ", en: "An easy, reassuring process" },
    flowFirstPill: { ja: "はじめての方", en: "First-time clients" },
    flowF1T: { ja: "お問い合わせ", en: "Inquiry" },
    flowF1B: { ja: "LINEからお気軽にご連絡ください。", en: "Reach out to us easily on LINE." },
    flowF2T: { ja: "ご相談", en: "Consultation" },
    flowF2B: { ja: "ご不安な点やご希望を、お電話などでていねいにお伺いします。", en: "We carefully discuss your concerns and wishes, by phone or otherwise." },
    flowF3T: { ja: "顔合わせ", en: "Meeting your cat" },
    flowF3B: { ja: "スタッフがご自宅へ伺い、猫ちゃんと初対面。相性や環境を確認します。", en: "A staff member visits to meet your cat and check the home and compatibility." },
    flowF4T: { ja: "ご契約・鍵のお預かり", en: "Agreement & keys" },
    flowF4B: { ja: "猫ちゃんの情報を伺い、鍵をお預かりします（料金は前払い）。", en: "We gather your cat's details and receive your key (payment in advance)." },
    flowF5T: { ja: "お世話開始", en: "Sitting begins" },
    flowF5B: { ja: "毎回お写真付きでご報告。最終日に鍵をご返却して終了です。", en: "Photo reports every visit; we return your key on the final day." },
    flowRepeatPill: { ja: "リピーターの方", en: "Returning clients" },
    flowR1T: { ja: "ご予約", en: "Booking" },
    flowR1B: { ja: "日程が決まりましたら、お早めにご連絡ください。", en: "Let us know your dates as early as you can." },
    flowR2T: { ja: "鍵・お支払い", en: "Keys & payment" },
    flowR2B: { ja: "事前に鍵のお預かりとお支払いを確認します。", en: "We confirm the key handover and payment in advance." },
    flowR3T: { ja: "お世話開始", en: "Sitting begins" },
    flowR3B: { ja: "いつものお世話を、いつものようにご報告とともに。", en: "The same trusted care, with the same reports." },
    flowAside: { ja: "2回目以降は、顔合わせを省いてスムーズにご利用いただけます。", en: "From your second time on, we skip the meeting for a smoother booking." },

    faqLabel: { ja: "よくある質問", en: "FAQ" },
    faqTitle: { ja: "ご利用前の、よくあるご質問", en: "Frequently asked questions" },
    faqQ1: { ja: "鍵は預けるのですか？", en: "Do I hand over my key?" },
    faqA1: { ja: "はい。お世話の期間中は鍵をお預かりします。最終日にドアポストへのご返却、または郵送（別途送料）でお返しします。", en: "Yes. We hold your key during the sitting period and return it via your mail slot on the final day, or by post (shipping extra)." },
    faqQ2: { ja: "1日に何回来てもらえますか？", en: "How many visits per day are possible?" },
    faqA2: { ja: "ご希望に応じて、1日に複数回お伺いすることも可能です。回数や時間帯は、猫ちゃんの頭数やご様子に合わせてお気軽にご相談ください。", en: "We can visit multiple times a day if you'd like. We'll tailor the number of visits and timing to your cats." },
    faqQ3: { ja: "写真は毎回もらえますか？", en: "Do I get photos every time?" },
    faqA3: { ja: "はい。お世話のたびに、猫ちゃんのお写真とメッセージをお送りします。離れていてもようすが分かるので安心です。", en: "Yes — after every visit we send photos and a message so you always know how your cat is doing." },
    faqQ4: { ja: "急なお願いもできますか？", en: "Can I book last-minute?" },
    faqA4: { ja: "空き状況によっては当日・前日のご依頼も承ります。まずはLINEでお問い合わせください。", en: "Depending on availability, same-day or next-day requests may be possible. Please ask us on LINE." },
    faqQ5: { ja: "猫以外のお世話（植物の水やりなど）も頼めますか？", en: "Can you also do things like watering plants?" },
    faqA5: { ja: "はい、カスタムサポートとして対応可能です。郵便物の確認や植物の水やりなど、お気軽にご相談ください。", en: "Yes, as custom support — checking mail, watering plants and more. Just ask." },
    faqQ6: { ja: "多頭飼いでも大丈夫ですか？", en: "Is multiple-cat care okay?" },
    faqA6: { ja: "もちろんです。猫が何匹いても追加料金はいただきません。多頭飼いのお宅も同一料金で安心してご利用いただけます。", en: "Absolutely. There's no extra charge no matter how many cats you have — multiple-cat homes are covered at the same price." },
    faqQ7: { ja: "急に体調が悪くなったら？", en: "What if my cat suddenly gets ill?" },
    faqA7: { ja: "すぐにご連絡し、ご指定のかかりつけ医への通院サポートなど、できる限りの対応をします。事前に緊急時のご希望を伺っておきます。", en: "We contact you immediately and do all we can, including a vet visit to your chosen clinic. We agree on emergency wishes beforehand." },
    faqQ8: { ja: "留守中の家の中を見られるのが不安です。", en: "I'm worried about privacy in my home." },
    faqA8: { ja: "お世話に必要な範囲のみでお伺いします。立ち入ってほしくない場所など、事前にお気軽にお伝えください。", en: "We stay only within the areas needed for care. Just tell us in advance about any off-limits spaces." },
    faqQ9: { ja: "対応エリアはどこですか？", en: "What is your service area?" },
    faqA9: { ja: "大阪市内に対応しています。市外の場合も一度ご相談ください。", en: "We serve Osaka City. For areas outside the city, please ask us." },

    voicesLabel: { ja: "お客様の声", en: "Client voices" },
    voicesTitle: { ja: "ご利用いただいたお客様より", en: "From the clients we've cared for" },
    voicesNote: { ja: "※ 以下はサンプルです。実際のお客様の声に差し替えできます。", en: "* Samples below — replace with real client testimonials." },
    voice1: { ja: "毎回お写真が届くので、出張中もまったく心配いりませんでした。帰宅したら、いつもどおりのんびりしていてホッとしました。", en: "Photos arrived every time, so I didn't worry at all on my trip. I came home to a perfectly relaxed cat." },
    voice1By: { ja: "— 大阪市・Aさん（サンプル）", en: "— A., Osaka City (sample)" },
    voice2: { ja: "人見知りのうちの子が、初回の顔合わせですっかり安心していました。女性のシッターさんというのも決め手でした。", en: "My shy cat was completely at ease after the first meeting. Having a female sitter was a big deciding factor for me." },
    voice2By: { ja: "— 大阪市・Mさん（サンプル）", en: "— M., Osaka City (sample)" },
    voice3: { ja: "通院のサポートまでお願いできて本当に助かりました。猫のことをよく分かってくださる方で、安心しておまかせできます。", en: "Being able to ask for vet-visit support was a huge help. They truly understand cats — I trust them completely." },
    voice3By: { ja: "— 大阪市・Tさん（サンプル）", en: "— T., Osaka City (sample)" },

    contactLabel: { ja: "お問い合わせ", en: "Contact" },
    contactTitle: { ja: "LINEでお気軽にご相談ください", en: "Reach us easily on LINE" },
    contactLead: { ja: "ご予約・ご質問は、LINEからどうぞ。友だち追加して、メッセージを送るだけ。お返事は通常1〜2日以内です。", en: "For bookings or questions, just message us on LINE — add us as a friend and send a message. We usually reply within 1–2 days." },
    lineCtaBig: { ja: "LINEで友だち追加・ご相談", en: "Add us on LINE & chat" },
    fabLine: { ja: "LINEで相談", en: "Chat on LINE" },
    contactAreaLabel: { ja: "対応エリア", en: "Service area" },
    contactArea: { ja: "大阪市内", en: "Osaka City" },


    footerName: { ja: "ねこみるキャットシッター", en: "Nekomiru Cat Sitter" },
    footerTag: { ja: "大阪市内・猫歴14年以上の猫専門家", en: "Osaka cat expert — 14+ years' experience" },

    // Form status messages (used by main.js)
    formSending: { ja: "送信中…", en: "Sending…" },
    formOk: { ja: "送信しました。お返事まで少々お待ちください 🐾", en: "Sent! We'll be in touch shortly 🐾" },
    formErr: { ja: "送信に失敗しました。お手数ですがメールでご連絡ください。", en: "Sending failed. Please email us instead." },
  };

  // Replace only the element's text, preserving child elements (e.g. icons).
  function setText(el, str) {
    let done = false;
    for (const node of el.childNodes) {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
        node.nodeValue = str;
        done = true;
        break;
      }
    }
    if (!done) el.insertBefore(document.createTextNode(str), el.firstChild);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    if (I18N.docTitle[lang]) document.title = I18N.docTitle[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const dict = I18N[el.getAttribute("data-i18n")];
      if (dict && dict[lang] != null) setText(el, dict[lang]);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const dict = I18N[el.getAttribute("data-i18n-ph")];
      if (dict && dict[lang] != null) el.setAttribute("placeholder", dict[lang]);
    });

    document.querySelectorAll(".lang-opt").forEach((opt) => {
      opt.classList.toggle("is-on", opt.getAttribute("data-lang") === lang);
    });

    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) {
      toggleBtn.setAttribute(
        "aria-label",
        lang === "ja" ? "Switch to English（英語に切り替え）" : "日本語に切り替える（Switch to Japanese）"
      );
    }

    try { localStorage.setItem("nekomiru-lang", lang); } catch (e) {}
  }

  // expose for main.js
  window.NekomiruI18n = { dict: I18N, apply: applyLang };

  // initialise on load
  let saved = "ja";
  try { saved = localStorage.getItem("nekomiru-lang") || "ja"; } catch (e) {}
  document.addEventListener("DOMContentLoaded", () => applyLang(saved));
})();
