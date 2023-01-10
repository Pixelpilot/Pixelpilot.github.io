---
title: Statische Variablen und Methoden und Vererbung
description: Beispiel

category: Fachspezifische Softwaretechnik
topic: Programmieren in Java - Projekte
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}

## UML-Diagramm
UML steht für Unified Modeling Language (einheitliche Modelliersprache). Es ist eine grafische Sprache zur Modellierung von Software- und Systemen. UML kann für Klassendiagramme verwendet werden, die die Klassen, deren Attribute und Methoden sowie deren Beziehungen zueinander darstellen.

```
         Person
   +------------------+
   | + name : String  |
   +------------------+
           / \
            |
            |
         Student
   +------------------+
   | + knr : int      |
   +------------------+
```
*Einfache UML-Klassendiagramm. Die Hierarchie wird durch Pfeile angegeben. In diesem Beispiel erbt die Subklasse Student von der Basisklasse Person.*

### Zugriffsmodifikatoren

In UML-Klassendiagrammen werden Zugriffsmodifikatoren durch verschiedene Symbolik gekennzeichnet.

* `+` steht für `public`, d.h. die Methode oder die Eigenschaft kann von jeder anderen Klasse oder Instanz aus aufgerufen werden.
* `-` steht für `private`, d.h. die Methode oder die Eigenschaft kann nur innerhalb der eigenen Klasse oder Instanz aufgerufen werden.

* `#` steht für `protected`, d.h. die Methode oder die Eigenschaft kann von der eigenen Klasse und von abgeleiteten Klassen aufgerufen werden.

* `~` steht für `package` level, d.h. die Methode oder die Eigenschaft kann nur innerhalb des gleichen Pakets aufgerufen werden.

In manchen Diagrammen, kann es möglich sein, dass die Zugriffsmodifikatoren gar nicht angezeigt werden. In diesem Falle, gilt es als `package` level und ist also nicht direkt sichtbar.

### Kennzeichnung statischer Variablen und Methoden
In UML-Klassendiagrammen werden statische Variablen und Methoden durch die Verwendung eines geschwungenen Unterstrichs (`_`) vor dem Namen gekennzeichnet.

Eine statische Variable wird in UML wie folgt dargestellt:
```
+ _staticVariable : int
```

Eine statische Methode wird in UML wie folgt dargestellt:
```
+ _staticMethod() : void
```
## Aufgabe: Bankverwaltung

### 1. Klasse Konto
 Erstellen Sie eine Klasse `Konto` mit den Eigenschaften `kontonummer`, `kontostand` und `kontoinhaber` (Name des Inhabers des Kontos). Fügen Sie auch Methoden hinzu, um Geld auf das Konto einzuzahlen und abzuheben sowie um den Kontostand abzufragen.

```
                                 Konto
                    +------------------------------+ 
                    | kontonummer : int            |
                    +------------------------------+ 
                    | kontostand  : double         |
                    +------------------------------+ 
                    | kontoinhaber : String        |
                    +------------------------------+ 
                    | + einzahlen() : void         |
                    +------------------------------+ 
                    | + abheben() : void           |
                    +------------------------------+ 
                    | + getKontostand() : double   |
                    +------------------------------+ 
                       /\                       /\
                       /                         \
                      /                           \
                     /                             \
               Girokonto                         Sparbuch
        +---------------------+            +---------------------+
        |                     |            |                     |
        +---------------------+            +---------------------+
        | _zinsen : double    |            | _zinsen : double    |
        +---------------------+            +---------------------+
        | + _setZinsen()      |            | + _setZinsen()      |
        +---------------------+            +---------------------+
        | + _berechneZinsen() |            | + _berechneZinsen() |
        +---------------------+            +---------------------+
```
*UML-Diagramm zu den Klassen Konto, Girokonto und Sparbuch*

### 2. Klasse Girokonto
Erstellen Sie eine abgeleitete Klasse `Girokonto` von der Klasse `Konto`. Fügen Sie eine statische Variable `zinsen` hinzu und eine statische Methode `setZinsen(double zinsen)`, die es ermöglicht, die Zinsen für alle Girokonten zu setzen. Implementieren Sie auch eine Methode `berechneZinsen()`, die den Kontostand mit den aktuellen Zinsen erhöht.

### 3. Klasse Sparbuch
Erstellen Sie eine weitere abgeleitete Klasse `Sparbuch` von der Klasse `Konto`. Fügen Sie eine statische Variable `zinsen` hinzu und eine statische Methode `setZinsen(double zinsen)` wie in der Klasse Girokonto, jedoch die Zinsen sind höher als Girokonto.

### 4. Klasse Bank
Erstellen Sie eine Klasse `Bank` mit einer statischen Liste von Konten und einer statischen Methode `addKonto(Konto konto)`, die ein Konto der Liste hinzufügt. Implementieren Sie auch eine statische Methode `listKonten()`, die alle Konten auflistet und deren Kontostand ausgibt.

Erstellen Sie mehrere Instanzen von `Girokonto` und `Sparbuch` sowie eine Instanz von `Bank`. Setzen Sie die Zinsen für Girokonten und Sparbücher. Fügen Sie die Konten der Bank hinzu und rufen Sie die Methode `listKonten()` auf, um die Konten und ihre Kontostände aufzulisten. Rufen Sie die Methode `berechneZinsen()` auf, um die Kontostände nach Ablauf einer bestimmten Zeit zu erhöhen.


```
                                  Bank 
                     +------------------------------+
                     | _konten : ArrayList<Konto>   |
                     +------------------------------+
                     |+ _addKonto() : void          |
                     +------------------------------+
                     |+ _listKonten() : void        |
                     +------------------------------+ 
```
*UML-Diagramm zur Klasse Bank*