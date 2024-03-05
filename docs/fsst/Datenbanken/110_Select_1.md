---
title: Aufgabe 2 - Datenbanken Select - Mitarbeiter
description: Aufgabenstellungen zu Datenbankabfragen

category: Fachspezifische Softwaretechnik
topic: Datenbanken
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }} 



## Aufgabe 2: Mitarbeiter
{: .assignment }

Es ist eine Datenbank für die Mitarbeiterverwaltung gegeben. Die Datenbank besteht lediglich aus der Tabelle `Mitarbeiter`.


### Erstellen der Datenbank und befüllen der Tabellen

```sql
/* ==================================== */
/* Tabelle erstellen                   */
/* ==================================== */
CREATE TABLE Mitarbeiter (
    ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Abteilung VARCHAR(50),
    Gehalt DECIMAL(10, 2),
    Eintrittsdatum DATE,
    Vorgesetzter INT,
    FOREIGN KEY (Vorgesetzter) REFERENCES Mitarbeiter(ID)
);
```
Die Vorgesetzter-Spalte die `ID` eines Mitarbeiters aus derselben Tabelle referenziert. Ein Wert von `NULL` in dieser Spalte zeigt an, dass der Mitarbeiter keinen Vorgesetzten hat.

Der Fremdschlüssel-Constraint bedingt die Existenz des referenzierten Vorgesetzten. Daher müssen Datensätze für Vorgesetzte zuerst eingefügt werden, bevor sie als Vorgesetzte für andere Datensätze verwendet werden können.

```sql
/* ==================================== */
/* Tabelle Vorgesetzte                  */
/* ==================================== */
INSERT INTO Mitarbeiter (ID, Name, Abteilung, Gehalt, Eintrittsdatum, Vorgesetzter) VALUES
    (1, 'Max Mustermann', 'IT', 70000, '2018-04-16', NULL),
    (2, 'Erika Mustermann', 'Marketing', 68000, '2019-03-15', NULL),
    (4, 'Tobias Müller', 'Vertrieb', 73000, '2020-07-23', NULL),
    (6, 'Christian Weber', 'IT', 75000, '2018-04-16', NULL);

/* ==================================== */
/* Tabelle Weitere Mitarbeiter          */
/* ==================================== */
INSERT INTO Mitarbeiter (ID, Name, Abteilung, Gehalt, Eintrittsdatum, Vorgesetzter) VALUES
    (3, 'Julia Schmidt', 'IT', 62000, '2019-06-01', 1),
    (5, 'Sophia Becker', 'Marketing', 58000, '2021-02-09', 2),
    (7, 'Laura Koch', 'Vertrieb', 47000, '2020-11-12', 4),
    (8, 'Alexander Schmitt', 'Marketing', 53000, '2019-12-04', 2),
    (9, 'Sarah Meyer', 'IT', 66000, '2021-08-21', 1),
    (10, 'Andreas Schulz', 'Vertrieb', 49000, '2022-01-30', 4),
    (11, 'Marie Fischer', 'IT', 69000, '2020-05-15', 6),
    (12, 'Simon Lange', 'Marketing', 56000, '2021-07-19', 2),
    (13, 'Lena Hoffmann', 'Vertrieb', 52000, '2022-02-28', 4),
    (14, 'Oliver Krause', 'IT', 72000, '2019-11-01', 6),
    (15, 'Anna Braun', 'Marketing', 65000, '2018-09-23', 2),
    (16, 'Niklas Maier', 'Vertrieb', 54000, '2020-10-05', 4),
    (17, 'Emily Schmid', 'IT', 67000, '2021-03-17', 1),
    (18, 'Noah Fuchs', 'Marketing', 61000, '2019-06-07', 2),
    (19, 'Luisa Herzog', 'Vertrieb', 58000, '2022-01-15', 4),
    (20, 'Jonas Wagner', 'IT', 64000, '2020-04-20', 6);
```


### Übungsabfragen

> #### Übung 1: Einfache Abfragen
> {: .assignment }
>
> Erstelle folgende Abfragen:
>
> 1. Alle Mitarbeiter aus der IT-Abteilung.
> 2. Berechne das durchschnittliche Gehalt aller Mitarbeiter.
> 3. Finde das höchste Gehalt im Unternehmen.
> 4. Ermittle das Gesamtgehalt aller Mitarbeiter in der Marketingabteilung.
> 5. Finde alle Mitarbeiter, die nach dem 1. Januar 2020 eingestellt wurden.
> 6. Ordne die Mitarbeiter nach ihrem Gehalt in absteigender Reihenfolge.

> #### Übung 2: Weitere Abfragen
> {: .assignment }
>
> Erstelle folgende Abfragen:
> 1. Bestimme den Mitarbeiter mit dem höchsten Gehalt in jeder Abteilung.
> 2. Zähle die Anzahl der Mitarbeiter in jeder Abteilung.
> 3. Berechne das Durchschnittsgehalt und die Gesamtanzahl der Mitarbeiter nach Abteilung.
> 4. Selektiere die Namen der Mitarbeiter, deren Gehalt über dem Durchschnitt liegt.


> #### Übung 3: Komplexere Abfrage
> {: .assignment }
>
> 1. **Mitarbeiter ohne Vorgesetzte**<br>Finde alle Mitarbeiter, die keinen eingetragenen Vorgesetzten haben (Top-Level-Management).
> 
> 2. **Mitarbeiter, die mehr verdienen als ihr Vorgesetzter** <br>Identifiziere Fälle, in denen Mitarbeiter ein höheres Gehalt haben als ihre Vorgesetzten.
> 
> 3. **Anzahl der Mitarbeiter unter jedem Vorgesetzten**<br>Zähle, wie viele Mitarbeiter jedem Vorgesetzten unterstellt sind, sortiert nach dieser Anzahl in absteigender Reihenfolge.
> 
> 4. **Mitarbeiter mit dem höchsten Gehalt in jeder Abteilung und deren Vorgesetzte (Nested Selects)**<br>Liste für jede Abteilung den Mitarbeiter mit dem höchsten Gehalt und dessen Vorgesetzten auf, ohne JOINs zu verwenden.
> 
> 5. **Mitarbeiter, die länger als ihr Vorgesetzter im Unternehmen sind**<br>Finde alle Mitarbeiter, die bereits vor ihrem aktuellen Vorgesetzten im Unternehmen tätig waren, ohne direkte JOINs zu nutzen.

> #### Übung Zusatz: Ausblick JOIN
> {: .assignment }
> Informiere dich über das `JOIN`-Statement und versuche folgende Abfragen umzusetzen:
> 1. **Liste aller Mitarbeiter mit Namen ihres Vorgesetzten**<br>Zeigt die Namen der Mitarbeiter zusammen mit den Namen ihrer direkten Vorgesetzten.
>
> 2. **Abteilungen mit Durchschnittsgehältern ihrer Mitarbeiter und ihrer Vorgesetzten**<br>Berechne das durchschnittliche Gehalt pro Abteilung und vergleiche es mit dem durchschnittlichen Gehalt der Vorgesetzten in derselben Abteilung.
> 
> 3. **Vorgesetzte, die im Unternehmen am längsten dabei sind**<br>Finde die Vorgesetzten, die die längste Betriebszugehörigkeit im Unternehmen haben, gruppiert nach Abteilung.
> 
> 4. **Durchschnittliches Gehalt von Mitarbeitern unter jedem Vorgesetzten im Vergleich zum Unternehmensdurchschnitt**<br>Berechne das durchschnittliche Gehalt der Mitarbeiter unter jedem Vorgesetzten und vergleiche es mit dem Durchschnittsgehalt aller Mitarbeiter im Unternehmen.
