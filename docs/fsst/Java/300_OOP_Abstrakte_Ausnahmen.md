---
title: Ausnahmen, Statische Variablen und Methoden, Vererbung und Polymorphismus, Akstrakte Klassen
description: Beispiel

category: Fachspezifische Softwaretechnik
topic: Programmieren in Java - Objektorientierte Programmierung
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}

## Ausnahmenbehandlung (Exceptions)

In Java gibt es zwei Arten von Ausnahmen: "checked exceptions" und "unchecked exceptions".

### Checked exceptions

*"Checked exceptions"* sind Ausnahmen, die explizit in der Methode deklariert werden müssen, in der sie ausgelöst werden können. Das bedeutet, dass jeder Code, der eine Methode aufruft, die eine "checked exception" werfen kann, auch bereit sein muss, diese Ausnahme abzufangen. Beispiele für "checked exceptions" sind FileNotFoundException, SQLException, etc.

### Unchecked exceptions
*"Unchecked exceptions"* hingegen sind Ausnahmen, die nicht explizit deklariert werden müssen. Sie werden beispielsweise durch Programmierfehler wie NullPointerException, IndexOutOfBoundsException oder ArithmeticException verursacht. Diese Ausnahmen müssen nicht abgefangen werden und es ist auch optional, ob man sie in der Methode deklariert, in der sie ausgelöst werden können.

Hier ist ein Beispiel, das den Unterschied zwischen *"checked exceptions"* und *"unchecked exceptions"* veranschaulicht:

### Beispiel

```java
import java.io.*;

class Main {
  public static void main(String[] args) {
    // Checked exception example
    try {
      FileInputStream fis = new FileInputStream("file.txt");
    } catch (FileNotFoundException e) {
      System.out.println("File not found.");
    }
    
    // Unchecked exception example
    int[] numbers = {1, 2, 3};
    try {
      int x = numbers[5];
    } catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("Array index out of bounds.");
    }
  }
}
```
In diesem Beispiel wird eine *"checked exception"* abgefangen, wenn das Programm versucht, eine Datei zu öffnen, die nicht vorhanden ist. Eine *"unchecked exception"* wird abgefangen, wenn das Programm versucht, auf einen ungültigen Index im Array `numbers` zuzugreifen.

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

## Vererbung und Polymorphismus

In Java ist Vererbung ein Konzept, bei dem eine Klasse (die Unterklasse) von einer anderen Klasse (die Oberklasse) erbt. Die Unterklasse erbt alle Attribute und Methoden der Oberklasse und kann diese überschreiben oder erweitern, um an ihre eigenen Bedürfnisse anzupassen.

Das Schlüsselwort, das in Java verwendet wird, um Vererbung darzustellen, ist `extends`. Hier ist ein Beispiel:
```java
class Animal {
  private String name;
  
  public Animal(String name) {
    this.name = name;
  }
  
  public void makeSound() {
    System.out.println("The animal makes a sound.");
  }
  
  public String getName() {
    return name;
  }
}

class Dog extends Animal {
  public Dog(String name) {
    super(name);
  }
  
  @Override
  public void makeSound() {
    System.out.println("The dog barks.");
  }
}
```
In diesem Beispiel erbt die Klasse Dog von der Klasse Animal und überschreibt die Methode `makeSound()`. Daher wird bei einem Aufruf der Methode `makeSound()` auf einem Dog-Objekt die Meldung "The dog barks." anstelle von "The animal makes a sound." ausgegeben.

### Mehrere Ebenen bei der Vererbung
Es ist auch möglich, mehrere Ebenen von Vererbung zu haben, indem man von einer Unterklasse einer anderen Klasse erbt. Hier ist ein Beispiel:
```java
class Mammal extends Animal {
  private boolean hasFur;
  
  public Mammal(String name, boolean hasFur) {
    super(name);
    this.hasFur = hasFur;
  }
  
  public boolean getHasFur() {
    return hasFur;
  }
}

class Cat extends Mammal {
  public Cat(String name, boolean hasFur) {
    super(name, hasFur);
  }
  
  @Override
  public void makeSound() {
    System.out.println("The cat meows.");
  }
}
```
In diesem Beispiel erbt die Klasse `Cat` von der Klasse `Mammal`, die wiederum von der Klasse `Animal` erbt. Daher hat die Klasse `Cat` Zugriff auf alle Attribute und Methoden sowohl der Klasse `Mammal` als auch der Klasse `Animal`.

### Vererbung und Überladen von Methoden

Methoden in Unterklassen können überladen werden, indem man eine Methode mit dem gleichen Namen in der Unterklasse definiert und eine andere Signatur verwendet. Dies bedeutet, dass die Methode in der Unterklasse eine andere Anzahl oder Typen von Argumenten hat als die gleichnamige Methode in der Oberklasse.

Hier ist ein Beispiel:
```java
class Animal {
  public void makeSound() {
    System.out.println("The animal makes a sound.");
  }
}

class Dog extends Animal {
  public void makeSound(String barkSound) {
    System.out.println("The dog makes a " + barkSound + " sound.");
  }
}
```
In diesem Beispiel definiert die Klasse `Dog` eine Methode `makeSound`, die die gleiche Signatur hat wie die Methode in der Klasse `Animal`. Da die Methoden jedoch unterschiedliche Signaturen haben, überlädt die Klasse `Dog` die Methode `makeSound` und nicht, dass sie sie überschreibt.

Wenn eine Unterklasse eine Methode überlädt, kann sie auf die gleichnamige Methode der Oberklasse mit dem Schlüsselwort `super` verweisen. Hierdurch kann die Funktionalität der Methode in der Oberklasse kombiniert werden mit der Funktionalität der überladenen Methode in der Unterklasse.

Wenn eine Unterklasse eine Methode mit der gleichen Signatur wie eine Methode in der Oberklasse definiert, wird die Methode in der Oberklasse überschrieben und nicht überladen.


### Das Schlüsselwort `super`
Das Schlüsselwort super in Java wird verwendet, um auf die Methoden oder Felder einer Oberklasse zu verweisen. Es ist besonders nützlich, wenn es in einer Unterklasse verwendet wird, um auf die gleichnamigen Methoden oder Felder der Oberklasse zu verweisen.

Hier ist ein Beispiel:
```java
class Animal {
  public void makeSound() {
    System.out.println("The animal makes a sound.");
  }
}

class Dog extends Animal {
  @Override
  public void makeSound() {
    super.makeSound();
    System.out.println("The dog barks.");
  }
}
```
In diesem Beispiel überschreibt die Klasse Dog die Methode `makeSound` der Klasse `Animal`. Die Methode `makeSound` in der Klasse Dog ruft jedoch zuerst die gleichnamige Methode der Oberklasse auf, indem sie das Schlüsselwort `super` verwendet. Hierdurch kann die Ausgabe der Methode in der Oberklasse kombiniert werden mit der Ausgabe der Methode in der Unterklasse.

Das Schlüsselwort `super` kann auch verwendet werden, um Konstruktoren einer Oberklasse aufzurufen.

### Konstruktoren werden nicht vererbt
n Java werden Konstruktoren nicht automatisch geerbt. Wenn eine Unterklasse eine Oberklasse erbt, muss sie explizit den Konstruktor der Oberklasse aufrufen, um sicherzustellen, dass die entsprechenden Initialisierungen durchgeführt werden.

Dies kann mit dem Schlüsselwort `super` erfolgen, das auf den Konstruktor der Oberklasse verweist. Hier ist ein Beispiel:
```java
class Animal {
  private String name;
  
  public Animal(String name) {
    this.name = name;
  }
  
  public void makeSound() {
    System.out.println("The animal makes a sound.");
  }
  
  public String getName() {
    return name;
  }
}

class Dog extends Animal {
  public Dog(String name) {
    super(name);
  }
  
  @Override
  public void makeSound() {
    System.out.println("The dog barks.");
  }
}
```
In diesem Beispiel ruft die Klasse `Dog` den Konstruktor der Klasse `Animal` auf, indem sie das Schlüsselwort `super` verwendet. Hierdurch wird sichergestellt, dass das Attribut `name` für das `Dog`-Objekt initialisiert wird.

Wenn eine Unterklasse keinen expliziten Konstruktor hat, wird automatisch ein Konstruktor ohne Argumente bereitgestellt. Wenn jedoch ein Konstruktor mit Argumenten hinzugefügt wird, muss ein expliziter Aufruf des Konstruktors der Oberklasse hinzugefügt werden, da ansonsten ein Kompilierungsfehler auftritt.

### Polymorphismus



## Abstrakte Klassen

Abstrakte Klassen sind Klassen in Java, die nicht vollständig implementiert werden und daher nicht direkt instanziiert werden können. Stattdessen dienen sie als Vorlage für andere Klassen, die von ihnen erben und ihre Methoden implementieren.

Abstrakte Klassen haben die Möglichkeit, sowohl abstrakte Methoden als auch konkrete Methoden zu enthalten. Abstrakte Methoden sind Methoden, die in der abstrakten Klasse deklariert werden, aber keine Implementation haben. Sie müssen von jeder Klasse implementiert werden, die von der abstrakten Klasse erbt. Konkrete Methoden hingegen sind Methoden, die in der abstrakten Klasse implementiert werden und von Subklassen verwendet werden können, ohne dass sie diese erneut implementieren müssen.

Eine abstrakte Klasse wird in Java mit dem Schlüsselwort `abstract` deklariert. Hier ist ein Beispiel für eine abstrakte Klasse in Java:
```java
public abstract class Shape {
   // Abstrakte Methode
   public abstract double getArea();
   
   // Konkrete Methode
   public double getPerimeter() {
      // Implementation hier
   }
}
```

Um von einer abstrakten Klasse zu erben, verwendet man das Schlüsselwort `extends` und implementiert alle abstrakten Methoden der abstrakten Klasse. Hier ist ein Beispiel für eine Subklasse, die von der obigen abstrakten Klasse `Shape` erbt:

```java
public class Rectangle extends Shape {
   private double width;
   private double height;
   
   // Konstruktor und andere Methoden hier
   
   // Implementierung der abstrakten Methode "getArea"
   @Override
   public double getArea() {
      return width * height;
   }
}
```
Abstrakte Klassen sind in Java besonders nützlich, wenn man eine Vorlage für eine Gruppe von Klassen schaffen möchte, die gemeinsame Methoden und Eigenschaften haben, aber unterschiedliche Implementationen für bestimmte Methoden haben. Sie können auch verwendet werden, um eine Hierarchie von Klassen zu bauen, bei der bestimmte Methoden erst in tieferen Ebenen der Hierarchie definiert werden.

## Aufgabe: Tierhierarchie und Zuweisungskompatibilität

**Beschreibung:**

In dieser Aufgabe soll eine Klassenhierarchie für verschiedene Tiere erstellt werden. Die Aufgabe umfasst die Erstellung mehrerer Vererbungsebenen, das Überladen von Methoden sowie die Untersuchung der Zuweisungskompatibilität.

---

### Vorgaben:

1. **Klasse `Tier` (Basisklasse)**:
    - Attribute:
        - `String name` (Name des Tieres)
    - Methoden:
        - Konstruktor: `Tier(String name)` - Initialisiert den Namen.
        - `void lautGeben()` - Gibt einen Standardlaut aus (z. B. `"Ein Tier macht ein Geräusch."`).

2. **Klasse `Säugetier` (abgeleitet von `Tier`)**:
    - Zusätzliche Attribute:
        - `int anzahlBeine` (Anzahl der Beine)
    - Methoden:
        - Konstruktor: `Säugetier(String name, int anzahlBeine)` - Initialisiert den Namen und die Anzahl der Beine.
        - Überschreibt `lautGeben()` - Gibt aus: `"Ein Säugetier macht einen Laut."`.
        - Überladene Methode `void lautGeben(String spezifischerLaut)` - Gibt den spezifischen Laut aus (z. B. `"Das Tier macht: [spezifischerLaut]"`).

3. **Klasse `Hund` (abgeleitet von `Säugetier`)**:
    - Zusätzliche Attribute:
        - `String rasse` (Rasse des Hundes)
    - Methoden:
        - Konstruktor: `Hund(String name, int anzahlBeine, String rasse)` - Initialisiert Name, Anzahl der Beine und die Rasse.
        - Überschreibt `lautGeben()` - Gibt aus: `"Der Hund bellt: Wuff Wuff."`.

4. **Klasse `Katze` (abgeleitet von `Säugetier`)**:
    - Zusätzliche Attribute:
        - `boolean hatKrallen` (Gibt an, ob die Katze Krallen hat)
    - Methoden:
        - Konstruktor: `Katze(String name, int anzahlBeine, boolean hatKrallen)` - Initialisiert Name, Anzahl der Beine und ob sie Krallen hat.
        - Überschreibt `lautGeben()` - Gibt aus: `"Die Katze miaut: Miau."`.

---

### Aufgabe:

1. Implementiere die Klassen gemäß der Vorgaben.
2. Erstelle in der `main`-Methode ein Array vom Typ `Tier[]` und füge folgende Objekte hinzu:
    - Ein generisches `Tier`-Objekt.
    - Ein `Säugetier`-Objekt.
    - Ein `Hund`-Objekt.
    - Eine `Katze`-Objekt.
3. Durchlaufe das Array und rufe für jedes Objekt die Methode `lautGeben()` auf.
4. Zeige die Auswirkungen der Zuweisungskompatibilität:
    - Weise das `Hund`-Objekt einer `Säugetier`- und einer `Tier`-Referenz zu und rufe die Methode `lautGeben()` auf.
5. Demonstriere das Überladen der Methode `lautGeben` für ein `Säugetier`-Objekt mit spezifischen Lauten (z. B. `"Muuuh"` für ein fiktives Säugetier).

---

### Beispielausgabe:
```plaintext
Ein Tier macht ein Geräusch.
Ein Säugetier macht einen Laut.
Der Hund bellt: Wuff Wuff.
Die Katze miaut: Miau.

Zuweisungskompatibilität:
Ein Säugetier macht einen Laut.
Ein Tier macht ein Geräusch.

Überladene Lautausgabe:
Das Tier macht: Muuuh
```

---

### Ziel der Aufgabe:
- Verständnis der Vererbung und Mehrfachvererbung.
- Anwendung des Method Overloading (Überladen) und Method Overriding (Überschreiben).
- Demonstration der Zuweisungskompatibilität und des Polymorphismus in Java.