# Whatisnuclear.com amazing website 

This is the source of the nuclear energy public-education website
[whatisnuclear.com](https://whatisnuclear.com). The site was founded in 2007 and has been built over
the years. It is now on github to encourage collaboration with other nuclear experts who want to
contribute to public education. [More about us](https://whatisnuclear.com/about.html). 

## Contributing
We welcome pull requests for basic fixes and small changes of any kind. If you want to contribute
something major, it's best to [contact us](https://whatisnuclear.com/contact.html) first to discuss
the content and tone. We definitely want stuff from you but don't want you to spend a bunch of time
on something that we don't think is right for our site. All contributions you make will retain your
copyright but you will grant whatisnuclear.com a irrevocable and perpetual license to use it. It
will also be licensed [CC-BY-NC](https://whatisnuclear.com/license.html). 

We look forward to working with you!

## Infrastructure
The site is built with [Jekyll](https://jekyllrb.com/), which converts the source material you see
here into the actual HTML that gets pushed live. Some of our pages here are in Markdown and others
are still in HTML (we're slowly converting to Markdown to make collaborating/editing easier). At the
moment, not everything needed to render the page is in this git repository (we excluded some
third-party dependencies like fonts and themes) so you may have trouble rendering it at first. But
if you had all the dependencies, you could just run:

    bundle install
    bundle exec jekyll build

or

    bundle exec jekyll serve

you can test out your changes before submitting them. 

