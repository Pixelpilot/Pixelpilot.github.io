---
title: Objektorientierte Programmierung mit PHP
description: Objektorientierung mit PHP

category: Webentwicklung
topic: Grundlagen von PHP
subtopic: Objektorientierung mit PHP

layout: default

sitemap_exclude: n
---
# Objektorientierte Programmierung

OOP in PHP ermöglicht es, modularen und wiederverwendbaren Code zu schreiben, was die Entwicklung großer Anwendungen vereinfacht und die Wartbarkeit verbessert. Die Konzepte sind dieselben wie in Java oder C#, auch die Schreibweise ist sehr ähnlich.

## Grundkonzepte der OOP in PHP

### 1. Klassen und Objekte

Eine Klasse ist eine Vorlage oder ein Bauplan für Objekte. Ein Objekt ist eine Instanz einer Klasse. Die Klasse definiert die Eigenschaften und Methoden, die ihre Objekte haben werden.

#### Vorteile der OOP in PHP

- **Modularität**: Jedes Objekt ist ein unabhängiger Baustein, was die Entwicklung vereinfacht.
- **Wiederverwendbarkeit**: Durch Vererbung und Polymorphismus kann vorhandener Code leicht in neuen Projekten verwendet werden.
- **Erweiterbarkeit**: Objekte können leicht modifiziert und erweitert werden, ohne bestehenden Code zu beeinträchtigen.
- **Wartbarkeit**: OOP fördert klar definierte Strukturen, was die Wartung und das Debugging von Code erleichtert.

#### Die Eine-Klasse-pro-Datei-Strategie
Es ist eine weit verbreitete Konvention und gilt als Best Practice, jede Klasse in einer eigenen Datei zu speichern. Dies verbessert die Lesbarkeit und Wartbarkeit des Codes. Die Dateinamen entsprechen in der Regel den Klassennamen (`Auto.php` für die Klasse `Auto`), was die Navigation im Projekt erleichtert.

Außerdem nutzen moderne PHP-Anwendungen *Autoloader*, um Klassen automatisch zu laden, ohne dass `require`- oder `include`-Anweisungen manuell für jede Klasse geschrieben werden müssen.

### 2. Eigenschaften und Methoden

Eigenschaften sind Variablen innerhalb einer Klasse, die die Daten oder den Zustand des Objekts repräsentieren. Methoden sind Funktionen innerhalb einer Klasse, die das Verhalten der Objekte definieren. Innerhalb der Klasse wird mit `$this` auf das aktuelle Objekt zugegriffen.

```php
class Auto {
    public string $farbe = "Weiß";

    public function fahren() {
        echo "Das $this->farbe lackierte Auto fährt.";
    }
}

$meinAuto = new Auto();
$meinAuto->farbe = "Rot";
$meinAuto->fahren();
```
Seit PHP 7.4 können Eigenschaften einen Datentyp haben (`string`, `int`, `float`, `bool`, `array` oder ein Klassenname). Die Zuweisung eines falschen Typs führt dann zu einem Fehler.


### 3. Konstruktor
Ein Konstruktor ist eine spezielle Methode, die automatisch aufgerufen wird, wenn ein neues Objekt der Klasse erstellt wird. Er wird verwendet, um Anfangswerte für Eigenschaften zu setzen.

```php
class Auto {
    public string $farbe;

    public function __construct(string $farbe) {
        $this->farbe = $farbe;
    }

    public function fahren() {
        echo "Das Auto fährt.";
    }
}

$meinAuto = new Auto("Rot");
```

Seit PHP 8.0 kann das kürzer geschrieben werden (*Constructor Property Promotion*). Die Eigenschaft wird direkt in der Parameterliste deklariert und automatisch zugewiesen:
```php
class Auto {
    public function __construct(public string $farbe) {}

    public function fahren() {
        echo "Das Auto fährt.";
    }
}
```

### 4. Vererbung
Erlaubt es einer Klasse, Eigenschaften und Methoden einer anderen Klasse zu erben. Dies fördert die Wiederverwendung von Code.

```php
class Fahrzeug {
    public function fahren() {
        echo "Das Fahrzeug fährt.";
    }
}
```
```php
class Auto extends Fahrzeug {
    // Auto erbt fahren() von Fahrzeug
}

$meinAuto = new Auto();
$meinAuto->fahren();
```
Eine geerbte Methode kann in der Kindklasse überschrieben werden. Mit `parent::fahren()` wird die Methode der Elternklasse aufgerufen.

### 5. Sichtbarkeit (Zugriffskontrolle)
PHP unterstützt drei Arten von Sichtbarkeit für Eigenschaften und Methoden: `public`, `protected` und `private`.
* `public`-Methoden und -Eigenschaften können überall aufgerufen werden,
* `protected` nur innerhalb der Klasse und abgeleiteten Klassen,
* `private` nur innerhalb der definierenden Klasse.

Üblich ist, Eigenschaften `private` oder `protected` zu machen und den Zugriff über öffentliche Methoden (*Getter* und *Setter*) zu steuern.

### 6. Interfaces und abstrakte Klassen
Interfaces definieren Methoden, die von implementierenden Klassen bereitgestellt werden müssen. Abstrakte Klassen können als teilweise implementierte Klassen verwendet werden, von denen keine direkten Instanzen erstellt werden können.

#### Beispiel für ein Interface

Ein Interface `Fahrzeug` definiert, dass jedes Fahrzeug fahren und anhalten können muss, ohne zu spezifizieren, wie diese Aktionen ausgeführt werden.

```php
interface Fahrzeug {
    public function fahren();
    public function anhalten();
}
```

#### Beispiel für eine abstrakte Klasse

Eine abstrakte Klasse `Auto` implementiert das Interface `Fahrzeug` und bietet zusätzliche Struktur, indem sie eine abstrakte Methode `tanken` definiert. Die Methoden `fahren` und `anhalten` aus dem Interface werden hier bereits implementiert, `tanken` muss von jeder konkreten Kindklasse selbst umgesetzt werden.

```php
abstract class Auto implements Fahrzeug {
    public function fahren() {
        echo "Das Auto fährt.<br>";
    }

    public function anhalten() {
        echo "Das Auto hält an.<br>";
    }

    abstract public function tanken();
}
```

#### Implementierung der abstrakten Klasse

Eine konkrete Klasse `Elektroauto` erbt von `Auto` und implementiert die abstrakte Methode `tanken`. Da `Elektroauto` eine konkrete Klasse ist, müssen alle abstrakten Methoden implementiert werden.

```php
class Elektroauto extends Auto {
    public function tanken() {
        echo "Das Elektroauto wird aufgeladen.<br>";
    }
}
```

#### Nutzung der Klassen

```php
$meinElektroauto = new Elektroauto();
$meinElektroauto->fahren();   // Ausgabe: Das Auto fährt.
$meinElektroauto->anhalten(); // Ausgabe: Das Auto hält an.
$meinElektroauto->tanken();   // Ausgabe: Das Elektroauto wird aufgeladen.

$meinAuto = new Auto();       // Fehler: abstrakte Klassen können nicht instanziert werden
```

## Ressourcen
* [https://www.php.net/manual/de/ - php.net Manual: Klassen und Objekte](https://www.php.net/manual/de/language.oop5.php){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: Konstruktoren](https://www.php.net/manual/de/language.oop5.decon.php){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: Exceptions (Ausnahmen)](https://www.php.net/manual/de/language.exceptions.php){:target="_blank"}
