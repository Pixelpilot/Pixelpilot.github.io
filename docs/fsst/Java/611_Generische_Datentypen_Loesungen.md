---
title: Lösungen – Generische Datentypen in Java
description: Musterlösungen zu den Aufgaben über Generics und Wildcards

category: Fachspezifische Softwaretechnik
topic: Programmieren Java
subtopic: Divers

layout: default

sitemap_exclude: y
---

# {{ page.title }}

Bezug: Aufgaben aus `610_Generische_Datentypen.md`.

## 1) Theoriefragen – Musterantworten

1. **Welches Problem lösen Generics?**  
   Generics erhöhen die Typsicherheit und verhindern viele Laufzeitfehler durch falsche Type-Casts.

2. **Warum ist `ArrayList<String>` sicherer als eine Liste mit `Object`?**  
   Weil nur `String`-Werte eingefügt werden können. Falsche Typen werden bereits beim Kompilieren erkannt.

3. **Was bedeutet der Typ-Parameter `T`?**  
   `T` ist ein Platzhalter für einen Datentyp, der beim Verwenden der Klasse/Methode konkret gesetzt wird.

4. **Was ist Type Erasure?**  
   Generische Typinformationen sind zur Laufzeit weitgehend entfernt. Der Compiler prüft Typen zur Compile-Zeit und ersetzt sie intern.

---

## 2) Erste generische Klasse `Box<T>`

```java
class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

class DemoBox {
    public static void main(String[] args) {
        Box<String> textBox = new Box<>();
        textBox.set("Hallo");
        System.out.println(textBox.get());

        Box<Integer> numberBox = new Box<>();
        numberBox.set(42);
        System.out.println(numberBox.get());
    }
}
```

---

## 3) Eigene Objekte in `ArrayList`

```java
import java.util.ArrayList;

class Produkt {
    String name;
    double preis;

    Produkt(String name, double preis) {
        this.name = name;
        this.preis = preis;
    }
}

class DemoProdukte {
    public static void main(String[] args) {
        ArrayList<Produkt> produkte = new ArrayList<>();
        produkte.add(new Produkt("Maus", 19.90));
        produkte.add(new Produkt("Tastatur", 49.90));
        produkte.add(new Produkt("Monitor", 179.00));
        produkte.add(new Produkt("USB-Stick", 12.50));
        produkte.add(new Produkt("Webcam", 39.99));

        for (Produkt p : produkte) {
            System.out.printf("%-12s : %.2f EUR%n", p.name, p.preis);
        }
    }
}
```

---

## 4) Generische Utility-Methode `printList`

```java
import java.util.List;

class Utils {
    public static <T> void printList(List<T> list) {
        for (int i = 0; i < list.size(); i++) {
            System.out.println(i + ": " + list.get(i));
        }
    }
}
```

Beispielaufrufe:

```java
List<String> names = List.of("Anna", "Lukas");
List<Integer> values = List.of(10, 20, 30);

Utils.printList(names);
Utils.printList(values);
```

---

## 5) Wildcards: `average(List<? extends Number>)`

```java
import java.util.List;

class NumberUtils {
    public static double average(List<? extends Number> numbers) {
        if (numbers.isEmpty()) {
            return 0;
        }

        double sum = 0;
        for (Number n : numbers) {
            sum += n.doubleValue();
        }
        return sum / numbers.size();
    }
}

class DemoAverage {
    public static void main(String[] args) {
        List<Integer> ints = List.of(2, 4, 6, 8);
        List<Double> doubles = List.of(1.5, 2.5, 3.5);

        System.out.println(NumberUtils.average(ints));
        System.out.println(NumberUtils.average(doubles));
    }
}
```

---

## 6) Generische Klasse `Pair<K, V>`

```java
class Pair<K, V> {
    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }
}

class DemoPair {
    public static void main(String[] args) {
        Pair<String, Integer> p1 = new Pair<>("Alter", 20);
        Pair<Integer, String> p2 = new Pair<>(1, "Eins");

        System.out.println(p1.getKey() + " -> " + p1.getValue());
        System.out.println(p2.getKey() + " -> " + p2.getValue());
    }
}
```

---

## 7) Wildcards mit Unterklassen (`extends`)

```java
import java.util.List;

class ExtendsExample {
    public static double maxValue(List<? extends Number> values) {
        if (values.isEmpty()) {
            throw new IllegalArgumentException("Liste darf nicht leer sein");
        }

        double max = values.get(0).doubleValue();
        for (Number n : values) {
            if (n.doubleValue() > max) {
                max = n.doubleValue();
            }
        }
        return max;
    }

    public static void main(String[] args) {
        List<Integer> ints = List.of(2, 4, 6);
        List<Double> doubles = List.of(1.5, 2.5, 3.5);

        System.out.println("max ints    = " + maxValue(ints));
        System.out.println("max doubles = " + maxValue(doubles));
    }
}
```

---

## 8) Wildcards mit Oberklassen (`super`)

```java
import java.util.ArrayList;
import java.util.List;

class SuperExample {
    public static void fillWithSequence(List<? super Integer> target, int n) {
        for (int i = 1; i <= n; i++) {
            target.add(i);
        }
    }

    public static void printAsObjects(List<?> list) {
        for (Object item : list) {
            System.out.println(item);
        }
    }

    public static void main(String[] args) {
        List<Integer> listInt = new ArrayList<>();
        List<Number> listNumber = new ArrayList<>();
        List<Object> listObject = new ArrayList<>();

        fillWithSequence(listInt, 5);
        fillWithSequence(listNumber, 5);
        fillWithSequence(listObject, 5);

        printAsObjects(listInt);
        printAsObjects(listNumber);
        printAsObjects(listObject);
    }
}
```

---

## Hinweis zur Schreibweise `List<...>` vs `ArrayList<...>`

In Signaturen und Variablen wird häufig das Interface `List` verwendet, damit der Code flexibel bleibt:

```java
List<Number> values = new ArrayList<>();
```

So kann später z. B. auch `LinkedList` verwendet werden, ohne Methodensignaturen zu ändern.
