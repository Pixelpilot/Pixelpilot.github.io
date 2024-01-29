---
title: Graphen
description: Aufgabenstellungen zu Hashing

category: Fachspezifische Softwaretechnik
topic: Algorithmen und Datenstrukturen
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }} 

## 1. Umsetzung des Graphen 

Erstelle die Klassen `HashTableEntry` und `HashTable`.

### 1.1 Klasse Vertex

Erstelle eine Klasse `Vertex`, die einen Knotenpunkt im Graphen abbilden soll. Neben dem Namen des Knotenpunkts soll eine Liste von Verbindungen (Edges) gespeichert werden können.

Implementiere einen Konstruktor `public Vertex (String name)`.

### 1.2. Klasse Edge
Erstelle eine Klasse `Edge`, die eine gewichtete Verbindung in einem Graphen abbilden soll. Die Verbindung soll eine Referenz auf das Ziel (Vertex) sowie das Gewicht abbilden.

Implementiere einen Konstruktor `public Edge (Vertex destination, int weight)`,
mit dem beide Instanzvariablen gesetzt werden können.

### 1.3. Klasse Graph
Der Graph soll das Strassennetzwerk abbilden. Da die Verbindungen bei den einzelnen Vertices gespeichert werden, ist die einzige Instanzvariable der Klasse Graph eine Liste von Vertices `ArrayList<Vertex> vertices`.

Implementiere folgende Methoden:
* `void addVertex(Vertex v)`<br>
Fügt der Liste einen neuen Knotenpunkt hinzu.
* `Vertex getVertex(String s)`<br>
  Durchsucht die Liste nach einem Knotenpunkt mit einem bestimmten Namen. Ist der Knotenpunkt enthalten, wird eine Referenz auf den Knotenpunkt zurückgegeben. Ist kein Knoten mit dem angegebenen Namen enthalten, wird null zurückgegeben werden.
* `void addEdge(Vertex a, Vertex b, int weight)`<br>
Erstellt eine neue Verbindung (Edge und fügt diese Verbindung den beiden Knotenpunkte `a` und `b` hinzu.
* `void print()`<br>
Gibt alle im Graph enthaltenen Knotenpunkte (Vertices) und dessen Verbindungen (Edges) zu anderen Knotenpunkten aus.

### 1.4. Befüllen mit Daten
Erstelle im Hauptprogramm einen Graphen und fülle ihn mit den in den Klassen erstellten Methoden mit untenstehender Struktur. Verwende die Methode `print()` um den korrekten Aufbau zu kontrollieren:

![java_graph_simple.png](img/java_graph_simple.png){: width="350" }


```console
----------------------------------------
Graph with Vertices with edges
----------------------------------------
Vertex:A Edges: B(6), D(1)
Vertex:B Edges: A(6), D(2), E(2), C(5)
Vertex:C Edges: B(5), E(5)
Vertex:D Edges: A(1), B(2), E(1)
Vertex:E Edges: B(2), D(1), C(5)
```


### 1.5. Traversieren des Graphen

#### Depth-First und Breath-First
Implementierte zwei Methoden, die dem Graphen traversieren, und die Namen aller Vertices im Graphen ausgeben:

* Depth-First (Tiefensuche) – `traversalDFS(Vertex start)`
* Breath-First (Breitensuche) – `traversalBFS(Vertex start)`

Testen die Methoden mit unterschiedlichen Ausgangs-Vertices.


#### Verbindungen überprüfen
Implementierte zwei Methoden, die überprüfen, ob eine Verbindung von einem Vertex zu einem anderen Vertex besteht:

* Depth-First (Tiefensuche) – `boolean hasPathDFS(Vertex a, Vertex b)`
* Breath-First (Breitensuche) – `boolean hasPathBFS(Vertex a, Vertex b)`

Testen die Methoden mit unterschiedlichen Ausgangs- und Ziel-Vertices.
