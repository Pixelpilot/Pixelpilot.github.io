---
title: Schülerliste
description: Programmieren in C - Teil 2
layout: default
type: assignment
category: Fachspezifische Softwaretechnik
topic: Programmieren in C - Teil 2
subtopic: Strukturen und Arrays
sitemap_exclude: n
---

Es soll ein Programm geschrieben werden, mit dem Schülerdaten verwaltet werden können.


## 1. Übung: Datum
Definiere einen neuen Datentyp `Datum` mit den Elementen: `jahr`, `monat`, `tag`.

Schreibe eine Funktion Datum `eingabeDatum()` zur Eingabe des Datums.

Schreibe eine Funktion `ausgabeDatum(...)`, die das gesamte Daum ausgibt.


## 2. Übung: Schüler
Definiere einen neuen Datentyp `Schueler` mit folgenden Elementen:
`vorname`, `nachname`, `geburtsDatum`. Verwende für das Geburtsdatum die unter Übung 1. erstellte Struktur `Datum`.

Schreibe eine Funktion `eingabeSchueler()` zur Eingabe der Elemente einer Struktur des Typs `Schueler`.

Schreibe eine Funktion `ausgabeSchueler(...)`, die alle Daten des Schülers ausgibt. Für die Ausgabe des Geburtsdatums ist die bereits erstellte Funktion zu verwenden.

**Generell: Code, der in der verhergehnenden Übung geschrieben wurde, darf nicht nochmals geschrieben werden, verwende die fertigen Funktionen.**


## 3. Übung: Hinzufügen neuer Schüler
Gegeben ist folgender Programmausschnitt:
```c
#define MAX_N 36 // Maximale Schülerzahl in der Liste 

// ...

int n = 0;  // Anzahl der aktuell im Array befindlichen Schüler 
          // ist die einzige zulässige globale Variable 
int main() { 

	Schueler liste[MAX_N]; 
	
	// ... 
	
}
```
Schreibe eine Funktion `void fuegeHinzu (Schueler liste[], Schueler s)`, die zu der Schuelerliste `liste` den Schueler `s` hinzufügt.

Achte darauf, dass du Funktionen, die du in den vorhergehenden Übungsaufgaben programmiert hast wieder verwendest.


## 4. Übung: Ausgabe der gesamten Liste
Schreibe eine Funktion void `ausgabeSchuelerListe(Schueler liste[])`, die alle Schüler untereinander ausgibt.

Initialisiere die Schülerliste gleich mit Daten von mindesten 5 Schüler/innen, damit du nicht immer alles eingeben musst, um die verschiedenen Funktionen zu testen.

```
==========================
Liste: 7 Schüler/innen
==========================
Anzahl der Schüler: 7
--------------------------
KNr: 1 Bill Gates
--------------------------
KNr: 2 Steve Jobs
--------------------------
KNr: 3 Eva Müller
--------------------------
KNr: 4 Franz Müller
--------------------------
KNr: 5 Gerhard Müller
--------------------------
KNr: 6 Maria Müller
--------------------------
KNr: 7 Linus Thorvald
==========================
```
_Ausgeben der gesamten Schülerliste_


## 5. Übung: Menü
Erweitere die Schülerliste um ein Menü mit folgenden Menüpunkten:

```
==========================
Projekt Schülerliste
==========================
Liste ausgeben ....... (a)
Blättern  ............ (b)
Schüler hinzufügen ... (h)
Schüler löschen ...... (l)
Schüler suchen ....... (s)
--------------------------
Program beenden ...... (x)
==========================
Aktion: 
```


## 6. Übung: Weitere Funktionalität

### (a) Suchen

Suche nach bestimmten Schüler/innen in der Schülerliste (Suchkriterium Nachname):

```
==========================
Schüler/in suchen
==========================
Nachname? ler
==========================
KNr:  3 Eva Müller
--------------------------
KNr:  4 Franz Müller
--------------------------
KNr:  5 Gerhard Müller
--------------------------
KNr:  6 Maria Müller
--------------------------
4 Treffer
==========================
```

Verwende die Funktion `char * strstr(char *string, char *needle)`, um einen String in einem anderen String zu suchen.
Die Funktion liefert `NULL`, wenn des gesuchte String nicht enthalten ist und einen Zeiger auf der Anfang des gesuchten Strings im durchsuchten String:

```c
char word[] = "Hinterseer";
char search[] = "ter";
char *found;

found = strstr ( word, search );

if ( found == NULL ) {
    printf ("Nicht enthalten.");
} else {
    printf ("Enthalten: %s", found );	// Enthalten: terseer
}
```

### (b) Löschen

Löschen eines/r bestimmten Schülers/in. Beachte: Die anderen Schüler/innen in der Liste müssen nach vorne verschoben werden, damit keine Lücke entsteht.

```
==========================
Schüler/in löschen
==========================
1 ... Bill Gates
2 ... Steve Jobs
3 ... Franz Müller
4 ... Gerhard Müller
5 ... Maria Müller
6 ... Linus Thorvald
--------------------------
(1 - 6) ... Nummer Löschen
(0) ....... Zurück
Auswahl?
```

### (c) Durchblättern der Schülerliste

Gib jeweils eine/n Schüler/in aus. Ist die letzte Position erreicht, soll wieder vorne begonnen werden

```
==========================
Schülerdetails: 2/7
==========================
Katalognummer: 2
Steve Jobs
4.7.2006
--------------------------
(1) ... vorh. Schüler/in
(2) ... näch. Schüler/in
(0) .......... Zurück
==========================
Aktion: 
```

### (d) Sortieren der Liste

Schreibe eine Funktion zum Sortieren der Schülerliste. Verwende dazu den _Bubblesort_-Algorithmus.

Rufe die Funktion immer auf, wenn ein neuer Eintrag zur Liste hinzukommt, damit die Liste immer sortiert ist.


## Zusätzliche Erweiterungen

Finde zusätzliche Funktionalitäten, die für die Klassenliste Sinn machen können.


- Funktion zur zufälligen Ermittlung einer/s Schülers/in
- Absteigend sortiert ausgeben nach Nachname
- Sortiert nach Geburtsdatum ausgeben
- Erweiterung um Geschlecht
  - Nur Mädchen ausgeben
  - Nur Jungen ausgeben
- Erweiterung um Adressdaten
  - Postleitzahl
  - Ort
  - Strasse
  - Hausnummer
- **Knifflig:** Lesen und Schreiben der Daten mittels _formattierter Dateiverwaltung_ und einer Textdatei. [Anleitung in C - Dateiverarbeitung - www.c-howto.de](https://www.c-howto.de/tutorial/dateiverarbeitung/)