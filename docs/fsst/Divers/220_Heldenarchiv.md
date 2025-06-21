---
title: OOP – Held:innen Archiv
description: Programmieren in Java - Divers
layout: default
category: Fachspezifische Softwaretechnik
topic: Programmieren in Java - Divers
subtopic: Divers
sitemap_exclude: n
---

# {{ page.title }}


Erstelle ein einfaches Verwaltungssystem für eine Fantasy-Welt, in der Held\:innen mit besonderen Fähigkeiten gespeichert und verwaltet werden können.

## Teil 1: Klassenstruktur (OOP)

Erstelle folgende Klassenhierarchie:

1. **Abstrakte Klasse `Held`**

  * Attribute: `String name`, `int level`
  * Methode: `void anzeigen()` – soll von Unterklassen überschrieben werden.
  * Abstrakte Methode: `int berechneKraft()`

2. **Klasse `Krieger` (erbt von `Held`)**

  * Zusätzliches Attribut: `int stärke`
  * `berechneKraft() = level * stärke`

3. **Klasse `Magier` (erbt von `Held`)**

  * Zusätzliches Attribut: `int mana`
  * `berechneKraft() = level + mana`

4. **Interface `Heilbar`**

  * Methode `void heilen()`

5. **Klasse `Priester` (erbt von `Magier` und implementiert `Heilbar`)**

  * Überschreibt `heilen()`: gibt „Heilung gewirkt!“ aus.
  * Eigene `berechneKraft()`: `level + mana + 10`


## Teil 2: Datenstruktur

Verwalte die Held\:innen in einer **verketteten Liste** (eigen implementierte Klassen `HeldKnoten`, `HeldListe`).

Die Liste soll Methoden haben:

  * `void einfuegen(Held h)` – fügt Held ans Ende hinzu
  * `void anzeigenAlle()` – ruft `anzeigen()` für alle Held\:innen auf
  * `Held suchenStärkster()` – gibt den Held mit größter `berechneKraft()` zurück
  * `int anzahlHeilbarer()`, die **rekursiv** zählt, wie viele `Held`-Objekte in der Liste das Interface `Heilbar` implementieren.