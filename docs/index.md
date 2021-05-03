---
title: Skripten Christian Hanl
description: HTL Braunau
layout: default
hide_toc: y
---

<div class="sitemap">
{% assign categories = site.pages | group_by: 'category' %}
{% for category in categories %}
{% if category.name != "" %}
<h2 id="{{ category.name }}">{{ category.name }}</h2>
{% endif %}
{% assign topics = site.pages | where: 'category', category.name | group_by: 'topic' %}
{% for topic in topics %}
{% if topic.name != "" %}
<h3 id="{{topic.name}}">{{topic.name}}</h3>
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