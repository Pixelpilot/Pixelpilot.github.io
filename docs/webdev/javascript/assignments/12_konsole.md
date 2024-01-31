---
title: Aufgabe 2 - JavaScript debuggen - Ausgaben in der Konsole
description: JavaScript - Ein- und Ausgabe

category: Webentwicklung
topic: JavaScript - Teil 1
subtopic: Eingabe und Ausgabe

layout: default
---

## Developer-Tools und Debugging-Konsole

### Allgemeines
Die **Developer-Tools** (Entwicklertools) sind ein vielseitiges Werkzeug, das für die Webentwicklung unerlässlich ist. Mir ihrer Hilfe kann die Seite untersucht, Leistung und Speicherverbrauch gemessen oder auch der zeitliche Ablauf beim Laden einer Seite analysiert werden.



### Die Debugging-Konsole

Ein Teil der **Developer-Tools** ist die **Debugging-Konsole**. Sie ermöglicht einfaches Debugging, Testen und Experimentieren mit Javascript-Code direkt im Kontext der Webseite. Die **Debugging-Konsole** unterscheidet sich im Detail von Browser zu Browser und kann über das Menü im Browser aktiviert werden.

Shortcuts zum Öffnen der Developer-Tools in Google Chrome:
* Mac: `cmd`+`option`+`i` &rarr; Reiter Konsole
* Windows: `strg`+`shift`+`i` &rarr; Reiter Konsole

**Das `console`-Objekt**

Um auf die Konsole zugreifen zu können, benutzt man das `console`-Objekt:
```javascript
console.log ("Diese Zeile wird in den Developer-Tools angezeigt");
```

### Ausgabe in der Debugging-Konsole
In der Debugging-Konsole können unterschiedliche Ausgaben gemacht werden. Hier eine Auswahl der am häufigsten verwendeten Befehle:

---
#### `console.log()`
- Beschreibung: Gibt eine Nachricht in der Konsole aus.
- Verwendung: `console.log('Hallo Welt!');`

---
#### `console.error()`
- Beschreibung: Gibt eine Fehlermeldung aus.
- Verwendung: `console.error('Ein Fehler ist aufgetreten!');`

---
#### `console.warn()`
- Beschreibung: Gibt eine Warnmeldung aus.
- Verwendung: `console.warn('Warnmeldung');`

---
#### `console.info()`
- Beschreibung: Gibt eine informative Nachricht aus.
- Verwendung: `console.info('Info-Nachricht');`

---
#### `console.group() / console.groupEnd()`
- Beschreibung: Erstellt eine neue Gruppe in der Konsolen-Ausgabe. `groupEnd()` beendet die Gruppe.
- Verwendung:
    - `console.group('Testgruppe');`
    - `console.log('Erster Log in der Gruppe');`
    - `console.log('Zweiter Log in der Gruppe');`
    - `console.groupEnd();`

---
#### `console.table()`
- Beschreibung: Zeigt Daten als Tabelle an.
- Verwendung: `console.table([{name: 'Alice', alter: 24}, {name: 'Bob', alter: 27}]);`

---
#### `console.clear()`
- Beschreibung: Löscht den Inhalt der Konsole.
- Verwendung: `console.clear();`


## Aufgabenstellung

### Aufgabe 1: Gerade oder Ungerade
#### 1.a. Erstellen von Funktion und Aufruf
Erstelle eine Funktion `evenodd()`, die die Zahlen von 1 bis 10 in der Konsole ausgibt. Neben den Zahlen soll stehen, ob die Zahl gerade oder ungerade ist. Verwende dazu den Befehl `console.log()`.
Rufe die Funktion auf, um die Ausgabe zu testen.

```console
1 - ungerade
2 - gerade
3 - ungerade
4 - gerade
5 - ungerade
6 - gerade
7 - ungerade
8 - gerade
9 - ungerade
10 - gerade
```
<sup>Beispielhafte Ausgabe</sup>
#### 1.b. Wertebereich
Erweitere die Funktion so, dass ein Start- und ein Endwert als Parameter übergeben werden können.
```javascript
evenodd ( 10, 20 ); // gibt die Zahlen von 10 bis 20 aus
```
<sup>Beispielhafter Aufruf</sup>

#### 1.c. Gruppieren von Informationen
Erweitere die Ausgabe so, dass die Informationen in der Konsole zusammengefasst werden. Verwende dazu die Befehle `console.group()` und `console.groupEnd()`. 

Gib mit Hilfe des Befehls `console.count()` an, wie oft die Funktion schon aufgerufen wurde. Verwende dazu eine globale Variable.

```javascript
evenodd ( 5, 10 );  // gibt die Zahlen von 5 bis 10 aus
evenodd ( 10, 13 ); // gibt die Zahlen von 10 bis 13 aus
```
```console
▾ Even or Odd: Zahlen von 5 bis 10
     Anzahl der Aufrufe:  1
     5 - ungerade
     6 - gerade
     7 - ungerade
     8 - gerade
     9 - ungerade
     10 - gerade
 ▾ Even or Odd: Zahlen von 10 bis 13
     Anzahl der Aufrufe:  2
     10 - gerade
     11 - ungerade
     12 - gerade
     13 - ungerade
```
<sup>Beispielhafter Aufruf und Ausgabe mit eine Gruppe pro Aufruf</sup>

#### 1.d. Erweiterungen

* Wenn die erste übergebene Zahl größer als die zweite Zahl ist, dann soll eine *Warning* ausgegeben werden, aber beide Zahlen vertauscht werden.
* Wenn die erste oder die zweite Zahl negativ ist, soll eine *Error*-Fehlermeldung ausgegeben werden, und die Funktion nicht weiter ausgeführt werden.


### Aufgabe 2. Zeitmessung in JavaScript

Mit den Befehlen `console.time()`, `console.timeEnd()` und `console.timeLog()` können Ausführungszeiten verschiedener Code-Segmente in JavaScript gemessen werden.


#### 2.1. Grundlagen der Zeitmessung

Mache dich mit den Befehlen `console.time()`, `console.timeEnd()` und `console.timeLog()` vertraut. Teste dazu die Methoden direkt in der Konsole der Entwickler-Werkzeuge:

* Starte einen bestimmten Timer
* Nimm Zwischenzeiten 
* Beende den Timer

#### Schritt 2.2. Messung der Laufzeit

Es soll die Ausführungszeit gemessen werden.

Lege dazu eine Methode `doNonsense(count)`, die eine bestimmte Anzahl an zufälligen Zahlen generiert und für diese die Kreisfläche berechnet.

Messe die Laufzeit direkt in der erstellten Methode und teste mit folgenden Werten für `count`:
* 1.000
* 1.000.000
* 1.000.000.000


#### Schritt 2.3. Erweiterungen

* Erweitere die Methode um einen Parameter `step`. Diese Parameter gibt an, nach welcher Anzahl an Durchläufen eine Zwischenzeit genommen werden soll.
* Rufe die Methode `doNonsense()` mehrfach auf und miss die gesamte Laufzeit.
```console
thousand: 0.0029296875 ms
thousand: 0.138916015625 ms
thousand: 0.216064453125 ms
million: 0.0009765625 ms
million: 6.01806640625 ms
million: 9.9189453125 ms
billion: 0.0009765625 ms
billion: 2527.933837890625 ms
billion: 5054.5859375 ms
overall: 5064.886962890625 ms
```
*Beispielhafte Ausgabe*
## Ressourcen
* [developer.chrome.com - DevTools](https://developer.chrome.com/docs/devtools?hl=de){:target="_blank"}
* [mozilla.org - console](https://developer.mozilla.org/en-US/docs/Web/API/console){:target="_blank"}