---
title: Selfcheck
description: Programmieren in C - Teil 2
layout: default
type: assignment
category: Fachspezifische Softwaretechnik
topic: Programmieren in C - Teil 2
subtopic: Recap
sitemap_exclude: n
---

Folgende Aufgaben sollten nach der 2. Klassen ohne Probleme umgesetzt werden können.

# 1. Arrays

## 1.1 Temperaturen
Es werden Temperatur-Messreihen erfasst. Schreibe ein Programm temp, das es ermöglicht
diese Temperaturen in einem Array abzuspeichern. Verwende den Datentyp `double`.
Mit der Eingabe von `100` kann der Benutzer die Eingabe abschließen. Maximal können
10 Temperaturen eingegeben werden. Das Programm soll ausgeben:

1. alle eingegebenen Temperaturen,
2. die Durchschnittstemperatur,
3. die Minimal- und die Maximal-Temperatur,
4. die Differenz zwischen Minimal- und Maximal-Temperatur,
5. der Index der Minimal- und Maximaltemperatur.

Teile das Programm sinnvoll in Funktionen auf. Verwende keine globalen Variablen.


## 1.2 Balkendiagramm
Schreibe ein Programm mit dem horizontale Balkendiagramme ausgegeben werden können.
Die Länge der Balken sind in einem Array vorgegeben:

```c
#define ANZ 4
void zeigeBalken(int balken[], int n);
void main()
{
int balken[]={7,2,6,4};
zeigeBalken(balken, ANZ);
...
```

Ausgabe:
```c
*******
**
******
****
```
Implementiere `zeigeBalken()`.


# 2. Strings

## 2.1 Diverse String
Falls eine Veränderung gefragt ist soll diese im übergebenen String stattfinden
und nicht in einen weiteren String kopiert werden!

1. `strcvoc` — Anzahl der Selbstlaute in einem Text zählen.
1. `strrchr` — das letzte Vorkommen eines Zeichens suchen.
1. `strrotateleft` — Um eine Stelle nach links rotieren
1. `strrotateright` — Um eine Stelle nach rechts rotieren
1. `strmix` — mischt 2 alphabetisch sortierte Strings zu einem Dritten, der ebenfalls
sortiert sein soll.
1. `strinsert` — Ein Zeichen an einer bestimmten Position einfügen, Zeichen dahinter
rutschen nach rechts.
1. `strdel` — Zeichen an einer bestimmten Position „löschen“, Zeichen dahinter rücken
auf.

# 3. Zeiger



# 3. Strukturen

# 4. Arrays mit Strukturen
