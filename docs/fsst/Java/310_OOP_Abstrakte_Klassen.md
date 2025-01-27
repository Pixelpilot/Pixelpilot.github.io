---
title: Vererbung und Polymorphismus, Abstrakte Klassen
description: Beispiel

category: Fachspezifische Softwaretechnik
topic: Programmieren in Java - Objektorientierte Programmierung
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}

## Aufgabenstellung: Fahrzeugmanagement-System

### Hintergrund
Ein Unternehmen möchte ein System entwickeln, um verschiedene Arten von Fahrzeugen zu verwalten. Dabei soll die Verwendung von **Vererbung**, **abstrakten Klassen** und **Polymorphie** geübt werden.

### Anforderungen

1. **Abstrakte Basisklasse: Fahrzeug**
   - Erstelle eine abstrakte Klasse `Fahrzeug` mit den folgenden Eigenschaften:
      - `marke` (String): Die Marke des Fahrzeugs.
      - `modell` (String): Das Modell des Fahrzeugs.
      - `baujahr` (int): Das Baujahr des Fahrzeugs.
   - Füge einen Konstruktor hinzu, um die obigen Attribute zu initialisieren.
   - Definiere eine abstrakte Methode `beschleunigen()`, die jede Unterklasse implementieren muss.
   - Erstelle eine nicht-abstrakte Methode `getDetails()`, die die Eigenschaften des Fahrzeugs als String zurückgibt.

2. **Unterklassen von Fahrzeug:**
   - Erstelle die folgenden Unterklassen:
      - **Auto**
         - Zusätzliche Eigenschaft: `anzahlTueren` (int).
         - Implementiere die Methode `beschleunigen()`, sodass sie eine Ausgabe wie folgt macht: „Das Auto [Marke Modell] beschleunigt.“
      - **Motorrad**
         - Zusätzliche Eigenschaft: `hatBeiwagen` (boolean).
         - Implementiere die Methode `beschleunigen()`, sodass sie eine Ausgabe wie folgt macht: „Das Motorrad [Marke Modell] beschleunigt.“
      - **LKW**
         - Zusätzliche Eigenschaft: `ladeKapazitaet` (double, in Tonnen).
         - Implementiere die Methode `beschleunigen()`, sodass sie eine Ausgabe wie folgt macht: „Der LKW [Marke Modell] beschleunigt.“

3. **Polymorphismus:**
   - Schreibe eine Klasse `FahrzeugVerwaltung`, die eine Liste von Fahrzeugen speichert (`List<Fahrzeug>`).
   - Implementiere Methoden:
      - `addFahrzeug(Fahrzeug fahrzeug)`: Fügt ein Fahrzeug zur Liste hinzu.
      - `zeigeAlleFahrzeuge()`: Gibt die Details aller Fahrzeuge in der Liste aus.
      - `alleBeschleunigen()`: Ruft die Methode `beschleunigen()` für jedes Fahrzeug in der Liste auf.

4. **Hauptprogramm (main-Methode):**
   - Erstelle in der `main`-Methode mehrere Fahrzeuge (Autos, Motorräder, LKWs).
   - Füge diese Fahrzeuge in die `FahrzeugVerwaltung` ein.
   - Rufe die Methoden `zeigeAlleFahrzeuge()` und `alleBeschleunigen()` auf, um zu zeigen, wie Polymorphismus funktioniert.

### Bonus (optional):
- Erstelle eine Methode `sucheFahrzeugNachMarke(String marke)`, die alle Fahrzeuge einer bestimmten Marke aus der Liste zurückgibt.
- Füge eine Möglichkeit hinzu, Fahrzeuge nach Baujahr zu sortieren.

---

### Beispielausgabe
```plaintext
Fahrzeuge in der Verwaltung:
Marke: VW, Modell: Golf, Baujahr: 2018, Türen: 5
Marke: Yamaha, Modell: R1, Baujahr: 2020, Beiwagen: Nein
Marke: MAN, Modell: TGX, Baujahr: 2015, LadeKapazität: 20.0 Tonnen

Beschleunigung aller Fahrzeuge:
Das Auto VW Golf beschleunigt.
Das Motorrad Yamaha R1 beschleunigt.
Der LKW MAN TGX beschleunigt.
```

### Ziel
Die Aufgabenstellung gibt einen praktischen Einblick in die Konzepte der **Vererbung**, **abstrakten Klassen** und **Polymorphie**, und zeigt, wie diese in einem realistischen Szenario angewendet werden können.