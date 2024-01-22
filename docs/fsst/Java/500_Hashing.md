---
title: Hashing
description: Aufgabenstellungen zu Hashing

category: Fachspezifische Softwaretechnik
topic: Algorithmen und Datenstrukturen
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }} 

## 1. HashTable und HashTableEntry 

Erstelle die Klassen `HashTableEntry` und `HashTable`.

```java
class HashTableEntry {
    int key;
    int value; // stored data
}
```

```java
class HashTable {
private HashTableEntry[] table;
    public HashTable(int M) {
        table = new HashTableEntry[M];
    }
    
    private int hash(int hashValue) {
        int index = hashValue % table.length;
        if (index < 0) {
            index = -index;
        }
        return index;
    }
    
    public void put(HashTableEntry entry) {
        int idx = hash(entry.key);
        table[idx] = entry;
    }
    
    public HashTableEntry get(int key) {
        int idx = hash(key);
        return table[idx];
    }
}
```

## 2. Text-Hashing

Implementiere **sum-** und **shiftet-sum-Hashing** für Strings. Überschreibe dazu in der Klasse `HashTableEntry` die Methode `int hashCode()`, die in der Klasse `Object` definiert ist. 

Als Schlüssel wird `String key` in der Klasse `HashTableEntry` verwendet, der `value` bleibt vorerst leer oder kann entfernt werden.

Teste beide Verfahren für eine Tabellengröße $$ \text{m} = 13 $$ und den Schlüsseln `"ANDI"`, `"INDA"`, `"SUSI"`, `"OTTO"`. Erstelle in der Klasse `HashTable` die Methode `print()` um die Tabelle auszugeben.

## 3. Key Value
Schreibe ein Programm das mit Hilfe einer Hashtabelle key/value-Paare verwalten kann. Wobei der `key` ein Text und `value` ein ganzzahliger Wert ist. 

Das heißt einem Text wird eine Zahl zugeordnet, z.B.: Land &rarr; Einwohner. `Key` = `String`, `Value` = `int`. Verwende eine Tabellengröße von $$ \text{m} = 7 $$ und **separate chaining** für die Kollisionsbehandlung.


```java
/**
 * Funktion zum Befüllen der Hash-Table mit key-value-Paaren
 * @param table Hash-Table, die befüllt werden soll
 */
public static void feedTable ( HashTable table ){
    table.put(new HashTableEntry("Indien", 1425000000));
    table.put(new HashTableEntry("China", 1425000000));
    table.put(new HashTableEntry("USA", 333000000));
    table.put(new HashTableEntry("Indonesien", 275000000));
    table.put(new HashTableEntry("Pakistan", 235000000));
    table.put(new HashTableEntry("Nigeria", 218000000));
    table.put(new HashTableEntry("Brasilien", 215000000));
    table.put(new HashTableEntry("Bangladesch", 171000000));
    table.put(new HashTableEntry("Russland", 143000000));
    table.put(new HashTableEntry("Mexiko", 127000000));
    table.put(new HashTableEntry("Japan", 125000000));
    table.put(new HashTableEntry("Äthiopien", 123000000));
    table.put(new HashTableEntry("Philippinen", 115000000));
    table.put(new HashTableEntry("Ägypten", 111000000));
    table.put(new HashTableEntry("Kongo (Dem Rep)", 99000000));
    table.put(new HashTableEntry("Vietnam", 98000000));
    table.put(new HashTableEntry("Iran", 88000000));
    table.put(new HashTableEntry("Türkei", 85000000));
    table.put(new HashTableEntry("Deutschland", 84000000));
    table.put(new HashTableEntry("Thailand", 71000000));
    table.put(new HashTableEntry("Frankreich", 67000000));
    table.put(new HashTableEntry("Vereinigtes Königreich", 67000000));
    table.put(new HashTableEntry("Tansania", 65000000));
    table.put(new HashTableEntry("Südafrika", 59000000));
    table.put(new HashTableEntry("Italien", 58000000));
    table.put(new HashTableEntry("Myanmar", 54000000));
    table.put(new HashTableEntry("Kenia", 54000000));
    table.put(new HashTableEntry("Kolumbien", 51000000));
    table.put(new HashTableEntry("Südkorea", 51000000));
}
```

Erstelle in der Klasse `HashTable` die Methode `print()`, die den Inhalt der Hash-Table ausgibt (pro Index eine Zeile). Teste verschiedene Tabellengrößen.

```
[ 0] Japan:378000 -| 
[ 1] Deutschland:357600 -> Vereinigtes Königreich:243600 -> Südafrika:1219100 -| 
[ 2] null
[ 3] China:9562900 -> USA:9525100 -> Ägypten:1001500 -> Türkei:785400 -| 
```
<sup>*Beispielhafte Ausgabe der Methode `print()`*</sup>

Verwende die Methode `get()` der Klasse `HashTable`, um nach bestimmten Schlüsseln zu suchen:
```
String[] search = {"Deutschland", "China", "Luxemburg"};
```


## 4. Wörter zählen

#### Anforderungen

Ermittle für eine Textdatei:

- Die Anzahl unterschiedlicher Wörter
- Das am häufigsten vorkommende Wort 
- Die Ausführungszeit für ...
  - das Einlesen und Speichern der Daten
  - das Suchen nach bestimmten Wörtern

#### Untersuche zwei Verfahren und vergleiche die beiden

1. **Speichern der Wörter in einer ArrayList** <br>Lineare Suche
2. **Speichern der Wörter in einer HashTable** <br> Teste unterschiedliche Größen der HashMap<br> ($$M=10$$, $$M=1000$$, $$M=100000$$, $$M=10000000$$)

Es empfiehlt sich für `M` und die Anzahl der Suchabfragen in einer Konstante zu speichern.


#### Messen der Laufzeit
```java
long start = System.nanoTime();

// Zu messender Quelltext
...
 
long end = System.nanoTime();
System.out.println("Time passed: " + (end - start) / 1000.0 + " µs");
```


#### Lesen von Textdateien
Erweitere folgendes Grundgerüst, das ein Textfile einliest und die darin enthaltenen Wörter zählt:

* [Kafka-Das-Urteil.txt (4.027 Wörter)](assets/Kafka-Das-Urteil.txt){:target="_blank"}
* [Goethe-Faust.txt (30.635 Wörter)](assets/Goethe-Faust.txt){:target="_blank"}
* [Das_Nibelungenlied.txt (95.588 Wörter)](assets/Das-Nibelungenlied.txt){:target="_blank"}
* [Flaubert-Frau-Bovary.txt (114.852 Wörter)](assets/Flaubert-Frau-Bovary.txt){:target="_blank"}
* [big.txt (1.086.864 Wörter)](assets/big.txt){:target="_blank"}

``` java
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

public class Main {

    public static final int M = 100;
    public static final int SEARCHES = 10000;

    public static void main(String[] args) {
        // ...
    }
    
    /**
     * Wörter aus einer Textdatei auslesen und in einer HashTable speichern
     *
     * @param filename  Dateiname der Textdatei die eingelesen werden soll
     * @param table     Hashtabelle, in der die Wörter gespeichert werden sollen
     * @return          Anzahl der Wörter in der Textdatei
     */
    public static int readWordFromFile(String filename, HashTable table) {
    
        String s;
        int words = 0;
        try {
            // Datei einlesen
            FileReader reader = new FileReader(filename);
            Scanner inputFile = new Scanner(reader);
            while (inputFile.hasNext()) {
                s = inputFile.next();
                s = s.replaceAll("[^\\p{L}]", ""); // Satzzeichen etc. entfernen
                s = s.trim(); // Leerzeichen entfernen
                if (s.length() == 0) {
                    continue; // Leerstring ignorieren
                }
                // Im String s ist nun das Wort enthalten
                // System.out.println(s);

                // Anzahl der Wörter erhöhen    
                words++;

                // TODO: Element in der Liste speichern, oder Anzahl erhöhen wenn schon enthalten
                // ...
            }
            // System.out.println(words + " words");
            inputFile.close();

            return words;

        } catch (FileNotFoundException ex) {
            System.out.println("File not found");
        }
        return -1;
    }
}
```


## 5. Hashing-Experiment
Schreibe ein Programm, dass herausfindet wie häufig Kollisionen auftreten. Lege dazu ein großes int Array an (200.000 Elemente), fülle dieses mit zufälligen Werten, diese sollen alle unterschiedlich sein und im positiven int Wertebereich ( $$ 0 \le \text{x} \le 2^{31}−1 $$) liegen.

Lege ein zweites Array an mit ebenfalls 200 000 Elementen, dieses ist die Hashtabelle. Berechne für jede Zahl im ersten Array den Index mit der Hashfunktion, addiere an dieser Stelle in der Hashtabelle den Wert eins. Die Zahl in der Hashtabelle sagt aus wie viele Zahlen an dieser Position gespeichert werden müssten. Dies ist $$ \gt 1 $$ wenn eine Kollision auftritt.

Gib aus: Maximale Anzahl von Kollisionen an einer Position und eine Statistik wie viele Positionen leer bleiben, wie viele ein Element enthalten, wie viele zwei, usw.

Beispiel:

    Anzahl der Zahlen: 131072
    Hastabelle: 131072
    Max: 9

    Count[0]: 48427
    Count[1]: 47799
    Count[2]: 24289
    Count[3]: 8095
    Count[4]: 1987
    Count[5]: 398
    Count[6]: 69
    Count[7]: 7
    Count[8]: 0
    Count[9]: 1

Experimentiere mit unterschiedlichen Größen der Hashtabelle.

## 6. Hashing gegen binäre Suche

Vergleiche die Performance (=Laufzeit) der binären Suche und Hashing mittels `HashMap`.
Verwende das zufällige Array aus Beispiel [Hashing-Experiment](#6-hashing-experiment) als Datenbasis und suche jedes Element aus diesem Array, einmal mit binärer Suche und einmal mit der Hashtabelle.