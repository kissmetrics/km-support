# 1. Getting Started

## Dependencies

You'll need a version of Ruby (we'll use 1.9.3 for the sake of example) and bundler.

Let's start by installing GCC and RVM:

* Newer versions of xCode do not provide a compatible Ruby compiler. Install this bundle to get gcc-4.2: [https://github.com/kennethreitz/osx-gcc-installer](https://github.com/kennethreitz/osx-gcc-installer)
* RVM: [https://rvm.io/](https://rvm.io/)

Now in a terminal:

    rvm install 1.9.3
    rvm use 1.9.3
    gem install bundler
    bundle install

## Getting the Repository

If you've used Github before, it's pretty straightforward to get started.

* You can fork the repository if you're making only one or two changes.
* You can ask to be added as a contributor to the repository, and clone it that way.

Repository is at [https://github.com/kissmetrics/km-support]() 

# 2. To run the server:

`jekyll --server`

Then navigate to [http://localhost:4000](http://localhost:4000).

# 3. Post creation

* Each article is written in [Markdown](http://daringfireball.net/projects/markdown/).
* No `menu.txt` or `redirects.txt` file to worry about this time.
* All new files go into the `_post` folder and the filenames need to be formated a specific way (`2013-01-01-foo-bar.md`).
* You can find a [style guide](http://support.kissmetrics.com/misc/styleguide.html) that provides an overview of Markdown formatting syntaxes and best practices.

We have a Rake task available to automate the creation of a blank post. Use the command `rake post`, which you use if you're in the project directory. You can also specify options on the command line as follows:

    $ rake post title="Some API" author="Eric Fung" categories=apis tags="some, tags"
    Creating new post: ./_posts/2013-02-04-some-api.md

This fills in some attributes each post should have, which we'll discuss below.

## Adding Images

If you're putting up new images, you should compress them to minimize the amount of bandwidth used. We've been using [http://imageoptim.com/](http://imageoptim.com/).

The KISSmetrics team has an S3 bucket that contains most of the support material. We're mainly using [3Hub](http://www.3hubapp.com/) to communicate with the bucket. Alternatively, you can upload individual images to [CloudApp](http://my.cl.ly/).

# What makes up a post?

Here's an example of the [YAML front matter](https://github.com/mojombo/jekyll/wiki/yaml-front-matter) in each post right now:

    layout: post
    title: Overview
    categories: getting-started
    author: Eric Fung
    tags: []
    summary: What is KISSmetrics? What can I learn from using KISSmetrics? How are we different from other analytics solutions? What should I track to make the most of KISSmetrics?

1. Layout is defaulted to "post". This is the template to use for displaying our content. We haven't made any other templates...yet.
2. Title: What is shown at the top of the article. If using the rake task, this also initially influences the URL it'll be on, but the title and the URL don't have to be exactly the same thing.
3. Categories: also influences what the final URL will be. A way to group similar articles together. (Think of the old support site's folder structure.) So since the example category is `getting-started`, the URL of the page will turn into `support.kissmetrics.com/getting-started/overview` ... /CATEGORIES/TITLE.

Multiple categories looks like `[getting-started, testing-km]`. This would put the page on the URL `/getting-started/testing-km/TITLE`.

4. Tags are yet another way to group similar articles. We haven't started using them but it's a good idea to prepare to.
5. Author: who's writing? The "post" layout is acknowledges who the author is as more and more people contribute articles.
6. Summary: in each "Category Index" ([support.kissmetrics.com/getting-started.html](support.kissmetrics.com/getting-started.html) for example), the summary appears below each title.

# 4. Commit Changes

It helps if you know how to use Git, but here it is for posterity. This assumes you're in the root of the repository:

    git add .
    git commit
    git pull
    git push

This adds your changes to revision control, commits them locally, pulls any other changes people have done, and then pushes your changes to the remote repository.

Once you push, Github updates the site almost instantly.

![](http://cl.ly/image/321e2n293U1k/magic.gif)

# Nice things to know

## The Jekyll Wiki

Here is a link: [https://github.com/mojombo/jekyll](https://github.com/mojombo/jekyll)

## Site Does Not Build

* If `_site` does not build, set `auto: false` in `_config.yml` and watch for the Ruby errors locally
* The `_site` folder is automatically generated, so make sure you're not editing the files in there!
 
## Neat Uses of Liquid

* Reversing a list: `{% for page in site.categories.troubleshooting reversed %}`
