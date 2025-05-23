---
title: Rekursion
description: Stairways to Heaven

category: Fachspezifische Softwaretechnik
topic: Programmieren in Java - Projekte
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}

Du stehst am Fuße der Treppe zum Himmel. Du stellst fest, dass diese aus genau `n=42` Stufen besteht.
Mit jedem Schritt den du nach oben gehst kannst du entweder 1 oder 2 Stufen auf einmal machen.


## Aufgabenstellung

> ### Aufgabe 1: Basisversion
> {: .assignment }
>
> Schreibe eine Funktion `stairwaysToHeaven`, die nachfolgende Fragen beantwortet:
> Wieviele Varianten gibt es, die Stiege genau bis zur letzten Stufen hochzugehen?
>
>Führe die Funktion als rekursive Funktion aus.

**Einige Varianten:**
```bash
...
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,2,1,1,2
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,2,1,1,1,1
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,1,2,2,1
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,1,2,1,2
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,1,2,1,1,1
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,1,1,2,2
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,1,1,2,1,1
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,1,1,1,2,1
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,1,1,1,1,2
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,1,1,1,1,1,1,1,1
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,2,2,1
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,2,1,2
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,2,1,1,1
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,1,2,2
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,1,2,1,1
2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,1,1,2,1
...
```

## Erweiterungen

> ### Aufgabe 2: Ändern der Schrittanzahl
> Schreibe die Funktion so um, dass deine Funktion für mehrere Schrittkombinationen verwendet werden kann.
> {: .assignment }
>
> #### 2 und 3 Schritte
> Wieviele Möglichkeiten gibt es, wenn du 2 bzw. 3 Stufen nehmen kannst?
>
> #### 3 und 4 Schritte
> Wieviele Möglichkeiten gibt es, wenn du 3 bzw. 4 Stufen nehmen kannst?
>
> #### 2, 3 und 4 Schritte
> Wieviele Möglichkeiten gibt es, wenn du 2, 3 bzw. 4 Stufen nehmen kannst?


> ### Aufgabe 3: Bankomat
> Ermittle die Anzahl der Möglichkeiten, die ein Bankomat
> `1000 €` auszahlen kann. Der Bankomat ist mit `5 €`-, `10 €`-, `20 €`-, `50 €`-, `100 €`- und `200 €`-Scheinen bestückt.
> 
> 
> 
> **Hinweis:** Speichere die unterschiedlichen Scheine, die der Automat ausgeben kann, in einem Array.
> 
> `int [] stepSizeList = {5,10,20,50,100,200};`


> ### Aufgabe 4: Laufzeitmessung
> 
> Führe eine Laufzeitmessung für unterschiedlich Beträge, die vom Bankomat abgehoben werden:
> - 100 €
> - 1.000 €
> - 10.000 €
> - 100.000 €
> 
> ```java
> // Starzeitpunkt merken
> long  start = System.nanoTime();
> 
> ...
>
> // Endzeitpunkt merken
> long finish = System.nanoTime();
> 
> // Laufzeit ausgeben
> System.out.println( (finish - start)/1000000000.0 +"s");
> ```

