View live deployment: [https://taviti-by-hightops.surge.sh](https://taviti-by-hightops.surge.sh)

To run it locally:

Clone it.

`npm install`

`npm start`


# About

Taviti Class Details page in Angular 2.

The approach here represents the overall gist of the class details page on the live site, but not 100% since we're defaulting to more default/out-of-the-box styles.

Example:

Live site: Sign Up and Log In links have a blue background on hover state.

Homework site: the color of the text changes on hover. No change in background color.

There are also some other slight differences, for example, the navbar input and Sign Up and Log In links are not 100% height of their container and on mobile have a white background, rather than hex #333333 as on the live site. Also, the social icons in the Homework site use fontawesome.io and some font weights might be slightly off.

## Developing

1. Set up & Integrate JS Object with data copied from live site.  
2. Scaffold basic components: a) class-details `src/app/class-details`, b) navbar `src/app/navbar`, c) footer `src/app/footer`.
3. Fill in the components with html/css and data.

## Structure & Notes

I started with a boilerplate, [Angular2Template](https://github.com/thebluecabrio/angular2-template-with-foundation6).

I used BEM for namespacing when needed. Each component represented a block, with elements representing various sections within each component that require unique rules. I used modifiers only for theming rules in this case.

I also made use of utility classes which have a functional CSS approach, ie: we create one short CSS rule which does one thing and can be used on many HTML elements. I based the rules on tachyons.io, filling in the `src/styles` directory as needed.

## Homework vs IRL

JS

* JS data object was set up for really quick convenience and isn't attempting to be similar to a IRL JS object we'd receive from your API.
* For quick developing, certain libraries like JQuery and FontAwesome are included via CDN in `src/index.html`.
* I'd break out the class-details into more components IRL.

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

The rest of the boilerplate README is below:

---

# Angular2Template

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
