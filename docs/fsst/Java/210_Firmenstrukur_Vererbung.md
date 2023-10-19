---
title: Unternehmensstruktur - Wiederholung Jahrgang 4
description: Vererbung, Statische Variablen und Methoden, Interfaces, ExceptionHandling

category: Fachspezifische Softwaretechnik
topic: Programmieren in Java - Projekte
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}




## Aufgabenstellung

In dieser Aufgabe geht es darum, ein einfaches Hierarchiesystem für ein Unternehmen zu erstellen. In einem Unternehmen gibt es verschiedene Arten von Angestellten: Manager, Entwickler und Praktikanten. Jeder Angestellte hat einen Namen, eine Personalnummer und ein Gehalt. Zudem haben Manager eine Bonuszahlung, und Entwickler haben eine Programmiersprache, in der sie spezialisiert sind.

Setze die Teile 1-5 um und teste jeweils in der Klasse `Main`. Implementiere anschließend die weiteren Aufgaben.

### Teil 1: Basisklasse Angestellter

1. Erstelle eine Klasse `Angestellter` mit den folgenden Attributen:
    - `name` (String)
    - `personalNummer` (int)
    - `gehalt` (double)

2. Füge der Klasse `Angestellter` einen Konstruktor und die entsprechenden Getter- und Setter-Methoden hinzu.
3. Füge eine Methode `informationenAusgeben()` hinzu, die Name, Personalnummer und Gehalt auf der Konsole ausgibt.

### Teil 2: Managerklasse

1. Erstelle eine Klasse `Manager`, die von der Klasse `Angestellter` erbt.
2. Füge der Klasse `Manager` ein zusätzliches Attribut `bonus` (double) hinzu.
3. Erstelle einen Konstruktor, der alle Attribute der Klasse initialisiert, inklusive des Attributes der Basisklasse.
4. Überschreibe die Methode `informationenAusgeben()`, sodass sie auch den Bonus des Managers ausgibt.

### Teil 3: Entwicklerklasse

1. Erstelle eine Klasse `Entwickler`, die ebenfalls von `Angestellter` erbt.
2. Füge ein Attribut `programmiersprache` (String) hinzu.
3. Erstelle einen Konstruktor, der alle Attribute initialisiert.
4. Überschreibe die Methode `informationenAusgeben()` entsprechend.

### Teil 4: Praktikantenklasse

1. Erstelle eine Klasse `Praktikant`, die von `Angestellter` erbt.
2. Da Praktikanten kein Gehalt erhalten, sollte der Gehalt für Praktikanten standardmäßig auf 0 gesetzt werden.
3. Überschreibe falls nötig den Konstruktor und die `informationenAusgeben()` Methode.

### Teil 5: Hauptklasse

1. In der `main` Methode der `Hauptklasse`:
    - Erstelle Objekte der Klassen `Manager`, `Entwickler` und `Praktikant`.
    - Initialisiere die Objekte mit passenden Werten.
    - Rufe für jedes Objekt die Methode `informationenAusgeben()` auf.
2. Erstelle ein Array, in dem alle erstellten Objekte gespeichert werden können
    - Füge alle erstellten Objekte in das Array ein
    - Iteriere über das Array und gib alle Informationen mit der Methode `informationenAusgeben()` aus (Prinzip der "Vielgestaltigkeit (Polymorphie")


#### Hinweise zur Umsetzung

- Nutze die `super`-Schlüsselwort, um auf den Konstruktor der Basisklasse zuzugreifen und um Methoden der Basisklasse aufzurufen.
- Verwende die `@Override`-Annotation, um Methoden zu überschreiben.

#### Beispiel für den erwarteten Output

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

### Teil 6: Statische Variable für Personalnummer

1. Ändere die Art und Weise, wie Personalnummern vergeben werden, indem du eine statische Variable und Methode einführst.
2. In der Klasse `Angestellter`, erstelle eine private statische Variable `letztePersonalNummer`, die mit 0 initialisiert wird.
3. Erstelle eine private statische Methode `naechstePersonalNummer()`, die `letztePersonalNummer` um 1 erhöht und den neuen Wert zurückgibt.
4. Ändere den Konstruktor der Klasse `Angestellter`, sodass er die Methode `naechstePersonalNummer()` aufruft, um eine Personalnummer für jeden neuen Angestellten zu generieren.

#### Hinweise zur Umsetzung

- Statische Variablen werden mit dem Schlüsselwort `static` deklariert und sind für alle Instanzen der Klasse gemeinsam.
- Statische Methoden können direkt in statischen Kontexten (andere statische Methoden oder statische Initialisierer) aufgerufen werden, ohne eine Instanz der Klasse zu erstellen.
- Da die Methode `naechstePersonalNummer()` nur innerhalb der Klasse `Angestellter` verwendet wird, sollte sie als `private` deklariert werden.

Diese Erweiterung stellt sicher, dass jede Personalnummer eindeutig ist und automatisch generiert wird, und demonstriert die Verwendung von statischen Variablen und Methoden in Java.


### Teil 7: Verwenden eines Interfaces zum Sortieren des Arrays
1. Sortiere das Array nach dem Gehalt (aufsteigend)
   - Verwende dazu die Methode `Arrays.sort()` aus `java.util.Arrays`
   - Implementiere das benötigte Interface `Comparable` in der Klasse `Angestellter`

### Teil 8: Exception Handling Gehalt und Bonus Validation

1. **Gehalt-Validierung**
   - In der Klasse `Angestellter` soll das Gehalt nicht negativ sein. Wenn ein negativer Wert für das Gehalt gesetzt wird, wirf eine benutzerdefinierte Exception `UngueltigesGehaltException`.

2. **Bonus-Validierung**
   - In der Klasse `Manager` darf der Bonus nicht negativ sein. Wenn ein negativer Wert für den Bonus gesetzt wird, wirf ebenfalls eine `UngueltigesGehaltException`.

#### Erstellung der benutzerdefinierten Exception

1. Erstelle eine neue Klasse namens `UngueltigesGehaltException`, die von `Exception` erbt.
2. Gib der Klasse einen Standardkonstruktor, der eine Fehlermeldung an den Konstruktor der Superklasse übergibt.

#### Implementierung der Exception in den Klassen

1. In den Setter-Methoden für das Gehalt und den Bonus, überprüfe den Wert und wirf eine `UngueltigesGehaltException`, wenn der Wert negativ ist.

#### Behandlung der Exception in der Hauptklasse

1. Umfasse den Code, der die Objekte erstellt und initialisiert, in der `main`-Methode der `Hauptklasse` mit einem `try`-Block.
2. Fange die `UngueltigesGehaltException` im zugehörigen `catch`-Block ab und gib eine entsprechende Fehlermeldung auf der Konsole aus.

#### Beispielcode

```java
// UngueltigesGehaltException.java
public class UngueltigesGehaltException extends Exception {
    public UngueltigesGehaltException(String nachricht) {
        super(nachricht);
    }
}

// Angestellter.java
public class Angestellter {
    // ...
    public void setGehalt(double gehalt) throws UngueltigesGehaltException {
        if (gehalt < 0) {
            throw new UngueltigesGehaltException("Gehalt darf nicht negativ sein!");
        }
        this.gehalt = gehalt;
    }
}

// Manager.java
public class Manager extends Angestellter {
    // ...
    public void setBonus(double bonus) throws UngueltigesGehaltException {
        if (bonus < 0) {
            throw new UngueltigesGehaltException("Bonus darf nicht negativ sein!");
        }
        this.bonus = bonus;
    }
}

// Hauptklasse.java
public class Hauptklasse {
    public static void main(String[] args) {
        try {
            Manager manager = new Manager("Anna Schmidt", 60000.0);
            manager.setBonus(15000.0);
            // ...
        } catch (UngueltigesGehaltException e) {
            e.printStackTrace();
        }
    }
}
```


