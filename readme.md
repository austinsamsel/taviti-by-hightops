View live deployment: [https://taviti-by-hightops.surge.sh](https://taviti-by-hightops.surge.sh)

To run it locally:

Clone it.

`npm install`

`bower install`

`npm start`


# About

Taviti Class Details page: HTML/CSS/JS.

The approach here represents the overall gist of the class details page on the live site, but not 100% since we're defaulting to more default/out-of-the-box styles.

Example:

Live site: Sign Up and Log In links have a blue background on hover state.

Homework site: the color of the text changes on hover. No change in background color.

There are also some other slight differences, for example, the nav-bar input and Sign Up and Log In links are not 100% height of their container and on mobile have a white background, rather than hex #333333 as on the live site. Also, the social icons in the Homework site use fontawesome.io and some font weights might be slightly off.

## Developing

**Angular**

1. Set up & Integrate JS Object with data copied from live site.  
2. Scaffold basic components: a) class-details `src/app/class-details`, b) navbar `src/app/navbar`, c) footer `src/app/footer`.
3. Fill in the components with html/css and data.

**Migrate**

* Create `footer.html` and `nav-bar.html` as partials. Then add their respective handlebars to `src/layouts/default.html`.
* Move the class-details html into `src/pages/index.html`
* Create `src/assets/scss/components/**.scss` for partials (including class-details, for simplicity).
* Create `src/assets/scss/helpers/**.scss` and move in fCSS helpers and variables.
* All the added scss is then referenced at the bottom of `src/assets/scss.app.scss`.
* Move the data object into `src/data/data.json` as a JSON file. This project uses Zurb's [Panini](https://github.com/zurb/panini) template engine which can populate the HTML's previous handlebars with `data.json` at build.
* mobile menu icon was aligned left after migration. I enabled foundation's flexbox features to align it to the right. I also used flexbox to bring the login/signup text in vertical alignment with the "Where?" input search field.

## Structure & Notes

I dropped Angular and switched to [Official ZURB Template for Foundation for Sites](https://github.com/zurb/foundation-zurb-template) which ought to have a standard configuration for working with Foundation.

I used BEM for namespacing when needed. Each component represented a block, with elements representing various sections within each component that require unique rules. I used modifiers only for theming rules in this case.

I also made use of utility classes which have a functional CSS approach, ie: we create one short CSS rule which does one thing and can be used on many HTML elements. I based the rules on tachyons.io, filling in the `src/styles` directory as needed.

## Homework vs IRL

JS

* ~~JS data object was set up for really quick convenience and isn't attempting to be similar to a IRL JS object we'd receive from your API.~~
* ~~For quick developing, certain libraries like JQuery and FontAwesome are included via CDN in `src/index.html`.~~
* ~~I'd break out the class-details into more components IRL.~~
* Not really needed here, but this is all set up for jQuery and ES6 (includes Babel).

CSS

* A lot of structure I created depended on the original set up. Foundation's css is included in `src/styles.scss`. In order to reference sass variables within components, each component will `@import` the node module. IRL, we'd import each .scss file into a component on demand rather than having everything globally available.

## Best practices

* Variables, more abstracted color naming based on: http://chir.ag/projects/name-that-color

	// bad
	.blue {
	  color: red; // or #C01121
	  // hey stuff happens...
	}

	// good
	.thunderbird {
	  color: #1152C0;
	}

* When in doubt I reference the [18F style guide](https://pages.18f.gov/frontend/#css).

**jQuery / JS**

When working with jQuery, I generally use [JS Module pattern](https://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/) to organize the code.

Although not needed, I created a sample module in `src/assets/js/app.js` that does a request to a JSON file `assets/json/fake-api.json`. Its the same data I used to populate the HTML, except here I'm logging the key and values to the console.

...

The rest of the boilerplate README is below:

---

# ZURB Template

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

**Please open all issues with this template on the main [Foundation for Sites](https://github.com/zurb/foundation-sites/issues) repo.**

This is the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). We use this template at ZURB to deliver static code to our clients. It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.

### Using the CLI

Install the Foundation CLI with this command:

```bash
npm install foundation-cli --global
```

Use this command to set up a blank Foundation for Sites project with this template:

```bash
foundation new --framework sites --template zurb
```

The CLI will prompt you to give your project a name. The template will be downloaded into a folder with this name.

### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/zurb/foundation-zurb-template projectname
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.
