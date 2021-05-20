---
title: Todo
description: Zu erledigen

sitemap_exclude: y

---


# Todo

- [x] [Setting up Tags](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_tags.html)
- [x] [Anleitung zum Stylen](https://aregsar.com/blog/2019/how-to-customize-your-github-pages-blog-layout-in-five-minutes/)
- [x] [IF - Conditions](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_conditional_logic.html)
- [x] [Pages](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_pages.html)
- [x] [Filters](https://blog.webjeda.com/jekyll-filters/)
- [x] [Sitemap with plugin - Github](https://github.com/allejo/jekyll-toc)

### Lokale Installation von Jekyll

#### Installation
```
// Terminal
% jekyll new neues_verzeichnis
```


#### Ausführen und Ausliefern der Seite
```
// Terminal
% cd /Users/hanlch/Dropbox/Job/GitHub\ Pages/docs
% bundle exec jekyll serve
```



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
