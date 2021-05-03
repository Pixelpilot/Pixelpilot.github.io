---
title: Todo
description: Zu erledigen
category: todo
topic: github
sitemap_exclude: y

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

# Todo

- [ ] [Setting up Tags](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_tags.html)
- [ ] [Anleitung zum Stylen](https://aregsar.com/blog/2019/how-to-customize-your-github-pages-blog-layout-in-five-minutes/)
- [ ] [IF - Conditions](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_conditional_logic.html)
- [ ] [Pages](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_pages.html)
- [ ] [Filters](https://blog.webjeda.com/jekyll-filters/)
- [ ] [Sitemap with plugin - Github](https://github.com/allejo/jekyll-toc)

### Diverse Inhalte:

[https://unicode-table.com/de/sets/arrow-symbols/](https://unicode-table.com/de/sets/arrow-symbols/)

* ⟵ ⟶
* ⟸ ⟹
* ☚ ☛
* ⇐ ⇒
* ⇦ ⇨
* ➮ ➜
* ⇄ ⇆ ⇅ ⇋ ⇌

### Arrows: ☛ ⇐ ⇒ ⇦ ⇨ ➮ ➜ ⇄ ⇆ ⇅ ⇋ ⇌

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

## Inhaltsverzeichnis (Backup mit Categorie Tags im Header)
<div class="sitemap">
{% assign categories = site.pages | group_by: 'category' %}
{% for category in categories %}
{% assign category_name = page.categories | where: 'name', category.name %}
{% if category_name[0].description == nil %}
{% if category.name  != "" %}
<h3>{{ category.name }}</h3>
{% endif %}
{% else %}
<h3>{{ category_name[0].description }}</h3>
{% endif %}
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
</div>

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



### Mediendesign
<ol>
{% for example in site.mediendesign %}
<li><a href="{{ example.url }}">
{{ example.title }} - {{ example.description }}
</a></li>
{% endfor %}
</ol>


### TODO

- [x] [Check collections](https://jekyllrb.com/docs/collections/)
- [ ] Sitemap als `_includes`-Snippet 
- [ ] Sitemap in `_layouts` integrieren
- [x] Plugin zum Kopieren von Bildern aus dem Zwischenspeicher (*Paste Images into Markdown*)
- [ ] Markdown Example Page erstellen (auch mit `Kramdown` Anweisungen)
- [x] Check nach Tag gruppieren - Geht für Pages nicht


```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) - ![Image](src)
```


### Listing mit Zeilennummern
{% highlight c linenos %}
for ( int i = 0; i < 100; i ++ ) {
printf ("Hallo Welt");
}
{% endhighlight %}


### Listing ohne Zeilennummern
```c
for ( int i = 0; i < 100; i ++ ) {
  printf ("Hallo Welt");
}
```


For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Pixelpilot/Pixelpilot.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
