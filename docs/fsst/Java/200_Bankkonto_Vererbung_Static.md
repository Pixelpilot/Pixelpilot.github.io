---
title: Statische Variablen und Methoden und Vererbung
description: Beispiel

category: Fachspezifische Softwaretechnik
topic: Programmieren in Java - Projekte
subtopic: Divers

layout: default

sitemap_exclude: n
---

# {{ page.title }}

## Aufgabe: Bankverwaltung

1. Erstellen Sie eine Klasse "Konto" mit den Eigenschaften "kontonummer", "kontostand" und "kontoinhaber" (Name des Inhabers des Kontos). Fügen Sie auch Methoden hinzu, um Geld auf das Konto einzuzahlen und abzuheben sowie um den Kontostand abzufragen.

2. Erstellen Sie eine abgeleitete Klasse "Girokonto" von der Klasse "Konto". Fügen Sie eine statische Variable "zinsen" hinzu und eine statische Methode "setZinsen(double zinsen)", die es ermöglicht, die Zinsen für alle Girokonten zu setzen. Implementieren Sie auch eine Methode "berechneZinsen()", die den Kontostand mit den aktuellen Zinsen erhöht.

3. Erstellen Sie eine weitere abgeleitete Klasse "Sparbuch" von der Klasse "Konto". Fügen Sie eine statische Variable "zinsen" hinzu und eine statische Methode "setZinsen(double zinsen)" wie in der Klasse Girokonto, jedoch die Zinsen sind höher als Girokonto.

4. Erstellen Sie eine Klasse "Bank" mit einer Liste von Konten und einer statischen Methode "addKonto(Konto konto)", die ein Konto der Liste hinzufügt. Implementieren Sie auch eine Methode "listKonten()", die alle Konten auflistet und deren Kontostand ausgibt.

5. Erstellen Sie mehrere Instanzen von "Girokonto" und "Sparbuch" sowie eine Instanz von "Bank". Setzen Sie die Zinsen für Girokonten und Sparbücher. Fügen Sie die Konten der Bank hinzu und rufen Sie die Methode "listKonten()" auf, um die Konten und ihre Kontostände aufzulisten. Rufen Sie die Methode "berechneZinsen()" auf, um die Kontostände nach Ablauf einer bestimmten Zeit zu erhöhen.