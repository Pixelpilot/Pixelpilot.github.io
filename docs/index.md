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
      - name: illustration
        description: Illustration mit Adobe Illustrator
  - name: fsst
    description: Fachspezifische Softwaretechnik
  - name: webdev
    description: Webentwicklung
    topics:
      - name: javascript
        description: JavaScript
---

# HTL Braunau

## Inhaltsverzeichnis 2

{% assign categories = site.pages | group_by: 'category' %}
{% for category in categories %}
{% assign category_name = page.categories | where: 'name', category.name %}
<hr>
{% if category_name And category_name != "" And category_name != nil %}
<h3>{{ category_name[0].description }}</h3>
{% elseif category_name[0] And category_name[0] != "" And category_name[0] != nil %}
<h3>{{ category.name }}</h3>
{% endif %}
{% assign topics = site.pages | where: 'category', category.name | group_by: 'topic' %}
{% for topic in topics %}
{% assign topic_name = category_name[0].topics | where: 'name', topic.name %}
{% if topic_name And topic_name != "" And topic_name != nil %}
<h4>{{topic.name}} - {{ topic_name[0].description }}</h4>
{% endif %}
<ul>
{% for page in topic.items %}
{% if page.sitemap_exclude != 'y' %}
<li><a href="{{page.url}}">{{page.description}}</a> {{ page.title }}</li>
{% endif %}
{% endfor %}
</ul>
{% endfor %}
{% endfor %}