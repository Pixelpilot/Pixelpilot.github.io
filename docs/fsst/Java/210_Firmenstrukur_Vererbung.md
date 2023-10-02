---
title: Unternehmensstruktur - Statische Variablen und Methoden und Vererbung
description: Beispiel

category: Fachspezifische Softwaretechnik
topic: Programmieren in Java - Projekte
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}


### Aufgabenstellung

In dieser Aufgabe geht es darum, ein einfaches Hierarchiesystem für ein Unternehmen zu erstellen. In einem Unternehmen gibt es verschiedene Arten von Angestellten: Manager, Entwickler und Praktikanten. Jeder Angestellte hat einen Namen, eine Personalnummer und ein Gehalt. Zudem haben Manager eine Bonuszahlung, und Entwickler haben eine Programmiersprache, in der sie spezialisiert sind.

#### Teil 1: Basisklasse Angestellter

1. Erstelle eine Klasse `Angestellter` mit den folgenden Attributen:
    - `name` (String)
    - `personalNummer` (int)
    - `gehalt` (double)

2. Füge der Klasse `Angestellter` einen Konstruktor und die entsprechenden Getter- und Setter-Methoden hinzu.
3. Füge eine Methode `informationenAusgeben()` hinzu, die Name, Personalnummer und Gehalt auf der Konsole ausgibt.

#### Teil 2: Managerklasse

1. Erstelle eine Klasse `Manager`, die von der Klasse `Angestellter` erbt.
2. Füge der Klasse `Manager` ein zusätzliches Attribut `bonus` (double) hinzu.
3. Erstelle einen Konstruktor, der alle Attribute der Klasse initialisiert, inklusive des Attributes der Basisklasse.
4. Überschreibe die Methode `informationenAusgeben()`, sodass sie auch den Bonus des Managers ausgibt.

#### Teil 3: Entwicklerklasse

1. Erstelle eine Klasse `Entwickler`, die ebenfalls von `Angestellter` erbt.
2. Füge ein Attribut `programmiersprache` (String) hinzu.
3. Erstelle einen Konstruktor, der alle Attribute initialisiert.
4. Überschreibe die Methode `informationenAusgeben()` entsprechend.

#### Teil 4: Praktikantenklasse

1. Erstelle eine Klasse `Praktikant`, die von `Angestellter` erbt.
2. Da Praktikanten kein Gehalt erhalten, sollte der Gehalt für Praktikanten standardmäßig auf 0 gesetzt werden.
3. Überschreibe falls nötig den Konstruktor und die `informationenAusgeben()` Methode.

#### Teil 5: Hauptklasse

1. In der `main` Methode der `Hauptklasse`:
    - Erstelle Objekte der Klassen `Manager`, `Entwickler` und `Praktikant`.
    - Initialisiere die Objekte mit passenden Werten.
    - Rufe für jedes Objekt die Methode `informationenAusgeben()` auf.

### Hinweise zur Umsetzung

- Nutze die `super`-Schlüsselwort, um auf den Konstruktor der Basisklasse zuzugreifen und um Methoden der Basisklasse aufzurufen.
- Verwende die `@Override`-Annotation, um Methoden zu überschreiben.

### Beispiel für den erwarteten Output

```
Manager:
Name: Anna Schmidt
Personalnummer: 12345
Gehalt: 60000.0
Bonus: 15000.0

Entwickler:
Name: Max Mustermann
Personalnummer: 12346
Gehalt: 45000.0
Programmiersprache: Java

Praktikant:
Name: Tim Maier
Personalnummer: 12347
Gehalt: 0.0
```

#### Teil 6: Statische Variable für Personalnummer

1. Ändere die Art und Weise, wie Personalnummern vergeben werden, indem du eine statische Variable und Methode einführst.
2. In der Klasse `Angestellter`, erstelle eine private statische Variable `letztePersonalNummer`, die mit 0 initialisiert wird.
3. Erstelle eine private statische Methode `naechstePersonalNummer()`, die `letztePersonalNummer` um 1 erhöht und den neuen Wert zurückgibt.
4. Ändere den Konstruktor der Klasse `Angestellter`, sodass er die Methode `naechstePersonalNummer()` aufruft, um eine Personalnummer für jeden neuen Angestellten zu generieren.

#### Hinweise zur Umsetzung

- Statische Variablen werden mit dem Schlüsselwort `static` deklariert und sind für alle Instanzen der Klasse gemeinsam.
- Statische Methoden können direkt in statischen Kontexten (andere statische Methoden oder statische Initialisierer) aufgerufen werden, ohne eine Instanz der Klasse zu erstellen.
- Da die Methode `naechstePersonalNummer()` nur innerhalb der Klasse `Angestellter` verwendet wird, sollte sie als `private` deklariert werden.

Diese Erweiterung stellt sicher, dass jede Personalnummer eindeutig ist und automatisch generiert wird, und demonstriert die Verwendung von statischen Variablen und Methoden in Java.

Viel Erfolg bei der Umsetzung der Aufgabe!