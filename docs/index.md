---
title: Inhalte Gesammelt
description: Christian Hanl, HTL Braunau
layout: default
categorytitles:
  - mediendesign: Mediendesign
  - fsst: Fachspezifische Softwaretechnik
---

# HTL Braunau, HTL Braunau


{{ title }}

{{ categorytitles }}

## Inhaltsverzeichnis

{% assign categories = site.pages | group_by: 'category' %}
{% for category in categories %}
<hr>
<h3>{{category.name}}</h3>
{% assign topics = site.pages | where: 'category', category.name | group_by: 'topic' %}
{% for topic in topics %}
<h4>{{topic.name}}</h4>
<ul>
{% for page in topic.items %}
{% if page.sitemap_exclude != 'y' %}
<li><a href="{{page.url}}">{{page.description}}</a> {{ page.title }}</li>
{% endif %}
{% endfor %}
</ul>
{% endfor %}
{% endfor %}