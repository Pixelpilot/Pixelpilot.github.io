---
title: Aufgabe 1 - Einrichten Entwicklungsumgebung und Installation
description: Wordpress – Verwendung eine CMS

category: Webentwicklung
topic: Wordpress
subtopic: Installation und Entwicklungsumgebung

sitemap_exclude: y

layout: default
---

## Content Management Systeme

Ein Content Management System (CMS) ist eine Software, die es ermöglicht, Inhalte wie Texte, Bilder und Videos einfach zu verwalten und auf einer Website oder einem Blog zu veröffentlichen. WordPress ist eines der am häufigsten verwendeten CMS und wird sowohl von Einzelpersonen als auch von Unternehmen genutzt.

Es ist benutzerfreundlich, flexibel und kostenlos, und es gibt tausende von Themen und Plugins, die es ermöglichen, die Funktionalität und das Aussehen der Website anzupassen. Andere bekannte CMS sind Joomla, Typo3, Drupal oder Shopify.
`cmd+shift+p  --> sftp: config`
## Aufgabenstellung
Es ist eine einfache Webapp zu erstellen, mit der die Grundrechnungsarten trainiert werden können.

![Beispielhafte Umsetzung](img/js_rechentrainer.png)
*Der Rechentrainer soll über Dialog-Boxen realisiert werden.*


### 1. Addition

* Dem Benutzer werden 5 Additionen zur Aufgabe gestellt, die er beantworten muss. Setze das Programm mit Hilfe des Befehls `prompt()` um.

* Gib im Anschluss die Anzahl der richtig beantworteten Aufgaben mit Hilfe des Befehls `alert()` aus.

* Verwende die Funktionen `Math.random()` (Zufallszahl generieren) und `Math.floor()` (Abrunden), um eine Zufallszahl zu generieren.

```javascript
// JavaScript
var zahl;
zahl = Math.random() * 10; // Math.random() liefert eine Kommazahl zwischen 0 - 1
zahl = Math.floor( zahl ) + 1; // Math.floor() rundet eine Kommazahl ab
```
* Verwende die Funktion `parseInt()`, um die Eingaben des Benutzers in Zahlen umzuwandeln.

```javascript
// JavaScript
var zahl;

// Einlesen eines Strings - Annahme: "123"
zahl = prompt ("Gib eine Zahl ein ...");
alert ( zahl + 2 ); // Ausgabe: "1232"

// Umwandeln des Strings in eine Zahl (typecast auf Number() funktioniert auch)
zahl = parseInt ( zahl ); 
alert ( zahl + 2 ); // Ausgabe: 125
```

### 2. Freie Anzahl der Fragen
* Der Benutzer soll die Anzahl der Fragen selbst bestimmen können.

### 3. Weitere Grundrechnungsarten
* Es sollen Aufgaben aus den verschiedenen Grundrechenarten zufällig gestellt werden.

* Gib den Zwischenstand nach jeder Frage aus.

### 4. Zusatz / Erweiterungen
* Zeige das Ergebnis des Rechentrainers mit den Befehlen `document.write()` und `document.writeln()` direkt im Browser an.

* Zeige das Ergebnis in Form eines Balkens an.

## Ressourcen
* [mozilla.org - alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert){:target="_blank"}
* [mozilla.org - prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt){:target="_blank"}
* [mozilla.org - confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm){:target="_blank"}
* [mozilla.org - parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt){:target="_blank"}
* [mozilla.org - Math.random()](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random){:target="_blank"}
* [mozilla.org - Math.floor()](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor){:target="_blank"}
* [mozilla.org - Document.write()](https://developer.mozilla.org/en-US/docs/Web/API/Document/write){:target="_blank"}
* [mozilla.org - Document.writeln()](https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln){:target="_blank"}