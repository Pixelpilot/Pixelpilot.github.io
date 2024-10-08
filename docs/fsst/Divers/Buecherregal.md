---
title: OOP – Bücherregal
description: Programmieren in Java - Divers
layout: default
category: Fachspezifische Softwaretechnik
topic: Programmieren in Java - Divers
subtopic: Divers
sitemap_exclude: n
---

# {{ page.title }}
## Aufgabe: Verwaltung eines Bücherregals mit einem Array

Erstelle ein Programm zur Verwaltung eines Bücherregals in Java. Das Prgramm besteht aus den Klassen **Book** und **Bookshelf**, sowie der Klasse **Main**.


### Klasse `Book`

- Attribute (Instanzvariablen):
    - `title` (String): Der Titel des Buches.
    - `author` (String): Der Autor des Buches.
    - `numberOfPages` (int): Die Anzahl der Seiten des Buches.
- Konstruktor:
    - Ein Konstruktor, der alle Eigenschaften als Parameter übernimmt und die Instanzvariablen initialisiert.
    - Defaultkonstruktor, der die Werte mit `empty`, `nobody`und `0` initialisiert.
- Methoden:
    - `toString()`: Gibt die Informationen des Buches als lesbaren String zurück (Titel, Autor, Seitenzahl).
    - `hasMorePagesThan(Book b)`: Ermittelt, ob das Buch mehr Seiten hat, als das Übergebene und gibt `true`oder `false` zurück.

### Klasse `Klasse Bookshelf`

- Attribute:
    - Ein Array von Büchern (`Book[]`).
    - Ein Zähler für die tatsächliche Anzahl der Bücher im Regal (`numberOfBooks`).
- Konstruktor:
    - Ein Konstruktor, der das Array mit einem bestimmten Größe erstellt.
    - Defaultkonstruktor, der das Array auf die Größe `10` setzt.
- Methoden:
    - `addBook(Buch buch)`: Fügt ein Buch zum Bücherregal hinzu (wenn noch Platz im Array ist) und gib `true`zurück, wenn es funktioniert hat. Ist das Regal bereits voll, so soll `false` zurückgegeben werden.
    - `removeBook(String title)`: Entfernt ein Buch anhand seines Titels aus dem Regal und verschiebt alle Bücher im Array, um die Lücke zu schließen.
    - `showAllBooks()`: Gibt alle Bücher im Regal aus.
    - `getNumberOfBooks()`: Gibt die Anzahl der Bücher im Regal zurück.
    - `getTotalPageCount()`: Gibt die Summe der Seiten aller Bücher im Regal zurück
    - `searchBook(String title)`: Sucht nach einem Buch anhand des Titels sucht und es zurückgibt, wenn es gefunden wird.
    - **Erweiterung** `resizeBookShelf(int newsize)`: Verändert die Größe des Bücherregals. Bücher, die im neuen Regal nicht mehr Platz haben, sollen einfach gelöscht werden.

### Klasse `Main`

1. Schreibe ein Programm, das ein Bücherregal mit einer Kapazität von 5 Büchern erstellt. 
2. Füge drei beliebige Bücher dem Regal hinzu. 
3. Zeige alle Bücher im Array an. 
4. Zeige die Summe der Seiten aller Bücher im Regal an. 
5. Füge ein viertes Buch hinzu. 
6. Erstelle ein weiteres Buch und gib alle Bücher aus, die weniger Seiten haben als dieses. 
7. Suche nach einem Buch und gib das Buch aus, wenn es gefunden wurde. Ist es nicht enthalten, so solle `Book not found` ausgegeben werden.
