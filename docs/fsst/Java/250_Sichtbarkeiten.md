---
title: Sichtbarkeiten, etc.
description: Vorbereitung sRDP

category: Fachspezifische Softwaretechnik
topic: Vorbereitung sRDP
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}

## Übungsaufgabe: Das Zoo-Verwaltungssystem

### Teil 1: Sichtbarkeit und Kapselung (Access Modifiers)
In diesem Teil geht es darum, den Zugriff auf Daten zu kontrollieren.

**Szenario:** Wir erstellen eine Basisklasse `Tier`.
1.  Erstelle eine Klasse `Tier` im Paket `zoo.basis`.
2.  Füge folgende Attribute hinzu und wähle die korrekte Sichtbarkeit:
    * `name`: Sollte nur innerhalb der Klasse `Tier` direkt änderbar sein (**private**).
    * `alter`: Sollte für die Klasse selbst und alle Unterklassen (auch in anderen Paketen) direkt zugänglich sein (**protected**).
    * `art`: Sollte von überall her lesbar, aber nicht änderbar sein (**public**).
3.  Erstelle eine Unterklasse `Loewe` in einem anderen Paket `zoo.raubtiere`.
4.  **Experiment:** Versuche in der Klasse `Loewe` auf alle drei Attribute von `Tier` zuzugreifen. Welche sind sichtbar? Dokumentiere, warum der Zugriff auf `name` scheitert und wie man ihn über *Getter/Setter* lösen könnte.

---

### Teil 2: Abstraktion und Interfaces
Nun verfeinern wir das System. Ein allgemeines "Tier" gibt es im Zoo nicht, es ist immer eine konkrete Art. Zudem haben manche Tiere spezielle Fähigkeiten.

1.  **Abstrakte Klasse:** Ändere die Klasse `Tier` in eine `abstract class`.
    * Füge eine abstrakte Methode `public abstract void macheGeräusch();` hinzu. Warum macht es Sinn, dass diese Methode abstrakt ist?
2.  **Interfaces:** Erstelle zwei Interfaces:
    * `Schwimmfähig` mit der Methode `schwimme()`.
    * `Jagdfähig` mit der Methode `jage()`.
3.  **Implementierung:**
    * Lasse die Klasse `Loewe` von `Tier` erben und implementiere `Jagdfähig`.
    * Erstelle eine Klasse `Pinguin`, die von `Tier` erbt und `Schwimmfähig` implementiert.
    * Beide Klassen müssen die Methode `macheGeräusch()` konkret umsetzen.



---

### Teil 3: Polymorphismus (Vielgestaltigkeit)
In der Zoo-Verwaltung wollen wir alle Tiere gemeinsam behandeln, egal ob Löwe oder Pinguin.

1.  **Die Liste:** Erstelle eine `Main`-Klasse mit einer Liste (z.B. `ArrayList<Tier>`), in die du sowohl `Loewe` als auch `Pinguin` Objekte einfügst.
2.  **Iterieren:** Gehe die Liste in einer Schleife durch und rufe für jedes Objekt `macheGeräusch()` auf. Beobachte, wie Java zur Laufzeit entscheidet, welches Geräusch abgespielt wird.
3.  **Typprüfung:** Nutze innerhalb der Schleife den Befehl `instanceof`, um zu prüfen, ob ein Tier `Schwimmfähig` ist. Wenn ja, caste das Objekt und rufe die Methode `schwimme()` auf.
