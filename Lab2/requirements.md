# Spotify Requirements

## Functional Requirements (FR)

### Accounts & Profiles

- **FR-1** Users can **sign up / log in** via email/password and SSO (Google/Apple).
- **FR-2** Users can **view** and **edit profile** (name, avatar, bio, country, explicit-content preference).

### Subscription & Billing

- **FR-3** Free tier with ads; Premium tier **removes ads** and unlocks **downloads**/high quality.
- **FR-4** **Subscribe**, **update plan** (individual/family/student), **cancel**; trials and grace periods.

### Content Ingestion & Publishing (Artist)

- **FR-5** Artists **publish music** (single/album) and **publish albums**/**publish episodes**/(podcasts).
- **FR-6** Release **scheduling**, preview, and takedown.

### Catalog & Search

- **FR-7** **Search** tracks/albums/artists/playlists/podcasts with typo tolerance and filters (genre, mood, year, language, duration).
- **FR-8** Browse & recommendations (home, new releases, charts, “Because you listened to…”, radio/seed sessions).

### Playback & Queue

- **FR-9** **Play a track** with play/pause/seek/next/prev, shuffle, repeat, crossfade, volume.
- **FR-10** **Create/manage queue** (add next, add to end, reorder, remove).
- **FR-11** **Autoplay** next recommendations when queue ends.

### Library & Playlists

- **FR-12** **Create playlists**, listener can create playlists.
- **FR-13** **Add tracks to playlists** from search/now playing/library.

### Downloads & Offline (Premium)

- **FR-14** **Download tracks/albums/playlists/podcasts** for offline; per-device management.

### Social, Follow & Sharing

- **FR-15** **Follow** artists and listeners; follower counts.
- **FR-16** **Share** tracks/albums/playlists/episodes via links/story cards.

### Premium Experience (Ads control)

- **FR-17** Free tier hears **audio ads**/sees display ads; Premium users **listen without ads**.

### Merch & Events

- **FR-18** Artists **add merch** (title, images, price, inventory, link or checkout).
- **FR-19** Users **buy merch** (in-app checkout or link-out).
- **FR-20** Artists **add events** (date/time/venue/ticket link).
- **FR-21** Listeners **enroll for events** / save to calendar / reminders.

### Analytics & Stats (Artist)

- **FR-22** Artists **view stats**: **view songs’ stats** (streams, saves, playlist adds, skips, completion).
- **FR-23** **View audience stats** (geo, demographics where permitted, sources); time ranges; CSV export.

## Non-Functional Requirements (NFR)

### Performance

- **NFR-1** First audio start ≤ **2.0 s** on broadband / ≤ **4.0 s** on 3G; next-track gap ≤ **250 ms** with prefetch.
- **NFR-2** Search API p95 ≤ **300 ms**; catalog read p95 ≤ **200 ms**.

### Scalability

- **NFR-3** Scale to **millions of MAU** and **hundreds of thousands of concurrent streams**.

### Security & Privacy

- **NFR-4** OAuth 2.0/OIDC; optional 2FA; bcrypt/Argon2 password hashing.
- **NFR-5** Least-privilege access; admin/financial action audit logs.

### Streaming Quality & Device Support

- **NFR-6** Audio qualities: 96/160/320 kbps (Opus/AAC);
- **NFR-7** Platforms: iOS/Android/Web; background playback; Bluetooth; CarPlay/Android Auto roadmap.

### Maintainability & Processes

- **NFR-8** CI/CD with canary and instant rollback; Infra as Code.
- **NFR-9** Public API versioning; backward compatible for ≥ **2 minor versions**.
- **NFR-10** Mobile crash-free sessions ≥ **99.8%**; app size budget ≤ **300 MB**.
