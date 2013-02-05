# 1. Getting Started

## Dependencies

You'll need a version of Ruby (we'll use 1.9.3 for the sake of example) and bundler.

Let's start by installing RVM and GCC:

* RVM: https://rvm.io/
* Newer versions of xCode do not provide a compatible Ruby compiler. Install this bundle to get gcc-4.2: https://github.com/kennethreitz/osx-gcc-installer

Now:

    gem install bundler
    bundle install

## Getting the Repository

If you've used Github before, it's pretty straightforward to get started.

* You can fork the repository if you're making only one or two changes
* You can be added as a contributor to the repository, and clone it that way.

Repository is at [https://github.com/kissmetrics/km-support]() 

# 2. To run the server:

`jekyll --server`

Then navigate to http://localhost:4000.

# 3. Post creation

* Each article is written in [Markdown](http://daringfireball.net/projects/markdown/).
* No `menu.txt` or `redirects.txt` file to worry about this time.
* All new files go into the `_post` folder and the filenames need to be formated a specific way (2013-01-01-foo-bar.md).

Post creation is automated with a Rake task. Once in the project directory, type `rake post` to create a default file. You can also specify options on the command line as follows:

    $ rake post title="Some API" author="Eric Fung" categories=apis tags="some, tags"
    Creating new post: ./_posts/2013-02-04-some-api.md

## Uploading Files

For screenshots and attachments, we use S3 for storing images to be served. To upload a file use the s3_upload.rb script.

You will first need to create a file that holds your AWS secret keys (https://portal.aws.amazon.com/gp/aws/securityCredentials). Steve Cox can provide credentials and then you will need to export these variables.

    $ cat .amazon_keys
    export AMAZON_ACCESS_KEY_ID='abcdefghijklmnop'
    export AMAZON_SECRET_ACCESS_KEY='1234567891012345'

If you're putting up new images, Derek suggests to compress them as much as possible so they take less bandwidth to serve out. We're using http://imageoptim.com/ for that.

# What makes up a post?

Here's the YAML front matter in each post right now:

    layout:
    title:
    categories:
    tags:
    author:
    summary:

1. Layout is defaulted to "post". This is the template to use for displaying our content. We haven't made any other templates...yet.
2. Title: What is shown at the top of the article. If using the rake task, this also initially influences the URL it'll be on, but the title and the URL don't have to be exactly the same thing.
3. Categories: also influences what the final URL will be. A way to group similar articles together. (Think of the old support site's folder structure.)
4. Yet another way to group similar articles. We haven't started using these yet.
5. Author: who's writing? The "post" layout is acknowledges who the author is as more and more people contribute articles.
6. Summary: in each "Category Index" (/getting-started.html for example), the summary appears below each title.

# 4. Commit Changes

Helps if you know how to use Git, but here it is for posterity. This assumes you're in the root of the repository:

    git add .
    git co
    git pull
    git push

Once you push, Github updates the site almost instantly.

![](https://dl.dropbox.com/u/1181256/gifs/magic.gif)

# Nice things to know

## The Jekyll Wiki

Here is a link: https://github.com/mojombo/jekyll

## Neat Uses of Liquid

* Reversing a list: `{% for page in site.categories.troubleshooting reversed %}`

## Site Does Not Build

* If `_site` does not build, set `auto: false` in `_config.yml` and watch for the Ruby errors locally
* The `_site` folder is automatically generated, so make sure you're not editing the files in there!
