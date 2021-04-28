---
title: Inhalte Gesammelt
description: Christian Hanl, HTL Braunau
layout: default
---

# HTL Braunau, HTL Braunau

## Inhaltsverzeichnis

{% assign category = site.pages | group_by: 'category' %}
{% for group in category %}
<h3>{{group.name}}</h3>
{% for page in group.items %}
{% assign topic_name = page.topic %}
{% if topic_name != topic_name_old %}
<h4>{{ topic_name }}</h4>
{% endif %}
{% if page.sitemap_exclude != 'y' %}
<li><a href="{{page.url}}">{{page.description}}</a></li>
{% endif %}
{% assign topic_name_old = page.topic %}
{% endfor %}
{% endfor %}


## Inhaltsverzeichnis

{% assign categories = site.pages | group_by: 'category' %}
{% assign topics = site.pages | group_by: 'topic' %}

{% for group in categories %}
<h3>{{group.name}}</h3>
{% for page in group.items %}
{% assign topic_name = page.topic %}
{% if topic_name != topic_name_old %}
<h4>{{ topic_name }}</h4>
{% endif %}
{% if page.sitemap_exclude != 'y' %}
<li><a href="{{page.url}}">{{page.description}}</a></li>
{% endif %}
{% assign topic_name_old = page.topic %}
{% endfor %}
{% endfor %}