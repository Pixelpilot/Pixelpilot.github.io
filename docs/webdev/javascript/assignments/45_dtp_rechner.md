---
title: DTP-Einheitenumrechner
description: Javascript - Formulare - Ein- und Ausgabe
category: Webentwicklung
topic: Javascript
subtopic: Eingabe und Ausgabe
---

# Javascript

## Eingabe und Ausgabe (Übungen – DTP-Einheitenumrechner)

![](img/js_css_px2cm.png)
Es ist ein einfaches Formular zu erstellen, mit dessen Hilfe man Bildgrößen basierend auf der Auflösung des Dokuments in dpi von Pixel nach cm umrechnen kann und umgekehrt.

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

**Umrechnungsbasis**
* Pixelanzahl in der Breite = Breite [cm] / 2,54 [cm/i] x Auflösung [dpi]
* Pixelanzahl in der Höhe = Höhe [cm] / 2,54 [cm/i] x Auflösung [dpi]

***Funktionsweise***

* Breite, Höhe und Auflösung des Bildes in die entsprechenden Felder eingeben.
* Ausgangseinheit auswählen (Pixel oder cm) ⟹ Button Klicken ⟹ im Feld ganz
rechts erscheint die Bildgröße umgerechnet in die jeweils andere Einheit.




### 3. Erweiterungen

Implementiere weitere Erweiterungen:
* Eingabe von Kommawerten funtionieren mit `.` und `,` (z.B. `29.7` oder `29,7`)
* Zusätzliches Formularfeld (`<select>`) mit dem man Presets auswählen kann
	* A2 Druck (300 dpi) – Querformat
	* A2 Druck (300 dpi) – Hochformat
	* A3 Druck (300 dpi) – Querformat
	* A3 Druck (300 dpi) – Hochformat
	* A4 Druck (300 dpi) – Querformat
	* A4 Druck (300 dpi) – Hochformat
	* HD (1920 x 1080 px, 96 dpi)
	* 4K (3840 x 2160 px, 96 dpi)
* Grafische Darstellung der eingegebenen Form mittels einem entsprechend gestyltem `<div>`