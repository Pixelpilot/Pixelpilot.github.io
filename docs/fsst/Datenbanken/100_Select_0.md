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


| Bezeichnung | Menge | Art | kcal |
|---|---|---|---|
| Leberkässemmel        | Stück |Essen |500|
| Spaghetti Bolognese   |Teller| Essen| 595|
| Weißbier              |Halbe |Trinken |225|
| Avocado               |Stück| Essen| 543|
| Laugenbrezel          |Stück |Essen |192|
| Cola                  |kleine Flasche| Trinken |220|




> #### Tabelle erstellen und mit Werten befüllen
> Erzeuge die Tabelle und die angegebenen Einträge mittels SQL-Befehl:
> 
> 1. Erstelle einen SQL-Befehl zum Erstellen der Tabelle (`CREATE TABLE`...). <br>Lege ein zusätzliches Feld `Id`an und verwende es als Primärschlüssel (`AUTO_INCREMENT`).
> 2. Erstelle einen SQL-Befehl zum Einfügen der oben angegebenen Inhalte (`INSERT INTO ...`)

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

Gegeben ist eine Tabelle `todo` für eine Aufgabenliste:

| Id | Beschr           | Prio | Erl |
|----|------------------|----|----|
| 31 | Mathe  Hausübung | 4 | 0 |
| 32 | FSST  lernen     | 5 | 0 |

**`Prio` – Priorität**<br>
1 ... niedrigste, 5 ... höchste

**`Erl` – Erledigt**<br>
0 ... nein, 1 ... ja

```sql
-- Tabelle erzeugen
CREATE TABLE kns_02_todo (
    id NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    beschr VARCHAR(255) NOT NULL,
    prio INT NOT NULL CHECK (prio BETWEEN 1 AND 5),
    erl INT NOT NULL CHECK (erl IN (0,1))
);
```

```sql
-- Beispieldatensätze
INSERT INTO kns_02_todo 
    (beschr, prio, erl) 
    VALUES
    ('Mathe Hausübung', 4, 0),
    ('FSST lernen', 5, 0),
    ('Einkaufen gehen', 3, 0),
    ('Zimmer aufräumen', 2, 0),
    ('Englisch Vokabeln lernen', 4, 0),
    ('Deutsch Hausübung', 5, 1),
    ('Freund anrufen', 2, 1),
    ('Müll rausbringen', 3, 1),
    ('Sport machen', 3, 0),
    ('Hausaufgaben Physik', 4, 0),
    ('Biologie Referat vorbereiten', 5, 0),
    ('Geschichte lesen', 2, 0),
    ('IT Projekt bearbeiten', 5, 0),
    ('Buch aus Bibliothek zurückbringen', 2, 1),
    ('Staubsaugen', 1, 1),
    ('Mathe Wiederholung', 4, 0),
    ('FSST Übungsbeispiele', 5, 0),
    ('Chemie Hausübung', 4, 0),
    ('Gitarrenübung', 2, 0),
    ('Freizeit planen', 1, 0),
    ('Fenster putzen', 1, 0),
    ('Gartenarbeit erledigen', 2, 0),
    ('Wäsche waschen', 3, 1),
    ('Auto waschen', 2, 0),
    ('Projektarbeit schreiben', 5, 0),
    ('Präsentation vorbereiten', 4, 0),
    ('Schularbeit üben', 5, 0),
    ('Email beantworten', 2, 1),
    ('Arzttermin vereinbaren', 3, 0),
    ('Geburtstagsgeschenk kaufen', 4, 0);

```

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
>   - `1` ... niedrigst
>   - `2` ... niedrig
>   - `3` ... mittel
>   - `4` ... hoch
>   - `5` ... höchst


> #### Übung 3: Nested Select
> {: .assignment }
> Erstelle folgende Abfragen:
> 1. Alle Aufgaben die die gleiche Priorität haben wie die Aufgabe `Staubsaugen`.
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
>Füge mit Hilfe von `ALTER TABLE` eine zusätzliche Spalte für ein Fälligkeitsdatum hinzu, ohne die bestehende Tabelle zu löschen. Befülle die Spalte mit Werten, die zum Teil in der Zukunft liegen und zum Teil in der Vergangenheit. Führe folgende Abfragen durch:
> 
> 1. Alle Aufgaben in der Zukunft anzeigen (`CURDATE`)
> 2. Alle Aufgaben eines Monats anzeigen
> 3. offene Aufgabe in der Zukunft mit Anzahl der Tagen bis zur Fälligkeit
> 4. Offene Aufgaben die weniger als 14 Tage in der Zukunft liegen, sortiert nach verbleibenden Tagen
