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
  - name: fssta
    description: Fachspezifische Softwaretechnik
  - name: webdev
    description: Webentwicklung
    topics:
      - name: javascript
        description: JavaScript
---

# HTL Braunau

## Inhaltsverzeichnis 12

- [ ] Überschriften ausblenden, wenn keine Kategorie vergeben ist ...

{% assign categories = site.pages | group_by: 'category' %}
{% for category in categories %}
{% assign category_name = page.categories | where: 'name', category.name %}


{% if category_name[0].description  == nil %}
{% if category.name  != "" %}
<h3>{{ category.name }}</h3>
{% endif %}
{% else %}
<h3>{{ category_name[0].description }}</h3>
{% endif %}


<h3>{{ category.name }} - {{ category_name[0].description }}</h3>
{% assign topics = site.pages | where: 'category', category.name | group_by: 'topic' %}
{% for topic in topics %}
{% assign topic_name = category_name[0].topics | where: 'name', topic.name %}
{% if topic_name[0].description And topic_name[0].description != "" And topic_name[0].description != nil %}
<h4>{{ topic_name[0].description }}</h4>
{% else if topic.name != "" %}
<h4>{{topic.name}}</h4>
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