---
title: Aufgabe 3 - JavaScript und Events - Informationen auslesen
description: JavaScript und Events - Informationen auslesen
category: Webentwicklung
topic: JavaScript - Teil 1
subtopic: Eingabe und Ausgabe
layout: default
---

## JavaScript und Events

### Was sind Events in JavaScript?

Events sind Aktionen oder Vorfälle, die innerhalb des Browsers geschehen und von JavaScript erkannt werden können. Beispiele für solche Ereignisse sind das Klicken auf eine Schaltfläche, das Bewegen des Mauszeigers oder das Drücken einer Taste auf der Tastatur.

### Arten von Events
1. **Maus-Events**: `click`, `mouseover`, `mouseout`, `mousedown`, `mouseup`, `mousemove`
2. **Tastatur-Events**: `keydown`, `keyup`, `keypress`
3. **Formular-Events**: `submit`, `change`, `focus`, `blur`
4. **Dokument/Window-Events**: `load`, `resize`, `scroll`, `unload`

### Event-Listener hinzufügen
Um auf ein Event zu reagieren, müssen wir zunächst einen Event-Listener für das spezifische Event an ein Element binden.

#### Methode 1: JavaScript-Funktionsaufruf in HTML einbinden
Das entsprechende Event wird direkt im HTML-Quelltext als Attribut des Elements eingefügt, das das Event auslösen soll.

```html
<!-- HTML -->
<button onclick="sayHello();"></button>
```
```javascript
// JavaScript
function sayHello(){
    console.log ("Hello World!");
}
```

#### Methode 2: EventListener per JavaScript hinzufügen

Das Event wird per JavaScript auf ein Element gelegt. Das hat den Vorteil, dass das naträglich – also nicht nur beim Laden der Seite – passieren kann.

```javascript
// JavaScript
element.addEventListener(event, function);
```
- `element`: Das HTML-Element, an das der Event-Listener gebunden wird.
- `event`: Der Name des Events (z.B. `"click"`).
- `function`: Die Funktion, die aufgerufen wird, wenn das Event auftritt.

```html
<!-- HTML -->
<button id="btHello"></button>
```
```javascript
// JavaScript

// Variante 1: Funktion als Parameter
const button = document.getElementById("btHello");
button.addEventListener("click", function() {
    console.log ("Hello World!");
});

// Variante 2: Funktionsname übergeben
const button = document.getElementById("btHello");
button.addEventListener("click", sayHello);
```

### Das Event-Objekt
Wenn ein Event auftritt, wird ein Event-Objekt erzeugt, das Informationen über das Event enthält. Dieses Objekt wird automatisch an die Event-Handler-Funktion übergeben.

```javascript
button.addEventListener("click", function(event) {
    // zeigt das Element, das geklickt wurde
    console.log(event.target); 
});
```

#### Beispiel: Auslesen der Mouse-Position

Die Mausposition kann über das Event-Objekt mit den Eigenschaften `event.clientX` und  `event.clientY`ausgelesen werden. Der Event-Listener wird dem gesamten `document` hinzugefügt und reagiert auf das `mousemove`-Event, also jeder Bewegung der Maus.

```javascript
// Event-Listener für das 'mousemove'-Event auf das gesamte Dokument
document.addEventListener("mousemove", function(event) {
    
    // Zugriff auf die Mausposition
    const x = event.clientX;
    const y = event.clientY;

    // Anzeige der Mausposition in der Konsole
    console.log ("Mausposition: X - " + x + ", Y - " + y );
});
```

## Aufgabenstellung
{: .assignment }

Es ist eine einfache Web-Applikation zu erstellen, mit der Informationen, wie zum Beispiel die aktuelle Auflösung des Browserfensters in der Konsole ausgegeben werden können.

### 1. Framework
{: .assignment }

* Lege die Dateien `style.css` und `script.js` an und binde die beiden Dateien in die Datei `index.html` ein.
* Teste, ob die beiden Dateien richtig eingebunden sind, indem du die Hintergrundfarbe des `<body>`-Tags auf
rot setzt und eine Alertbox aufrufst.

### 2. Button geklickt
{: .assignment }

#### Event-Listener als Parameter
Erstelle in HTML einen Button. Weise dem Button den `click`-Event direkt als Attribut zu.

Bei Klick auf den Button soll in der Konsole folgender Text ausgegeben werden. Bei jedem Klick soll die Anzahl erhöht werden:
```console
Du hast schon 1 mal auf den Button geklickt!
```

#### Event-Listener per JavaScript
Erstelle in HTML einen weiteren Button. Erstelle direkt in JavaScript mit der Methode `addEventlistener` ein `mousenter`-Event für diesen Button.

Wird die Maus über den Button bewegt, soll in der Konsole folgender Text ausgegeben werden:
```console
Du hast die Maus schon 4 mal über den Button bewegt!
```


### 3. Auslesen der Informationen / Verarbeiten von Events
{: .assignment }

Schreibe in der Datei `script.js` eine Funktion `getDimensions()`. Die Funktion ermittelt die aktuellen Abmessungen des Browserfensters mit den Eigenschaften des `window`-Objekts `window.innerWidth` und `window.innerHeight`. Gib das Ergebnis in der Konsole aus.

```javascript
// JavaScript
function getDimensions() {
    
    // Auslesen der Abmessungen
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // ...
}
```

* Rufe die Funktion auf, sobald das HTML-Dokument geladen ist. Verwende dazu das Event `onload()` und weise es dem `body`-Objekt zu.

```html
<!-- HTML -->
<body onload="getDimensions();">
```

* Erweitere die Funktionalität der App so, dass bei einer Größenänderung des Browserfensters die neuen Abmessungen in der Konsole ausgegeben werden.
* Erweitere die Funktionalität der App so, dass beim Laden der Seite die aktuelle Uhrzeit und das aktuelle Datum in der Konsole ausgegeben wird.

### 4. Zusatz / Erweiterungen
Implementiere folgende Erweiterungen. Achte dabei auf eine saubere Ausgabe in der Konsole und verwende auch `console.group()` dafür:

* Ermittle die Position und die Abmessungen des `<div>`-Elements und gib dessen Größe in der Konsole aus.
* Zeige das aktuelle Datum im Format `Wochentag, dd.mm.yyyy` an.
* Zeige die aktuelle Uhrzeit im Format `hh:mm:ss` an.
* Zeige die Mausposition an.

## Ressourcen

* [W3 schools - HTML DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp){:target="_blank"}
* [W3 schools - The HTML DOM Element Object](https://www.w3schools.com/jsref/dom_obj_all.asp){:target="_blank"}
