---
title: Inhalte Gesammelt
description: Christian Hanl, HTL Braunau
layout: default
categorytitles:
  - name: mediendesign
    description: 'Mediendesign'
  - name: fsst
    description: Fachspezifische Softwaretechnik
---

# HTL Braunau, HTL Braunau

3

page.title {{ page.title }}

page.categorytitles {{ page.categorytitles }}

page.categorytitles[0] {{ page.categorytitles[0] }}

page.categorytitles['mediendesign'] {{ page.categorytitles['mediendesign'] }}



## Inhaltsverzeichnis

{% assign categories = site.pages | group_by: 'category' %}
{% for category in categories %}
<hr>
<h3>{{category.name}}</h3>
{% assign topics = site.pages | where: 'category', category.name | group_by: 'topic' %}
{% for topic in topics %}
{% assign topic_name = page.categorytitles | where: 'name', topic.name %}
<h4>{{topic.name}} - {{ topic_name }}</h4>

<ul>
{% for page in topic.items %}
{% if page.sitemap_exclude != 'y' %}
<li><a href="{{page.url}}">{{page.description}}</a> {{ page.title }}</li>
{% endif %}
{% endfor %}
</ul>
{% endfor %}
{% endfor %}