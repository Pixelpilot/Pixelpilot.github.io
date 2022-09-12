---
title: Formulare mit PHP
description: Auswerten und Verarbeiten von Formularen in PHP

category: Webentwicklung
topic: Grundlagen von PHP
subtopic: Auswerten und Verarbeiten von Formularen in PHP

layout: default

sitemap_exclude: y
---

## Aufgabenstellung
Es ist eine einfache Webapp zu erstellen, mit der die Grundrechnungsarten trainiert werden können.

![Beispielhafte Umsetzung](img/js_rechentrainer.png)
*Der Rechentrainer soll über Dialog-Boxen realisiert werden.*


### 1. Addition

* Dem Benutzer werden 5 Additionen zur Aufgabe gestellt, die er beantworten muss. Setze das Programm mit Hilfe des Befehls `prompt()` um.

* Gib im Anschluss die Anzahl der richtig beantworteten Aufgaben mit Hilfe des Befehls `alert()` aus.

* Verwende die Funktionen `Math.random()` (Zufallszahl generieren) und `Math.floor()` (Abrunden), um eine Zufallszahl zu generieren.


Der Quellcode besteht hier aus einem HTML-Dokument, in dem in Zeile 09 bis 19 PHP eingebettet ist. In den Zeilen 10 bis 14 werden nur Berechnungen durchgeführt, diese Zeilen haben keine Auswirkung auf das resultierende HTML-Dokument. In den Zeile 15 und 17 wird mit der `echo()` – Funktion ein Output erstellt.

```php
<?php 
    // PHP
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"> 
  <title>Beispielseite für ein PHP-Programm</title>
</head><body>
  <h1>PHP-Beispiel</h1>
  <?php
      $entfernung = 296;
      $h = 2;
      $min = 40;
      $zeit = $h + $min / 60;
      $kmh = $entfernung / $zeit;
      echo "  <p>$entfernung km in $h:$min sind $kmh km/h</p>\n";
      if( $kmh > 130 ) {
           echo("  <p><b>Das ist zu schnell!</b></p>\n");
      }
  ?>
</body>
</html>
```
Der PHP-Interpreter fügt den Output an der Stelle in den HTML-Code ein, wo der PHP-Code war; das Ergebnis sieht wie folgt aus:

```html
<!-- HTML -->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <title>Beispielseite für ein PHP-Programm</title>
</head><body>
    <h1>PHP-Beispiel</h1>
    <p>296 km in 2:40 sind 111 km/h</p>
</body>
</html>
```

### 2. Freie Anzahl der Fragen
* Der Benutzer soll die Anzahl der Fragen selbst bestimmen können.

### 3. Weitere Grundrechnungsarten
* Es sollen Aufgaben aus den verschiedenen Grundrechenarten zufällig gestellt werden.

* Gib den Zwischenstand nach jeder Frage aus.

### 4. Zusatz / Erweiterungen
* Zeige das Ergebnis des Rechentrainers mit den Befehlen `document.write()` und `document.writeln()` direkt im Browser an.

* Zeige das Ergebnis in Form eines Balkens an.

## Ressourcen
* [https://web-development.github.io/php/ - PHP Basics](https://web-development.github.io/php/){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: Password Hashing](https://www.php.net/manual/de/book.password.php){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: Einfaches Formular Tutorial](https://www.php.net/manual/de/tutorial.forms.php){:target="_blank"}
