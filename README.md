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

The design files for this set of flags can be found on [Figma as part of the
Square Flags shared library][figma]. If you wish to make a contribution, create
a copy of that library and add your changes as a component, then create a pull
request including the exported SVG file and a link to your copy of the Figma
file, so that the original can be updated.

You will also need to ensure you have have the latest version of [svgo][svgo]
installed; when exporting SVG files, run `svgo` on the `flags/` directory:

```sh
svgo ./flags --recursive --config=svgo.config.js
```

Then commit the changes, and submit them as a pull request along with your Figma
file.

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

## License

This project is released under the [MIT license](LICENSE.md).

[circle-flags]: https://github.com/HatScripts/circle-flags
[circle-flags-issues]: https://github.com/HatScripts/circle-flags/issues?q=is%3Aissue+is%3Aopen+square
[iso-3166-1]: https://www.iso.org/obp/ui/#search/code/
[gallery]: https://kapowaz.github.io/square-flags/gallery
[react]: https://reactjs.org
[svgo]: https://github.com/svg/svgo
[figma]: https://www.figma.com/community/file/1295802738363022628/square-flags
