---
title: A beginner's guide to building a site from scratch
author: Kyrell Dixon
date: 2020-02-10
hero: ./images/hero.jpg
slug: beginners-guide-to-building-a-site-from-scratch
excerpt: How to go from a completely blank page to a full website with any framework
tags: ['HTML', 'CSS', 'Web Fundamentals']
---

The first time you open up a code editor to build a site can be pretty overwhelming. With all the HTML, CSS, and JavaScript that you have to write, where do you even start? This guide will end the confusion by giving you some practical steps on how to approach developing a site from an empty code editor to a complete web page.

- [Start from a design](#start-from-a-design)
- [Set up project structure](#set-up-project-structure)
- [Structure the page with HTML](#structure-the-page-with-html)
- [Add in your styles with CSS](#add-in-your-styles-with-css)
- [Get fancy with JavaScript](#get-fancy-with-javascript)
- [Fine-tune based on user feedback](#fine-tune-based-on-user-feedback)

## Start from a design

This one is pretty straight-forward, but many developers tend to skip this step. If you don't really care about how your site turns out, then skip this step and hop right into the code. Just make sure you stay consistent in your mentality and don't spend 20 minutes tweaking your margins, padding, and font-size pixel by pixel until it's perfect.

For the rest of us, get some inspiration! There are probably a few sites that have a design or style that you like. A few sites that I like to check out for inspiration are [Dribbble](https://www.dribbble.com) and [Behance](https://www.behance.net).b 

You don't have feel bad about copying a design if it's for a side project that's not making you any money. In fact, copying a design is a great way to practice your development skills.

Once you find something or create something yourself, you can transition into code and start setting up the project.

## Set up project structure

When setting up your project, it's important to **keep it simple**. Sometimes all you need is to create a folder with an `index.html` and `style.css` file. If that's all you have start from there. You can always refactor and make more files and folders if you need them, but in the beginning just create what you need and move on.

An example of the most simple project structure would be:

```bash
project
├── index.html
├── style.css
└── index.js
```

If you're building a simple site, this works perfect! If you need to add more pages, you can simply add them to the project folder
with a more specific name. For example, if you want to add an about and contact page to your site, just add them to the main project under that name.

```bash {3-4}
project
├── index.html
├── about.html
├── contact.html
├── style.css
└── index.js
```

This step shouldn't take more than a minute, so once you've taken care of it, you can jump into creating the webpage.

## Structure the page with HTML

When you first start creating a site from a design, ignore all the details and approach it from a high-level. In the beginning you should ignore the colors, sizes, shadows, and all the little details. At first, all you care about is the HTML **structure**.

This is where you think about the page completely in terms of HTML tags. If an element functions as a button use the basic `<button>` tag. If it the title of the page, use an `<h1>`. This is simple, but focusing on adding the proper tags and instead of adding unneccesary `divs` will both make your site accessible and easier to style later on.

## Add in your styles with CSS

After getting the basic HTML structure of a page, you can start focusing on adding styles. When I start working on a page, I start from the broad details that will effect the entire page down to more specific elements.

Here's the general order I follow in terms of CSS properties:

1. The layout
2. The font
3. The color
4. The details

As you progress through each step, you have a layer of styles to build on.

The **layout** is like the foundation of the page. It is the least likely to change and the most fundamental in determining how you will style the rest of the elements.

The **font** is the first taste of personality that you add to the page. It also plays a big part in bringing emphasis to certain items and guiding the user through the content of the page.

The **color** is what starts to bring a site to life. This is where you consider the brand and the emotions you want people to associate with your site.

The **details** are basically all the little things that make a good site, great. This is where you work on animation, page transitions, fancy loading states, shadows, and all the small things that make your site truly unique.

## Get fancy with JavaScript

After finishing up the look of the page, that's when I'll start to think about adding in some functionality. At this point
you can start thinking about things like validating form data and any dynamic functionality for the page.

Finishing up the styling and page layout first makes it much easier to focus exclusively on the JavaScript which saves you time by minimizing how often you have to move between files.

## Fine-tune based on user feedback

If you're creating an application that will be user facing, it's a great idea to get a fresh set of eyes of it. No matter how detail-oriented you are, sometimes you'll miss things. Getting someone to take a look over it will help catch obvious flaws and give you an opportunity to do some final updates before sharing your creation with the world.
