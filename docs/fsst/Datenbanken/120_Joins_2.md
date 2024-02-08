---
title: Datenbanken - Online-Shop - Übungsaufgabe zu JOINS
description: Aufgabenstellungen zu Datenbankabfragen

category: Fachspezifische Softwaretechnik
topic: Datenbanken
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }} 

## Aufgabe 3: Online-Shop

Es ist eine Datenbank für ein fiktives Unternehmen gegeben, das Produkte verkauft und Bestellungen bearbeitet.
Die Datenbank wird enthält 3 Tabellen: **Produkte**, **Kunden** und **Bestellungen**.


### Tabellenstruktur

#### Tabelle: Produkte

- `ProduktID` (Primärschlüssel, Integer)
- `ProduktName` (String)
- `Preis` (Decimal)

#### Tabelle: Kunden

- `KundenID` (Primärschlüssel, Integer)
- `KundenName` (String)
- `Adresse` (String)

#### Tabelle: Bestellungen

- `BestellID` (Primärschlüssel, Integer)
- `KundenID` (Fremdschlüssel, Integer)
- `ProduktID` (Fremdschlüssel, Integer)
- `Bestelldatum` (Datum)
- `Menge` (Integer)

### Erstellen der Datenbank und befüllen der Tabellen
```sql
/* ==================================== */
/* Tabellen erstellen                   */
/* ==================================== */

CREATE TABLE Produkte (
    ProduktID INT PRIMARY KEY,
    ProduktName VARCHAR(100),
    Preis DECIMAL(10, 2)
);

CREATE TABLE Kunden (
    KundenID INT PRIMARY KEY,
    KundenName VARCHAR(100),
    Adresse VARCHAR(200)
);

CREATE TABLE Bestellungen (
    BestellID INT PRIMARY KEY,
    KundenID INT,
    ProduktID INT,
    Bestelldatum DATE,
    Menge INT,
    FOREIGN KEY (KundenID) REFERENCES Kunden(KundenID),
    FOREIGN KEY (ProduktID) REFERENCES Produkte(ProduktID)
);
```

```sql
/* ==================================== */
/* Tabelle Produkte                     */
/* ==================================== */

INSERT INTO Produkte (ProduktID, ProduktName, Preis) VALUES
    (1, 'Laptop', 1200.00),
    (2, 'Smartphone', 800.00),
    (3, 'Kopfhörer', 150.00),
    (4, 'Bluetooth-Lautsprecher', 200.00),
    (5, 'Smartwatch', 350.00),
    (6, 'E-Book-Reader', 130.00),
    (7, 'Tablet', 500.00),
    (8, 'Digitalkamera', 450.00),
    (9, 'Gaming-Maus', 70.00),
    (10, 'Tastatur', 100.00),
    (11, 'Drohne', 600.00),
    (12, 'Action-Kamera', 300.00),
    (13, 'Externe Festplatte', 120.00),
    (14, 'USB-Stick', 20.00),
    (15, 'Fitness-Tracker', 80.00),
    (16, 'Spielkonsole', 400.00),
    (17, 'Router', 90.00),
    (18, 'Monitor', 250.00),
    (19, 'Grafiktablett', 200.00),
    (20, 'PC-Lautsprecher', 50.00),
    (21, 'Mikrofon', 100.00),
    (22, 'VR-Brille', 350.00),
    (23, 'Tragbarer Projektor', 300.00),
    (24, 'Wetterstation', 60.00),
    (25, 'Smart Home Hub', 120.00);
```

```sql
/* ==================================== */
/* Tabelle Kunden                       */
/* ==================================== */

INSERT INTO Kunden (KundenID, KundenName, Adresse) VALUES
    (1, 'Julia Schmitt', 'Lindenstraße 12, 12345 Musterstadt'),
    (2, 'Max Mustermann', 'Hauptstraße 5, 23456 Beispielstadt'),
    (3, 'Anna Bauer', 'Schulweg 7, 34567 Dorfstadt'),
    (4, 'Lukas Weber', 'Mühlenweg 4, 45678 Kleinstadt'),
    (5, 'Sophia Schmidt', 'Bergstraße 3, 56789 Bergdorf'),
    (6, 'Michael Neumann', 'Talweg 8, 67890 Talstadt'),
    (7, 'Laura Fischer', 'Am Wald 6, 78901 Waldstadt'),
    (8, 'Daniel Meyer', 'Am See 1, 89012 Seestadt'),
    (9, 'Sarah Müller', 'Im Winkel 2, 90123 Eckstadt'),
    (10, 'Christian Schulz', 'Sonnenallee 9, 01234 Sonnenstadt'),
    (11, 'Lisa Hoffmann', 'Regenbogenstraße 10, 12345 Buntstadt'),
    (12, 'Tobias Wagner', 'Am Park 11, 23456 Parkstadt'),
    (13, 'Katharina Becker', 'Blumenweg 5, 34567 Blumenort'),
    (14, 'Felix Schäfer', 'Am Fluss 13, 45678 Flussstadt'),
    (15, 'Marie Koch', 'In der Aue 14, 56789 Auenland'),
    (16, 'Jan Richter', 'Auf dem Berg 15, 67890 Bergland'),
    (17, 'Julian Zimmermann', 'Unter den Linden 16, 78901 Lindenberg'),
    (18, 'Nina Schwarz', 'An der Heide 17, 89012 Heideland'),
    (19, 'Tim Lang', 'Am Deich 18, 90123 Deichstadt'),
    (20, 'Lea Braun', 'Wiesenweg 19, 01234 Wiesenort'),
    (21, 'Niklas Wolf', 'In der Marsch 20, 12345 Marschhausen'),
    (22, 'Lena Frank', 'Am Kanal 21, 23456 Kanalstadt'),
    (23, 'Leon Krüger', 'Hügelstraße 22, 34567 Hügelland'),
    (24, 'Emily Groß', 'In den Dünen 23, 45678 Dünenort'),
    (25, 'Jonas Klein', 'Am Ufer 24, 56789 Uferstadt'),
    (26, 'Hannah Hartmann', 'Auf der Höhe 25, 67890 Höhenort'),
    (27, 'Fabian Ernst', 'In der Senke 26, 78901 Senkenberg'),
    (28, 'Charlotte Jung', 'Im Tal 27, 89012 Talhausen'),
    (29, 'Liam Fuchs', 'Auf dem Feld 28, 90123 Feldstadt'),
    (30, 'Emma Lang', 'Am Waldesrand 29, 01234 Waldort');
```

```sql
/* ==================================== */
/* Tabelle Bestellungen                 */
/* ==================================== */

INSERT INTO Bestellungen (BestellID, KundenID, ProduktID, Bestelldatum, Menge) VALUES
     (1, 1, 1, '2024-01-10', 2),
     (2, 2, 2, '2024-01-11', 1),
     (3, 3, 3, '2024-01-12', 1),
     (4, 4, 4, '2024-01-13', 3),
     (5, 5, 5, '2024-01-14', 2),
     (6, 6, 6, '2024-01-15', 1),
     (7, 7, 7, '2024-01-16', 3),
     (8, 8, 8, '2024-01-17', 2),
     (9, 9, 9, '2024-01-18', 1),
     (10, 10, 10, '2024-01-19', 3),
     (11, 11, 11, '2024-01-20', 2),
     (12, 12, 12, '2024-01-21', 1),
     (13, 13, 13, '2024-01-22', 1),
     (14, 14, 14, '2024-01-23', 3),
     (15, 15, 15, '2024-01-24', 2),
     (16, 16, 16, '2024-01-25', 1),
     (17, 17, 17, '2024-01-26', 3),
     (18, 18, 18, '2024-01-27', 2),
     (19, 19, 19, '2024-01-28', 1),
     (20, 20, 20, '2024-01-29', 3),
     (21, 21, 21, '2024-01-30', 2),
     (22, 22, 22, '2024-01-31', 1),
     (23, 23, 23, '2024-02-01', 1),
     (24, 24, 24, '2024-02-02', 3),
     (25, 25, 25, '2024-02-03', 2),
     (26, 26, 1, '2024-02-04', 1),
     (27, 27, 2, '2024-02-05', 3),
     (28, 28, 3, '2024-02-06', 2),
     (29, 29, 4, '2024-02-07', 1),
     (30, 30, 5, '2024-02-08', 3),
     (31, 1, 2, '2024-02-09', 2),
     (32, 2, 3, '2024-02-10', 1),
     (33, 3, 4, '2024-02-11', 1),
     (34, 4, 5, '2024-02-12', 3);
```

### Übungsabfragen

> #### Aufgabe 1: Einfache Abfrage mit `JOIN`
> Liste aller Bestellungen mit Kunden- und Produktnamen.
> 
> #### Aufgabe 2: Aggregationsabfrage mit `GROUP BY`
> Ermittle den Gesamtverkaufswert pro Produkt.
> 
> #### Aufgabe 3: Komplexe Abfrage mit `JOIN` und Bedingungen
> Ermittle Bestellungen eines bestimmten Kunden.
> 
> #### Aufgabe 4: Abfrage mit `LEFT JOIN`
> Informiere dich über den Unterschied zwischen `INNER JOIN` und `OUTER JOIN`.
> 
> Erstelle Liste aller Kunden und ihrer Bestellungen, einschließlich der Kunden, die noch keine Bestellung getätigt haben.
> 
> #### Aufgabe 5: Abfrage mit Unterabfrage
> Finde alle Produkte, deren Preis über dem Durchschnittspreis aller Produkte liegt.
> 
> #### Aufgabe 6: Kombinierte Aggregationsabfrage
> Anzahl der Bestellungen und Gesamtmenge der Bestellungen für jeden Kunden, die nach dem 15. Januar 2024 getätigt wurden.
> 
> #### Aufgabe 7: Abfrage mit `HAVING`-Klausel
> Die `HAVING`-Klausel kann verwendet werden, um Gruppen von Daten (`SUM`, `COUNT`, `AVG`, ...) zu filtern. Die `WHERE`-Klausel funktioniert hier nicht. Informiere dich über die `HAVING`-Klausel.
> 
> Zeige eine Liste aller Produkte an, die mehr als 3 Mal bestellt wurden.

### Erweiterte Übungsabfragen

> #### Aufgabe 1: Nested Select in WHERE-Klausel
> Finde alle Kunden, die Produkte über dem Durchschnittspreis aller Produkte gekauft haben.
> 
> #### Aufgabe 2: Nested Select in FROM-Klausel
> Liste die durchschnittliche Bestellmenge pro Produkt auf.
> 
> 
> #### Aufgabe 3: Nested Select mit JOIN
> Finde alle Kunden, die mehr als der Durchschnitt aller Kunden in Bezug auf die Anzahl der Bestellungen bestellt haben.
> 
> 
> #### Aufgabe 4: Mehrfache Joins mit Nested Select
> Liste alle Produkte auf, die nur von Kunden aus einer bestimmten Stadt (z.B. 'Musterstadt') gekauft wurden.
> 
> 
> #### Aufgabe 5: Kombination von Nested Select und Aggregation
> Finde die Gesamtanzahl der Bestellungen für Produkte, die teurer als der Durchschnittspreis sind.