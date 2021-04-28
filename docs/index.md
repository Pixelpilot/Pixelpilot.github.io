## Welcome to GitHub Pages




[Anleitung zum Stylen](https://aregsar.com/blog/2019/how-to-customize-your-github-pages-blog-layout-in-five-minutes/)

[Content](content.md)

[Strings](fsst/strings.md)

You can use the [editor on GitHub](https://github.com/Pixelpilot/Pixelpilot.github.io/edit/main/docs/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Test eigene Sitemap

{% for page in site.pages %}
{% if page.sitemap_exclude != 'y' %}
<div>{{page.title}}: <a href="{{page.url}}">{{page.name}}</a></div>
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
<div>{{page.title}}: <a href="{{page.url}}">{{page.name}}</a></div>
{% endif %}
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



### Mediendesign
<ol>
{% for example in site.mediendesign %}
<li><a href="{{ example.url }}">
{{ example.title }} - {{ example.description }}
</a></li>
{% endfor %}
</ol>

#### Test Kapitel
<ol>
{% assign mediendesign = site.mediendesign | where: 'type', 'chapter' %}
{% for thema in mediendesign %}
<li><a href="{{ thema.url }}">
{{ thema.title }} - {{ thema.description }}
</a></li>
{% endfor %}
</ol>


#### Test Section
<ol>
{% assign mediendesign = site.mediendesign | where: 'type', 'section' %}
{% for thema in mediendesign %}
<li><a href="{{ thema.url }}">
{{ thema.title }} - {{ thema.description }}
</a></li>
{% endfor %}
</ol>
