# Kushy API Documentation

Documentation for Kushy API using GatsbyJS as a framework and static site generator (SSG).

## Post Format / Fields

```markdown
---
title: Get inventory of specific shop/brand
route: "/inventory/menu/:slug"
method: "get"
page_type: "api"
last_updated: "2018-07-13"
---

Code snippets first

Then your page info here
```

* Method is API query method (GET, POST, PUT, DELETE)
* Route defines the page's URL slug
* Body content can include Markdown or HTML.

## Plugins

### [Twitter](https://www.gatsbyjs.org/packages/gatsby-plugin-twitter/?=)

Seamlessly embed Tweets into posts by copying the blockquote portion of the embed code to your Markdown file. Don't copy the linked JS file, the plugin handles that automatically.

### [Manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/?=)

Configure in `gatsby-config.js`.

### [RSS Feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/?=)

Configure in `gatsby-config.js`.

## Development

Running on GatsbyJS, an SSG that creates static React apps.

1. `npm install`
2. `npm run develop`


## Deployment

### Github Pages

We locally build the files, then deploy using an NPM script that updates a specific Git repo branch called `gh-pages`. 

To enable this, just initialize a git repo in the project, commit your changes, and add your Github repo as a remote repo. Make sure to label the remote as `origin`, otherwise the Gatsby deploy won't know which repo to push to.

**Deploy site to `origin` remote repo:**

`npm run deploy`

#### Creating or editing content

1. `git pull` from remote origin to ensure you have the latest posts and to merge any conflicts.
2. Add a new folder to `src/content/projects` or `src/content/blog` named after your post. This will be converted to the slug of the article -- you don't need to 'kebab-case' your title, but keep the format in mind.
3. Create a Markdown file in the folder. Make sure to use previous files as a template to include all the appropriate fields (listed above).
4. Fill out the post, make sure to include a cover image (see next step for handling images)
5. For any images, include them in the same folder as the post's Markdown and link locally using `<img src="./my-image.jpg" />`.
6. Run `npm run deploy` in the project root to deploy to Github Pages.


### Netlify

This site is also capable of deploying on Netlify. Simply login to Netlify, create a new app, and point to this repository. Follow the steps, make sure Netlify is running `gatsby build` and pointing to the `/public` directory. This also allows you to use the Netlify CMS, since it requires a server for OAuth2 support and hosting on Netlify allows you re-build on each edit (rather than building from you personal machine and deploying from there).


## Credits

* [GatsbyJS](http://gatsbyjs.org)
* [ReactJS](http://reactjs.org)
* Icons by [Davide Pacilio](https://dribbble.com/Davide86)