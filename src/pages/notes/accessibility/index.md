---
title: Accessibility
date: 2022-05-27 18:26:15
updated: 2022-05-27 18:26:21
layout: '../../../layouts/Note.astro'
---

It's difficult to find a solid process for ensuring a site is accessible. Most of what I've been able to find online gathers different accessibility guidelines but doesn't present new devs with a simple process to ensure they have a level of baseline accessibility for their projects.

Every project is different and will present unique challenges, but it would be great to be able to fall back on a somewhat simple process for including a11y practices at every stage of designing and building a site.

This is a tentative stab at a process, more or less lifted from [Accessible to All](https://web.dev/accessible/) at Google's web.dev.

### Tentative Process Outline

1. [Structure Pass](/notes/accessibility/structure-pass)
2. Keyboard access
   - Focus semantics
   - Tabindex
   - Focus styles
3. Semantics/screen reader pass
   - Landmarks
   - Labels
   - Media
4. Accessible CSS pass
   - Tap targets
   - Color/contrast
   - Responsive design
   - Reordering
