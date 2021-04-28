## Welcome to GitHub Pages




[Anleitung zum Stylen](https://aregsar.com/blog/2019/how-to-customize-your-github-pages-blog-layout-in-five-minutes/)

[IF - Conditions](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_conditional_logic.html)

[Pages](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_pages.html)

[Filters](https://blog.webjeda.com/jekyll-filters/)

[Sitemap with plugin - Github](https://github.com/allejo/jekyll-toc)


### Sitemap with plugin


### Sitemap automatisch generiert
{% assign items_grouped = site.pages | group_by: 'category' %}
{% for group in items_grouped %}
<h3>{{group.name}}</h3>
{% for item in group.items %}
<p>{{item.title}}</p>
{% endfor %}
{% endfor %}




### Test eigene Sitemap

{% for page in site.pages %}
{% if page.sitemap_exclude != 'y' %}
<div>{{page.title}}: <a href="{{page.url}}">{{page.name}}</a>, {{page.category}}, {{page.topic}}</div>
{% endif %}
{% endfor %}


#### FSST
{% for page in site.pages %}
{% if page.category == 'fsst' %}
<div>{{page.title}}: <a href="{{page.url}}">{{page.name}}</a></div>
{% endif %}
{% endfor %}


#### Mediendesign
{% for page in site.pages %}
{% if page.category == 'mediendesign' %}
<div>{{page.title}}: <a href="{{page.url}}">{{page.name}}</a>, {{page.topic}}</div>
{% endif %}
{% endfor %}

---

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
