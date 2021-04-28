---
title: Inhalte Gesammelt
description: Christian Hanl, HTL Braunau
layout: default
categories:
  - name: mediendesign
    description: Mediendesign
    topics:
      - name: bildbearbeitung
        description: Bildbearbeitung mit Photoshop
  - name: fsst
    description: Fachspezifische Softwaretechnik
---

# HTL Braunau, HTL Braunau
9

page.title {{ page.title }}

page.categorytitles {{ page.categories }}

page.categorytitles[0] {{ page.categories[0] }}


{% assign topic_name = page.categories[0] | where: 'name', 'mediendesign' %}
topic_name {{ topic_name }}
topic_name.description {{ topic_name.description }}


{% assign topic_name = page.categories | where: 'name', 'fsst' %}
topic_name {{ topic_name }}
topic_name.description {{ topic_name=>description }}

topic_name.description {{ topic_name[0].description }}



## Inhaltsverzeichnis

{% assign categories = site.pages | group_by: 'category' %}
{% for category in categories %}
{% assign category_name = page.categories | where: 'name', category.name %}
<hr>
<h3>{{category.name}} - {{ category_name[0].description }}</h3>
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