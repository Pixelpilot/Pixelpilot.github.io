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

### 1. Übung: Temperaturen
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


### 2. Übung: Balkendiagramm
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

### 3. Übung: Diverse Stringfunktionen
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

### 4. Übung: Zwei Arrays verschmelzen
   
Schreibe eine Funktion `merge()` die als Parameter 3 Arrays (`a1`, `a2`, `a3`) übergeben bekommt. 
`a1` und `a2` sollen kombiniert in `a3` kopiert werden so dass a3 genau so viele Elemente enthält wie in Summe in a1 und a2 sind. 
Dabei sollen a1 und a2 aufsteigend sortierte Arrays sein. `a3` soll ebenfalls wieder aufsteigend sortiert sein. 

Verwende nur Zeiger.

Nimm als Basis:
```c
int a1[]={1,3,5,7,9};
int a2[]={2,4,6,8};
int a3[9];
```

### 5. Übung: Wörter aus einem Satz
Schreibe ein Programm, das einen Satz einliest und jedes Wort in einer eigenen Zeile
wieder ausgibt. Als Wortbegrenzung dient das Leerzeichen. Verwende nur Zeiger. Berücksichtige,
dass mehrere Leerzeichen hintereinander und Leerzeichen am Anfang und
am Ende des Satzes vorkommen können.


## Strukturen

### 6. Übung: (Body Mass Index – BMI)
Der Body Mass Index wird nach folgender Formel berechnet:

`BMI = M/(L*L)`

wobei `M` die Körpermasse (in Kilogramm) und `L` die Körpergröße (in Metern) angibt.

#### Strukturen und Funktionen
Schreibe eine Struktur `Person` mit Variablen für Name, Gewicht und Größe sowie Funktionen zur
    * Eingabe,
    * Ausgabe und
    * Berechnung des BMI

Teste die Funktionen durch entsprechende Aufrufe der Funktionen.

#### Erweiterung: Strukturen und Arrays
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
* Berechnung der Durchschnittsgröße
* Berechnung des Durchschnittsgewicht
* Berechnung des durchschnittlichen BMI


#### Erweiterung: Strukturen und Zeiger

Schreibe eine Funktion, die
* einen Zeiger auf die größte Person im Array liefert
* einen Zeiger auf den die Person liefert, die am nähesten beim Durchschnittgewicht liegt

Verwende für diese Funktionen ausschließlich die Zeigerschreibweise. Eckige Klammern sind nicht erlaubt.


## Mehrdimensionale Arrays

### 7. Übung: Spalten- und Zeilensumme
Ergänze folgendes Programm zur Berechnung der Zeilen- und Spaltensummen. 
Die Ergebnisse sollen in einem eindimensionalen Array abgelegt werden.

```c
#include <stdio.h>
#include <conio.h>

#define ZEILEN 3
#define SPALTEN 4

void getSumZeilen(int arr[][SPALTEN],int sum[]);
void getSumSpalten(int arr[][SPALTEN],int sum[]);

void main() {

    int a[][SPALTEN]= { {1,2,3,4},
                        {2,4,6,8},
                        {1,3,5,7} };
                        
    int sum_z[ZEILEN]; // Summe der Zeilen
    int sum_s[SPALTEN]; // Summe der Spalten
    
    getSumZeilen(a,sum_z);
    getSumSpalten(a,sum_s);
    
    for(int i=0;i<ZEILEN;i++)
        printf("Summe der Zeile %d: %d\n", i, sum_z[i]);
    
    for(int i=0;i<SPALTEN;i++)
        printf("Summe der Spalte %d: %d\n", i, sum_s[i]);
        
    getch();
}

void getSumZeilen(int arr[][SPALTEN],int sum[]) {
    // ...
}

void getSumSpalten(int arr[][SPALTEN],int sum[]) {
    // ...
```
