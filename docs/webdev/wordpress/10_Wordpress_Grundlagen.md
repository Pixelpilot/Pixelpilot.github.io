---
title: Beta - Erstellen einer Website mit Wordpress
description: Wordpress – Verwendung eine CMS

category: Webentwicklung
topic: Wordpress
subtopic: Installation und Entwicklungsumgebung

sitemap_exclude: n

layout: default
---

# Beta - Wordpress

      Achtung! Diese Seite befindet sich gerade in der Erstellung und kann jederzeit geändert werden

## Content Management Systeme

Ein Content Management System (CMS) ist eine Software, die es ermöglicht, Inhalte wie Texte, Bilder und Videos einfach zu verwalten und auf einer Website oder einem Blog zu veröffentlichen. WordPress ist eines der am häufigsten verwendeten CMS und wird sowohl von Einzelpersonen als auch von Unternehmen genutzt.

Es ist benutzerfreundlich, flexibel und kostenlos, und es gibt tausende von Themen und Plugins, die es ermöglichen, die Funktionalität und das Aussehen der Website anzupassen. Andere bekannte CMS sind Joomla, Typo3, Drupal oder Shopify.


## Die Wordpress 5-Minuten-Installation

1. Lade Wordpress ([wordpress.org](https://wordpress.org/){:target="_blank"}), und extrahiere den Ordner `wordpress` im `htdocs`-Ordner. Benenne dem Ordner `wp_dein_name` um.
2. Verzeichnisrechte ändern (**ACHTUNG: Nur während der Entwicklung!!!**)
    ```
    #!/bin/bash
    cd /Applications/XAMPP/xamppfiles/htdocs
    chmod -R 777 wp_dein_name/
    ```
3. Unter `http://localhost/phpmyadmin` eine Datenbank anlegen
4. 5-Minuten-Installation starten unter `http://localhost/wp_dein_name/`
   - Datenbankzugangsdaten eingeben
   - Wordpress-Zugangsdaten vergeben
   - Einloggen
5. FTP-Modus ändern
    ```
    /** in wp-config.php hinzufügen */
    define ('FS_METHOD', 'direct');
    ```


> ### Aufgabe: Installation von Wordpress
>
> 1. Führe die Installation wie beschrieben aus
> 2. Erstelle im Wordpress Backend eine zusätzliche Seite und einen zusätzlichen Blogbeitrag
> 3. 



### Exkurs – Abspeichern von Passwörtern in einer Datenbank

Das Hashing von Passwörtern ist ein Prozess, bei dem ein Passwort durch eine Hash-Funktion geleitet wird, um einen Hash-Wert (einen scheinbar zufälligen Satz von Zeichen) zu erzeugen. Der resultierende Hash-Wert hat immer eine feste Länge, unabhängig von der Länge des ursprünglichen Passworts.

Hier sind die technischen Schritte:

1. **Auswahl einer Hash-Funktion**: Es gibt viele verschiedene Hash-Funktionen (wie SHA-256, bcrypt, Argon2), und einige sind sicherer als andere. Einige sind speziell für das Hashing von Passwörtern entwickelt und beinhalten Funktionen, die das "Knacken" des Hashes erschweren.

2. **Passwort Eingabe**: Der Benutzer gibt sein Passwort ein.

3. **Hashing**: Das Passwort wird durch die gewählte Hash-Funktion geleitet, und ein eindeutiger Hash-Wert wird erzeugt.

4. **Speicherung**: Der resultierende Hash-Wert wird in der Datenbank gespeichert, nicht das ursprüngliche Passwort.

5. **Salzen**: Um das Hashing sicherer zu machen, fügt man oft einen "Salz" hinzu – das ist eine zufällige Zeichenfolge, die zum Passwort hinzugefügt wird, bevor es gehasht wird. Dadurch wird das Resultat für jedes Passwort, selbst wenn zwei Benutzer dasselbe Passwort haben, unterschiedlich. Dieser Salz wird ebenfalls (aber nicht gehasht) in der Datenbank gespeichert, damit er später verwendet werden kann, um eingehende Passworte zu überprüfen.

6. **Überprüfung**: Wenn sich ein Benutzer später anmelden möchte, gibt er sein Passwort ein. Dieses Passwort wird zusammen mit dem Salz aus der Datenbank erneut gehasht. Wenn der resultierende Hash-Wert mit dem in der Datenbank gespeicherten Wert übereinstimmt, ist das Passwort korrekt.

Der Hauptvorteil dieses Verfahrens ist, dass selbst wenn jemand Zugriff auf die Datenbank erhält, er die tatsächlichen Passwörter nicht sieht, sondern nur die Hash-Werte. Das macht es extrem schwierig, die ursprünglichen Passwörter herauszufinden.



> ### Aufgabe: Hashing
> 1. Finde Heraus, wo das Passwort in der Datenbank gespeichert ist, und welcher Hashing-Algorithmus von WordPress verwendet wird.
> 2. Erstelle von einem neugewählten Password einen entsprechenden Hash-Wert und trage ihn in der Datenbank ein.
> 3. Überprüfe, ob du dich mit den neuen Zugangsdaten einloggen kannst

## Themes

In WordPress bezeichnet ein "Theme" das Gesamtdesign einer Website, einschließlich des Layouts, der Farbpaletten, der Schriftarten und des Stils. 

Themes bestimmen das Aussehen einer WordPress-Seite, während der Inhalt unabhängig von ihnen bleibt. Durch das Wechseln von Themes kann das Design einer WordPress-Website schnell geändert werden, ohne den tatsächlichen Inhalt zu beeinflussen.

### Themes installieren

In Wordpress können mehrere Themes gleichzeitig installiert werden, es kann aber nur immer ein Theme aktiv sein.

> ### Aufgabe: Themes installieren
> 1. Installiere mehrere Themes und aktiviere sie, um zu sehen, wie sich die Themes auf die Seite auswirken.
> 2. Passe das Aussehen der Seite mithilfe des `Customizer` an.
> 3. Installiere das Theme **"OnePress"**


### Child-Theme erstellen

Child-Themes in WordPress bieten die Möglichkeit, ein Theme anzupassen, ohne den ursprünglichen Code des Eltern-Themes zu ändern. Dadurch bleiben Anpassungen beim Aktualisieren des Eltern-Themes erhalten, was die Wartung und Aktualisierung erleichtert. 

Zudem ermöglicht es eine sicherere und organisierte Art der Theme-Anpassung, da Entwickler und Designer Änderungen und Anpassungen in einer isolierten Umgebung vornehmen können, was dazu beiträgt, das Risiko von Fehlern und Konflikten mit dem Haupttheme zu minimieren.

**Vorteile von Child-Themes:**

- **Aktualisierungssicher:** Anpassungen gehen bei Theme-Updates nicht verloren.
- **Anpassungsfreundlich:** Ermöglicht individuelle Änderungen ohne Beeinflussung des Hauptthemes.
- **Fehlerminimierung:** Risiko von Konflikten und Fehlern wird durch isolierte Anpassungen reduziert.
- **Wiederverwendbarkeit:** Ermöglicht die Wiederverwendung und Freigabe von Anpassungen in verschiedenen Projekten.

#### 1. **Child-Theme-Verzeichnis erstellen:**
- Im Verzeichnis `wp-content/themes` ein neues Verzeichnis für das Child-Theme anlegen.
- Das Verzeichnis sollte einen aussagekräftigen Namen haben, z.B. `twentytwentyone-child`, wenn `twentytwentyone` das Eltern-Theme ist.

#### 2. **Stylesheet erstellen: (style.css)**
- Im Child-Theme-Verzeichnis eine CSS-Datei namens `style.css` erstellen.
- Folgenden Code in die `style.css` Datei einfügen und entsprechend anpassen:

```css
/*
 Theme Name:   Twenty Twenty-One Child
 Theme URI:    http://example.com/twentytwentyone-child/
 Description:  Twenty Twenty-One Child Theme
 Author:       John Doe
 Author URI:   http://example.com
 Template:     twentytwentyone
 Version:      1.0.0
 License:      GNU General Public License v2 or later
 License URI:  http://www.gnu.org/licenses/gpl-2.0.html
 Text Domain:  twentytwentyone-child
*/
```

#### 3. **Funktionsdatei erstellen: (functions.php)**
- Im Child-Theme-Verzeichnis eine PHP-Datei namens `functions.php` erstellen.
- Folgenden Code in die `functions.php` Datei einfügen, um das Stylesheet des Eltern-Themes zu laden:

```php
<?php
function twentytwentyone_child_styles() {
    wp_enqueue_style('twentytwentyone-parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'twentytwentyone_child_styles');
?>
```

#### 4. **Child-Theme aktivieren:**
- Im WordPress-Dashboard zu `Design` &rarr; `Themes` gehen.
- Das neu erstellte Child-Theme finden und auf `Aktivieren` klicken.

#### 5. **Anpassungen vornehmen:**
- Sie können jetzt Anpassungen am Child-Theme vornehmen, indem Sie zusätzlichen Code zur `functions.php` hinzufügen oder weitere Template-Dateien im Child-Theme-Verzeichnis erstellen und anpassen.



> ### Aufgabe: Child-Theme installieren und anpassen
> 1. Folge der Anleitung und erstelle ein Child-Theme des vorher installierten Themes **OnePress**
> 2. Erstelle ein Vorschau-Bild für das Child-Theme. Das Bild (1200x900 px) sollte das Aussehen und die Ästhetik des Child-Themes repräsentieren. <br>
     Speicher das Bild im PNG-Format unter dem Namen `screenshot.png` ab und lege es ins Hauptverzeichnis des Child-Themes.


## Erstellen von Inhalten

### Pages vs. Posts, ...




## Erweitern um Plugins

### Verwaltung von Medien

### Google Maps

### Suchmaschinenoptimierung



## Ressourcen
* [mozilla.org - alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert){:target="_blank"}
* [mozilla.org - prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt){:target="_blank"}
* [mozilla.org - confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm){:target="_blank"}
* [mozilla.org - parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt){:target="_blank"}
* [mozilla.org - Math.random()](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random){:target="_blank"}
* [mozilla.org - Math.floor()](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor){:target="_blank"}
* [mozilla.org - Document.write()](https://developer.mozilla.org/en-US/docs/Web/API/Document/write){:target="_blank"}
* [mozilla.org - Document.writeln()](https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln){:target="_blank"}