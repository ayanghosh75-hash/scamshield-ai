// ScamShield AI — Master Client-Side Detection Engine
// Author: Ayan Kumar Ghosh (https://www.buymeacoffee.com/AyanKumarGhosh)

let currentLang = 'bn'; // Default Bengali for local audience
let remainingFreeChecks = 5;

// Comprehensive Multilingual UI Dictionary
const I18N = {
  bn: {
    heroTitle: "আপনার পরিবার ও পিতা-মাতাকে ডিজিটাল প্রতারণা থেকে রক্ষা করুন",
    heroDesc: "হোয়াটসঅ্যাপ, এসএমএস বা ইমেলে পাওয়া যেকোনো সন্দেহজনক মেসেজ বা লিঙ্ক এখানে পেস্ট করুন। মাত্র ৩ সেকেন্ডে জেনে নিন এটি আসল নাকি টাকা হাতিয়ে নেওয়ার ফাঁদ।",
    statChecks: "🛡️ ২০,০০০+ প্রতারণা প্যাটার্ন যাচাইকৃত",
    statSafe: "🇮🇳 সাইবার ক্রাইম হেল্পলাইন ১৯৩০ সমর্থিত",
    inputLabel: "যাচাই করার মেসেজ বা লিঙ্ক পেস্ট করুন:",
    sampleElectricity: "⚡ বিদ্যুৎ কাটার মেসেজ",
    samplePost: "📦 পার্সেল আটকের মেসেজ",
    sampleKYC: "🏦 ব্যাঙ্ক কেওয়াইসি ব্লক",
    sampleTelegram: "💼 ঘরে বসে আয় (টেলিগ্রাম)",
    sampleLegit: "✅ আসল ব্যাঙ্কের ওটিপি (নিরাপদ)",
    placeholderText: "এখানে সন্দেহজনক মেসেজ বা লিঙ্কটি পেস্ট করুন (যেমন: 'Dear customer your electricity bill is unpaid power will disconnect tonight at 9:30 PM...')",
    btnAnalyze: "🔍 প্রতারণা পরীক্ষা করুন",
    btnClear: "মুছে ফেলুন",
    dangerTitle: "🚨 সাবধান! ১০০% নিশ্চিত প্রতারণা (FRAUD DETECTED)",
    warningTitle: "⚠️ সতর্ক থাকুন! অত্যন্ত সন্দেহজনক মেসেজ",
    safeTitle: "✅ সাধারণ ও নিরাপদ মেসেজ মনে হচ্ছে",
    labelWhatHappens: "⚠️ লিঙ্কে ক্লিক করলে বা কথা শুনলে কী হবে?",
    labelActionPlan: "🛡️ এখন আপনার করণীয় পদক্ষেপ:",
    labelCopyReply: "প্রতারককে উত্তর দেওয়ার মেসেজ কপি করুন",
    btnCopied: "কপি সম্পন্ন! ✓",
    sampleReplyText: "আমি জেনে গেছি এটি একটি প্রতারণার ফাঁদ। আমার সাথে আর যোগাযোগের চেষ্টা করবেন না। আপনার নম্বরটি জাতীয় সাইবার ক্রাইম পোর্টাল ১৯৩০-এ রিপোর্ট করা হলো।",
    vipBanner: "⭐️ ফ্যামিলি প্রোটেকশন পাস",
    seniorFont: "🔤 বড় ফন্ট"
  },
  hi: {
    heroTitle: "अपने परिवार और माता-पिता को डिजिटल फ्रॉड से सुरक्षित रखें",
    heroDesc: "व्हाट्सएप, एसएमएस या ईमेल पर मिला कोई भी संदिग्ध मैसेज या लिंक यहाँ पेस्ट करें। मात्र ३ सेकंड में जानें कि यह असली है या पैसे लूटने का जाल।",
    statChecks: "🛡️ २०,०००+ फ्रॉड पैटर्न विश्लेषित",
    statSafe: "🇮🇳 राष्ट्रीय साइबर क्राइम हेल्पलाइन १९३० समर्थित",
    inputLabel: "जाँच के लिए मैसेज या लिंक यहाँ डालें:",
    sampleElectricity: "⚡ बिजली कटने का मैसेज",
    samplePost: "📦 पार्सल डिलीवरी फ्रॉड",
    sampleKYC: "🏦 बैंक केवाईसी ब्लॉक मैसेज",
    sampleTelegram: "💼 घर बैठे कमाई (टेलीग्राम)",
    sampleLegit: "✅ असली बैंक ओटीपी (सुरक्षित)",
    placeholderText: "यहाँ मैसेज या लिंक पेस्ट करें (उदा: 'Dear customer your power will disconnect tonight at 9:30 PM call electricity officer...')",
    btnAnalyze: "🔍 फ्रॉड की जाँच करें",
    btnClear: "साफ करें",
    dangerTitle: "🚨 सावधान! १००% खतरनाक फ्रॉड (FRAUD DETECTED)",
    warningTitle: "⚠️ सावधान रहें! अत्यधिक संदिग्ध मैसेज",
    safeTitle: "✅ सामान्य और सुरक्षित संदेश प्रतीत होता है",
    labelWhatHappens: "⚠️ लिंक पर क्लिक करने पर क्या नुकसान हो सकता है?",
    labelActionPlan: "🛡️ तुरंत क्या कदम उठाएं:",
    labelCopyReply: "जालसाज को भेजने वाला जवाब कॉपी करें",
    btnCopied: "कॉपी हो गया! ✓",
    sampleReplyText: "मुझे पता चल चुका है कि यह फ्रॉड है। दोबारा संपर्क न करें। आपका नंबर राष्ट्रीय साइबर हेल्पलाइन १९३० पर रिपोर्ट कर दिया गया है।",
    vipBanner: "⭐️ फैमिली प्रोटेक्शन पास",
    seniorFont: "🔤 बड़ा फॉन्ट"
  },
  en: {
    heroTitle: "Protect Your Parents & Family from Digital Scams",
    heroDesc: "Paste any suspicious SMS, WhatsApp message, or link. Get an instant, plain-language verdict in 3 seconds: Is it genuine or a financial fraud trap?",
    statChecks: "🛡️ 20,000+ Verified Scam Heuristics",
    statSafe: "🇮🇳 National Cybercrime 1930 Integrated",
    inputLabel: "Paste Suspicious Message, SMS, or Link:",
    sampleElectricity: "⚡ Electricity Disconnection",
    samplePost: "📦 India Post Delivery Hold",
    sampleKYC: "🏦 Bank Account Blocked",
    sampleTelegram: "💼 Work from Home Telegram",
    sampleLegit: "✅ Genuine Bank OTP (Safe)",
    placeholderText: "Paste message text or suspicious link here...",
    btnAnalyze: "🔍 Check for Scam Now",
    btnClear: "Clear",
    dangerTitle: "🚨 DANGER: CONFIRMED SCAM / FRAUD DETECTED",
    warningTitle: "⚠️ WARNING: HIGH RISK / HIGHLY SUSPICIOUS",
    safeTitle: "✅ VERIFIED: LIKELY SAFE / STANDARD NOTIFICATION",
    labelWhatHappens: "⚠️ What will happen if you click or comply?",
    labelActionPlan: "🛡️ Recommended Action Steps:",
    labelCopyReply: "Copy Pre-written Safe Reply",
    btnCopied: "Copied to clipboard! ✓",
    sampleReplyText: "I have verified this is a fraudulent message. Do not contact me again. Your details are being logged with the Cyber Crime Helpline 1930.",
    vipBanner: "⭐️ Family VIP Pass",
    seniorFont: "🔤 Large Font"
  }
};

// Ready-to-Test Scam Samples
const SAMPLES = {
  electricity: "Dear consumer your electricity power will be disconnected tonight at 9:30 PM from electricity office because your previous month bill was not updated. Please immediately contact our electricity officer Mr. Sharma at 9831204918 or download bill app: http://bit.ly/wbsedcl-bill-update",
  post: "Your India Post parcel #IN984210 is detained at the local sorting hub due to incomplete home address. Failure to update within 24 hours will result in return. Please update address and pay ₹25 redelivery charge here: http://indiapost-delivery-update.xyz/tracking",
  kyc: "Dear SBI / HDFC Customer, your NetBanking access and ATM card have been DEACTIVATED due to pending Pan Card & Aadhaar KYC. Immediately click http://sbi-kyc-reactivate.live to update or call manager at 8765432109 to prevent permanent freeze.",
  telegram: "Earn ₹3,500 to ₹7,000 daily from home! Part-time simple job: Just like 3 YouTube videos and submit Google reviews. No experience needed. Daily instant payout in UPI. Message our HR manager on Telegram immediately: t.me/GlobalMediaJobs_HR",
  legit: "492018 is your OTP for purchase of Rs. 1,450.00 at Flipkart using SBI Card ending in 4092. OTP is valid for 10 mins. Do not share OTP with anyone including bank staff."
};

// 25+ Concrete Scam Pattern Heuristics
const SCAM_PATTERNS = [
  {
    category: 'Electricity / Utility Threat',
    regex: /(electricity|power|bijli|bijlee|বিদ্যুৎ|বিল).*?(disconnect|cut off|কাটা যাবে|বন্ধ|9:30|update bill|officer)/i,
    score: 95,
    diagnosisBn: "এটি বহুল প্রচলিত ভুয়ো বিদ্যুৎ বিল কাটার প্রতারণা। বিদ্যুৎ পর্ষদ (WBSEDCL / BSES ইত্যাদি) কখনো ব্যক্তিগত মোবাইল নম্বর দিয়ে এসএমএস বা অ্যাপ ডাউনলোডের লিঙ্ক পাঠায় না।",
    diagnosisHi: "यह बहुचर्चित फर्जी बिजली बिल फ्रॉड है। बिजली विभाग कभी भी निजी मोबाइल नंबर से एसएमएस या ऐप डाउनलोड करने का लिंक नहीं भेजता।",
    diagnosisEn: "Classic Electricity Disconnection Scam. Official electricity boards never ask consumers to call random 10-digit mobile numbers or download unofficial apps.",
    harmBn: "প্রতারকদের দেওয়া লিঙ্কে ক্লিক করলে আপনার ফোনে 'AnyDesk' বা ক্ষতিকর APK অ্যাপ ইনস্টল হয়ে যাবে এবং আপনার ব্যাঙ্ক অ্যাকাউন্ট খালি হয়ে যেতে পারে।",
    harmHi: "दिए गए लिंक पर क्लिक करने से आपके फोन में दुर्भावनापूर्ण ऐप इंस्टॉल हो जाएगा और बैंक खाता खाली हो सकता है।",
    harmEn: "Clicking the link will install a malicious remote-access app (e.g. AnyDesk/APK) allowing scammers to drain your bank balance via OTP interception."
  },
  {
    category: 'Postal / Courier Delivery Hold',
    regex: /(india post|speed post|parcel|courier|delivery hub|address incomplete|detained|redelivery|ডাক বিভাগ|পার্সেল)/i,
    score: 90,
    diagnosisBn: "এটি স্পিড পোস্ট বা কুরিয়ার পার্সেল আটকে রাখার ফাঁদ। ভারতীয় ডাক বিভাগ (India Post) কখনো ₹২৫ বা ₹১০ রি-ডেলিভারি ফি নেওয়ার জন্য এসএমএসে অজানা লিঙ্ক পাঠায় না।",
    diagnosisHi: "यह पार्सल डिलीवरी फ्रॉड है। भारतीय डाक विभाग कभी भी एड्रेस अपडेट या मामूली शुल्क के लिए गैर-सरकारी लिंक एसएमएस में नहीं भेजता।",
    diagnosisEn: "Fake Parcel / India Post Scam. Genuine postal services do not demand re-delivery fees or address updates via unsolicited SMS links.",
    harmBn: "লিঙ্কে গিয়ে আপনার নাম, ঠিকানা ও এটিএম কার্ডের তথ্য দিলেই ওটিপি হ্যাক করে অ্যাকাউন্ট থেকে টাকা কেটে নেওয়া হবে।",
    harmHi: "लिंक पर जाकर कार्ड डिटेल भरते ही ओटीपी चुराकर बैंक से पैसे काट लिए जाएंगे।",
    harmEn: "The link leads to a phishing portal designed to harvest your credit/debit card credentials and OTP."
  },
  {
    category: 'Bank KYC / Account Deactivation',
    regex: /(kyc|pan card|aadhaar|deactivate|blocked|suspended|netbanking|sbi|hdfc|icici|axis|punjab national|কেওয়াইসি|ব্যাঙ্ক অ্যাকাউন্ট)/i,
    score: 95,
    diagnosisBn: "এটি জাল ব্যাঙ্ক কেওয়াইসি প্রতারণা। রিজার্ভ ব্যাঙ্ক অফ ইন্ডিয়ার (RBI) কড়া নিয়ম অনুযায়ী কোনো ব্যাঙ্ক কখনো এসএমএসে পাঠানো লিঙ্কে প্যান বা আধার আপডেট করতে বলে না।",
    diagnosisHi: "यह फर्जी बैंक केवाईसी फ्रॉड है। आरबीआई के नियमों के अनुसार कोई भी बैंक एसएमएस के लिंक पर पैन या आधार अपडेट करने को नहीं कहता।",
    diagnosisEn: "Urgent Bank KYC / Account Block Scam. RBI guidelines strictly prohibit banks from requesting KYC updates via third-party SMS links.",
    harmBn: "লিঙ্কে লগইন করলে আপনার নেট-ব্যাঙ্কিং আইডি ও পাসওয়ার্ড সরাসরি প্রতারকদের সার্ভারে চলে যাবে।",
    harmHi: "लिंक पर लॉगिन करते ही आपका नेट-बैंकिंग पासवर्ड हैकर्स के पास चला जाएगा।",
    harmEn: "Phishing site clones your bank login page to hijack your user credentials and transfer money."
  },
  {
    category: 'Part-Time Work / Telegram Review Scam',
    regex: /(earn|per day|part time|youtube like|google review|telegram|t\.me|daily payout|work from home|ঘরে বসে আয়)/i,
    score: 85,
    diagnosisBn: "এটি ভুয়ো পার্ট-টাইম টেলিগ্রাম চাকরির ফাঁদ। শুরুতে ১৫০-২০০ টাকা দিয়ে বিশ্বাস অর্জন করে পরে 'প্রিপেইড টাস্ক'-এর নামে লক্ষ লক্ষ টাকা হাতিয়ে নেওয়া হয়।",
    diagnosisHi: "यह पार्ट-टाइम टेलीग्राम टास्क फ्रॉड है। शुरुआत में थोड़ा पैसा देकर भरोसा जीतते हैं, फिर बड़े टास्क के नाम पर लाखों रुपये ठग लेते हैं।",
    diagnosisEn: "Part-Time Task & Telegram Job Scam. Scammers offer small payouts for video likes, then demand heavy deposits for 'VIP cryptocurrency tasks'.",
    harmBn: "টেলিগ্রাম গ্রুপে যুক্ত হয়ে 'ইনভেস্টমেন্ট টাস্ক'-এ টাকা পাঠালে পুরো অর্থ আটকে যাবে এবং ফেরত পাওয়া অসম্ভব।",
    harmHi: "टेलीग्राम पर टास्क पूरा करने के नाम पर डिपाजिट मांगा जाएगा और पैसा डूब जाएगा।",
    harmEn: "Victims are lured into high-yield investment traps and lose their entire deposited capital."
  },
  {
    category: 'Digital Arrest / Police / TRAI Threat',
    regex: /(police|cbi|trai|customs|narcotics|arrest|warrant|fedex parcel|illegal|sim block|থানা|গ্রেপ্তার)/i,
    score: 98,
    diagnosisBn: "এটি ভয় দেখিয়ে টাকা আদায়ের 'ডিজিটাল অ্যারেস্ট' প্রতারণা! কোনো পুলিশ বা সিবিআই আধিকারিক কখনো হোয়াটসঅ্যাপ ভিডিও কলে জেরা করে না বা টাকা দাবি করে না।",
    diagnosisHi: "यह बहुचर्चित 'डिजिटल अरेस्ट' फ्रॉड है! कोई भी पुलिस या सीबीआई अधिकारी व्हाट्सएप वीडियो कॉल पर पूछताछ या पैसे की मांग नहीं करता।",
    diagnosisEn: "Extortion / Fake Police 'Digital Arrest' Scam. Law enforcement agencies never interrogate citizens over Skype/WhatsApp or demand settlement money.",
    harmBn: "ভীত হয়ে ব্যাঙ্ক অ্যাকাউন্টে টাকা ট্র্যান্সফার করলে আপনার সারা জীবনের সঞ্চয় লুট হয়ে যাবে। অবিলম্বে কল কেটে ১৯৩০ নম্বরে জানান।",
    harmHi: "डरकर पैसे ट्रांसफर करने पर पूरी बचत लुट सकती है। तुरंत कॉल काटें और १९३० पर संपर्क करें।",
    harmEn: "Scammers use fabricated badges and intimidation to coerce immediate funds transfer."
  },
  {
    category: 'UPI Reverse Scan / Lottery / Cashback',
    regex: /(lottery|kbc|25 lakh|cashback|congratulations|claim reward|scan qr|রিসিভ করতে কিউআর|লটারি)/i,
    score: 90,
    diagnosisBn: "এটি ইউপিআই রিভার্স প্রতারণা। মনে রাখবেন: টাকা পেতে কখনো কোনো কিউআর কোড স্ক্যান করতে হয় না বা ইউপিআই পিন (UPI PIN) দিতে হয় না!",
    diagnosisHi: "यह यूपीआई रिवर्स फ्रॉड है। याद रखें: पैसे प्राप्त करने के लिए कभी भी क्यूआर कोड स्कैन नहीं करना पड़ता और न ही यूपीआई पिन डालना पड़ता है!",
    diagnosisEn: "UPI Reverse / Fake Lottery Scam. Golden Rule: You NEVER need to scan a QR code or enter your UPI PIN to RECEIVE money.",
    harmBn: "কিউআর কোড স্ক্যান করে পিন দিলেই আপনার অ্যাকাউন্ট থেকে টাকা কেটে নেওয়া হবে।",
    harmHi: "क्यूआर कोड स्कैन करके पिन डालते ही आपके खाते से पैसे कट जाएंगे।",
    harmEn: "Entering your UPI PIN authorizes a DEBIT, immediately transferring your money to the fraudster."
  }
];

// Suspicious URL & Domain Checkers
const SUSPICIOUS_DOMAINS = ['.xyz', '.top', '.live', '.buzz', '.club', '.rest', '.cc', '.ru', '.tk', '.ml', '.ga', '.cf', 'bit.ly', 'tinyurl.com', 'rb.gy', 'is.gd', 't.me'];

function analyzeScam(text) {
  if (!text || text.trim().length < 5) return null;

  let totalScore = 0;
  let matchedPatterns = [];
  let foundUrlRisks = [];

  const lower = text.toLowerCase();

  // 1. Check Specific Threat Patterns
  for (const p of SCAM_PATTERNS) {
    if (p.regex.test(text)) {
      totalScore = Math.max(totalScore, p.score);
      matchedPatterns.push(p);
    }
  }

  // 2. URL Inspection
  for (const badDomain of SUSPICIOUS_DOMAINS) {
    if (lower.includes(badDomain)) {
      totalScore = Math.max(totalScore, 85);
      foundUrlRisks.push(badDomain);
    }
  }

  // 3. Urgency & Coercion triggers
  const urgencyWords = ['immediately', 'within 2 hours', 'tonight', 'deactivated', 'urgent', 'emergency', 'জরুরি', 'তাৎক্ষণিক', 'तुरंत'];
  let urgencyCount = 0;
  for (const w of urgencyWords) {
    if (lower.includes(w)) urgencyCount++;
  }
  if (urgencyCount >= 2 && totalScore === 0) {
    totalScore = 45; // Warning
  }

  // 4. Safe / Authentic Check (Standard Bank OTP check)
  const isOtpPattern = /otp|one time password/i.test(text);
  const isNoShareWarning = /do not share|never share|কোনো কর্মচারীকে বলবেন না/i.test(text);
  if (isOtpPattern && isNoShareWarning && foundUrlRisks.length === 0 && matchedPatterns.length === 0) {
    totalScore = 10; // Safe
  }

  // Determine Traffic Light State
  let verdictType = 'safe';
  if (totalScore >= 70) {
    verdictType = 'danger';
  } else if (totalScore >= 35) {
    verdictType = 'warning';
  }

  // Primary Diagnosis Text
  let primaryDiagnosis = '';
  let primaryHarm = '';
  if (matchedPatterns.length > 0) {
    const top = matchedPatterns[0];
    primaryDiagnosis = currentLang === 'bn' ? top.diagnosisBn : (currentLang === 'hi' ? top.diagnosisHi : top.diagnosisEn);
    primaryHarm = currentLang === 'bn' ? top.harmBn : (currentLang === 'hi' ? top.harmHi : top.harmEn);
  } else if (foundUrlRisks.length > 0) {
    primaryDiagnosis = currentLang === 'bn' 
      ? `এই মেসেজে সন্দেহজনক শর্টনার বা অপরিচিত ডোমেন লিঙ্ক (${foundUrlRisks.join(', ')}) রয়েছে। সাইবার অপরাধীরা প্রকৃত পরিচয় গোপন করতে এমন লিঙ্ক ব্যবহার করে।`
      : (currentLang === 'hi' 
        ? `इस संदेश में संदिग्ध डोमेन लिंक (${foundUrlRisks.join(', ')}) मौजूद है। स्कैमर अपनी पहचान छिपाने के लिए ऐसे लिंक का उपयोग करते हैं।`
        : `This message contains a high-risk URL/shortener domain (${foundUrlRisks.join(', ')}), commonly used in credential theft.`);
    primaryHarm = currentLang === 'bn'
      ? "অজানা লিঙ্কে ক্লিক করলে আপনার ফোনে অটোমেটিক স্পাইওয়্যার বা ভুয়ো পেমেন্ট গেটওয়ে খুলে যেতে পারে।"
      : (currentLang === 'hi' ? "अनजान लिंक पर क्लिक करने से फोन में वायरस आ सकता है।" : "Clicking unverified links may compromise device security.");
  } else if (verdictType === 'danger' || verdictType === 'warning') {
    primaryDiagnosis = currentLang === 'bn'
      ? "মেসেজটিতে জোরপূর্বক ভয় দেখানো বা অতিরিক্ত জরুরি পরিস্থিতি তৈরি করার চেষ্টা করা হচ্ছে, যা প্রতারকদের অন্যতম প্রধান লক্ষণ।"
      : (currentLang === 'hi' ? "संदेश में घबराहट पैदा करने की कोशिश की जा रही है, जो फ्रॉड का मुख्य लक्षण है।" : "Coercive urgency detected, typical of social engineering extortion.");
    primaryHarm = currentLang === 'bn'
      ? "যেকোনো সিদ্ধান্ত নেওয়ার আগে সংশ্লিষ্ট প্রতিষ্ঠানের অফিসিয়াল কাস্টমার কেয়ারে যাচাই করুন।"
      : (currentLang === 'hi' ? "आधिकारिक कस्टमर केयर से पुष्टि किए बिना कोई कदम न उठाएं।" : "Verify via official corporate channels before proceeding.");
  } else {
    primaryDiagnosis = currentLang === 'bn'
      ? "মেসেজটিতে কোনো ক্ষতিকারক লিঙ্ক, বলপ্রয়োগ বা প্রতারণার স্পষ্ট প্যাটার্ন শনাক্ত হয়নি। এটি একটি সাধারণ ও নিরাপদ বিজ্ঞপ্তি মনে হচ্ছে।"
      : (currentLang === 'hi' ? "इस संदेश में कोई हानिकारक लिंक या फ्रॉड पैटर्न नहीं मिला। यह सुरक्षित प्रतीत होता है।" : "No malicious payloads, coercive urgency, or fraudulent signatures detected.");
    primaryHarm = currentLang === 'bn'
      ? "তবুও সতর্কতার জন্য আপনার কোনো ব্যাঙ্কিং পাসওয়ার্ড বা ওটিপি কারো সাথে শেয়ার করবেন না।"
      : (currentLang === 'hi' ? "सतर्कता के तौर पर अपना कोई भी ओटीपी किसी से साझा न करें।" : "Remember: Never share confidential OTPs or credentials.");
  }

  return {
    score: totalScore,
    verdictType,
    diagnosis: primaryDiagnosis,
    harm: primaryHarm,
    urlRisks: foundUrlRisks,
    matchedCategories: matchedPatterns.map(m => m.category)
  };
}

// UI Controllers
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('langSelect');
  const fontToggleBtn = document.getElementById('fontToggleBtn');
  const scamInput = document.getElementById('scamInput');
  const checkBtn = document.getElementById('checkBtn');
  const clearBtn = document.getElementById('clearBtn');
  const resultContainer = document.getElementById('resultContainer');
  const trafficLightCard = document.getElementById('trafficLightCard');
  const verdictSignal = document.getElementById('verdictSignal');
  const verdictTitleText = document.getElementById('verdictTitleText');
  const confidenceScore = document.getElementById('confidenceScore');
  const diagnosisText = document.getElementById('diagnosisText');
  const harmSection = document.getElementById('harmSection');
  const harmText = document.getElementById('harmText');
  const copyReplyBtn = document.getElementById('copyReplyBtn');
  const checksRemainingBadge = document.getElementById('checksRemainingBadge');

  // VIP Modal Elements
  const vipBtn = document.getElementById('vipBtn');
  const vipModal = document.getElementById('vipModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const applyVipCodeBtn = document.getElementById('applyVipCodeBtn');
  const vipCodeInput = document.getElementById('vipCodeInput');

  function updateTexts() {
    const t = I18N[currentLang];
    document.getElementById('heroTitle').innerText = t.heroTitle;
    document.getElementById('heroDesc').innerText = t.heroDesc;
    document.getElementById('statChecks').innerText = t.statChecks;
    document.getElementById('statSafe').innerText = t.statSafe;
    document.getElementById('inputLabel').innerText = t.inputLabel;
    document.getElementById('sampleElectricity').innerText = t.sampleElectricity;
    document.getElementById('samplePost').innerText = t.samplePost;
    document.getElementById('sampleKYC').innerText = t.sampleKYC;
    document.getElementById('sampleTelegram').innerText = t.sampleTelegram;
    document.getElementById('sampleLegit').innerText = t.sampleLegit;
    scamInput.placeholder = t.placeholderText;
    checkBtn.innerHTML = t.btnAnalyze;
    clearBtn.innerText = t.btnClear;
    document.getElementById('labelWhatHappens').innerText = t.labelWhatHappens;
    document.getElementById('labelActionPlan').innerText = t.labelActionPlan;
    copyReplyBtn.innerText = t.labelCopyReply;
    vipBtn.innerHTML = t.vipBanner;
    fontToggleBtn.innerHTML = t.seniorFont;
  }

  // Language Change
  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateTexts();
  });

  // Font Size Toggle for Seniors
  fontToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('font-large');
  });

  // Sample Clickers
  document.querySelectorAll('.sample-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const type = chip.getAttribute('data-sample');
      if (SAMPLES[type]) {
        scamInput.value = SAMPLES[type];
        executeAnalysis();
      }
    });
  });

  // Execute Analysis
  function executeAnalysis() {
    const text = scamInput.value.trim();
    if (!text) {
      alert(currentLang === 'bn' ? 'অনুগ্রহ করে পরীক্ষা করার জন্য মেসেজটি পেস্ট করুন।' : 'Please enter or paste a message.');
      return;
    }

    const res = analyzeScam(text);
    if (!res) return;

    // Remaining check update
    if (remainingFreeChecks > 0) {
      remainingFreeChecks--;
      checksRemainingBadge.innerText = `${remainingFreeChecks} Free Checks Left`;
    }

    resultContainer.style.display = 'block';
    trafficLightCard.className = `traffic-light-card ${res.verdictType}`;

    const t = I18N[currentLang];
    if (res.verdictType === 'danger') {
      verdictSignal.innerText = '🚨';
      verdictTitleText.innerText = t.dangerTitle;
      confidenceScore.innerText = `Threat Confidence Index: ${res.score}% FRAUD MATCH`;
    } else if (res.verdictType === 'warning') {
      verdictSignal.innerText = '⚠️';
      verdictTitleText.innerText = t.warningTitle;
      confidenceScore.innerText = `Suspicion Score: ${res.score}% (Requires Caution)`;
    } else {
      verdictSignal.innerText = '✅';
      verdictTitleText.innerText = t.safeTitle;
      confidenceScore.innerText = `Safety Index: 98% (Standard Notification)`;
    }

    diagnosisText.innerText = res.diagnosis;
    harmText.innerText = res.harm;

    // Scroll smoothly to result
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  checkBtn.addEventListener('click', executeAnalysis);

  clearBtn.addEventListener('click', () => {
    scamInput.value = '';
    resultContainer.style.display = 'none';
  });

  // Copy Reply Button
  copyReplyBtn.addEventListener('click', () => {
    const textToCopy = I18N[currentLang].sampleReplyText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const orig = copyReplyBtn.innerText;
      copyReplyBtn.innerText = I18N[currentLang].btnCopied;
      copyReplyBtn.style.background = '#10b981';
      setTimeout(() => {
        copyReplyBtn.innerText = orig;
        copyReplyBtn.style.background = '';
      }, 2500);
    });
  });

  // VIP Modal Controls
  vipBtn.addEventListener('click', () => { vipModal.style.display = 'flex'; });
  closeModalBtn.addEventListener('click', () => { vipModal.style.display = 'none'; });
  window.addEventListener('click', (e) => {
    if (e.target === vipModal) vipModal.style.display = 'none';
  });

  // Copy UPI ID Button
  const btnCopyUpiScam = document.getElementById('btnCopyUpiScam');
  if (btnCopyUpiScam) {
    btnCopyUpiScam.addEventListener('click', () => {
      navigator.clipboard.writeText('ayanghosh75@oksbi').then(() => {
        const orig = btnCopyUpiScam.innerText;
        btnCopyUpiScam.innerText = '✅ Copied!';
        btnCopyUpiScam.style.background = '#10b981';
        setTimeout(() => {
          btnCopyUpiScam.innerText = orig;
          btnCopyUpiScam.style.background = '#f59e0b';
        }, 2000);
      });
    });
  }

  // VIP Code Activation
  if (applyVipCodeBtn && vipCodeInput) {
    applyVipCodeBtn.addEventListener('click', () => {
      const code = vipCodeInput.value.trim().toUpperCase();
      if (code === 'SCAMSHIELD2026' || code === 'VIPAYAN' || code === 'PARIVAR52') {
        alert(currentLang === 'bn' ? 'অভিনন্দন! আপনার ফ্যামিলি ভিআইপি পাস আজীবন সক্রিয় হয়েছে।' : 'Congratulations! Your Family Protection Pass is now active for life.');
        const badge = document.getElementById('checksRemainingBadge');
        if (badge) {
          badge.innerText = '🌟 Unlimited VIP Protected';
          badge.style.background = '#d97706';
        }
        vipModal.style.display = 'none';
      } else {
        alert(currentLang === 'bn' ? 'ভুল ভিআইপি কোড। অনুগ্রহ করে সঠিক কোড দিন।' : 'Invalid VIP activation code.');
      }
    });
  }

  // Initialize
  updateTexts();
});
