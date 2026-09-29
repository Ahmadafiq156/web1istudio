# BlindsXpert Malaysia Website Conversion Report

## 1. Pages created

- `products.html` — filterable catalogue of indoor, outdoor, motorized and specialty products.
- `projects.html` — portfolio retaining the 13 published project entries.
- `careers.html` — company-listed vacancy titles with the published application email.
- `services.html` — consultation, site measurement, recommendation, quotation, installation and delivery journey.

## 2. Pages removed

- `feature.html` — retired; template benefit claims were replaced by sourced company and product content.
- `team.html` — removed because the source did not provide approved staff profiles.
- `testimonial.html` — removed because the source testimonials were not verified for reuse.
- `project.html` and `service.html` — replaced by the pluralized `projects.html` and `services.html` pages.

The unused generic template preview image was removed; page visuals do not reference it.

## 3. Pages modified

- `index.html` — BlindsXpert homepage and business schema.
- `products.html`, `projects.html`, `services.html`, `about.html`, `contact.html`, `careers.html`, `404.html` — branded page layouts and SEO metadata.
- `css/style.css` — BlindsXpert color tokens, page components, focus styling, responsive rules and reduced-motion support.
- `js/main.js` — product category filtering, quote-form validation/email-draft flow and back-to-top control.
- `Readme.MD`, `READ-ME.txt` — updated project descriptions.

## 4. BlindsXpert information migrated

Company introduction, established-2005 claim, customized and ready-made products, eco-friendly positioning, listed customer groups, KL/Selangor site measurement, free consultation and quotation, installation, delivery, dealer/reseller opportunity, original component/fabric brand references, motorized product references, catalogue and careers information.

## 5. Products migrated

Zebra, Roller, Sunscreen Roller, Panel, Venetian Aluminium, Venetian Timber, Lantex Venetian, Vertical, Roman, Honeycomb, Wooden Outdoor, Bamboo Outdoor, ZipTrak PVC Outdoor, PVC Outdoor, Motorized, ZipTrack Motorized Outdoor, Skylight, Awning & Canopy, UV Printing Wooden Outdoor, Fix Screen Outdoor, Curtain Rail and Curtain Rod. Descriptions are concise paraphrases of the source website; unverified specifications have not been added.

## 6. Projects migrated

Saujana Impian — Wooden Blinds Outdoor; Bandar Puteri Bangi — Vertical Blinds Office; Sunway Eastwood — PVC Roller Blinds Outdoor; MR.DIY Pulai, Johor — Wooden Outdoor Printing Logo; MR.DIY Ayer Hitam — Wooden Outdoor Blinds (Yellow); MR.DIY Yayasan, Segamat — Wooden Outdoor Blinds (Yellow); Kedey Kemek — Timber Blinds Outdoor; Kem Sg. Besi — Zebra Blinds Office; Lestari Perdana — Bamboo Blinds Outdoor; IMAS Putrajaya — Roller Blinds Office; Cybersouth — Roman Blinds Luxury; Seri Kembangan — Motorized Blinds Indoor; Seremban — Venetian Aluminium Indoor.

Project images and selected product visuals are loaded from the original public `blindsxpert.com.my/images/` paths. Local network policy prevented an HTTP asset download check. Hosting these images locally or confirming hotlink permission is recommended before production.

## 7. Contact information migrated

- Mobile: 017-6356542 and 011-39964863.
- Office: 03-89577686 and 03-89257036.
- Email: sales.blindsXpert@gmail.com.
- Address: BlindsXpert (003234398-U), 23, Jalan Dagang SB 4/1, Taman Sungai Besi Indah, 43300 Seri Kembangan, Selangor (source labels it “New Office”).
- Facebook: https://www.facebook.com/blindsxpertmy/.

All four phone contacts remain visible on the contact page because the source uses the numbers in differing contexts. Verify which should be labeled as current hotline/office lines.

## 8. Careers information migrated

Business Manager; Admin & Sales & Marketing Executive; Graphic; Video Editor; Sales & Marketing; Business (Internship); Installer Part Time / Full. Application email: job.blindsxpert@gmail.com. Vacancies were marked ongoing on the source site; availability should be confirmed.

## 9. Dealer/reseller information migrated

Professional dealer/reseller enquiry CTA added to Services, linking to the quotation/contact flow. No dealer terms or prices have been invented.

## 10. Catalogue integration

The full catalogue links to https://online.anyflip.com/djdfc/yobf/mobile/ and opens in a new tab. The link is labeled as a catalogue, not an online shop.

## 11. Information requiring business verification

- Which phone numbers are current mobile/hotline and office numbers.
- Current product availability, exact product options/specifications and the scope of the roller-blind blackout claim.
- Whether the old brand/component list is current and what partnership language is authorized.
- Whether listed vacancies remain open.
- Project photo reuse permission and any unlisted project metadata.
- Current service and delivery coverage; only the source’s KL/Selangor site-measurement area is stated.
- Whether customer-facing email-draft form is sufficient or a server-side form endpoint should be configured.
- Historic statistics were omitted because they may be outdated. No testimonials, awards, opening hours, prices or guarantees were added.

## 12. Assets requiring replacement

- Hero/category image selection should be confirmed; current visuals use images hosted on the old BlindsXpert site.
- Product imagery is incomplete for some catalogue cards; those cards intentionally use no invented stock images.
- The old template favicon reference was removed from the refreshed page heads; provide an approved BlindsXpert favicon/brand asset when available.
- Confirm local hosting and optimization of approved source photographs.

## 13. Technical issues fixed

- Replaced inactive contact form with labeled browser validation and a mailto draft flow. The page explicitly states that this website does not submit or claim to send the enquiry.
- Removed old template navigation, `#!` links and template content from active pages.
- Removed unused WOW/Owl/Waypoints/CounterUp runtime references. Bootstrap’s existing CSS and Bootstrap 5 JavaScript remain.
- Added accessible filter state, labeled mobile navigation controls, skip links, focus indication, image alternatives, lazy loading for below-fold photos and reduced-motion CSS.
- Preserved `LICENSE.txt` and vendor license files.

## 14. SEO improvements

Unique page titles, descriptions and canonical URLs are set for the seven main pages; `robots.txt` and `sitemap.xml` list the indexable site pages (not the 404). Semantic page landmarks, headings, descriptive internal links and Open Graph metadata on the homepage were added. Homepage LocalBusiness JSON-LD uses the published company address, phone numbers, email and Facebook profile; no hours, ratings, coordinates or pricing claims were added.

## 15. Accessibility improvements

Skip links, semantic main/header/footer landmarks, explicit mobile-menu label/control/state, visible keyboard focus, labels and required-field messages, status announcements, descriptive image alt text where images are included, and reduced-motion behavior were added. A full screen-reader, keyboard and contrast audit remains to be completed in a browser.

## 16. Performance improvements

Removed animation and carousel libraries from active page requests; below-fold source photos use lazy loading; product filtering uses small native JavaScript. Existing Bootstrap remains. Images are externally hosted and have not been resized or converted, so local image optimization and CDN independence remain production tasks.

## 17. Remaining TODOs

- Verify business contact labels, product data, brand references, jobs and reuse permissions.
- Decide whether to configure a real form endpoint; current form opens a prefilled email draft only.
- Confirm all remote source image URLs and migrate approved images to project hosting with responsive sizes.
- Perform browser-based desktop/tablet/mobile visual review, browser console checks, keyboard/screen-reader and contrast checks. The local file preview was blocked by the browser URL policy, and PowerShell outbound asset requests are restricted, so those browser/network checks could not be performed in this environment.
- Review README/license attribution before publishing. License files remain unchanged.
- Configure analytics only if the company supplies the intended provider and consent requirements.




## UX & Marketing Refinement

- **Hero hierarchy:** Rebuilt the message around a two-line headline, verified customized/ready-made offering, bounded support copy and distinct quotation/product actions. Strengthened the dark overlay and shifted the existing official project image crop; a CSS comment marks the asset for later replacement. No replacement photography was fabricated.
- **Mobile:** Added responsive type sizing, paragraph width limits, stacked 48px CTA controls, a content-led hero height, a scrollable collapsed navigation panel, safe-area-aware floating WhatsApp placement and consistent smaller section spacing. The floating contact control hides while the quote form is in view.
- **Product cards:** All 22 catalogue cards now share image ratios and flex alignment. Cards without source photos use an abstract branded blinds pattern labeled as the product range. Failed remote images become matching branded placeholders. Quote links remain aligned at the bottom of each card.
- **Homepage sales flow:** Reorganized content into four solution categories, verified benefits, identified customer groups, featured products, five service steps, featured projects, catalogue/dealer enquiries and a final quote CTA. All 13 projects and existing company facts remain available.
- **Accessibility and performance:** Preserved landmarks, skip link, labels, nav ARIA state, keyboard focus, reduced-motion behavior, lazy image loading and accessible status feedback. No carousel or animation dependency was reintroduced.
- **Checks run:** Confirmed 22 product cards, 13 project cards, four homepage solution cards and five service steps; local page/asset links, section counts, unique IDs and image alt attributes pass static checks. `main.js` passes Node syntax validation, and a small simulated DOM check passed outdoor-category filtering and reset-to-all behavior.
- **Remaining visual issues:** The browser URL policy blocks local preview, so no 375/390/412px or desktop screenshots or console inspection were possible. Remote official photos remain unoptimized; visually confirm the overlay/crop and migrate approved assets to local responsive images before launch.

## Final UI/UX Polish

- Reduced Products card image/placeholder height to a consistent 16:10 ratio on desktop/tablet and 16:9 on small screens; aligned titles, descriptions and quote links using equal-height flex cards. The 22 product names and descriptions and all five filters remain.
- Refined placeholders as subtle abstract blind-slat visuals labeled “BlindsXpert product range”; they do not represent actual product photos. Added remote-image failure fallbacks and corrected the Zebra card to use the published Zebra project image.
- Refined the homepage category area to four distinct Indoor, Outdoor, Motorized and Specialty cards, with factual descriptions and category links. Added a six-item featured product grid, “View All Products”, a separate Who We Serve section with the five source-listed customer groups, five process steps and stronger project cards/links.
- Added `sitemap.xml` and `robots.txt`; existing page titles, descriptions, canonical URLs, semantic headings and homepage business structured data remain.
- Kept the approved dark teal, warm gold and light palette, current navigation, primary quotation CTA, catalogue, dealer/reseller, company, service and career content. The source-published WhatsApp link remains in place.
- Validation: 22 product cards, 13 project cards, four category cards, six homepage featured products and five service steps are present. Static internal-link, duplicate-ID, section-balance and alt-text checks and JavaScript syntax checks pass, and the interaction harness exercised all five catalogue filters across all 22 products. Browser screenshots and console review remain unverified because the local preview is blocked by browser URL policy.
- Business assets and confirmation still needed: approved product photography and logo files, verified contact/office-number labels, confirmation that the published WhatsApp destination remains current, brand/component logo permissions and final business-approved copy. Remote images have not been migrated or optimized locally.

## Animation & Social Media Enhancement

- Added restrained hero entrance and slow image drift, one-time floating WhatsApp entrance, scroll reveals with small stagger delays, desktop-only card hover treatments, navigation underline/menu motion and button transitions. No animation library was added. The floating WhatsApp button remains visible while users reach the quote form.
- Added official social links to every page footer, a homepage social section before the final quotation CTA, and a social section on Contact. URLs used as supplied: TikTok `https://www.tiktok.com/@blindsxpert_tiktok`, Facebook `https://www.facebook.com/blindsxpertmy/`, Instagram `https://www.instagram.com/blindsxpert/`.
- Used the business card only as a visual reference for subtle blue/magenta accents alongside the existing dark teal and warm gold palette. The existing logo asset was not redrawn, recolored, or replaced; social links use accessible text labels rather than invented logo/icon assets.
- Reduced-motion settings disable motion; reveals progressively activate only when motion is allowed and IntersectionObserver is available, so content stays visible without those features. Social links include accessible names and safe new-tab attributes. Hover effects are limited to hover-capable devices; content and controls remain usable on touch devices.
- Validation: static checks covered all eight HTML pages, local references, unique IDs, section balance, image alt text and social target/rel/aria attributes. `js/main.js` passes Node syntax validation. Browser viewport and console checks remain unverified because local preview is blocked by browser URL policy. Remote image optimization and business confirmation of contact/WhatsApp details remain open as recorded above.
