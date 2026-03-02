---
title: Generische Datentypen in Java
description: Theorie und Übungen zu Generics mit Beispielen wie ArrayList

category: Fachspezifische Softwaretechnik
topic: Programmieren Java
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}

## 1. Theorie: Generische Datentypen

Generische Datentypen (Generics) erlauben es, Klassen, Interfaces und Methoden mit Platzhaltern für Datentypen zu definieren.
Dadurch kann derselbe Code für unterschiedliche Typen wiederverwendet werden – bei gleichzeitig besserer Typsicherheit.

### 1.1 Warum Generics?

Ohne Generics wurden Sammlungen oft mit dem Typ `Object` verwendet.
Beim Auslesen musste dann mit Type-Cast gearbeitet werden, was zu Laufzeitfehlern führen kann.

Mit Generics:

- werden Typfehler bereits zur Compile-Zeit erkannt,
- entfallen viele unsichere Type-Casts,
- wird der Code besser lesbar und wartbar.

### 1.2 Grundsyntax

Ein generischer Typ-Parameter wird in spitzen Klammern angegeben:

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
```

Verwendung:

```java
Box<String> textBox = new Box<>();
textBox.set("Hallo");

Box<Integer> numberBox = new Box<>();
numberBox.set(42);
```

### 1.3 Typ-Parameter in Java

Häufige Konventionen:

- `T` = Type
- `E` = Element
- `K` = Key
- `V` = Value

Mehrere Typ-Parameter sind möglich, z. B. `Map<K, V>`.

### 1.4 Grenzen von Generics (kurz)

- Generics funktionieren nur mit Referenztypen (bei primitiven Typen Auto-Boxing, z. B. `int` → `Integer`).
- Zur Laufzeit sind Typinformationen nur eingeschränkt verfügbar (Type Erasure).



## 2. Beispiele mit `ArrayList`

Die Klasse `ArrayList<E>` ist ein Standardbeispiel für Generics:

```java
import java.util.ArrayList;

ArrayList<String> names = new ArrayList<>();
names.add("Anna");
names.add("Lukas");

String first = names.get(0); // kein Cast nötig
```

### 2.1 Beispiel mit Zahlen

```java
ArrayList<Integer> values = new ArrayList<>();
values.add(10);
values.add(20);
values.add(30);

int sum = 0;
for (Integer value : values) {
    sum += value;
}
System.out.println("Summe: " + sum);
```

### 2.2 Beispiel mit eigenen Klassen

```java
class Student {
    String name;
    int semester;

    Student(String name, int semester) {
        this.name = name;
        this.semester = semester;
    }
}

ArrayList<Student> students = new ArrayList<>();
students.add(new Student("Mila", 2));
students.add(new Student("Noah", 4));

for (Student s : students) {
    System.out.println(s.name + " (" + s.semester + ". Semester)");
}
```

### 2.3 Wildcards

Wildcards werden verwendet, wenn der genaue Typ einer generischen Struktur nicht exakt festgelegt werden soll.

- `List<?>` bedeutet: Liste mit unbekanntem Typ
- `List<? extends Number>` bedeutet: `Number` oder eine Unterklasse davon
- `List<? super Integer>` bedeutet: `Integer` oder eine Oberklasse davon

Merksatz (PECS):

- **Producer Extends**: Wenn aus einer Struktur gelesen wird, ist `extends` oft passend.
- **Consumer Super**: Wenn in eine Struktur hineingeschrieben wird, ist `super` oft passend.

#### 2.3.1 Ungebundene Wildcard `?`

`List<?>` kann Elemente sicher lesen (als `Object`), aber nicht gezielt neue Werte hinzufügen (außer `null`).

```java
public static void printAnyList(List<?> values) {
    for (Object value : values) {
        System.out.println(value);
    }
}
```

#### 2.3.2 Unterklassen mit `? extends`

Mit `? extends Number` akzeptiert die Methode Listen von `Integer`, `Double`, `Long` usw.

```java
public static double sum(List<? extends Number> numbers) {
    double result = 0;
    for (Number n : numbers) {
        result += n.doubleValue();
    }
    return result;
}

List<Integer> ints = List.of(1, 2, 3);
List<Double> doubles = List.of(1.5, 2.5, 3.5);

System.out.println(sum(ints));
System.out.println(sum(doubles));
```

Hinweis: Bei `List<? extends Number>` sollte man keine neuen Zahlen per `add(...)` einfügen, weil der konkrete Untertyp unbekannt ist.

#### 2.3.3 Oberklassen mit `? super`

Mit `? super Integer` kann eine Methode `Integer`-Werte sicher einfügen.
Als Zieltyp sind dann z. B. `List<Integer>`, `List<Number>` oder `List<Object>` möglich.

```java
public static void addDefaults(List<? super Integer> target) {
    target.add(10);
    target.add(20);
}

List<Number> numbers = new ArrayList<>();
List<Object> objects = new ArrayList<>();

addDefaults(numbers);
addDefaults(objects);
```

Wichtig: Beim Auslesen aus `List<? super Integer>` erhält man nur `Object`, da der konkrete Typ oberhalb von `Integer` liegen kann.

#### 2.3.4 Warum oft `List` statt `ArrayList`?

In Methoden und Variablendeklarationen wird häufig das Interface `List` verwendet, nicht die konkrete Klasse `ArrayList`.
Grund: Der Code bleibt flexibler, weil später auch andere Implementierungen wie `LinkedList` verwendet werden können, ohne die Methodensignatur zu ändern.

```java
List<Number> values = new ArrayList<>();
```

Hier ist die konkrete Instanz weiterhin eine `ArrayList`, aber nach außen wird nur der allgemeinere Typ `List` benötigt.


## Aufgaben

> ### 1. Theoriefragen
> {: .assignment }
> Beantworte kurz in eigenen Worten:
> 
> 1. Welches Problem lösen Generics?
> 2. Warum ist `ArrayList<String>` sicherer als eine Liste mit `Object`?
> 3. Was bedeutet der Typ-Parameter `T`?
> 4. Was ist mit Type Erasure gemeint?

> ### 2. Erste generische Klasse
> {: .assignment }
> Implementiere eine Klasse `Box<T>` mit folgenden Methoden:
> 
> - `void set(T value)`
> - `T get()`
> 
> Teste die Klasse mit:
> 
> - `Box<String>`
> - `Box<Integer>`


> ### 3. Eigene Objekte in `ArrayList`
> {: .assignment }
> Erstelle eine Klasse `Produkt` mit:
> 
> - `String name`
> - `double preis`
> 
> Lege eine `ArrayList<Produkt>` an und füge mindestens 5 Produkte hinzu.
> Gib anschließend alle Produkte formatiert aus.


> ### 4. Generische Utility-Methode
> {: .assignment }
> Implementiere eine generische Methode:
> 
> ```java
> public static <T> void printList(List<T> list)
> ```
>
> Die Methode soll alle Elemente der Liste mit Index ausgeben.
> Teste die Methode mit:
> 
> - `List<String>`
> - `List<Integer>`
> - `List<Produkt>`


> ### 5. Vertiefung mit Wildcards
> {: .assignment }
> Implementiere eine Methode:
> 
> ```java
> public static double average(List<? extends Number> numbers)
> ```
> 
> Die Methode soll den Durchschnitt berechnen.
> Teste sie mit:
> 
> - `List<Integer>`
> - `List<Double>`


> ### 6. Key+Value
> {: .assignment }
> Erstelle eine generische Klasse `Pair<K, V>`, die zwei Werte verwaltet (z. B. Schlüssel/Wert).
> Teste sie mit unterschiedlichen Typkombinationen, z. B.:
> 
> - `Pair<String, Integer>`
> - `Pair<Integer, String>`


> ### 7. Wildcards mit Unterklassen (`extends`)
> {: .assignment }
> Gegeben sind die Listen:
>
> - `List<Integer> ints = List.of(2, 4, 6)`
> - `List<Double> doubles = List.of(1.5, 2.5, 3.5)`
>
> Implementiere die Methode:
>
> ```java
> public static double maxValue(List<? extends Number> values)
> ```
>
> Anforderungen:
>
> - Liefert den größten Wert der Liste als `double` zurück
> - Funktioniert mit `List<Integer>` und `List<Double>`
> - Gib danach das Ergebnis beider Listen auf der Konsole aus


> ### 8. Wildcards mit Oberklassen (`super`)
> {: .assignment }
> Implementiere die Methode:
>
> ```java
> public static void fillWithSequence(List<? super Integer> target, int n)
> ```
>
> Anforderungen:
>
> - Fügt die Zahlen von `1` bis `n` in die Ziel-Liste ein
> - Teste mit `List<Integer>`, `List<Number>` und `List<Object>`
> - Lies anschließend alle Elemente aus und gib sie aus (Hinweis: beim Lesen als `Object` behandeln)
