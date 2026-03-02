---
title: Threads in Java
description: Theorie und Übungen zu Threads, Synchronisation und nebenläufiger Programmierung

category: Fachspezifische Softwaretechnik
topic: Algorithmen und Datenstrukturen
subtopic: Divers

layout: default

sitemap_exclude: y
---

# {{ page.title }}

## 1. Theorie: Threads in Java

Threads ermöglichen Nebenläufigkeit: Mehrere Ausführungsstränge laufen innerhalb eines Programms scheinbar gleichzeitig.
Das verbessert Reaktionszeit und kann Aufgaben parallelisieren.

### 1.1 Warum Threads?

Ohne Threads werden Aufgaben nacheinander abgearbeitet.
Mit Threads können zeitintensive Arbeiten (z. B. Datei-Download, Berechnungen, I/O) ausgelagert werden.

Vorteile:

- bessere Ausnutzung moderner Mehrkern-Prozessoren,
- flüssigere Benutzeroberflächen,
- Trennung von Hintergrundaufgaben und Hauptlogik.

Risiken:

- Race Conditions,
- Deadlocks,
- schwerer testbarer Code.

### 1.2 Thread erstellen: `Thread` und `Runnable`

Variante A über `Thread`:

```java
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Läuft in: " + Thread.currentThread().getName());
    }
}

new MyThread().start();
```

Variante B (empfohlen) über `Runnable`:

```java
Runnable task = () -> {
    System.out.println("Läuft in: " + Thread.currentThread().getName());
};

Thread t = new Thread(task);
t.start();
```

Wichtig: `start()` startet einen neuen Thread. `run()` direkt aufzurufen startet **keinen** neuen Thread.

### 1.3 Thread-Lebenszyklus (vereinfacht)

Typische Zustände:

- `NEW` (erstellt, noch nicht gestartet)
- `RUNNABLE` (bereit/läuft)
- `TIMED_WAITING` (z. B. durch `sleep`)
- `WAITING` (z. B. durch `join` ohne Timeout)
- `TERMINATED` (beendet)

Beispiel mit `sleep` und `join`:

```java
Thread worker = new Thread(() -> {
    try {
        Thread.sleep(500);
        System.out.println("Worker fertig");
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
});

worker.start();
worker.join();
System.out.println("Hauptthread läuft weiter");
```

### 1.4 Synchronisation und Race Conditions

Wenn mehrere Threads auf gemeinsame Daten zugreifen, kann es zu inkonsistenten Ergebnissen kommen.

Beispiel ohne Schutz:

```java
class Counter {
    int value = 0;

    void increment() {
        value++; // nicht atomar
    }
}
```

Sichere Variante mit `synchronized`:

```java
class Counter {
    private int value = 0;

    synchronized void increment() {
        value++;
    }

    synchronized int getValue() {
        return value;
    }
}
```

### 1.5 `volatile` vs. `synchronized` (kurz)

- `volatile` stellt Sichtbarkeit sicher (ein Thread sieht aktuelle Werte), aber keine atomaren Mehrschritt-Operationen.
- `synchronized` sichert Sichtbarkeit **und** gegenseitigen Ausschluss (Mutual Exclusion).

Merke: Für Zähler-Updates reicht `volatile` allein nicht.

### 1.6 Moderne Thread-Nutzung mit `ExecutorService`

Statt Threads direkt zu erzeugen, wird in der Praxis oft ein Thread-Pool verwendet.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

ExecutorService pool = Executors.newFixedThreadPool(2);

pool.submit(() -> System.out.println("Task A"));
pool.submit(() -> System.out.println("Task B"));

pool.shutdown();
```

Vorteil: Bessere Steuerung, Wiederverwendung von Threads, weniger Overhead.

## 2. Praktische Beispiele

### 2.1 Zwei Threads mit Ausgabe

```java
Thread t1 = new Thread(() -> {
    for (int i = 1; i <= 5; i++) {
        System.out.println("T1: " + i);
    }
});

Thread t2 = new Thread(() -> {
    for (int i = 1; i <= 5; i++) {
        System.out.println("T2: " + i);
    }
});

t1.start();
t2.start();
```

### 2.2 Gemeinsamer Zähler mit Synchronisation

```java
class SafeCounter {
    private int value = 0;

    public synchronized void increment() {
        value++;
    }

    public synchronized int getValue() {
        return value;
    }
}

SafeCounter counter = new SafeCounter();

Runnable incrementTask = () -> {
    for (int i = 0; i < 1000; i++) {
        counter.increment();
    }
};

Thread a = new Thread(incrementTask);
Thread b = new Thread(incrementTask);

try {
    a.start();
    b.start();
    a.join();
    b.join();
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
}

System.out.println("Counter: " + counter.getValue()); // 2000
```

### 2.3 Aufgaben im Thread-Pool

```java
ExecutorService pool = Executors.newFixedThreadPool(3);

for (int i = 1; i <= 6; i++) {
    int taskId = i;
    pool.submit(() -> System.out.println("Task " + taskId + " in " + Thread.currentThread().getName()));
}

pool.shutdown();
```

## Aufgaben

> ### 1. Theoriefragen
> {: .assignment }
> Beantworte kurz in eigenen Worten:
> 
> 1. Wozu werden Threads eingesetzt?
> 2. Was ist der Unterschied zwischen `start()` und `run()`?
> 3. Was ist eine Race Condition?
> 4. Wann reicht `volatile` nicht aus?

> ### 2. Erster eigener Thread
> {: .assignment }
> Implementiere ein kleines Programm mit zwei Threads:
> 
> - Thread A gibt die Zahlen 1 bis 10 aus.
> - Thread B gibt die Buchstaben A bis J aus.
> 
> Starte beide Threads gleichzeitig.

> ### 3. `Runnable` statt `Thread`
> {: .assignment }
> Schreibe Aufgabe 2 um, sodass beide Aufgaben als `Runnable` implementiert sind.
> 
> Ziel:
> 
> - gleiche Funktionalität,
> - sauberere Trennung von Aufgabe und Ausführung.

> ### 4. Gemeinsamer Zähler
> {: .assignment }
> Implementiere eine Klasse `Counter` mit:
> 
> - `void increment()`
> - `int getValue()`
> 
> Starte 4 Threads, die jeweils 5000-mal `increment()` aufrufen.
> 
> Schritte:
> 
> 1. zuerst ohne Synchronisation testen,
> 2. danach mit `synchronized` korrigieren,
> 3. beide Ergebnisse vergleichen.

> ### 5. Warten auf Thread-Ende
> {: .assignment }
> Erstelle einen Worker-Thread, der 2 Sekunden wartet und danach "fertig" ausgibt.
> 
> Der Hauptthread soll:
> 
> - den Worker starten,
> - mit `join()` auf das Ende warten,
> - danach "Programmende" ausgeben.

> ### 6. Thread-Pool einsetzen
> {: .assignment }
> Nutze `ExecutorService` mit festem Pool von 3 Threads.
> 
> Anforderungen:
> 
> - 8 Aufgaben (`Runnable`) einreichen,
> - jede Aufgabe gibt ihre Nummer und den Threadnamen aus,
> - am Schluss den Pool sauber mit `shutdown()` beenden.

> ### 7. Mini-Projekt: Download-Simulation
> {: .assignment }
> Simuliere 5 parallele Downloads mit Threads oder Thread-Pool.
> 
> Anforderungen:
> 
> - jeder Download braucht zufällig 500-2000 ms,
> - Start- und Endmeldung je Download,
> - Gesamtdauer im Hauptthread messen und ausgeben,
> - kurze Reflexion (3-5 Sätze), warum Parallelisierung hier sinnvoll ist.
