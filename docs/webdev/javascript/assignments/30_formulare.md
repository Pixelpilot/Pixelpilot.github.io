---
title: Aufgabe 5 - JavaScript und Formulare - Währungsumrechner
description: JavaScript und Formulare - Ein- und Ausgabe
category: Webentwicklung
topic: JavaScript - Teil 1
subtopic: Eingabe und Ausgabe
layout: default
---

## Aufgabenstellung
Es ist ein einfaches Formular zu erstellen, mit dessen Hilfe man Euro nach Dollar umrechnen kann.
![Währungsrechner](./img/dollar2euro.png)
*Beispielhafte Umsetzung*


### 1. HTML und CSS

Umsetzen des Umrechners in HTML, Stylen der Elemente mit CSS:
* Eingabe mittels Formularfelder und Buttons
* Ausgabe über ein Formularfeld, das Attribut `disable="true"` gesetzt hat
*	Stylesheets in eigener Datei
*	Einsatz von verschiedenen „CSS-Arten“
	 * Element – z.B.: `h1 { ... }`
	 * Klasse – z.B.: `.rounded {}`
	 * Id – z.B.: `#container {}`



### 2. JavaScript

Umsetzen der Funktionalität in JavaScript:

* Bei Klick auf den Button `Umrechnen` wird der Dollarwert entsprechend dem akutellen Dollarkurs berechnet und ausgegeben. Definiere den aktuellen Dollarkurs mit einer globalen Variable.
* Bei Klick auf den Button `Reset` sollen die beiden Formularfelder gelöscht werden.



### 3. Zusatz / Erweiterungen

Implementiere weitere Funktionalitäten:
* Zusätzliches Formularfeld, um den aktuellen Dollarkurs anpassen zu können
* Umschalter `Dollar ⟹ Euro` und `Euro ⟹ Dollar` 
* Zusätzliche Währungen dazugeben (z.B.: Pfund)
* Umrechner zwischen Zahlensystemen ...

![Dezimal nach Binär](./img/decimal2binary.png){:width="480px"}

## Ressourcen
* [mozilla.org - HTMLFormElement](https://developer.mozilla.org/de/docs/Web/API/HTMLFormElement){:target="_blank"}