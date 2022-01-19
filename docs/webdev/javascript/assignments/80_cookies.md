---
title: Aufgabe 5 - Cookies - Aufzeichnen von Benutzerverhalten
description: Javascript - Aufzeichnen von Benutzerverhalten mit Hilfe von Cookies

category: Webentwicklung
topic: Javascript - Teil 2

type: assignment
previewimage: img/canvas_particle.png
layout: default
---

## Aufgabenstellung

Es ist eine einfache Website zu erstellen, die das Benutzerverhalten eines Besuchers aufzeichnet.

![Beispielhafte Umsetzung](img/js_cookies_data.png)

> **ACHTUNG: Chrome erlaubt keine lokalen Daten**
>
> Workaround:
>
> * chrome: `--enable-file-cookies`
> * repl: Open in new Tab (Icon rechts oben)

### 1. Framework

Erstelle alle notwendigen HTML-Element, wie in der Abbildung dargestellt.


Setze die Funktionalität mittels JavaScript um. Achte bei der Programmierung darauf, die Funktionalität soweit möglich zu gliedern und in Funktionen auszulagern.

### 2. Personalisierung
Es soll erkannt werden, ob ein Benutzer schon einmal auf der Seite war oder neu auf der Seite ist.

![Beispielhafte Umsetzung](img/js_cookies_first.png)

Ist der Benutzer das erste Mal auf der Seite, soll er mit `Neu hier? Trag doch gleich deinen
Namen ein!` begrüßt werden.

Auf der Website kann der Benutzer seinen Namen über ein Textfeld eingeben. Der Name soll anschließend in einem Cookie abgespeichert werden.

Hat ein Besucher seinen Namen eingegeben und besucht die Website ein weiteres Mal, soll er mit seinem Namen begrüßt werden (z.B. `Hallo Max!`).

### 3. Löschen von Cookies
Bei Klick auf den Button `Cookies löschen` sollen alle Cookies gelöscht werden, in dem deren `expires`-Wert auf einen Zeitpunkt in der Vergangenheit gesetzt wird.

### 4. Aufzeichnung weiterer Informationen

Zeichne weitere Informationen mit Hilfe von Cookies auf. Alle aufgezeichneten Informationen sollen beim Laden der Seite in einem `<div id="debug">...</div>` ausgegeben werden.

1. Anzahl der Besuche
2. Zeit, die seit dem letzten Besuch vergangen ist
3. Gesamte Zeit, die der Besucher auf der Website gebraucht hat

### 5. Zusatz/Erweiterungen Aufzeichnung von Produkt

Zeichne weitere Informationen über das Benutzerverhalten auf. Simuliere dazu einen einfachen Shop mit einigen Produkten.

* Wie oft hat der Benutzer auf ein Produkt geklickt
* Wie oft hat der Benutzer die Maus über ein Produkt bewegt

![Beispielhafte Umsetzung zur Erfassung von Shopping-Daten](img/js_cookies_shop.png)

## Ressourcen

* [MDN Web Docs - Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)