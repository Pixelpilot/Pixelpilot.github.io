---
title: Strings und Arrays
description: Übungsaufgaben zur Vorbereitung auf die sRDP

category: Fachspezifische Softwaretechnik
topic: Vorbereitung sRDP
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}

## 1. Java-Codebeispiele: Schleifen und Arrays

### 1.1. Arrays und mehrdimensionale Arrays
{: .assignment }

Führe die exakte Ausgabe an, die folgender Quelltext erzeugt:

```java
int[] x = {3, 7, 10, 4, 15, 8};
int[][] y = {
    {10, 20},
    {30, 40},
    {50, 60}
};

int k = 0;
int m = 0;

for (k = 0; k < x.length; k++) {
    
    while (m < 2 && x[k] % 2 != 0) {
        System.out.println("S1: " + k + " | " + y[m][1]);
        m++;
    }
    System.out.println("S2: " + m + " | " + x[k]);
}
System.out.println("Ende: " + k + " " + m);
```

### 1.2. Mehrdimensionale Arrays und Strings
{: .assignment }

Führe die exakte Ausgabe an, die folgender Quelltext erzeugt:

```java
String[] woerter = {"Code", "Java", "Test"};
int[][] matrix = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 0, 1, 2}
};

int n;
int p = 0;

for (n = 0; n < woerter.length; n++) {
    
    for ( ; p < woerter[n].length() % 3 + 1; p++) {
        System.out.println("Alpha: " + n + " " + matrix[n][p]);
    }
    
    System.out.println("Beta: " + p + " " + woerter[n]);
}

System.out.println("Gamma: " + n + " " + p);
```

## 2. Stringmanipulation

### 2.1. ShoppingListProcessor
Gegeben ist ein String, der verschiedene Artikel enthält, die durch Kommas getrennt sind (z. B. "Brot, Milch, Eier, Kaffee"). Die Klasse soll diesen String verarbeiten, die Leerzeichen um die Artikel entfernen und alles in Großbuchstaben speichern.

#### 2.1.a Instanzvariablen und Konstruktor

Erstelle die Instanzvariablen für den ursprünglichen `rawText` und ein `String-Array` items. Implementiere den Konstruktor, der den Text entgegennimmt und die Methode `processList()` aufruft.

Die Methode `processList()` soll den Stings in die einzelnen Items zerlegen und im Array `items` speichern.

```java
public class ShoppingListProcessor {
    // Instanzvariablen
    private String rawText;
    private String[] items;

    // TODO: Konstruktor
    
    
    // TODO: processList()
    
}
```

#### 2.1.b Methode getItemCount()
Erstelle ein Methode, die die Anzahl der gespeicherten Artikel zurückgibt

#### 2.1.c Methode containsItem()
Erstelle ein Methode die prüft, ob ein übergebener Name in der Liste existiert.

#### 2.1.d Methode getLongestItem()
Erstelle eine Methode, die den Artikel mit den meisten Zeichen findet und zurückgibt.

#### 2.1.e Methode printSummary()
Erstelle ein Methode, die die Liste numeriert in der Konsole ausgibt.

