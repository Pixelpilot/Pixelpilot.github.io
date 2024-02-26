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

OOP in PHP ermöglicht es Entwicklern, modularen und wiederverwendbaren Code zu schreiben, was die Entwicklung großer Anwendungen vereinfacht und die Wartbarkeit verbessert.

## Grundkonzepte der OOP in PHP

### 1. Klassen und Objekte

Eine Klasse ist eine Vorlage oder ein Bauplan für Objekte. Ein Objekt ist eine Instanz einer Klasse. Die Klasse definiert die Eigenschaften und Methoden, die ihre Objekte haben werden.

#### Vorteile der OOP in PHP

- **Modularität**: Jedes Objekt ist ein unabhängiger Baustein, was die Entwicklung vereinfacht.
- **Wiederverwendbarkeit**: Durch Vererbung und Polymorphismus kann vorhandener Code leicht in neuen Projekten verwendet werden.
- **Erweiterbarkeit**: Objekte können leicht modifiziert und erweitert werden, ohne bestehenden Code zu beeinträchtigen.
- **Wartbarkeit**: OOP fördert klar definierte Strukturen, was die Wartung und das Debugging von Code erleichtert.

#### Die Eine-Klasse-pro-Datei-Strategie
Es ist eine weit verbreitete Konvention und gilt als Best Practice, jede Klasse in einer eigenen Datei zu speichern. Dies verbessert die Lesbarkeit und Wartbarkeit des Codes. Die Dateinamen entsprechen in der Regel den Klassennamen, was die Navigation im Projekt erleichtert.

Ausserdem nutzen moderne PHP-Anwendungen *Autoloader*, um Klassen automatisch zu laden, ohne dass `require` oder `include` Anweisungen manuell für jede Klasse geschrieben werden müssen.

### 2. Eigenschaften und Methoden

Eigenschaften sind Variablen innerhalb einer Klasse, die die Daten oder den Zustand des Objekts repräsentieren. Methoden sind Funktionen innerhalb einer Klasse, die das Verhalten der Objekte definieren.

```php
class Auto {
    public $farbe;
    public function fahren() {
        echo "Das Auto fährt.";
    }
}

$meinAuto = new Auto();
$meinAuto->farbe = "Rot";
$meinAuto->fahren();
```


### 3. Konstruktor
Ein spezieller Typ einer Methode, der automatisch aufgerufen wird, wenn ein neues Objekt der Klasse erstellt wird. Er wird oft verwendet, um Anfangswerte für Objekteigenschaften zu setzen.

Wenn eine Klassenvariable (Eigenschaft) im Konstruktor nicht explizit initialisiert wird, erhält sie den Wert `null`.

```php
class Auto {
    public $farbe;
    public function __construct($farbe) {
        $this->farbe = $farbe;
    }
    public function fahren() {
        echo "Das Auto fährt.";
    }
}

$meinAuto = new Auto("Rot");
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
    // Auto erbt fahren von Fahrzeug
}

$meinAuto = new Auto();
$meinAuto->fahren();
```

### 4. Sichtbarkeit (Zugriffskontrolle)
PHP unterstützt drei Arten von Sichtbarkeit für Eigenschaften und Methoden: `public`, `protected` und `private`.
* `public`-Methoden und -Eigenschaften können überall aufgerufen werden,
* `protected` nur innerhalb der Klasse und abgeleiteten Klassen, 
* `private` nur innerhalb der definierenden Klasse.

### 5. Interfaces und Abstrakte Klassen
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

Eine abstrakte Klasse `Auto` implementiert das `Fahrzeug` Interface und bietet zusätzliche Struktur, indem sie eine abstrakte Methode `tanken` definiert. Sie gibt jedoch nicht vor, wie die Methoden `fahren` und `anhalten` implementiert werden sollen, die vom Interface vorgegeben werden.

```php
abstract class Auto implements Fahrzeug {
    public function fahren() {
        echo "Das Auto fährt.\n";
    }

    public function anhalten() {
        echo "Das Auto hält an.\n";
    }

    abstract public function tanken();
}
```

#### Implementierung der abstrakten Klasse

Eine konkrete Klasse `Elektroauto` erbt von `Auto` und implementiert die abstrakte Methode `tanken`. Da `Elektroauto` eine konkrete Klasse ist, müssen alle abstrakten Methoden implementiert werden.

```php
class Elektroauto extends Auto {
    public function tanken() {
        echo "Das Elektroauto wird aufgeladen.\n";
    }
}
```

#### Nutzung der Klassen

```php
$meinElektroauto = new Elektroauto();
$meinElektroauto->fahren(); // Ausgabe: Das Auto fährt.
$meinElektroauto->anhalten(); // Ausgabe: Das Auto hält an.
$meinElektroauto->tanken(); // Ausgabe: Das Elektroauto wird aufgeladen.
```

## Ressourcen
* [https://www.php.net/manual/de/ - php.net Manual: Klassen und Objekte](https://www.php.net/manual/de/language.oop5.php){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: Exceptions (Ausnahmen)](https://www.php.net/manual/de/language.exceptions.php){:target="_blank"}
