---
title: Webmentions
pubDate: 2022-06-03 10:05:07
updated: 2022-06-03 10:05:12
layout: '$layouts/Note.astro'
draft: false
order: 1
intro: >
  [Webmention](https://indieweb.org/Webmention) is a web standard for notifying sites when they're mentioned on the web. Adding them your own site is a way for your site to talk to other sites. It's like using the whole web as a social network. If you've ever had concerns about billionaires wiping out your ability to talk to people, it's worth adding to your site. Also, it's just fun!
---

## Implementing WebMentions

Most of this post is going to be about how I added client-side webmentions to my site which uses [Astro](https://astro.build) for static site generation and [Svelte](https://svelte.dev) for client-side components. Some of the initial setup will apply to bare-bones HTML/CSS sites, though, so if you don't know JavaScript you can still add some basic WebMention functionality to your site.

### Web Sign-in

Before getting into adding WebMentions, you'll want to make sure you have basic [web sign-in](https://indieweb.org/Web_sign-in) functionality to your site. You'll need this to sign in to [webmentions.io](https://webmentions.io) later, but there are [other benefits](https://indieweb.org/Why_web_sign-in) to setting this up. It's also really, really easy.

#### Me Links

