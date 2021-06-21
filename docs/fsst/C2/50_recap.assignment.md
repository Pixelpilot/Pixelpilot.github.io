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

## Arrays

### 1.Temperaturen
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


### 2. Balkendiagramm
Schreibe ein Programm mit dem horizontale Balkendiagramme ausgegeben werden können.
Die Länge der Balken sind in einem Array vorgegeben:

```c
#define ANZ 4
void zeigeBalken(int balken[], int n);
void main() {
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


## Strings

### 3. Diverse Stringfunktionen
Falls eine Veränderung gefragt ist soll diese im übergebenen String stattfinden  und nicht in einen weiteren String kopiert werden!

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

## Zeiger

### 4. Zwei Arrays verschmelzen
   
Schreibe eine Funktion `merge()` die als Parameter 3 Arrays (`a1`, `a2`, `a3`) übergeben bekommt. 
`a1` und `a2` sollen kombiniert in `a3` kopiert werden so dass a3 genau so viele Elemente enthält wie in Summe in a1 und a2 sind. 
Dabei sollen a1 und a2 aufsteigend sortierte Arrays sein. `a3` soll ebenfalls wieder aufsteigend sortiert sein. 

Nimm als Basis:
```c
int a1[]={1,3,5,7,9};
int a2[]={2,4,6,8};
int a3[9];
```

### 5. Wörter aus einem Satz
Schreibe ein Programm, das einen Satz einliest und jedes Wort in einer eigenen Zeile
wieder ausgibt. Als Wortbegrenzung dient das Leerzeichen. Verwende nur Zeiger. Berücksichtige,
dass mehrere Leerzeichen hintereinander und Leerzeichen am Anfang und
am Ende des Satzes vorkommen können.


## Strukturen


## Arrays mit Strukturen
