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

Teste beide Verfahren für eine Tabellengröße $$ \text{m} = 13 $$ und den Schlüsseln `"ANDI"`, `"INDA"`, `"SUSI"`, `"OTTO"`.

## 3. Key Value
Schreibe ein Programm das mit Hilfe einer Hashtabelle key/value-Paare verwalten kann. Wobei der `key` ein Text und `value` ein ganzzahliger Wert ist. 

Das heißt einem Text wird eine Zahl zugeordnet, z.B.: Land &rarr; Einwohner. `Key` = `String`, `Value` = `int`. Verwende **separate chaining** für die Kollisionsbehandlung.


Beispielhafte Einträge:
1. Land &rarr; Einwohnerzahl (z.B. Deutschland &rarr; 83 Millionen)
1. Gebäude &rarr; Stockwerke (z.B. Eiffelturm &rarr; 3 Stockwerke)
1. Auto &rarr; PS (z.B. Audi A4 &rarr; 190 PS)
1. Fluss &rarr; Länge in km (z.B. Rhein &rarr; 1230 km)
1. Berg &rarr; Höhe in Metern (z.B. Mount Everest &rarr; 8848 m)
1. Stadt &rarr; Fläche in km² (z.B. Berlin &rarr; 891,8 km²)
1. Unternehmen &rarr; Mitarbeiterzahl (z.B. Google &rarr; 135000 Mitarbeiter)
1. Buch &rarr; Seitenzahl (z.B. „Harry Potter und der Stein der Weisen“ &rarr; 223 Seiten)
1. Film &rarr; Laufzeit in Minuten (z.B. Titanic &rarr; 195 Minuten)
1. Album &rarr; Anzahl der Lieder (z.B. Thriller von Michael Jackson &rarr; 9 Lieder)
1. Universität &rarr; Anzahl der Studenten (z.B. Harvard &rarr; 22000 Studenten)
1. Flugzeug &rarr; Sitzplätze (z.B. Airbus A380 &rarr; 853 Sitzplätze)
1. Insel &rarr; Bevölkerungsdichte pro km² (z.B. Malta &rarr; 1366 Einwohner/km²)
1. Ozean &rarr; Tiefe in Metern (z.B. Pazifik &rarr; 10911 m)
1. Computer &rarr; Speicherkapazität in GB (z.B. MacBook Pro &rarr; 512 GB)
1. Spiel &rarr; Anzahl der Level (z.B. Super Mario Bros. &rarr; 32 Level)
1. Gemälde &rarr; Alter in Jahren (z.B. Mona Lisa &rarr; 517 Jahre)
1. Sportverein &rarr; Anzahl der Mitglieder (z.B. FC Barcelona &rarr; 144000 Mitglieder)
1. Krankheit &rarr; Inkubationszeit in Tagen (z.B. Masern &rarr; 14 Tage)
1. Brücke &rarr; Länge in Metern (z.B. Golden Gate Bridge &rarr; 2737 m)


## 4. Wörter zählen
Ermittle für eine Textdatei:

- Die Anzahl unterschiedlicher Wörter
- Das am häufigsten vorkommende Wort 
- Die Ausführungszeit

Untersuche zwei Verfahren:
1. Array mit linearer Suche.
2. Hashing


**Messen der Laufzeit**
```java
long start = System.nanoTime();

// Zu messender Quelltext
...
 
long end = System.nanoTime();
System.out.println("Time passed: " + (end - start) / 1000.0 + " µs");
```


**Lesen von Textdateien**  
Erweitere folgendes Grundgerüst, das ein Textfile einliest und die darin enthaltenen Wörter zählt:

* [Kafka-Das Urteil.txt (4.027 Wörter)](assets/Kafka-Das Urteil.txt){:target="_blank"}
* [Goethe-Faust.txt (30.635 Wörter)](assets/Goethe-Faust.txt){:target="_blank"}
* [Das_Nibelungenlied.txt (95.588 Wörter)](assets/Das-Nibelungenlied.txt){:target="_blank"}
* [Flaubert-Frau-Bovary.txt (114.852 Wörter)](assets/Flaubert-Frau-Bovary.txt){:target="_blank"}
* [big.txt (1.086.864 Wörter)](assets/big.txt){:target="_blank"}

``` java
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

public class ReadWordsFromFile {

    public static void main(String[] args) {
        String s;
        int words = 0;
        try {

            // Kafka-Das-Urteil.txt --- 4027 Wörter
            // Goethe-Faust.txt --- 30653 Wörter
            // Das Nibelungenlied.txt --- 95588 Wörter
            // Flaubert-Frau Bovary.txt --- 114852 Wörter
            // big.txt --- 1086864 Wörter
            
            FileReader reader = new FileReader("Kafka-Das-Urteil.txt");
            Scanner inputFile = new Scanner(reader);
            while (inputFile.hasNext()) {
                s = inputFile.next();
                s = s.replaceAll("[^\\p{L}]", ""); // Satzzeichen etc. entfernen
                s = s.trim(); // remove white space
                if (s.length() == 0) {
                    continue; // ignore empty strings
                }
                // string s contains a word now
                words++;
                //System.out.println(s);
            }
            System.out.println(words + " words");
            inputFile.close();

        } catch (FileNotFoundException ex) {
            System.out.println("File not found");
        }
    }
}
```

## 5. Wörter zählen mit Baum
Implementiere [vorherige Übung](#4-wrter-zhlen) mit Hilfe eines Baumes und führe ebenfalls die Laufzeitmessung durch.


## 6. Hashing-Experiment
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

## 7. Hashing gegen binäre Suche

Vergleiche die Performance (=Laufzeit) der binären Suche und Hashing mittels `HashMap`.
Verwende das zufällige Array aus Beispiel [Hashing-Experiment](#6-hashing-experiment) als Datenbasis und suche jedes Element aus diesem Array, einmal mit binärer Suche und einmal mit der Hashtabelle.

## 8. Schülerliste

Verwende die Schü̈lerliste in Matliste.txt als Basis. Die Datei wird in ein Array von Objekten eingelesen, ein Objekt pro Schüler. Es sind genau die Matrikelnummern
9001–9100 in der Datei enthalten (in zufälliger Reihenfolge).

Suche mit Hilfe der angegebenen Suchverfahren jede einzelne Matrikelnummer von 9001 bis 9100. Wiederhole den gesamten Vorgang 1000 mal und messe die  Laufzeit.

- Lineare Suche
- Binäre Suche (Lege für diese Aufgabe eine sortierte  Kopie des Arrays an)
- Binärer Suchbaum
- Hashing — mit separate chaining (Experimentiere mit verschieden großen Hashtabellen)
- HashMap

Erstelle aus den ermittelten Zeiten eine Vergleichstabelle.

* [Matliste.txt](assets/Matliste.txt){:target="_blank"}