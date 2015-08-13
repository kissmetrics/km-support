---
layout: post
title: Hosting the JavaScript Library Yourself
categories: [apis, javascript]
summary: We recommend you do not host the JavaScript yourself, but here are the considerations if you decide to.
---
* Table of Contents
{:toc}
* * *

# Saving a Copy

In the JavaScript snippet we provide, you are able to assemble the URL of the JavaScript file with your API key:

`https://doug1izaerwt3.cloudfront.net/REPLACE_WITH_YOUR_API_KEY.1.js`

Downloading the JS file is as straightforward as visiting that URL and having your browser 'Save Page As...'

# Caveats

If you decide to host the JavaScript Library yourself for the purpose of optimization, there are certain behaviors that will be lost:

* You would not receive code updates to the JavaScript Library, if we add functionality, optimize, or fix bugs.
* The Event Library/Event Wizard will not work, since it will update only your hosted JavaScript file.

We may consider having a system to notify of JavaScript library updates, but it is currently not on our roadmap.