---
title: Aufgabe 3 - Datenbanken Select - Projektaufzeichnen
description: Aufgabenstellungen zu Datenbankabfragen

category: Fachspezifische Softwaretechnik
topic: Datenbanken
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }} 


## Datenbank und Tabellen

Löse folgende Aufgaben für die gegebenen Datenbank-Tabellen. Beachte dabei:
- Alle Daten in den Tabellen gelten nur als Beispiel. Die Lösungen sollen unabhängig von diesen Daten funktionieren.
- Es ist **nicht** zulässig in den Abfragen fixe ID-Werte zu verwenden.
- Die Ergebnisse sollen in der angegebenen Form ausgegeben werden (Spaltennamen beachten!).

### Tabelle: Mitarbeiter

| MID | Name | Abteilung | Eintritt |
|-----|------|-----------|----------|
| 1 | Peter Schmidt | IT | 15.01.2019 |
| 2 | Silvia Müller | HR | 22.03.2020 |
| 3 | Klaus Weber | IT | 08.06.2018 |
| 4 | Diana Bauer | Finance | 11.09.2021 |
| 5 | Thomas Fischer | IT | 05.02.2020 |
| ... | ... | ... | ... |

### Tabelle: Arbeitszeit

| MID | PID | Stunden |
|-----|-----|---------|
| 1 | 101 | 40 |
| 2 | 102 | 35 |
| 3 | 101 | 50 |
| 4 | 103 | 30 |
| 5 | 102 | 45 |
| ... | ... | ... |

### Tabelle: Projekt

| PID | KID | Beschreibung | Deadline |
|-----|-----|--------------|----------|
| 101 | 5 | Datenbank-Redesign | 28.02.2024 |
| 102 | 3 | API-Entwicklung | 15.03.2024 |
| 103 | 4 | Schulungen | 10.04.2024 |
| ... | ... | ... | ... |

### Tabelle: Kunde

| KID | Unternehmung |
|-----|--------------|
| 3 | ABC GmbH |
| 4 | XYZ AG |
| 5 | Tech Solutions |
| ... | ... |

## Aufgaben

### Erstellung der Datenbank

> #### Aufgabe 1.0: Datenbank erstellen und befüllen
> {: .assignment }
> 
> Erstelle die vier Tabellen mit den korrekten Schlüsseln und befülle sie mit den angegebenen Daten.
>
> **Wichtige Hinweise zu den Schlüsseln:**
>
> - **Primärschlüssel (Primary Key)**: MID in Mitarbeiter, PID in Projekt, KID in Kunde, (MID, PID) in Arbeitszeit
> - **Fremdschlüssel (Foreign Key)**: 
>   - In der Tabelle `Arbeitszeit` muss MID die Mitarbeiter-Tabelle referenzieren
>   - In der Tabelle `Arbeitszeit` muss PID die Projekt-Tabelle referenzieren
>   - In der Tabelle `Projekt` muss KID die Kunde-Tabelle referenzieren
> - Die Reihenfolge beim Einfügen von Daten ist wichtig: Erst die Kundentabelle befüllen, dann die Projekt-Tabelle, dann Mitarbeiter, und zuletzt Arbeitszeit
>
> **Erstelle das CREATE TABLE und INSERT Statement für folgende Tabellen:**
>
> 1. Kunde (KID, Unternehmung)
> 2. Projekt (PID, KID, Beschreibung, Deadline)
> 3. Mitarbeiter (MID, Name, Abteilung, Eintritt)
> 4. Arbeitszeit (MID, PID, Stunden)

### Abfragen

> #### Aufgabe 1.
> {: .assignment }
> Ermittle die Anzahl der Mitarbeiter gruppiert nach Abteilung.
>
> **Erwartete Ausgabe:**

>
> | Anzahl | Abteilung |
> |--------|-----------|
> | 3 | IT |
> | 1 | HR |
> | 1 | Finance |

> #### Aufgabe 2.b
> {: .assignment }
> Zeige alle Mitarbeiter an, deren Name "er" enthält. Gib die Abteilung in englisch aus.
>
> **Erwartete Ausgabe:**
>
> | Name | department |
> |------|-----------|
> | Peter Schmidt | IT |
> | Klaus Weber | IT |
> | Thomas Fischer | IT |

> #### Aufgabe 2.c
> {: .assignment }
> Ermittle alle Mitarbeiter, die im gleichen Monat ihren Dienst angetreten haben wie der älteste Mitarbeiter der Abteilung IT.
>
> **Erwartete Ausgabe:**
>
> | Name | Abteilung | Eintritt |
> |------|-----------|----------|
> | Peter Schmidt | IT | 15.01.2019 |
> | Diana Bauer | Finance | 11.09.2021 |

> #### Aufgabe 2.d
> {: .assignment }
> Ermittle alle Projekte für den Kunden "Tech Solutions".
>
> **Erwartete Ausgabe:**
>
> | Kunde | Beschreibung | Deadline |
> |-------|--------------|----------|
> | Tech Solutions | Datenbank-Redesign | 28.02.2024 |

> #### Aufgabe 2.e
> {: .assignment }
> Ermittle die Anzahl der Projekte mit mehr als 40 Stunden für den Kunden "ABC GmbH".
>
> **Erwartete Ausgabe:**
>
> | Anzahl |
> |--------|
> | 1 |

> #### Aufgabe 2.f
> {: .assignment }
> Ermittle für den Mitarbeiter mit dem Namen "Peter Schmidt" die durchschnittlichen Stunden pro Kunde.
>
> **Erwartete Ausgabe:**
>
> | Unternehmung | Stunden |
> |--------------|---------|
> | Tech Solutions | 40 |

### Mengenoperatoren (UNION, UNION ALL, INTERSECT, EXCEPT)

> #### Aufgabe 3.a (UNION)
> {: .assignment }
> Ermittle alle Kunden, die entweder ein Projekt mit einer Deadline im März 2024 **oder** ein Projekt mit einer Deadline im April 2024 haben. 
> Verwende zwei Teilabfragen mit `INNER JOIN` zwischen `Projekt` und `Kunde` und kombiniere sie mit `UNION`.
>
> **Erwartete Ausgabe (Spaltenname):**
>
> | Unternehmung |
> |--------------|
> | ABC GmbH |
> | XYZ AG |

> #### Aufgabe 3.b (UNION ALL)
> {: .assignment }
> Gib alle Mitarbeitereinträge aus, die in den Projekten der Kunden **"Tech Solutions"** und **"ABC GmbH"** gearbeitet haben.
> Verwende je eine Teilabfrage mit `INNER JOIN` (`Mitarbeiter` → `Arbeitszeit` → `Projekt` → `Kunde`) und kombiniere sie mit `UNION ALL`.
> Doppelte Mitarbeitende sollen erhalten bleiben.
>
> **Erwartete Ausgabe (Spaltennamen):**
>
> | MID | Name |
> |-----|------|
> | 1 | Peter Schmidt |
> | 3 | Klaus Weber |
> | 2 | Silvia Müller |
> | 5 | Thomas Fischer |

> #### Aufgabe 3.c (INTERSECT)
> {: .assignment }
> Ermittle alle Mitarbeitenden, die sowohl an Projekten für **"Tech Solutions"** als auch für **"ABC GmbH"** gearbeitet haben.
> Erstelle dazu zwei Teilabfragen mit `INNER JOIN` und verknüpfe sie mit `INTERSECT`.
>
> **Erwartete Ausgabe (Spaltennamen):**
>
> | MID | Name |
> |-----|------|
>
> *(keine Zeilen)*

> #### Aufgabe 3.d (EXCEPT)
> {: .assignment }
> Ermittle alle Mitarbeitenden aus der Abteilung **IT**, die an mindestens einem Projekt gearbeitet haben, 
> aber **an keinem** Projekt des Kunden **"XYZ AG"** beteiligt waren.
> Verwende zwei Teilabfragen mit `INNER JOIN` und bilde die Differenz mit `EXCEPT`.
>
> **Erwartete Ausgabe (Spaltennamen):**
>
> | MID | Name |
> |---|---|
> | 1 | Peter Schmidt |
> | 3 | Klaus Weber |
> | 5 | Thomas Fischer |

> {: .assignment }
> Ermittle alle Mitarbeitenden, die an Projekten von **"Tech Solutions"** oder **"ABC GmbH"** gearbeitet haben,
> aber nicht in der Abteilung **HR** sind.
>
> Bedingungen:
> - Vereinigung der beiden Projektmengen mit `UNION`
> - Ausschluss der HR-Menge mit `EXCEPT`
> - Alle Teilabfragen müssen über `INNER JOIN` formuliert werden
>
> **Erwartete Ausgabe (Spaltennamen):**
>
> | MID | Name |
> |-----|------|
> | 1 | Peter Schmidt |
> | 3 | Klaus Weber |
> | 5 | Thomas Fischer |
