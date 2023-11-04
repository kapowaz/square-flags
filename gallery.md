---
layout: default
title: Gallery
---
<link rel="stylesheet" type="text/css" href="gallery.css" />

<h1>Gallery</h1>

## Flags

<div class="container">
{% for flag in site.data.flags %}
  <div>
    <code title="{{ flag.code }}">{{ flag.code }}</code>
    <img src="flags/{{ flag.code }}.svg"/>
    <p>{{ flag.name }}</p>
  </div>
{% endfor %}
</div>

## Languages

You can also use these codes to refer to a country’s language using its [ISO
639-1][iso-639-1] or [ISO 639-2][iso-639-2] language code.

<div class="container">
{% for language in site.data.languages %}
  <div>
    <code title="{{ language.code }}">{{ language.code }}</code>
    <img src="flags/language/{{ language.code }}.svg"/>
    <p>{{ language.name }}</p>
  </div>
{% endfor %}
</div>

## Other flags

<div class="container">
{% for other in site.data.others %}
  <div>
    <code title="{{ other.code }}">{{ other.code }}</code>
    <img src="flags/other/{{ other.code }}.svg"/>
    <p>{{ other.name }}</p>
  </div>
{% endfor %}
</div>

[iso-639-1]: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
[iso-639-2]: https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes
