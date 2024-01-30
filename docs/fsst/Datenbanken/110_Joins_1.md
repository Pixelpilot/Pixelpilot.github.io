---
title: Datenbanken -  Übungsaufabe JOIN 1
description: Aufgabenstellungen zu Datenbankabfragen

category: Fachspezifische Softwaretechnik
topic: Datenbanken
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }} 

## Aufgabe 2: Notendatenbank

Es ist eine Datenbank für Noten gegeben.
Die Datenbank enthält 3 Tabellen: **Schüler**, **Tests** und **Ergebnisse**.

### Erstellen der Datenbank und befüllen der Tabellen
```sql
/* ==================================== */
/* Tabellen erstellen                   */
/* ==================================== */

CREATE TABLE Schueler (
      Schueler_ID INT NOT NULL AUTO_INCREMENT,
      PRIMARY KEY (Schueler_ID),
      Vorname VARCHAR(20),
      Nachname VARCHAR(20),
      Klasse VARCHAR(6),
      Geburtsdatum DATE,
      Geschlecht ENUM ('W','M')
);

CREATE TABLE Tests (
       Test_ID INT NOT NULL AUTO_INCREMENT,
       PRIMARY KEY (Test_ID),
       Datum DATE,
       Fach VARCHAR(10),
       Klasse VARCHAR(6)
);

CREATE TABLE Ergebnisse (
        Schueler_ID INT NOT NULL,
        Test_ID INT NOT NULL,
        PRIMARY KEY (Schueler_ID,Test_ID),
        Note INT
);
```

```sql
/* ==================================== */
/* Tabelle Schueler                     */
/* ==================================== */

INSERT INTO Schueler (Klasse, Vorname, Nachname, Geschlecht, Geburtsdatum)
    VALUES
        ('5BHELS','Max','Mustermann','M','2004-09-10'),
        ('5BHELS','Javier','Brouse','M','2004-12-24'),
        ('5BHELS','Jerri','Prevo','W','2005-02-28'),
        ('5BHELS','Lenore','Boes','W','2005-04-18'),
        ('5BHELS','Emilia','Scot','W','2003-10-11'),
        ('5BHELS','Javier','Hartson','M','2005-07-05'),
        ('4BHELS','Lonnie','Hier','W','2005-11-20'),
        ('4BHELS','Sofia','Friscia','W','2005-12-01'),
        ('4BHELS','Max','Bundick','M','2006-06-30'),
        ('4BHELS','Darren','Parkerson','M','2005-10-17'),
        ('4BHELS','Tameka','Welles','W','2005-09-21'),
        ('4BHELS','Lance','Respass','M','2003-06-01'),
        ('4BHELS','Earlene','Fullenwider','W','2006-04-01'),
        ('4BHELS','Ted','Muraoka','M','2005-10-26'),
        ('3BHELS','Mathew','Evanson','M','2006-12-12'),
        ('3BHELS','Ted','Marquette','M','2007-03-13'),
        ('3BHELS','Perrella','Gaolia','W','2007-02-10'),
        ('3BHELS','Lance','Meola','M','2007-01-17'),
        ('3BHELS','Ted','Polich','M','2006-11-05'),
        ('3BHELS','Penelope','Bernhard','W','2006-09-01'),
        ('3BHELS','Malinda','Capo','W','2007-01-02');
```

```sql
/* ==================================== */
/* Tabelle Tests                        */
/* ==================================== */

INSERT INTO Tests (Datum,Fach,Klasse)
    VALUES
        ('2023-10-23','FSST','5BHELS'),
        ('2023-11-03','HWE','5BHELS'),
        ('2023-12-04','MTRS','5BHELS'),
        ('2023-12-17','FSST','5BHELS'),
        ('2023-10-15','FSST','4BHELS'),
        ('2023-10-17','D','4BHELS'),
        ('2023-11-20','E','4BHELS'),
        ('2023-09-30','AM','3BHELS'),
        ('2023-10-09','HWE','3BHELS'),
        ('2023-10-16','HWE','3BHELS');
```

```sql
/* ==================================== */
/* Tabelle Ergebnisse                   */
/* ==================================== */

INSERT INTO Ergebnisse (Schueler_ID, Test_ID, Note)
    VALUES
        /* 5BHELS: 1-6 */
        /* 4BHELS: 7-14 */
        /* 3BHELS: 15-20 */
    
        /*5BHELS FSST*/
        (1,1,1),(2,1,2),(3,1,2),(4,1,3),(5,1,5),(6,1,3),
        /*5BHELS HWE*/
        (1,2,3),(2,2,4),(3,2,2),(4,2,4),(5,2,5),(6,2,4),
        /*5BHELS MTRS*/
        (1,3,2),(2,3,2),(3,3,3),(4,3,1),(5,3,1),(6,3,2),
        /*5BHELS FSST*/
        (1,4,5),(2,4,5),(3,4,4),(4,4,2),(5,4,4),(6,4,5),
        /*4BHELS FSST*/
        (7, 5,4),(8, 5,4),(9, 5,3),(10,5,5),(11,5,1),(12,5,1),(13,5,2),(14,5,3),
        /*4BHELS D*/
        (7, 6,2),(8, 6,1),(9, 6,2),(10,6,3),(11,6,1),(12,6,4),(13,6,3),(14,6,1),
        /* 4BHELS E */
        (7, 7,4),(8, 7,5),(9, 7,2),(10,7,3),(11,7,4),(12,7,5),(13,7,1),(14,7,2),
        /* 3BHELS AM */
        (15,8,4),(16,8,5),(17,8,5),(18,8,4),(19,8,4),(20,8,5),
        /* 3BHELS HWE */
        (15,9,2),(16,9,3),(17,9,5),(18,9,2),(19,9,3),(20,9,1),
        /* 3BHELS HWE */
        (15,10,1),(16,10,3),(17,10,4),(18,10,3),(19,10,5),(20,10,4);
```

### Übungsabfragen

> #### Einstieg 1:
> ##### 1.a. Auflistung aller Ergebnisse
> Liste alle Ergebnisse auf und gib Schülernamen, `Klasse`, `Fach`, `Datum` sowie die `Note  aus.
> 
> ##### 1.b. Eingeschränkte Aufzählung
> Liste alle Schüler:innen auf, die in einem `HWE`-Test einen 3er haben. Zeige `Vorname`, `Nachname` und `Klasse`an und vermeide, dass ein:e Schüler:in mehrfach aufgelistet wird.
> 
> Hilfestellung: Mit der Anweisung `GROUP BY` können Datensätze zusammengefasst werden
> 
> ##### 1.c. Fleißige Schüler:innen
> Ermittle die Anzahl aller Schüler:innen die an mehr als 3 Tests teilgenommen haben. 
>
> Hilfestellung: Verwende dazu ein "Nested Select".

> #### Aufgabe 2: Burschen und Mädchen
> `JOIN` können auf gleichen Tabellen (z.B.: `Person JOIN Person`) und auf die Ergebnisse von `SELECT` Abfragen (z.B.: `(SELECT ...) JOIN (SELECT ...)`) angewendet werden.
> 
> Diese Aufgabe ist eine Anwendung der zweiten Variante.
> 
> **Aufgabe**<br>
> Ermittle in der Schülerdatenbank (Tabelle Students) alle Klassen in denen mehr Buben als Mädchen sind.
> 
> **Anleitung**<br>
> 1. Mache zuerst eine Abfrage die Klasse und Zahl der Mädchen pro Klasse ermittelt. Tipp: Verwende
`COUNT` und `GROUP BY`
> 2. Dann die gleiche Abfrage für alle Burschen.
> 3. Verknüpfe diese beiden `SELECT` Ergebnisse (temporäre Tabellen) mit `JOIN`. Beachte - Den temporären Tabellen müssen mit `AS` Namen zugewiesen werden:
> ```sql
> SELECT ... FROM
>   (...Tabelle Maedchen...) AS tabw
> JOIN
>   (...Tabelle Burschen...) AS tabm
> ON ...gleiche Klasse...;
> ```
> 4. Verwende eine `WHERE` Bedingung um nur die Zeilen anzuzeigen wo mehr Burschen sind.

> #### Aufgabe 3: Notendatenbankabfragen
> Erstelle folgende Abfragen in der Notendatenbank:
> ##### 3.a. Test-Auswertung
> Von einem Test sind bekannt: Datum, Fach, Klasse.
> Ermittle:
> 1. alle Schüler (Namen) die an einem bestimmten Test teilgenommen haben,
> 2. die Durchschnittsnote für alle 'FSST'-Test,
> 3. alle Schüler die besser als der Durchschnitt abgeschnitten haben.
> 
> ##### 3.b. Schüler:innen-Auswertung
> Ermittle für einen konkreten Schüler oder Schülerin (gegeben durch den Namen):
> 1. alle Tests an denen dieser teilgenommen hat,
> 2. die Anzahl der Tests, Notendurchschnitt, beste und schlechteste Note für diesen Schüler,
> 3. die Endnote in jedem Fach (Durchschnitt).
> 
> ##### 3.c Notendurchschnitt
> 1. Gib für alle Tests den Notendurchschnitt für Mädchen und Buben getrennt aus.
> 2. Ermittle den Schüler mit dem besten Notendurchschnitt