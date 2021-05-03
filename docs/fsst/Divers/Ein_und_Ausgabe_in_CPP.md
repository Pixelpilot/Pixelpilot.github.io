---
title: Ein- und Ausgabe in C++
description: Programmieren in C - Divers
layout: default
category: Fachspezifische Softwaretechnik
topic: Programmieren in C
subtopic: Divers
sitemap_exclude: n
---

# {{ page.title }}


Mit der Bibliothek `<iostream>` können mit den Befehlen `cin` und `cout` Variablen unabhängig von deren Datentyp ein- und ausgegeben werden.

```c
#include <iostream>

// statt std::cout kann cout verwendet werden
using namespace std;
```


## Ausgabe von Variablen


```c
// Ausgeben eines Textes
cout << "Hallo Welt";

// Ausgeben von Variablen
int anz = 12;
double pi = 3.1415;
char zeichen = 'c';
char wort[40] = "Hello World!";

cout << anz;

// Mehere Ausgaben in einem Befehl
cout << "Ausgabe\n-------" << endl
	<< "Anzahl: " << anz  << endl
	<< "Kommazahl: " << pi << endl
	<< "Zeichen: " << zeichen << endl
	<< "String: " << wort;
```

## Eingabe von Variablen

```c
// Eingeben von Variablen
cout << "Anzahl? ";
cin >> anz;

cout << "Kommazahl";
cin >> pi;

// Eingeben von Strings
cout << "Wort? ";
cin >> wort;
cin.ignore(1); // 1 Zeichen (Enter) aus dem Tastaturpuffer löschen

// Eingeben von Strings mit Leerzeichen
cout << "Wort mit Leerzeichen? ";
cin.getline ( wort, 40 ); // Maximal 40 Zeichen
```

## Konsole löschen

```c
/**
 *	Löscht das Consolen-Fenster nach Drücken einer Taste
 */
void waitAndClear(){
    cout << "Beliebige Taste drücken, um fortzufahren ...";
    
    cin.ignore(1);    // Enter aus dem Puffer löschen
    cin.clear();      // Eingabe neu initialisieren
    getchar();        // Auf Tastendruck warten 
    system("clear");  // Bildschirm löschen
}
```