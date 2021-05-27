---
title: Mehrdimensionale Arrays - Einfache Übungen
description: Programmieren in C - Teil 2
layout: default
type: assignment
category: Fachspezifische Softwaretechnik
topic: Programmieren in C - Teil 2
subtopic: Mehrdimensionale Arrays
sitemap_exclude: n
---

## 1. Übung: Grundlagen

Lege ein zweidimensionales `int` Array mit 5 Zeilen und 7 Spalten an.

Falls schon besprochen: Lösung mit Hilfe von Funktionen.

- Schreibe durch verschachtelte Schleifen die Zahlen `10,11,12,...` zeilenweise in das Array. Es sollen alle Elemente einen Wert erhalten.

  ```
  10 11 12 13 14 15 16 
  17 18 19 20 21 22 23 
  24 25 26 27 28 29 30 
  31 32 33 34 35 36 37 
  38 39 40 41 42 43 44 
  ```

- Gib das Array zeilenweise aus (das dient auch zum Überprüfen ob die vorangegangene Aufgabe korrekt gelöst wurde).

- Gib das Array spaltenweise aus. Dabei werden die Werte einer Spalte (von oben nach unten gesehen) am Bildschirm in einer Zeile ausgegeben.
  Die erste Zeile der Ausgabe wäre: `10 17 24 31 38`.

- Gib das Array so aus als ob es um 90 Grad nach rechts gedreht worden wäre (D.h. die Spalten von unten nach oben ausgeben).
  Die erste Zeile der Ausgabe wäre: `38 31 24 17 10`.

- Nach der Eingabe eines Zeilen-Index soll die Summe der Elemente in dieser Zeile berechnet und ausgegeben werden.

- Nach der Eingabe eines Spalten-Index soll die Summe der Elemente in dieser Spalte berechnet und ausgegeben werden.



## 2. Übung: Grundlagen Funktionen

Falls in der letzten Aufgabe bereits Funktionen verwendet wurden diese Aufgabenstellung überspringen.

Lege ein 2 dimensionales `int` Array an. Definiere Anzahl der Zeilen und Spalten als globale Konstante (`ZEILEN` und `SPALTEN`). Implementiere die folgenden Funktionen:

- `input()` – Werte zeilenweise ins Array eingeben.
- `output_z()` – Array ausgeben (zeilenweise).
- `output_s()` – Array ausgeben (spaltenweise).
- `sum()` – Die Summe über alle Elemente des Arrays bilden.


## 3. Übung: Diverse Funktionen

Schreibe Funktionen für:
- Summe einer Zeile berechnen (Zeilenindex ist Parameter).
- Summe einer Spalte berechnen (Spaltenindex ist Parameter).
- Den Index der Zeile mit der größten Zeilensumme zurückgeben.
- Den Index der Spalte mit der größten Spaltensumme zurückgeben.
- Die Anzahl der Spalten ermitteln in denen alle Zahlen gleich sind.


## 4. Übung: Damenproblem

Beim sogenannten Damenproblem sollen auf einem Schachbrett acht Damen aufgestellt werden so dass diese sich nicht gegenseitig schlagen können. Schreibe ein Programm dass prüft ob eine Lösung für dieses Problem korrekt ist. Das Schachbrett wird durch ein zweidimensionalen Array dargestellt. Eine 1 zeigt an, dass dort eine Dame steht, 0 bedeutet eine leeres Feld.

Aufgaben:
- Schreibe eine Funktion die in einem gegebenen zweidimensionalen Array prüft ob in jeder Zeile nur ein einziger 1er steht (und sonst lauter 0er).
- Erweitere für alle Spalten.
- Berücksichtige auch alle Diagonalen.

 ```c
int feld[][8] = {
    {0,0,0,0,0,0,0,1},
    {0,0,0,1,0,0,0,0},
    {1,0,0,0,0,0,0,0},
    {0,0,1,0,0,0,0,0},
    {0,0,0,0,0,1,0,0},
    {0,1,0,0,0,0,0,0},
    {0,0,0,0,0,0,1,0},
    {0,0,0,0,1,0,0,0}
};
 ```

## 5. Übung: Tic Tac Toe

Schreibe ein Programm mit dem 2 Personen Tic Tac Toe spielen können.
Erweiterungen:  
- Man kann gegen den Computer spielen.
- Dabei kann der Computer zufällige Züge wählen oder intelligent sein.