---
title: Getting Started with PHP
pubDate: 2022-06-02 19:28:41
updated: 2022-06-02 19:28:46
layout: '$layouts/Note.astro'
draft: false
order: 1
---

PHP is a server-side, or backend language. It is embedded directly into HTML in `.php` files. Like JavaScript, PHP is an interpreted language. Also like JavaScript, PHP is an __embedded language__ because it can be embedded into HTML (let's not get into Node).

## Creating PHP Scripts

A basic PHP script begins and ends with __script delimiters__ that begin with `<?php` and end with `?>`.

```php
<?php
echo "Hello, world!";
?>
```
The trailing `?>` can be left off if the script contained in the delimiters is the only script on the page. In fact, some code formatters may strip it out for you.

Also, see the semicolon at the end of the `echo` statement up there? That's required.

Like HTML, if you're in a directory, the file `index.php` will automatically be picked up by the server as the correct file to serve at that directory's URL. So, if you're at the root of your web server, `index.php` will be what's served to any client who visits the site's home page.

Speaking of servers:

## Development Server

You can start a development server with PHP in the terminal. Navigate to the directory you want to serve and type: `php -S localhost:<portnumber>`. So if you enter: 

```bash
php -S localhost:8080
```

you'll be able to see your work at `http://localhost:8080`.

## Variables and Constants
Variable identifiers must start with `$` and are case sensitive. An identifier can contain uppercase and lowercase letters, numbers, or underscores. The first character after the `$` __must be a letter__. Identifiers can't contain spaces.

Variables must be initialized at the same time they are declared. In a languages like JavaScript, or even C++, you can declare a variable without initializing it:

```js
let myNumber;

// do some stuff

myNumber = 123;
```

That's not possible in PHP:

```php
$myNumber = 123;
```