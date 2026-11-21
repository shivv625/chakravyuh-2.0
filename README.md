# CHAKRAVYUH 2.0 — Official Hackathon Website

Official web application for **CHAKRAVYUH 2.0, a National Level 36-Hour Hackathon** hosted by **GITA Autonomous College, Bhubaneswar**, in association with **BPUT, Odisha**.

Designed from Stitch project **ID `18417079394346181284`** featuring a Mahabharata Kurukshetra golden hour visual aesthetic with modern high-performance engineering.

---

## 1. Quick Start

### Prerequisites
- Node.js 18+ (tested on Node.js v22)
- npm or yarn or pnpm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 2. Single Source of Truth (`src/content/site.ts`)

All hackathon information, dates, prize allocations, links, phone numbers, emails, guidelines, and sponsors are kept strictly in ONE file:
👉 **[`src/content/site.ts`](./src/content/site.ts)**

### How to Edit Event Information:
- **Dates & Countdown:** Update `EVENT_START`, `REGISTRATION_START`, `REGISTRATION_DEADLINE`.
- **Registration Mode:**
  - Set `USE_EXTERNAL_REGISTRATION = false` for the built-in multi-step registration flow.
  - Set `USE_EXTERNAL_REGISTRATION = true` and provide `REGISTRATION_URL` to route directly to Unstop/Devfolio.
- **Prizes:** Modify `METRICS.PRIZE_POOL_TOTAL`, `FIRST_PRIZE`, etc.
- **Coordinators & Contacts:** Update `TEAM` array and `CONTACT` phone numbers.

### Organizers Action Checklist (`TODO_` Placeholders):
Search `src/content/site.ts` for all `TODO_` markers:
- `TODO_REGISTRATION_PORTAL_LINK_DEV_OR_UNSTOP`
- `TODO_MAIN_AUDITORIUM_OR_CS_BLOCK_NAME`
- `TODO_FIRST_PRIZE_AMOUNT_E_G_75000`
- `TODO_SECOND_PRIZE_AMOUNT_E_G_45000`
- `TODO_THIRD_PRIZE_AMOUNT_E_G_25000`
- `TODO_WHATSAPP_COMMUNITY_INVITE_URL`
- `TODO_DISCORD_SERVER_INVITE_URL`
- `TODO_VERIFY_INSTAGRAM_LINK`
- `TODO_VERIFY_LINKEDIN_LINK`
- `TODO_VERIFY_GITHUB_ORG`
- `TODO_COMMUNITY_PARTNER_2`

---

## 3. How to Swap Media & Visual Assets

All visual assets reside in the `/public` directory:
- **Hero Kurukshetra Banner:** `/public/assets/hero_kurukshetra_chariot.jpg`
- **Prize Crest:** `/public/assets/prize_pool_crest.png`
- **Arjuna Bow Artwork:** `/public/assets/arjuna_bow_arched.jpg`
- **Timeline Labyrinth Backdrop:** `/public/assets/roadmap_chakravyuh_bg.jpg`
- **Allies Sunset Banner:** `/public/assets/krishna_horizon_allies.jpg`
- **Coordinator Portraits:**
  - `/public/team/coordinator_faculty.jpg`
  - `/public/team/coordinator_lead_1.jpg`
  - `/public/team/coordinator_lead_2.jpg`
  - `/public/team/coordinator_tech.jpg`
- **Official Documents:**
  - Rulebook: `/public/rulebook.pdf`
  - Sponsorship Deck: `/public/sponsorship-brochure.pdf`

Simply replace the files with matching dimensions or update the path in `src/content/site.ts`.

---

## 4. How to Export & Manage Registrations

### Built-in API
Submissions from the multi-step registration modal and quick form hit `/api/register`.
To connect Supabase or Firebase:
1. Supply environment variables in `.env.local` (see [`.env.example`](./.env.example)):
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```
2. In Supabase, create a `registrations` table. Submissions will automatically log squad names, tracks, leader details, member emails, student IDs, and assigned Gate Pass IDs (`CV2-XXXX`).
3. Click "Export to CSV" in the Supabase Table Editor or run:
   ```sql
   SELECT team_name, track, leader_name, leader_email, leader_phone, college, gate_pass FROM registrations;
   ```

---

## 5. Deployment (Vercel)

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Chakravyuh 2.0 hackathon platform"
   git remote add origin https://github.com/YOUR_USERNAME/chakravyuh-2.0.git
   git push -u origin master
   ```
2. Import the project in [Vercel](https://vercel.com/new).
3. Set environment variables from `.env.example`.
4. Deploy with one click!
