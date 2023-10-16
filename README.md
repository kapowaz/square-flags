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
backgrounds), as well as building the whole thing out in Figma using components
(I’ll share this on the community page soon).

## Usage

```text
https://kapowaz.github.io/square-flags/flags/xx.svg
```

(Where `xx` is the [ISO 3166-1 alpha-2 code][iso-3166-1] of a country).

For example, the following code:

```html
<img src="https://kapowaz.github.io/square-flags/flags/br.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/cn.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/gb.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/id.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/in.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/ng.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/ru.svg" width="48">
<img src="https://kapowaz.github.io/square-flags/flags/us.svg" width="48">
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
package is in the works.

### NPM

If you want to install this package as a dependency, you can install it from
this GitHub repository:

```sh
npm install --save https://github.com/kapowaz/square-flags
```

## Contributing

To contribute, you need to have the latest version of [svgo][svgo] installed.

First, edit the relevant SVG files in the `flags/` directory.

Then run `svgo` to optimize the SVG files:

```sh
svgo ./flags --recursive --config=svgo.config.js
```

Then commit the changes, and submit them as a pull request.

### The color palette

Like HatScript’s flag set, this set of flags uses the following color palette
(with a few small additions, such as Dark Yellow). Since the original designs
are in Figma, if you have a proposed modification to an existing flag, create an
issue and I’ll try and amend the original Figma file.

* `#584528`: Dark Brown
* `#85693D`: Brown
* `#496E2D`: Dark Green
* `#6DA544`: Green
* `#338AF3`: Light Blue
* `#0052B4`: Blue
* `#002266`: Navy
* `#4A1F63`: Purple
* `#9C27B0`: Violet
* `#F5A9B8`: Pink
* `#751A46`: Dark Pink
* `#A2001D`: Dark Red
* `#D80027`: Bright Red
* `#FF9811`: Gold
* `#FFC635`: Dark Yellow
* `#FFDA44`: Yellow
* `#333333`: Black
* `#818085`: Dark Grey
* `#ACABB1`: Mid Grey 3
* `#BDBCC1`: Mid Grey 2
* `#DEDDE0`: Mid Grey 1
* `#F3F3F3`: Light Grey
* `#EEEEEE`: White
* `#FCFCFC`: Bright White

## License

This project is released under the [MIT license](LICENSE.md).

[circle-flags]: https://github.com/HatScripts/circle-flags
[circle-flags-issues]: https://github.com/HatScripts/circle-flags/issues?q=is%3Aissue+is%3Aopen+square
[iso-3166-1]: https://www.iso.org/obp/ui/#search/code/
[gallery]: https://kapowaz.github.io/square-flags/gallery
[react]: https://reactjs.org
[svgo]: https://github.com/svg/svgo
