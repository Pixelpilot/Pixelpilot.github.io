--
title: Strings
description: Test String
layout: default
category: fsst
---

# Strings

[Zur Übersicht](/index)


{% for col in site.collections %}
<div>{{ col }}</div>

{% endfor %}

### site.collections

{{ site.collections }}

### site.tags.medt
{{ site.tags.medt }}
{{ site.tags.MEDT }}

### site.tags.media
{{ site.tags.media }}


### site.categories.CATEGORY


## Test 
{% for page in site.pages %}
{% if page.sitemap_exclude != 'y' %}
<div>{{page.title}}: <a href="{{page.url}}">{{page.name}}</a></div>
{% endif %}
{% endfor %}

## Test weitere Seiten im gleichen Verzeichnis
{% for pg in site.pages %}
{% if  pg.dir == page.dir %}
<div>{{pg.dir}} - {{pg.title}}: <a href="{{pg.url}}">{{pg.name}}</a></div>
{% endif %}
{% endfor %}





```c
char wort[] = "Hallo";
```
