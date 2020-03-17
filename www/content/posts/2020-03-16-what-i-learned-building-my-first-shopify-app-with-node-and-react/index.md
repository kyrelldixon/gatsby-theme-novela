---
title: What I learned building my first Shopify app with Node and React
author: Kyrell Dixon
date: 2020-03-16
hero: ./images/hero.jpg
slug: what-i-learned-building-my-first-shopify-app-with-node-and-react
excerpt: I recently went through the Shopify app development tutorial, and it wasn't perfect. However, I did learn a lot.
tags: ['Shopify']
---
 
After [deciding to become a Shopify Consultant](https://www.kyrelldixon.com/blog/why-i-decided-to-become-a-shopify-consultant#i-can-create-more-practical-projects), I immediately got to work understanding the ecosystem.

There are plenty of opportunities available for Shopify consultants, but as a full-stack JavaScript developer, I wanted to start with the skills I already have. That primarily left me with theme and app development.

I'm likely going to work with both, but since I saw the Shopify app development tutorial uses Next.js (I’m a fan of their work), I decided to dive into app development first.

I took the [app development tutorial](https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react) so I could build my first Shopify app and get a better understanding of what goes into the whole process. Throughout development, there are a few major observations that I made:

- Shopify apps require backend and front-end knowledge
- The Shopify tutorial does not use modern React (React hooks)
- The connections per day limit with ngrok slows down development

For the rest of this post, I’ll be going into details about each of these topics to help any future Shopify developers looking to get into the ecosystem.

With that being said, let’s get into it!

## Shopify apps require backend and front-end knowledge

The tutorial used [Koa](https://koajs.com/) to handle the backend logic and [Next.js](https://nextjs.org/) for the frontend. Koa + Next.js is a powerful stack, but it is *not* a beginner-friendly set of tools. In fact, the app development process as a whole is not for the faint of heart because it requires at least a basic understanding of:

- Server-Side Rendering
- React
- Web Hooks
- OAuth
- GraphQL
- Apollo
- Working with Component Libraries (Shopify Polaris)
- Backend development

This shouldn't scare you off, but it's important to know that you will be learning and using a lot of different web development concepts throughout the tutorial and app development with Shopify as a whole.

If you're not familiar with them, you'll probably be doing a lot of copy-and-pasting throughout the tutorial to get things working. It doesn't go into detail about how everything works together, so you'll have to read through the library documentation to make sense of how everything works together.

My experience working with full-stack web apps, particularly with Next.js and [Gatsby](https://www.gatsbyjs.org/) for the frontend, was a **huge** help. If you're a more experienced developer, you will probably feel at home working with these tools and will get through the tutorial without any major issues.

At the same time, the more experience you have, the more likely you are to notice some of the issues with the tutorial.

## The Shopify tutorial itself does not use modern React (React hooks)

The tutorial isn't fully up to date with the latest best practices in React. This is totally understandable because it is a completely free tutorial, but you should keep that in mind if you're new to Next.js/React.

I found myself changing [`class` components](https://reactjs.org/docs/react-component.html) into function components with [React Hooks](https://reactjs.org/docs/hooks-intro.html) as I made it throughout the tutorial. I also swapped out some of the Apollo code with their respective `hook` alternatives. I even changed some of the Next.js specific code to use their latest best practices.

Here's a [link to my Github repo](https://github.com/kyrelldixon/shopify-demo-app-hooks) if you want to see all the changes I made to the code. Feel free to leave a star or add an issue if you see something I could improve.

Most of the changes I made are completely optional and will not have a significant impact on the performance of the app. However, the next time I build a Shopify app, I will be looking for other more modern codebases to better understand a production-level Shopify app.

## The connections per day limit with ngrok slows down development

While [ngrok](https://ngrok.com/) is an incredible tool that makes testing local apps much more simple, using it still comes with challenges.

Getting started with ngrok is a great experience, but some issues come up when you are actively coding. All you need to use ngrok is:

1. Install it with your favorite package manager (`npm` or `yarn`)
2. Start your development server
3. Start and point ngrok at the same port as the development server

From there you get a completely secure domain to use with your Shopify store without having to host your code and set everything up yourself. It’s actually a great service that handles this use case very well.

Everything was running smoothly until I randomly got an error message from making more than 20 requests in 60 seconds. This didn’t make sense to me at first, because I know I didn’t save my code every 3 seconds and almost never needed to reload the browser.

I’m still not 100% sure what was wrong, but I believe the issue had to do with the number of files that were requested on each reload. In short, I think that because there are multiple files served for every reload, I would only need to refresh 2 or 3 times to reach the request limit.

The only way to increase the limit on the total requests you can make is to get a paid plan with ngrok or roll your own ngrok alternative which is not a trivial task.

For now, I think having to wait 60 seconds is an appropriate cost for what is otherwise a great service. However, as I get into more paid client work, this will probably be one of the first things that I do something about.

## Overall thoughts

The tutorial does a great job of introducing developers to the overall Shopify app development workflow. It goes through everything from setting up a basic Shopify store, to handling web hooks, to taking payments for the app. There is definitely a lot to take in and learn, but overall it was a great experience. I'm looking forward to building my next app!
