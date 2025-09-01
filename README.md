# تعبیرگو — وب‌اپ تعبیر خواب فارسی (Next.js 14 + استریم)

**تعبیرگو** یک وب‌اپ مینیمال و مدرن با دو رویکرد تعبیر **سنتی** و **علمی** است. تمام رابط کاربری فارسی و **راست‌به‌چپ** بوده و از فونت **Vazirmatn** و پالت آبی استفاده می‌کند. پاسخ‌ها به صورت **استریم** نمایش داده می‌شوند. به‌صورت پیش‌فرض به OpenAI متصل است و با یک لایه‌ی انتزاعی می‌توانید بین **OpenAI / Google Gemini / Anthropic / Azure OpenAI** جابه‌جا شوید.

> **هشدار:** «این سرویس صرفاً جهت سرگرمی و آموزش است و جایگزین مشاوره حرفه‌ای نیست.»

## شروع سریع (فارسی)

### پیش‌نیازها
- Node.js 18+
- یک کلید OpenAI

### نصب و راه‌اندازی
```bash
git clone <this-repo>
cd tabirgoo
cp .env.example .env.local
# متغیر OPENAI_API_KEY را در .env.local مقداردهی کنید
npm i
npm run dev
```
سپس به آدرس `http://localhost:3000` مراجعه کنید.

### تغییر تأمین‌کنندهٔ هوش مصنوعی
در `.env.local` مقدار `AI_PROVIDER` را روی یکی از این‌ها بگذارید:
```
openai | gemini | anthropic | azure
```
جزئیات دقیق کلیدها، مدل‌ها، استریم و نکات هزینه/ایمنی در **docs/ai-integration.md** آمده است.

### استقرار روی Vercel
- مخزن را به Vercel متصل کنید.
- متغیرهای محیطی را در **Project Settings → Environment Variables** تنظیم کنید.
- Build Command: `next build`
- Output: `.next`

### curl (آزمایش API)
```bash
curl -N -X POST http://localhost:3000/api/interpret \
  -H "Content-Type: application/json" \
  -d '{"text":"دیشب دیدم از پله‌های بلند می‌دویدم و می‌ترسیدم بیفتم.","mode":"traditional"}'
```
باید متن به‌صورت تکه‌تکه (stream) برگردد.

### حریم خصوصی
- هیچ دادهٔ شخصی یا متن خواب روی سرور ذخیره نمی‌شود.
- فقط برای پردازش زنده به API ارسال می‌شود.

---

## Tabirgoo — Dream Interpretation Web App (English)

**Tabirgoo** is a minimalist, modern Persian dream interpreter with two modes: **Traditional** (folk-belief) and **Scientific** (psychology-informed). It is fully **RTL**, uses **Vazirmatn** font with a blue palette, and streams model output. By default, it’s wired to **OpenAI** and provides a clean provider abstraction to switch to **Gemini / Anthropic / Azure OpenAI**.

> **Disclaimer:** “This service is for entertainment/education only and is not a substitute for professional advice.”

### Quickstart
- Node 18+, an OpenAI API key
```bash
cp .env.example .env.local
# set OPENAI_API_KEY
npm i
npm run dev
```

### AI Providers
Set `AI_PROVIDER` to `openai | gemini | anthropic | azure`. See **docs/ai-integration.md** for model IDs, streaming, safety, and costs.

### Deploy (Vercel)
Connect repo → set env vars → deploy.

### Privacy
No PII persisted by default; requests are transient and streamed back.

---