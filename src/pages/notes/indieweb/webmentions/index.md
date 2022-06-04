---
title: Webmentions
pubDate: 2022-06-03 10:05:07
updated: 2022-06-04 09:43:10
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

If you already have links to your Twitter, GitHub, or Mastodon accounts, this will be really quick. If not, you'll want to create a link to each of those services you have an account on. I made sure the links I created were visible at the root of my site, but it _might_ work if you add the links to another page.

The most important thing about these links is the `rel="me"` attribute. Here's what the link to my Twitter account looks like:

```html
<a href="https://twitter.com/trainingm0ntage" rel="me">Twitter</a>
```

You can also add them to the `<head>` element if you prefer not to make them visible to casual users of your site, (though, the folks at IndieWeb say [visible links are preferred](https://indieweb.org/antipatterns#invisible_metadata)). If you want to include the links in your `<head>`, they should look something like this:

```html
<link href="https://github.com/nemo-omen" rel="me">
```

Once you have those set up, it's time to link back to your site from those services.

#### Link Back

Now go sign in to whichever services you linked to from your site. Update your profile (or bio, etc.) and add your site's URL:

<ul>
  <li>
    <a href="https://twitter.com/settings/profile" target="_blank">Update your Twitter profile</a>
  </li>
  <li>
    <a href="https://github.com/settings/profile" target="_blank">Update your GitHub profile</a>
  </li>
</ul>

All done? Head over to <a hraf="https://indiewebify.me/" target="_blank">IndieWebify.me</a> and go to Step 2. Stick your site's URL into the input field and click `Test`. If everything goes right you should see something like this:

![Web Sign-in verification on indiewebify.me](/images/WebMentions_RelMeVerification.png)

Oops! Looks like my verification couldn't find the link on my Twitter profile. My guess is that it has something to do with how Twitter inserts shortened links on their platform in place of the original URL. <a href="https://twitter.com/intent/tweet/?text=Hey,%20@trainingm0ntage!%20I%20got%20Twitter%20link%20auth%20to%20work%20for%20https://jeffcaldwell.is/notes/indieweb/webmentions" target="_blank">Let me know if you get it to work.</a>

### Integrating Webmention.io

Now we're going to sign up for <a href="https://webmention.io" target="_blank">webmention.io</a>. Before heading over there, add the following to your `<head>` element and make sure to replace `username` with your domain name:

```html
<link rel="webmention" href="https://webmention.io/username/webmention" />
<link rel="pingback" href="https://webmention.io/username/xmlrpc" />
```

For reference, here's what mine look like:

```html
<link rel="webmention" href="https://webmention.io/jeffcaldwell.is/webmention" />
<link rel="pingback" href="https://webmention.io/jeffcaldwell.is/xmlrpc" />
```

Now head over to <a href="https://webmention.io" target="_blank">webmention.io</a> and sign-in using your site's URL.

### Displaying a WebMention Counter

If you're just working with HTML and CSS you can use a handy counter provided by the folks at webmention.io to display the number of webmentions your site has received.

First, you'll need jQuery. Grab a [version you like](https://releases.jquery.com/) and add it in a `script` tag at the top of your page's `body`

Now, add this `&lt;span&gt;` where you want the counter to appear (replace `https://example.com` with your site's URL):

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

```html
<span data-webmention-count data-url="https://example.com/page/100"></span> mentions
```

```html
<script src="https://webmention.io/js/mentions.js"></script>
```

Finally, add another `script` tag at the bottom of your page with a `src` of `https://webmention.io/js/mentions.js`.

Please forgive me for not just including the HTML for the two script tags. There's something fishy happening with my syntax highlighter and it's trying to execute the JS examples when I put them on the page.