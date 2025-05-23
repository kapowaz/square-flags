# square-flags <img src="logo.svg" alt="square-flags animated logo" align="right">

A collection of ~~circular~~ square SVG country flags, based on
[circle-flags][circle-flags], by HatScripts.

## Why square? What’s different?

It’s a [popular request][circle-flags-issues] for the original circle-flags
project to offer square variants, but in a lot of cases the change to the
original flag design is non-trivial. For simple designs like tricolours you can
simply remove the mask, but a lot of the original flags carefully position
elements to appear within the silhouette of a circle; once that circle mask is
removed, the elements seem misplaced or concentrated around the centre of the
flag.

So, I’ve taken the original artwork and reworked them to suit a square shape
better. I’ve also taken the opportunity to make a few tweaks here and there to
colours (adding a new middle dark yellow that has better contrast against light
backgrounds), as well as building the whole thing out in Figma using components.

Using the flag for Australia, here’s an example of the kind of change: the Union
Jack has been replaced with the full design at a quarter scale, the background
colour has been changed to Navy to more accurately reflect the original, and the
position of the largest star has been moved to the left, closer to its true
location.

<img src="https://kapowaz.github.io/square-flags/images/au-comparison.svg" width="168" alt="A comparison of the circle-flags and square-flags equivalents for the flag of Australia" />

## Usage

```text
https://kapowaz.github.io/square-flags/flags/xx.svg
```

(Where `xx` is the [ISO 3166-1 alpha-2 code][iso-3166-1] of a country).

For example, the following code:

```html
<img src="https://kapowaz.github.io/square-flags/flags/br.svg" width="48" />
<img src="https://kapowaz.github.io/square-flags/flags/cn.svg" width="48" />
<img src="https://kapowaz.github.io/square-flags/flags/gb.svg" width="48" />
<img src="https://kapowaz.github.io/square-flags/flags/id.svg" width="48" />
<img src="https://kapowaz.github.io/square-flags/flags/in.svg" width="48" />
<img src="https://kapowaz.github.io/square-flags/flags/ng.svg" width="48" />
<img src="https://kapowaz.github.io/square-flags/flags/ru.svg" width="48" />
<img src="https://kapowaz.github.io/square-flags/flags/us.svg" width="48" />
```

...produces this:<br/><br/>
<img src="https://kapowaz.github.io/square-flags/flags/br.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/cn.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/gb.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/id.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/in.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/ng.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/ru.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/us.svg" width="48">

To view all the available flags, check [the gallery][gallery].

### React

If you're using [React](https://reactjs.org), an equivalent `react-square-flags`
package is [available here][react-square-flags].

### NPM

If you want to install this package as a dependency, you can add it to your
project with:

```sh
npm install --save @kapowaz/square-flags
```

### The color palette

Like HatScript’s flag set, this set of flags uses the following color palette
(with a few small additions, such as Dark Yellow). Since the original designs
are in Figma, if you have a proposed modification to an existing flag, create an
issue and I’ll try and amend the original Figma file.

<ul class="colors">
{% for color in site.data.colors %}
  <li>
    <span class="color-marker" style="background-color: {{ color.hex }};"></span>
    <code>{{ color.hex }}</code> {{ color.name }}
  </li>
{% endfor %}
</ul>

#### CSS Custom Properties

If you want to use these flags in a site or application that has a specific
colour scheme you want to follow, you can use [CSS Custom Properties][css-custom-properties]
(‘CSS variables’) to override the default colour scheme. To do this, define
values for any or all of the following named variables (the default colours are
shown here):

```css
:root {
  --flag-palette-black: #333333;
  --flag-palette-blue: #0052b4;
  --flag-palette-bright-red: #d80027;
  --flag-palette-bright-white: #fcfcfc;
  --flag-palette-brown: #85693d;
  --flag-palette-dark-brown: #584528;
  --flag-palette-dark-green: #496e2d;
  --flag-palette-dark-grey: #818085;
  --flag-palette-dark-pink: #751a46;
  --flag-palette-dark-red: #a2001d;
  --flag-palette-dark-yellow: #ffc635;
  --flag-palette-gold: #ff9811;
  --flag-palette-green: #6da544;
  --flag-palette-light-blue: #338af3;
  --flag-palette-light-grey: #f3f3f3;
  --flag-palette-mid-grey-1: #dedde0;
  --flag-palette-mid-grey-2: #bdbcc1;
  --flag-palette-mid-grey-3: #acabb1;
  --flag-palette-navy: #002266;
  --flag-palette-pink: #f5a9b8;
  --flag-palette-purple: #4a1f63;
  --flag-palette-violet: #9c27b0;
  --flag-palette-white: #eeeeee;
  --flag-palette-yellow: #ffda44;
}
```

Note that this only works when the flags are injected as SVG elements directly
into the same page as your custom CSS properties; if you are including flags as
images using an `<img>` tag they will retain the default palette. If for any
reason you need a version of these SVG files _without_ the CSS custom
properties, you can find the equivalent flags under `flags-original/`.

## Contributing

The design files for this set of flags can be found on [Figma as part of the
Circle Flags shared library][circle-flags-figma]. If you wish to make a
contribution, create a copy of that library and add your changes as a component,
then create a pull request including the exported SVG file and a link to your
copy of the Figma file, so that the original can be updated.

You should export two copies of your new/updated flag design: one to `flags/`,
and one to `flags-original/`, then run the scripts to optimise the SVG assets,
and update any explicit hexadecimal colour codes to their named CSS Custom
Property values (you should run `yarn svgo` last, to ensure the optimal SVG
output):

```sh
$ yarn
$ yarn css-vars
$ yarn svgo
```

Then commit the changes, and submit them as a pull request.

### Running the documentation site locally

If for any reason you want to test running the github-pages site locally, you
can do so with:

1. `bundle install`
2. `bundle exec jekyll serve`

## License

This project is released under the [MIT license](LICENSE.md).

[circle-flags]: https://github.com/HatScripts/circle-flags
[circle-flags-issues]: https://github.com/HatScripts/circle-flags/issues?q=is%3Aissue+is%3Aopen+square
[iso-3166-1]: https://www.iso.org/obp/ui/#search/code/
[gallery]: https://kapowaz.github.io/square-flags/gallery
[react]: https://reactjs.org
[svgo]: https://github.com/svg/svgo
[figma]: https://www.figma.com/community/file/1295802738363022628/square-flags
[css-custom-properties]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
[react-square-flags]: https://www.npmjs.com/package/react-square-flags
