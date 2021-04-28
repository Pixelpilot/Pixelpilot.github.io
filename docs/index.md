## Welcome to GitHub Pages




[Anleitung zum Stylen](https://aregsar.com/blog/2019/how-to-customize-your-github-pages-blog-layout-in-five-minutes/)


[IF - Conditions](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_conditional_logic.html)

[Pages](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_pages.html)

[Content](content.md)

[Strings](fsst/strings.md)

You can use the [editor on GitHub](https://github.com/Pixelpilot/Pixelpilot.github.io/edit/main/docs/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.


### Sitemap automatisch generiert
{% assign items_grouped = site.pages | group_by: 'category' %}
{% for group in items_grouped %}
<h3>{{group.name}}</h3>
{% for item in group.items %}
<p>{{item.title}}</p>
{% endfor %}
{% endfor %}


### Sitemap automatisch generiert mit 3 Levels
{% assign items_grouped = site.pages | group_by: 'category' %}
{% for group in items_grouped %}
<h3>{{group.name}}</h3>

{% assign sorted-posts = site.pages | where: "category", group.name %}
{% for post in sorted-posts %}
  <li>{{post.title}}</li>
{% endfor %}

{% for item in group.items %}
<p>{{item.title}} <a href="{{item.url}}">{{item.name}}</a>, {{item.category}}, {{item.topic}}</p>

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

{:toc}


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
