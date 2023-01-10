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

## Statische Variablen und Methoden

Statische Variablen und Methoden in Java sind solche, die direkt auf die Klasse und nicht auf eine bestimmte Instanz der Klasse zugreifen.

### Definition statischer Variablen
Statische Variablen, auch als *Klassenvariablen* bezeichnet, werden mit dem Schlüsselwort `static` vor der Deklaration der Variablen definiert und sind nur einmal für die gesamte Klasse vorhanden. Sie werden geteilt von allen Instanzen der Klasse und über die Instanzen hinaus existieren sie, auch wenn keine Instanz existiert.

```java
public class MyClass {
    public static int staticVariable;
}
```
### Definition statischer Methoden
Statische Methoden, auch als *Klassenmethoden* bezeichnet, werden mit dem Schlüsselwort `static` vor der Signatur der Methode definiert. Sie haben keinen Zugriff auf die Instanzvariablen der Klasse und können daher nur auf statischen Variablen und Parametern operieren.

```java
public class MyClass {
    public static void staticMethod() {
        // method body
    }
}
```

### Zugriff auf statische Variablen und Aufruf von statischen Methoden
In beiden Beispielen, kann die Variable `staticVariable` und die Methode `staticMethod` direkt über den Klassennamen aufgerufen werden, ohne dass eine Instanz der Klasse erstellt werden muss:
```java
MyClass.staticVariable = 5;
MyClass.staticMethod();
```

### Anwendung anhand einer Klasse Math
Ein Beispiel, wie man statische Variablen und Methoden verwenden kann, ist eine Klasse `Math` die Methoden und Variablen enthält, die Mathematische Operationen durchführen. Zum Beispiel kann es eine statische Methode `pow` geben, die eine potenzierende Funktion darstellt und die nicht auf eine Instanz der Klasse `Math` zugreifen muss.

```java
public class Math {
    public static double PI = 3.14;
    public static double pow(double base, double exponent) {
        return Math.pow(base, exponent);
    }
}
```

Es kann dann so verwendet werden:
```java
double result = Math.pow ( 10, 4 );
```
Statische Variablen und Methoden werden oft verwendet, um Daten und Funktionalität bereitzustellen, die allen Instanzen einer Klasse gemeinsam sind, und die nicht von einer bestimmten Instanz abhängen. Sie sind auch nützlich, um Ressourcen und Informationen zu verwalten, die für die gesamte Klasse gelten.

## UML-Diagramme

### Was ist UML?
UML steht für Unified Modeling Language (einheitliche Modelliersprache). Es ist eine grafische Sprache zur Modellierung von Software- und Systemen. UML kann für Klassendiagramme verwendet werden, die die Klassen, deren Attribute und Methoden sowie deren Beziehungen zueinander darstellen.

```
         Person
   +------------------+
   |                  |
   +------------------+
   | + name : String  |
   +------------------+
           / \
            |
            |
         Student
   +------------------+
   |                  |
   +------------------+
   | + knr : int      |
   +------------------+
```
*Einfache UML-Klassendiagramm. Die Hierarchie wird durch Pfeile angegeben. In diesem Beispiel erbt die Subklasse Student von der Basisklasse Person.*

### Konstruktoren in UML
In UML-Klassendiagrammen werden Konstruktoren durch Methoden dargestellt, die den gleichen Namen wie die Klasse haben und keinen Rückgabetyp besitzen.

```
             Auto
   +----------------------+
   |                      |
   +----------------------+
   | marke : String       |
   +----------------------+
   | baujahr : int        |
   +----------------------+
   | + Auto()             |
   +----------------------+
   | + Auto(String, int)  |
   +----------------------+
```
*Zwei Konstruktoren in einem UML-Klassendiagramm.*

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

## Aufgabe: Counter

### 1. Klasse Counter
Erstellen Sie eine Klas se `Counter` mit einer statischen Variablen `count` und einer statischen Methode `increment()`, die den Wert der Variablen um 1 erhöht. 

Erstellen Sie eine Methode `printCount()`, die den aktuellen Wert der Variablen ausgibt. 

### 2. Anwenden der Klasse Counter
Erstellen Sie einige Instanzen der Klasse und rufen Sie die `increment()`-Methode auf, um den Zähler zu erhöhen.

Rufen Sie anschließend die `printCount()`-Methode auf, um den aktuellen Wert des Zählers auszugeben.

### 3. UML-Diagramm
Zeichne das UML-Diagramm für die Klasse Counter.


## Aufgabe: Bankverwaltung

### 1. Klasse Konto
 Erstellen Sie eine Klasse `Konto` mit den Eigenschaften `kontonummer`, `kontostand` und `kontoinhaber` (Name des Inhabers des Kontos). Fügen Sie auch Methoden hinzu, um Geld auf das Konto einzuzahlen und abzuheben sowie um den Kontostand abzufragen.

```
                                 Konto
                    +------------------------------+ 
                    |                              |
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
*UML-Diagramm der Klasse Bank*