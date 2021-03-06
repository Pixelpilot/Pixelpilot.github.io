---
title: Strukturen und Zeiger
description: Programmieren in C - Teil 2
layout: default
type: lecture
category: Fachspezifische Softwaretechnik
topic: Programmieren in C - Teil 2
subtopic: Strukturen und Zeiger
---

## Zeiger auf Strukturvariablen

Es können Zeiger auf Strukturvariablen definiert werden.

```c
struct Datum {
  int tag;
  int monat;
  int jahr;
};
```


```c
Datum dat = {22,9,2013};

Datum* p;
p = &dat;

p->tag = 10;
```

"Pfeilschreibweise" bei **Zeiger auf** Strukturen – Sonst müsste `(*p).tag` geschrieben werden, weil `.` eine höhere Priorität als `*` hat.

Im Speicher kann man sich das folgendermaßen vorstellen:

![Strukturen und Zeiger](fig/strukturen_zeiger.png)


## Anwendung – Zeiger
Für die Parameterübergaben an Funktionen.

- Bei der Parameterübergabe an Funktionen wird kopiert (call-by-value).
- Strukturen sind meist etwas umfangreicher.
- Kopieren braucht Zeit.
- Ein Zeiger alleine ist schneller kopiert als die ganze Struktur.


**Beispiel:**

```c
typedef struct {
  int tag;
  int monat;
  int jahr;
} Datum;
```


```c
void heute(Datum* d) {
  d->tag = 11;
  d->monat = 11;
  d->jahr = 2011;
}
```


```c
int main() {
  Datum h;
  heute(&h);
  printf("%02d.%02d.%d\n",h.tag,h.monat,h.jahr);
}
```



---

### Übung (Ein- und Ausgabe)

Schreibe eine Funktion `inputDatum()` zur Eingabe und eine Funktion `outputDatum()` zur Ausgabe eines Datums. Verwende die Struktur `Datum` und übergib die Struktur immer als Zeiger.



---

### Übung (Kalendereintrag)

In einem Test/Schularbeitenkalender sollen Datum und Bezeichnung des Fachs erfasst werden. Verwende dazu die Struktur:

```c++
typedef struct {
  Datum am;
  char bezeichnung[50];  
} KalenderEintrag;
```

Schreibe eine Funktion `inputKalenderEintrag()` zur Eingabe und eine Funktion `outputKalenderEintrag()` zur Ausgabe eines Kalendereintrags. Übergib die Struktur in beiden Fällen als Zeiger.

Hinweis:

```c++
void foo(KalenderEintrag* pKalender) {
  int tag;
  // beachte die Anwendung von "->" und "."
  tag = pKalender->am.tag;
}
```



---

### Übung (Kalender)

Ermögliche die Eingabe für ein Array aus 5 Kalendereinträgen. Nachdem alle eingegeben wurden sollen alle Kalendereinträge wieder ausgegeben werden, markiere dabei alle Einträge die im Februar sind mit einem vorgesetzten  `*`.



---

### Übung (Datum vergleichen)

Schreibe eine Funktion die 2 als Zeiger übergebene Datums-Strukturen vergleicht.
Ist das erste Datum früher soll die Funktion 1, bei Gleichheit 0 und falls das erste Datum später als das zweite ist –1 zurückgeben.



---

### Übung (Sortieren)

Sortiere den Kalender nach aufsteigendem Datum. Verwende Bubble Sort und die vorher implementierte Funktion zum Vergleiche von 2 Datums-Strukturen.





 
