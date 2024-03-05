---
title: Aufgabe 1 - Datenbanken Select - Einstieg
description: Aufgabenstellungen zu Datenbankabfragen

category: Fachspezifische Softwaretechnik
topic: Datenbanken
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }} 


## Aufgabe 1: Ernährungstabelle
{: .assignment }

Erstelle eine Datenbank-Tabelle für Nahrungsmittelinformationen. Erzeuge dazu die folgende Tabelle.

| Bezeichnung | Menge | Art | kcal |
|---|---|---|---|
|Leberkässemmel| Stück |Essen |500|
|Spaghetti Bolognese |Teller| Essen| 595|
|Weißbier |Halbe |Trinken |225|
|Avocado |Stück| Essen| 543|
|Laugenbrezel |Stück |Essen |192|
|Cola |kleine Flasche| Trinken |220|

Lege ein zusätzliches Feld `Id`an und verwende es als Primärschlüssel (verwende `AUTO_INCREMENT`).

> #### Übungsabfragen Einstieg
> Erstelle folgende Abfragen:
> 
> 1. Wähle alle Einträge aus der Tabelle, deren Kalorienwert höher als 250 ist.
> 2. Finde alle Getränke in der Tabelle und zeige ihre Namen und Kalorienwerte an.
> 3. Aktualisiere den Kalorienwert des Lebensmittels `Leberkässemmel` auf 550 kcal.
> 4. Füge einen neuen Eintrag mit dem Namen `Salat`, der Art `Essen`, einer Menge `Schüssel` und einem Kalorienwert von `350` kcal hinzu.
> 5. Lösche den Eintrag mit der niedrigsten Kalorienanzahl aus der Tabelle.
> 6. Zeige den Durchschnitt der Kalorien aller Lebensmittel an.
> 7. Wähle den Namen und die Menge der Einträge aus, die mehr als 500 Kalorien haben.
> 8. Zähle, wie viele Einträge in der Tabelle der Kategorie `Essen` zugeordnet sind.
> 9. Wähle den Eintrag mit der höchsten Kalorienanzahl aus und zeige seinen Namen und Kalorienwert an.
> 10. Ändere die Bezeichnung von `Weißbier` zu `Hefeweizen` und aktualisiere den Kalorienwert auf 240 kcal.


## Aufgabe 2: TODO-Liste
{: .assignment }

### Erstellen der Struktur und Anlegen der Inhalte

Erstelle eine Tabelle `todo` für eine Aufgabenliste und füge mittels `INSERT` mindestens 10 Datensätze ein.

| Id | Beschr           | Prio | Erl |
|----|------------------|----|----|
| 31 | Mathe  Hausübung | 4 | 0 |
| 32 | FSST  lernen     | 5 | 0 |

**`Prio` – Priorität**<br>
1 ... niedrigste, 5 ... höchste

**`Erl` – Erledigt**<br>
0 ... nein, 1 ... ja

### Übungsabfragen

> #### Übung 1: Einfachste Abfragen
> {: .assignment }
> 
> Erstelle folgende Abfragen:
> 
> 1. Alle offenen Aufgaben auflisten
> 2. Aufgabe auf erledigt setzen
> 3. Aufgabe löschen

> #### Übung 2: Basics
> {: .assignment }
> 
> Erstelle folgende Abfragen:
> 1. Offene Aufgaben, sortiert nach Priorität (höchste zuerst)
> 2. Gib alle Aufgaben aus bis auf jene mit Priorität 1 oder 5
> 3. Prioritäten in der Form `-2`, `-1`, `0`, `1`, `2` (statt 1 ... 5) ausgeben
> 4. Prioritäten als Text ausgeben


> #### Übung 3: Nested Select
> {: .assignment }
> Erstelle folgende Abfragen:
> 1. Alle Aufgaben die die gleiche Priorität haben wie die Aufgabe mit der `id` 31.
> 2. Bilde die Tabelle mit den Prioritäten in der Form `-2,-1,0,1,2` und gib nur die positiven aus.

> #### Übung 4: Aggregate functions
> {: .assignment }
> Erstelle folgende Abfragen:
> 1. Anzahl der noch offenen Aufgaben (`COUNT`)
> 2. Anzahl der offenen Aufgaben nach Priorität (`GROUP BY`)
> 3. Ausgaben der maximalen, minimalen und durchschnittlichen Priorität (`MIN`, `MAX`, `AVG`)

> #### Übung 5: Pattern matching
> {: .assignment }
> Gib alle Aufgaben aus die noch nicht erledigt sind und den Text `Hausübung` enthalten.

> #### Übung 6: Fälligkeitsdatum
> {: .assignment }
>Füge mit Hilfe von `ALTER TABLE` eine zusätzliche Spalte für ein Fälligkeitsdatum hinzu ohne die bestehende Tabelle zu löschen. Führe folgende Abfragen durch:
> 
> 1. Alle Aufgaben in der Zukunft anzeigen (`CURDATE`)
> 2. Alle Aufgaben eines Monats anzeigen
> 3. offene Aufgabe in der Zukunft mit Anzahl der Tagen bis zur Fälligkeit
> 4. Offene Aufgaben die weniger als 14 Tage in der Zukunft liegen, sortiert nach verbleibenden Tagen
