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

* `append()` – fügt einen Knoten am Ende der Liste an
* `prepend()` – fügt einen Knoten am Anfang der Liste ein
* `count()` – liefert die Anzahl der Knoten in der Liste
* `print()` – gibt die Daten aller Knoten im Ausgabefenster aus
* `delete()` – löscht einen Knoten aus der Liste
* `get()` – liefert einen Knoten mit einem bestimmten Index
* `moveForward()` – bewegt einen Knoten um eine Position Richtung Anfang
* `moveBackward()` – bewegt einen Knoten um eine Position Richtung Ende

Lege im `main()` eine Instanz der Klasse `List` an und teste die einzelnen Methoden ausführlich.


## Dateiverwaltung: Lesen und Schreiben der Daten

Erweitere die Klasse `List`, so dass die Inhalte der verketteten Liste aus einer Datei gelesen und in eine Datei geschrieben werden können. In jeder Zeile der Datei steht ein Produkt der Einkaufsliste:
```
1;kg;Brot
4;Liter;Milch
20;dag;Edamer
```

Erstellen in der Klasse `List` einen Konstruktor `public List (String file)` und speichere den Dateinamen in einer Instanzvariable.

Implementiere folgende Methoden:
* `loadFromFile ()` – Liest die Textdatei zeilenweise ein und fügt die Einträge der Liste hinzu. 

* `saveToFile ()` – Schreibt alle Knoten der Liste in die Textdatei

Wird das Programm gestartet, soll die Liste mittels `loadFromFile ()` befüllt werden.

Wird das Programm beendet, soll die aktuelle Liste mittels `saveToFile ()` in die Textdatei geschrieben werden, sodass die Änderungen beim neuerlichen Start der App berücksichtigt werden.




## Grafische Benutzeroberfläche: Verwalten der Einkaufsliste

Erstelle eine Klasse `View`, mit der die Einträge in der verketteten List dargestellt und verändert werden können.

Erstelle einen Konstruktor `public View(List data)`, wobei `data` eine Referenz auf die verkettete Liste beinhaltet. 

```Java
public static void main(String[] args) {
    
    List myList = new List( "list.txt");
    myList.loadFromFile();
    myList.print();
    
    View myView = new View ( myList );
    myView.create();
}
```


Erstelle die grafische Oberfläche wie oben angegeben unter Verwendung des `FlowLayout`–Managers und rufe bei Klick auf die Buttons die entsprechenden Methoden der referenzierten verketteten Liste auf.
