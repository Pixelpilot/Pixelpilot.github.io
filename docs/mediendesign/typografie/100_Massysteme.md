---
title: Aufgabe 1 – Masssysteme
description: Typografische & Digitale Maßsysteme
layout: default
category: Mediendesign
topic: Typografie
subtopic: Divers
sitemap_exclude: n
---

# {{ page.title }}



## Theoretische Grundlagen: Maßsysteme & Web-Typografie

Um die Aufgaben zur Typografie und Medientechnik lösen zu können, müssen die Unterschiede zwischen physikalischen, typografischen und digitalen Maßeinheiten verstanden werden.

### 1. Physikalische & Typografische Maße
In der klassischen Typografie (Print) basieren Maße auf festen physikalischen Größen.

* **Inch (Zoll):** 1 Inch entspricht exakt **25,4 mm**.
* **DTP-Punkt (pt):** Der heute übliche Standard (PostScript-Punkt). 
    * **1 pt = 1/72 Inch ≈ 0,3527 mm**.
* **Didot-Punkt (p):** Das alte europäische Maß (oft in der Fachliteratur zu finden).
    * **1 p ≈ 0,376 mm**.
* **Cicero (c):** Besteht aus 12 Didot-Punkten.
    * **1 c ≈ 4,51 mm**.



### 2. Auflösung und Pixeldichte
Digitale Endgeräte arbeiten mit Bildpunkten (Pixeln). Die Qualität der Darstellung hängt von der Dichte dieser Punkte ab.

* **PPI (Pixels Per Inch):** Gibt an, wie viele Pixel auf einer Länge von einem Zoll angeordnet sind.
* **Logische vs. Physische Pixel:** * **Physische Pixel:** Die tatsächlichen Hardware-Leuchtpunkte des Displays.
    * **Logische Pixel (CSS-Pixel):** Eine abstrakte Einheit, die sicherstellt, dass Elemente auf verschiedenen Displays ähnlich groß erscheinen.
* **Device Pixel Ratio (DPR):** Der Faktor, um den physische Pixel die logischen Pixel überlagern. 
    * *Formel:* `Physische Pixel = Logische Pixel * DPR`.



### 3. CSS-Einheiten: Absolut vs. Relativ
Im Webdesign unterscheiden wir zwischen starren Einheiten und Einheiten, die sich an den Kontext anpassen.

#### Absolute Einheiten
Diese haben immer die gleiche Größe (z. B. `px`, `pt`, `mm`). 
* **px (Pixel):** Im Web die Basis-Einheit. 1px entspricht auf Standard-Monitoren 1/96 Inch.

#### Relative Einheiten
Sie sind entscheidend für barrierefreies und responsives Design.
* **em:** Bezieht sich auf die `font-size` des direkten Elternelements.
* **rem (root em):** Bezieht sich immer auf die `font-size` des `<html>`-Elements (Standard im Browser: **16px**).
* **vh / vw (Viewport Units):** 1vw entspricht 1% der aktuellen Fensterbreite.
* **ex / ch:** Beziehen sich auf die x-Höhe oder die Breite des Zeichens "0" der gewählten Schrift.



### 4. Moderne CSS-Funktionen
Moderne Browser erlauben mathematische Berechnungen direkt im Stylesheet, um "flüssige" Typografie zu erstellen.

* **clamp(Minimum, Bevorzugt, Maximum):** Verhindert, dass Schrift auf kleinen Screens zu klein oder auf großen Screens zu riesig wird.
    * *Beispiel:* `font-size: clamp(1rem, 5vw, 2rem);` bedeutet: Die Schrift ist 5% der Viewportbreite groß, aber nie kleiner als 1rem und nie größer als 2rem.



## Teil 1: Klassische & Physikalische Maße (Print-Basis)

> ### Aufgabe 1: Umrechnung DIN-Format
> {: .assignment }
> 
> Drücke das DIN A4-Format (210 mm x 297 mm) in folgenden Einheiten aus:
> * **a)** Inch (Zoll)
> * **b)** DTP-Punkt (pt)

> ### Aufgabe 2: Bildschirmdiagonale
> {: .assignment }
> 
> Ein HD-Monitor wird mit einer Diagonale von 21 Zoll angegeben. 
> * **a)** Berechne die Diagonale in cm.
> * **b)** Berechne die Breite und die Höhe des Bildschirms, wenn die Seitenverhältnisse 16:9 betragen
> * **a)** Berechne die Auflösung des Geräts.

> Gib auf die Breite und

> ### Aufgabe 3: Satzspiegel-Konvertierung
> {: .assignment }
> Ein historisches Dokument hat einen Satzspiegel von 20c x 30c (Cicero). Berechne diese Maße in modernen DTP-Punkten > (pt).



## Teil 2: Auflösung & Pixeldichte (Digital-Basis)

> ### Aufgabe 4: Auflösungseinheiten
> {: .assignment }
> Rechnen Sie die folgenden Auflösungen um:
> * **a)** 72 ppi (Pixels per Inch) in Pixel pro Zentimeter (ppcm).
> * **b)** 160 ppcm in ppi.

> ### Aufgabe 5: High-DPI & Device Pixel Ratio (DPR)
> {: .assignment }
> Ein Smartphone-Display hat eine physische Auflösung von 1080 x 2400 Pixeln bei einer Device Pixel Ratio (DPR) von 3.
> * **a)** Wie groß ist die "logische" Auflösung in CSS-Pixeln (Viewport-Breite)?
> * **b)** Wenn ein Bild mit 400px Breite im CSS definiert ist, wie viele physische Pixel des Displays werden tatsächlich für die Breite genutzt?


## Teil 3: Web-Typografie & Relative Einheiten (CSS)

> ### Aufgabe 6: Absolute Maße in CSS
> {: .assignment }
> Gegeben ist: `p { font-size: 12pt; line-height: 14pt; }`
> * **a)** Handelt es sich um eine relative oder absolute Maßangabe?
> * **b)** Berechnen Sie den Zeilenabstand in Millimetern (mm).

> ### Aufgabe 7: Relative Einheiten (em)
> {: .assignment }
> Gegeben ist: `h1 { font-size: 1.5em; line-height: 1.2em; }`
> * **a)** Erkläre den Unterschied in der Vererbung zwischen `em` und `rem`.
> * **b)** Das Elternelement (z.B. `body`) ist auf 20px eingestellt. Wie groß ist die berechnete Schriftgröße > (`font-size`) der Überschrift in Pixeln?

> ### Aufgabe 8: Root-Einheiten (rem)
> {: .assignment }
> Das Root-Element (`html`) einer Website ist standardmäßig mit 16px definiert. Eine Überschrift soll exakt 28px groß > sein.
> * Berechne den korrekten `rem`-Wert für die CSS-Definition.

> ### Aufgabe 9: Die ex-Einheit & x-Höhe
> {: .assignment }
> Gegeben ist: `h1 { font-size: 2ex; }`
> * **a)** Worauf bezieht sich die Einheit `ex` konkret?
> * **b)** Warum kann die optische Größe eines Textes bei identischer `font-size` (z.B. 16px) zwischen einer *Helvetica* und einer *Garamond* stark variieren?


## Teil 4: Moderne Layout-Funktionen (Advanced)

> ### Aufgabe 10: Fluid Typography mit `clamp()`
> {: .assignment }
> Ein Designer nutzt folgende CSS-Regel für eine responsive Überschrift:  
> `font-size: clamp(1.5rem, 5vw, 3rem);`
> * **a)** Was bewirken die drei Parameter innerhalb der Funktion?
> * **b)** Erkläre, warum diese Methode die Benutzerfreundlichkeit (UX) gegenüber starren Pixel-Werten verbessert.

> ### Aufgabe 11: Viewport-Einheiten
> {: .assignment }
> Berechne die Schriftgröße in Pixeln für ein Element mit `font-size: 10vw;`, wenn der Benutzer die Website auf folgenden > Geräten betrachtet:
> * **a)** Smartphone (Breite: 375px)
> * **b)** Tablet (Breite: 768px)
> * **c)** Desktop (Breite: 1920px)