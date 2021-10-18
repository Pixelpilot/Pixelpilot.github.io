---
title: Aufgabe 2 - Javascript und Events - Informationen auslesen
description: Javascript und Events - Informationen auslesen
category: Webentwicklung
topic: Javascript - Teil 1
subtopic: Eingabe und Ausgabe
---

## Aufgabenstellung
Es ist eine einfache Webapp zu erstellen, mit der Informationen, wie zum Beispiel die aktuelle Auflösung des Browserfensters, angezeigt werden können.


### 1. Framework

* Lege die Dateien `screen.css` und `functions.js` an und binde die beiden Dateien in die Datei `index.html` ein.
* Teste, ob die beiden Dateien richtig eingebunden sind, indem du die Hintergrundfarbe des `<body>`-Tags auf
rot setzt und eine Alertbox aufrufst.

### 2. Auslesen der Informationen / Verarbeiten von Events

* Schreibe in der Datei `functions.js` eine Funktion `getDimensions()`. Die Funktion ermittelt die aktuellen Abmessungen des Browserfensters mit den Funktionen `window.innerWidth()` und `window.innerHeight()` und gibt das Ergebnis in der Konsole aus.

```javascript
// JavaScript
function getDimensions() {
    
    // Auslesen der Abmessungen
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    // ...
}
```
* Rufe die Funktion auf, sobald das HTML-Dokument geladen ist. Verwende dazu das Event `onload()`.

```html
<!-- HTML -->
<body onload="getDimensions()">
```

* Erweitere die Funtionalität der App so, dass bei einer Größenänderung des Browserfensters die neuen Abmessungen in der Konsole ausgegeben werden.

### 3. Ausgeben im HTML-Dokument
* Erstelle im html-Dokument ein `<div>`, in dem die Informationen dargestellt werden sollen. Passe das   Aussehen des `<div>`-Elements so an, dass es in etwa der Abbildung entspricht. Schreibe die Abmessungen des Browserfensters in das `<div>`-Element.


### 4. Zusatz / Erweiterungen
* Erstelle ein weiteres `<div>`-Element, in dem eine "History" der erstellten Spezies auflistet.
* Erstellen ein Formular, mit dem man weitere Teilstrings hinzufügen kann.

## Ressourcen

* [W3 schools - JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp){:target="_blank"}
* [mozilla.org - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array){:target="_blank"}