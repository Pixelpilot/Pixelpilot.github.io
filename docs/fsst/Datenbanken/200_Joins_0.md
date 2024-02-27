---
title: Aufgabe 1 - Datenbanken Join - Einstieg
description: Aufgabenstellungen zu Datenbankabfragen

category: Fachspezifische Softwaretechnik
topic: Datenbanken
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }} 

## Aufgabe 1: Sprachen

Es ist eine Datenbank gegeben, die abbildet, welche Person welche Sprachen spricht.
Die Datenbank enthält 3 Tabellen:

1. **Personen**: Diese Tabelle speichert Informationen über die Personen wie Vorname, Nachname und Geburtsdatum.
2. **Fremdsprachen**: Hier werden die verschiedenen Fremdsprachen gespeichert.
3. **Sprachkenntnisse**: Diese Tabelle dient zur Verknüpfung von Personen und den von ihnen gesprochenen Fremdsprachen sowie zur Speicherung des Sprachniveaus (Anfänger, Fortgeschritten, Fließend, Muttersprachler).


### Erstellen der Datenbank und befüllen der Tabellen

```sql
-- Tabelle Personen
CREATE TABLE Personen (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Vorname VARCHAR(50),
    Nachname VARCHAR(50),
    Geburtsdatum DATE
);

-- Tabelle Fremdsprachen
CREATE TABLE Fremdsprachen (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Sprache VARCHAR(50)
);

-- Tabelle Sprachkenntnisse
CREATE TABLE Sprachkenntnisse (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    PersonID INT,
    FremdspracheID INT,
    Niveau ENUM('Anfänger', 'Fortgeschritten', 'Fließend', 'Muttersprachler'),
    FOREIGN KEY (PersonID) REFERENCES Personen(ID),
    FOREIGN KEY (FremdspracheID) REFERENCES Fremdsprachen(ID)
);
```
```sql
-- Personen einfügen
INSERT INTO Personen (Vorname, Nachname, Geburtsdatum) VALUES
('Max', 'Mustermann', '1990-05-15'),
('Anna', 'Müller', '1985-09-23'),
('Tom', 'Schmidt', '1995-03-10');

-- Fremdsprachen einfügen
INSERT INTO Fremdsprachen (Sprache) VALUES
('Englisch'),
('Französisch'),
('Spanisch'),
('Chinesisch');

-- Sprachkenntnisse einfügen
-- Max spricht Englisch fließend, Spanisch auf fortgeschrittenem Niveau und Französisch auf Anfängerniveau
INSERT INTO Sprachkenntnisse (PersonID, FremdspracheID, Niveau) VALUES
(1, 1, 'Fließend'),
(1, 3, 'Fortgeschritten'),
(1, 2, 'Anfänger');

-- Anna spricht Englisch auf muttersprachlichem Niveau und Spanisch fließend
INSERT INTO Sprachkenntnisse (PersonID, FremdspracheID, Niveau) VALUES
(2, 1, 'Muttersprachler'),
(2, 3, 'Fließend');

-- Tom spricht Chinesisch auf Anfängerniveau und Englisch auf fortgeschrittenem Niveau
INSERT INTO Sprachkenntnisse (PersonID, FremdspracheID, Niveau) VALUES
(3, 4, 'Anfänger'),
(3, 1, 'Fortgeschritten');
```

---
### Übungsabfragen - Einstieg

> #### Aufgabe 1
> Finde alle Personen, die Englisch sprechen.
> ```
> +---------+------------+
> | Vorname | Nachname   |
> +---------+------------+
> | Max     | Mustermann |
> | Anna    | Müller     |
> | Tom     | Schmidt    |
> +---------+------------+
> ```

> #### Aufgabe 2
> Zeige die Namen und Geburtsdaten aller Personen an, die mindestens eine Fremdsprache auf fließendem Niveau sprechen.
> ```
> +---------+------------+--------------+
> | Vorname | Nachname   | Geburtsdatum |
> +---------+------------+--------------+
> | Max     | Mustermann | 1990-05-15   |
> | Anna    | Müller     | 1985-09-23   |
> +---------+------------+--------------+
> ```

> #### Aufgabe 3
> Welche Personen sprechen Chinesisch? Gib ihre Namen und das Niveau ihres Chinesischkenntnisses an.
> ```
> +---------+------------+----------+
> | Vorname | Nachname   | Niveau   |
> +---------+------------+----------+
> | Tom     | Schmidt    | Anfänger |
> +---------+------------+----------+
> ```

> #### Aufgabe 4
> Welche Fremdsprachen werden von mindestens zwei Personen gesprochen?
> ```
> +--------------+
> | Fremdsprache |
> +--------------+
> | Englisch     |
> | Spanisch     |
> +--------------+
> ```

> #### Aufgabe 5 
> Finde alle Personen, die mindestens eine Fremdsprache sprechen, aber kein Englisch.
> ```
> +---------+------------+
> | Vorname | Nachname   |
> +---------+------------+
> | Tom     | Schmidt    |
> +---------+------------+
> ```


### Übungsabfragen - Erweitert

> #### Aufgabe 6
> Welche Personen sprechen mehr als zwei Fremdsprachen?
> ```
> +---------+------------+
> | Vorname | Nachname   |
> +---------+------------+
> | Max     | Mustermann |
> +---------+------------+
> ```


> #### Aufgabe 7
> Gib alle Fremdsprachen aus, die von mindestens einer Person auf muttersprachlichem Niveau gesprochen werden.
> ```
> +--------------+
> | Fremdsprache |
> +--------------+
> | Englisch     |
> +--------------+
> ```


> #### Aufgabe 8
> Welche Personen haben Kenntnisse in Fremdsprachen, die auf Anfänger- oder fortgeschrittenem Niveau sind?
> ```
> +---------+------------+
> | Vorname | Nachname   |
> +---------+------------+
> | Max     | Mustermann |
> | Anna    | Müller     |
> | Tom     | Schmidt    |
> +---------+------------+
> ```

> #### Aufgabe 9
> Welche Personen haben genau zwei Sprachkenntnisse und sprechen mindestens eine Fremdsprache fließend?
> ```
> +---------+------------+
> | Vorname | Nachname   |
> +---------+------------+
> | Max     | Mustermann |
> +---------+------------+
> ```

> #### Aufgabe 10
> Finde alle Personen, die Französisch auf einem Niveau sprechen, das höher ist als ihr Spanischniveau.
> ```
> +---------+------------+
> | Vorname | Nachname   |
> +---------+------------+
> | Max     | Mustermann |
> +---------+------------+
> ```