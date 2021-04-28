## Welcome to GitHub Pages




[Anleitung zum Stylen](https://aregsar.com/blog/2019/how-to-customize-your-github-pages-blog-layout-in-five-minutes/)

[IF - Conditions](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_conditional_logic.html)

[Pages](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_pages.html)

[Filters](https://blog.webjeda.com/jekyll-filters/)

[Sitemap with plugin - Github](https://github.com/allejo/jekyll-toc)


### Sitemap automatisch generiert
{% assign category = site.pages | group_by: 'category' %}
{% for group in category %}
<h3>{{group.name}}</h3>
{% for page in group.items %}
{% assign topic_name = page.topic %}
{% if topic_name != topic_name_old %}
<h4>{{ topic_name }}</h4>
{% endif %}
{% if page.sitemap_exclude != 'y' %}
<div>{{page.title}}: <a href="{{page.url}}">{{page.name}} {{page.description}}</a></div>
{% endif %}
{% assign topic_name_old = page.topic %}
{% endfor %}
{% endfor %}



##### Mediendesign mit "WHERE"
{% assign category-pages = site.pages | where: "category","mediendesign" %}
{% for page in category-pages %}
<div>{{page.title}}: <a href="{{page.url}}">{{page.name}}</a>, {{page.topic}}</div>
{% endfor %}


##### Mediendesign - Illustration
{% for page in site.pages %}
{% if page.category == 'mediendesign' and page.topic == 'illustration' %}
<div>{{page.title}}: <a href="{{page.url}}">{{page.name}}</a></div>
{% endif %}
{% endfor %}


### Test Collections
<ol>
{% for example in site.examples %}
<li><a href="{{ example.url }}">
{{ example.title }} - {{ example.description }}
</a></li>
{% endfor %}
</ol>
