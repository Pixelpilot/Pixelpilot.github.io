---
title: Inhalte Gesammelt
description: Christian Hanl, HTL Braunau
layout: default
categorytitles:
  - mediendesign: 
    description: 'Mediendesign'
    topics:
        - illustration
          description: 'Illustration mit Adobe Illustrator'
  - fsst: 
    description: Fachspezifische Softwaretechnik
---

# HTL Braunau, HTL Braunau

1

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