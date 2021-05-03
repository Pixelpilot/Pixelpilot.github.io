---
title: Strukturen und Arrays - Übungen - BMI
description: Programmieren in C - Teil 2
layout: default
category: Fachspezifische Softwaretechnik
topic: Programmieren in C - Teil 2
subtopic: Aufgabe - Strukturen und Arrays
sitemap_exclude: n
---

# {{ page.title }}


----
### 1. Übung (Body Mass Index – BMI):
Der Body Mass Index wird nach folgender Formel berechnet:

`BMI = M/(L*L)`

wobei `M` die Körpermasse (in Kilogramm) und `L` die Körpergröße (in Metern) angibt.

Schreibe:
* eine Struktur `Person` mit Variablen für Name, Gewicht und Größe,
  Funktionen zur
    * Eingabe,
    * Ausgabe und
    * Berechnung des BMI.
    
----

### 2. Übung (Bewertung des BMI):
Schreibe eine Funktion die ausgibt ob eine Person Unter-, Normal oder Übergewichtig ist. Ein Wert von 18.5−25.0 gilt als Normalgewicht, kleinere Werte bedeuten Untergewicht, größere Übergewicht.


----

### 3. Übung (Geschlecht):
Männer haben in der Regel einen etwas höheren Anteil von Muskelmasse an der Gesamtkörpermasse als Frauen.

Laut Deutscher Gesellschaft für Ernährung ist das Normalgewicht bei Männern im Bereich 20−25 kg/m2, und bei Frauen 19−24 kg/m2 (Quelle: wikipedia)

Berücksichtige dies bei der Bewertung des BMI.

----

### 4. Übung (Mehrere Personen):

Erweitere das Programm so, dass bis zu 5 Personen verwaltet werden können. Verwende dazu ein Array mit `Person`.

Initialisiere das Array mit folgenden Daten:
```
"Hans", 78.8, 1.78, 'm'
"Franz", 88.8, 1.82, 'm'
"Eva", 52.4, 1.67, 'w'
"Laura", 64.0, 1.42, 'w'
"Georg", 58.8, 1.98, 'm'
```

Schreibe Funktionen zur
* Ausgabe aller Personen inklusive deren BMI und dem Hinweis Unter-, Normal oder Übergewichtig
* Berechnung der Durchschnittgröße
* Berechnung des Durchschnittgewichts
* Berechnung des durchschnittlichen BMI

----

### 5. Übung (Anlegen weiterer Personen):

Erweitere das Programm so dass zuerst bis zu 10 Personen (oder auch weniger) eingegeben werden können. 