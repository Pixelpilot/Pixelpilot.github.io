# Arrays von Strukturen

[Zur Übersicht](../index.md)

{% for page in site.pages %}
{% if page.sitemap_exclude != 'y' %}
<div>{{page.title}}: <a href="{{page.url}}">{{page.name}}</a></div>
{% endif %}
{% endfor %}

## Test weitere Seiten im gleichen Verzeichnis
{% for pg in site.pages %}
{% if  pg.dir == page.dir %}
<div>{{pg.dir}} - {{pg.title}}: <a href="{{pg.url}}">{{pg.name}}</a></div>
{% endif %}
{% endfor %}




```c
char wort[] = "Hallo";
```
