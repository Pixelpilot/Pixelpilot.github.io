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
### Aufgabe: Verwaltung eines Bücherregals mit einem Array

Erstelle ein Programm zur Verwaltung eines Bücherregals in Java. Das Prgramm besteht aus 2 Klassen: eine Klasse **Buch** und eine Klasse **Bücherregal**.

#### Anforderungen:

1. **Klasse Buch**:
    - Attribute:
        - `titel` (String): Der Titel des Buches.
        - `autor` (String): Der Autor des Buches.
        - `seitenzahl` (int): Die Anzahl der Seiten des Buches.
    - Konstruktor:
        - Ein Konstruktor, der alle Attribute initialisiert.
    - Methoden:
        - `toString()`: Gibt die Informationen des Buches als lesbaren String zurück (Titel, Autor, Seitenzahl).

2. **Klasse Bücherregal**:
    - Attribute:
        - Ein Array von Büchern (`Buch[]`).
        - Ein Zähler für die Anzahl der Bücher im Regal (`anzahl`).
    - Konstruktor:
        - Ein Konstruktor, der ein Array einer festen Größe (z. B. 10) initialisiert.
    - Methoden:
        - `buchHinzufuegen(Buch buch)`: Fügt ein Buch zum Bücherregal hinzu (wenn noch Platz im Array ist).
        - `buchEntfernen(String titel)`: Entfernt ein Buch anhand seines Titels aus dem Regal und verschiebt alle Bücher im Array, um die Lücke zu schließen.
        - `alleBuecherAnzeigen()`: Gibt alle Bücher im Regal aus.
        - `anzahlBuecher()`: Gibt die Anzahl der Bücher im Regal zurück.

#### Bonus (optional):
- Erweitere die Klasse **Bücherregal** um eine Methode `sucheBuch(String titel)`, die nach einem Buch anhand des Titels sucht und es zurückgibt, wenn es gefunden wird.


#### Aufgaben:
1. Erstelle die Klassen **Buch** und **Bücherregal** in Java.
2. Schreibe ein Programm, das ein Bücherregal mit einer Kapazität von 5 Büchern erstellt, drei Bücher hinzufügt, alle anzeigt, ein Buch entfernt und die Anzahl der Bücher im Regal ausgibt.
3. (Optional) Implementiere die Suchfunktion und teste sie.
