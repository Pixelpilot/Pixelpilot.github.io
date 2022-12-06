---
title: Einkaufsliste
description: Grafische Oberfläche in Java

category: Fachspezifische Softwaretechnik
topic: Programmieren in Java - Projekte
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}


Es soll ein Programm erstellt werden, mit dem man eine Einkaufsliste verwalten kann. Die einzelnen Produkte  auf der Liste sollen in einer Datei gespeichert werden.

Während der Programmausführung sollen die einzelnen Produkte in Form einer einfach verketteten Liste abgebildet werden. Die Verwaltung der Produkte soll über eine grafische Benutzeroberfläche ermöglicht werden.

![](img/Shoppinglist_GUI.png)


## Verkette Liste
Erstelle die Klassen `List` und `Node` und implementiere die notwendigen Methoden zur Verwaltung der Produkte:


\begin{tabularx}{\linewidth}{@{}l@{}X@{}}
* `append()` - fügt einen Knoten am Ende der Liste an
* `prepend()` – fügt einen Knoten am Anfang der Liste ein
* `count()!` – liefert die Anzahl der Knoten in der Liste
* `print()` – gibt die Daten aller Knoten im Ausgabefenster aus
* `delete()` – löscht einen Knoten aus der Liste
* `get()` – liefert einen Knoten mit einem bestimmten Index
* `moveForward()` – bewegt einen Knoten um eine Position Richtung Anfang
* `moveBackward()` – bewegt einen Knoten um eine Position Richtung Ende

Lege im `main()` eine Instanz der Klasse `List` an und teste die einzelnen Methoden ausführlich.


## Dateiverwaltung: Lesen und Schreiben der Daten

Erstelle eine Klasse `ListFileManager` an, mit der die Inhalte der verketteten Liste in eine Datei geschrieben und aus einer Datei gelesen werden können. In jeder Zeile der Datei steht ein Produkt der Einkaufsliste. Implementiere dazu folgende statische Methoden:

`loadFromFile (String file, List data)`
Liest die Datei `file` zeilenweise ein und fügt die Einträge der Liste `data` hinzu.


`saveToFile (String file, List data)`
Schreibt alle Knoten der Liste `data` in die Datei `file`.


Test die Methoden in `main()` um eine Einkaufsliste aus einer Datei zu laden und in eine Datei zu speichern.

## Grafische Benutzeroberfläche: Verwalten der Einkaufsliste

Erstelle eine Klasse `View`, mit der die Einträge in der verketteten List dargestellt und verändert werden können.

Erstelle einen Konstruktor `public View(String file, List data)`, wobei `file` den Dateinamen und \inline!data! eine Referenz auf die verkettete Liste beinhalten. \newline
\newline
Erstelle die grafische Oberfläche unter Verwendung des \inline!FlowLayout!–Managers und rufe bei Klick auf die Buttons die entsprechenden Methoden der referenzierten verketteten Liste auf.\newline
\newline
Speichere nach jeder Aktion die veränderte Liste in der angegebenen Datei.}


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

### C++

```c
/**
 *	Löscht das Consolen-Fenster nach Drücken einer Taste (C++)
 */
void waitAndClear() {
    cout << "Beliebige Taste drücken, um fortzufahren ...";
    
    cin.ignore(1);    // Enter aus dem Puffer löschen
    cin.clear();      // Eingabe neu initialisieren
    getchar();        // Auf Tastendruck warten 
    system("clear");  // Bildschirm löschen
}
```

### C

```c
/**
*	Löscht das Consolen-Fenster nach Drücken einer Taste (C)
*/
 void waitAndClear() {

     printf ("Beliebige Taste drücken, um fortzufahren ...\n");
     
     scanf("%*c");      // Tastaturpuffer löschen
     getchar();	        // Auf Tastendruck warten
     system("clear");   // Bildschirm löschen
 }
```