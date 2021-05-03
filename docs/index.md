---
title: Skripten Christian Hanl
description: HTL Braunau
layout: default
---

<div class="sitemap">
{% assign categories = site.pages | group_by: 'category' %}
{% for category in categories %}
{% assign category_name = page.categories | where: 'name', category.name %}
{% if category_name[0].description == nil %}
{% if category.name  != "" %}
<h3 id="{{ category.name }}">{{ category.name }}</h3>
{% endif %}
{% else %}
<h3 id="{{ category_name[0].description }}">{{ category_name[0].description }}</h3>
{% endif %}
{% assign topics = site.pages | where: 'category', category.name | group_by: 'topic' %}
{% for topic in topics %}
{% assign topic_name = category_name[0].topics | where: 'name', topic.name %}
{% if topic_name[0].description And topic_name[0].description != "" And topic_name[0].description != nil %}
<h4>{{ topic_name[0].description }}</h4>
{% else if topic.name != "" %}
<h4 id="{{topic.name}}">{{topic.name}}</h4>
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
</div>