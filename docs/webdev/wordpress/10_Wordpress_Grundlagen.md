---
title: Erstellen einer Website mit WordPress
description: WordPress – Verwendung eine CMS

category: Webentwicklung
topic: WordPress
subtopic: Installation und Entwicklungsumgebung

sitemap_exclude: n

layout: default
---

# Erstellen einer Website mit WordPress

Es wird auf die Grundlagen zur Erstellung einer Website mittels WordPress eingegangen.

## Content Management Systeme

Ein Content Management System (CMS) ist eine Software, die es ermöglicht, Inhalte wie Texte, Bilder und Videos einfach zu verwalten und auf einer Website oder einem Blog zu veröffentlichen. WordPress ist eines der am häufigsten verwendeten CMS und wird sowohl von Einzelpersonen als auch von Unternehmen genutzt.

Es ist benutzerfreundlich, flexibel und kostenlos, und es gibt tausende von Themen und Plugins, die es ermöglichen, die Funktionalität und das Aussehen der Website anzupassen. Andere bekannte CMS sind Joomla, Typo3, Drupal oder Shopify.


## Lokale Entwicklungsumgebung
Für die Erstellung einer Website bietet es sich an, auf einer lokalen Entwicklungsumgebung zu arbeiten. Das hat
mehrere Vorteile:
- Unabhängigkeit von einer funktionierenden Internetverbindung
- Keine Gefährdung der Live-Umgebung
- Steigerung der Geschwindigkeit
-Einfache Verwaltung der Dateien über das Betriebssystem (kein FTP-Client notwendig)
- Gängige Systeme wie **MAMP** oder **XAMPP** sind sowohl für Linux, Windows und MacOS verfügbar und beinhalten neben
einem **Webserver**, der **PHP** interpretieren kann, auch einen **MySQL**-Server.


## Die WordPress 5-Minuten-Installation

1. Lade WordPress ([wordpress.org](https://wordpress.org/){:target="_blank"}), und extrahiere den Ordner `wordpress` im `htdocs`-Ordner. Benenne dem Ordner `wp_dein_name` um.
2. Verzeichnisrechte ändern (**ACHTUNG: Nur während der Entwicklung!!!**)
    ```
    #!/bin/bash
    cd /Applications/XAMPP/xamppfiles/htdocs
    chmod -R 777 wp_dein_name/
    ```
3. Unter `http://localhost/phpmyadmin` eine Datenbank anlegen
4. 5-Minuten-Installation starten unter `http://localhost/wp_dein_name/`
   - Datenbankzugangsdaten eingeben
   - WordPress-Zugangsdaten vergeben
   - Einloggen
5. FTP-Modus ändern
    ```
    /** in wp-config.php hinzufügen */
    define ('FS_METHOD', 'direct');
    ```


> ### Aufgabe: Installation von WordPress
>
> 1. Führe die Installation wie beschrieben aus
> 2. Trage die benötigten Informationen zur WordPress-Installation ein
>    - Vergib Blogtitel, Benutzername, Passwort und E-Mailadresse
>    - Arbeitet man auf einer Installation, die bereits online ist, sollte die Option *Suchmaschinen dürfen diese Website indizieren* während der Entwicklung der Website auf jeden Fall deaktiviert werden!
> 3. Mache die mit dem Benutzerinterface (Backend) von WordPress vertraut und erstelle eine zusätzliche Seite und einen zusätzlichen Blogbeitrag



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

In WordPress können mehrere Themes gleichzeitig installiert werden, es kann aber nur immer ein Theme aktiv sein.

> ### Aufgabe: Themes installieren
> 1. Installiere mehrere Themes und aktiviere sie, um zu sehen, wie sich die Themes auf die Seite auswirken.
> 2. Passe das Aussehen der Seite mithilfe des `Customizer` an.
> 3. Installiere das Theme **"OnePress"**.


### Child-Theme erstellen

[Child-Themes](https://developer.wordpress.org/themes/advanced-topics/child-themes/){:target="_blank"} in WordPress bieten die Möglichkeit, ein Theme anzupassen, ohne den ursprünglichen Code des Eltern-Themes zu ändern. Dadurch bleiben Anpassungen beim Aktualisieren des Eltern-Themes erhalten, was die Wartung und Aktualisierung erleichtert. 

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
    wp_enqueue_style('twentytwentyone-parent-style', 
            get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'twentytwentyone_child_styles');
?>
```

#### 4. **Vorschaudatei erstellen: (screenshot.png)**
- Im Child-Theme-Verzeichnis ein Vorschau-Bild für das Child-Theme mit dem Dateinamen `screenshot.png` erstellen.
- WordPress empfiehlt eine Abmessung von `1200 x 900 px`

#### 5. **Child-Theme aktivieren:**
- Im WordPress-Dashboard zu `Design` &rarr; `Themes` gehen.
- Das neu erstellte Child-Theme finden und auf `Aktivieren` klicken.

#### 6. **Anpassungen vornehmen:**
- Sie können jetzt Anpassungen am Child-Theme vornehmen, indem Sie zusätzlichen Code zur `functions.php` hinzufügen oder weitere Template-Dateien im Child-Theme-Verzeichnis erstellen und anpassen.



> ### Aufgabe: Child-Theme installieren und anpassen
> Folge der Anleitung und erstelle ein Child-Theme des vorher installierten Themes **OnePress**.
>
> Erstelle dazu ein Child-Theme-Verzeichnis mit den notwendigen Dateien und verwende aussagekräftige Beschreibungen und Bilder:
>    - `style.css`
>    - `functions.php`
>    - `screenshot.png`

## Erstellen von Inhalten

### Pages vs. Posts
WordPress unterstützt standardmäßig zwei grundlegende **Inhalts-Typen**, nämlich **Seiten (Pages)** und **Beiträge (Posts)**. Bei beiden können die Inhalte mit dem integriertem Webeditor namens TinyMCE bearbeitet werden, entweder im visuellem- oder im HTML-Modus.

#### Bearbeitung der Inhalte
Während man im HTML-Modus am Quelltext des Inhaltes arbeitet, werden im **visuellen Modus** die Inhalte grafisch dargestellt. Der Text kann dabei über verschiedene Buttons formatiert und ausgerichtet, Überschriften können als solche gekennzeichnet, und diverse Darstellungsformen wie Listen oder Zitate können eingesetzt werden.

Ein solcher visueller Editor wird übrigens als sogenannter **WYSIWYG-Editor** bezeichnet, was die englische Abkürzung für *What You See Is What You Get ist*, und auf deutsch übersetzt so viel bedeutet wie *Du bekommst, was du siehst*.

#### Unterschiedliche Verwendung

Der **Unterschied zwischen Seiten und Beiträgen** besteht darin, dass
Beiträge im Gegensatz zu Seiten in Kategorien und Schlagworte eingeteilt
werden können, und in zeitlicher Reihenfolge nacheinander archiviert
werden.

Daher verwendet man Beiträge in der Regel für zeitabhängige Inhalte wie
Blogbeiträge oder Neuigkeiten, bei denen den Besuchern immer zuerst die
neusten angezeigt werden sollen, während man Seiten für statische
Inhalte wie beispielsweise eine Über uns-, Kontakt-, oder
Impressums-Seite einsetzt.

### Bilder in WordPress

In WordPress können auch **Bilder hochgeladen**, und daraufhin als Inhalte. Dies kann entweder direkt über den Editor
stattfinden, oder separat über den Menüpunkt **Medien**.

Nach dem Upload erzeugt WordPress **automatisch verschiedene
Auflösungen** des hochgeladenen Bildes, damit bei besonders großen
Bildern nicht die originale Auflösung geladen werden muss, wenn das Bild
auf der Webseite in einer kleinere Auflösung dargestellt wird.

Jedes Bild hat einen Namen, welcher standardmäßig dem Dateinamen der
hochgeladenen Datei ohne Dateiendung entspricht. Außerdem kann Bildern
eine Beschriftung gegeben werden, die nach dem einfügen unterhalb des
Bildes angezeigt wird, sowie eine Beschreibung, die beim überfahren mit
der Maus angezeigt wird, und ein alternative Text, der in Browsern ohne
Bilder-Unterstützung angezeigt wird.

Beiträgen kann ein spezielles **Beitragsbild** zugewiesen werden,
welches dann je nach verwendeten Theme an einer speziellen Position auf
der Webseite dargestellt wird, sofern das verwendete Theme dies
unterstützt.

### Kommentare zu den Inhalten

Je nach Einstellungen können **Inhalte von den Besuchern kommentiert**
werden. Ob es Besuchern erlaubt ist, einen **Kommentar zu
hinterlassen**, kann für jeden Inhalt individuell eingestellt werden.
Die Standardeinstellung davon kann in den *Diskussions*-Einstellungen
von WordPress festgelegt werden.

Außerdem lässt sich in den **Einstellungen** unter Anderem auch
festlegen, ob alle Besucher oder nur registrierte Benutzer einen
Kommentar hinterlassen dürfen, ob Besucher beim Kommentieren einen Namen
und eine Email-Adresse hinterlassen müssen, und ob man auf andere
Kommentare antworten kann, und Antworten daraufhin verschachtelt werden.

WordPress bietet zudem die Option, dass Kommentare nicht sofort
öffentlich sichtbar sind, sondern **vor der Veröffentlichung von einem
Administrator überprüft** und freigeschaltet werden müssen.

Wenn ein Besucher nun einen Kommentar hinterlässt, so bekommt dieser
daraufhin angezeigt, dass sein Kommentar auf die Freischaltung wartet.
Ein Administrator kann diesen Kommentar daraufhin in der
**Kommentar-Moderation** überprüfen, und ihn entweder genehmigen oder als
Spam markieren.


### Benutzer und deren Rollen

Wie für ein CMS typisch, können **in WordPress mehrere Benutzer**
angelegt und verwaltet werden. Ein frisch installiertes WordPress
enthält nur den Benutzer namens *Admin*, der die umfassenden
Administrator-Rechte besitzt. Von diesem Benutzer aus können über den
Admin-Bereich weitere Benutzer hinzugefügt werden. Alle Benutzer müssen
einen Namen, eine E-Mail-Adresse sowie eine Rolle haben.

Die *Rolle eines Benutzers* legt fest, welche Rechte dieser hat.
WordPress kennt von Grund auf folgende Benutzerrollen, mit diesen
Rechten:

-   Ein **Abonnent** kann nur sein eigenes Profil bearbeiten, und
    Kommentare über seinen Account hinterlassen.

-   Ein **Mitarbeiter** kann eigene Beiträge erstellen und bearbeiten,
    diese müssen aber vor der Veröffentlichung durch einen Administrator
    geprüft werden.

-   Ein **Autor** kann eigene Beiträge erstellen, bearbeiten, und diese
    eigenständig veröffentlichen oder löschen, sowie Bilder hochladen.

-   Ein **Redakteur** kann alle Beiträge und Seiten ansehen, bearbeiten,
    veröffentlichen oder löschen, Bilder hochladen, Schlagworte
    verwalten, und Kommentare moderieren.

-   Ein **Administrator** hat uneingeschränkte Rechte, und kann somit
    Benutzer hinzufügen, alle Einstellungen ändern, das Theme wechseln
    und Plugins aktivieren.


> ### Aufgabe: Verwaltung von Inhalten in WordPress
>
> Es soll eine Website über das Maturaprojekt erstellt werden. Die Website besteht aus verschiedenen aktuellen Beiträgen, die den Projektfortschritt dokumentieren sollen sowie aus einigen statischen Seiten, die allgemeine Informationen zum Projekt darstellen.
> 
> #### 1. Kategorien für Beitrage erstellen
> Erstelle für die Beitrage neben der Kategorie `Allgemein` mindestens zwei weitere Kategorien, in die sich deine
Neuigkeiten zum Projekt einteilen lassen.
> 
> #### 2. Beitrage anlegen und befüllen, Medienverwaltung
> Erstelle für jede Kategorie mindestens zwei Beiträge und befülle diese mit Inhalten. Füge den Beiträgen ein Beitragsbild sowie weitere Bilder im Inhalt hinzu.
> Finde heraus, wie der Weiterlesen-Tag funktioniert.
> 
> #### 3. Seiten anlegen und befüllen
> Lege folgende Seiten an und befülle sie mit Inhalten:
> - **News** - Auf dieser Seite sollen die Blog-beiträge angezeigt werden
> - **Projekt** - Allgemeine Informationen über das Projekt
> - **Team** - Kurzes Portrait der Teammitglieder
> - **Kontakt** - Kontaktdaten und später Informationen zur Anreise (Google Maps)
> - **Impressum** - Alle rechtlich vorgeschriebenen Informationen
> 
> #### 4. Hauptmenü erstellen
> Erstelle ein **Hauptmenü** (Primäres Menu) und füge die erstellen Seiten in der angegebenen Reihenfolge ein.
> 
> #### 5. Benutzerverwaltung und Kommentare
> Erstelle zwei weitere Benutzer. Log dich mit diesen Benutzernamen ein, um zu den Beitragen Kommentare zu verfassen.
> Verwalte die Kommentare mit dem Admin-Benutzer um sie freizuschalten oder zurückweisen.


## Erweitern um Plugins

### Das Plugins-System von WordPress
Das System der Plugins in WordPress ermöglicht es Nutzern, die Funktionalität ihrer Website zu erweitern und anzupassen, ohne direkt im Code der Website arbeiten zu müssen. Plugins sind im Wesentlichen Zusatzmodule, die man zu einer WordPress-Website hinzufügen kann, um spezifische Funktionen oder Features bereitzustellen. Dies kann von einfachen Anpassungen wie Kontaktformularen und SEO-Tools bis hin zu komplexen Funktionen wie E-Commerce-Plattformen oder Sicherheitslösungen reichen.

Man installiert ein Plugin über das WordPress-Dashboard, und nach der Aktivierung fügt es die jeweilige Funktionalität zur Website hinzu. Plugins können je nach Bedarf aktiviert, deaktiviert oder gelöscht werden. Sie bieten eine flexible und benutzerfreundliche Möglichkeit, die Leistungsfähigkeit und Vielseitigkeit einer WordPress-Website zu steigern.

Aktuell (13.11.2023) gibt es ca. 60.000 Plugins im offiziellen [offiziellen WordPress-Plugin-Verzeichnis](https://wordpress.org/plugins/){:target="_blank"}.

### Ausgewählte WordPress Plugins
Die Auswahl der wichtigsten WordPress-Plugins kann je nach den spezifischen Anforderungen und Zielen deiner Website variieren. Allerdings gibt es einige grundlegende Plugins, die allgemein als essenziell für die meisten WordPress-Seiten angesehen werden:

1. **Yoast SEO oder All in One SEO Pack**: Diese Plugins helfen bei der Suchmaschinenoptimierung (SEO) deiner Website, indem sie Funktionen wie Meta-Tags, Sitemaps und nützliche Tipps zur Verbesserung des Inhalts bieten.

2. **Jetpack**: Ein vielseitiges Plugin, das Funktionen wie Sicherheitsmaßnahmen, Performance-Verbesserungen, Website-Statistiken und Bildoptimierung bietet.

3. **Akismet Anti-Spam**: Dieses Plugin hilft dabei, Spam in Kommentaren und Kontaktformularen zu filtern und zu verhindern.

4. **Wordfence Security oder Sucuri Security**: Diese Plugins bieten Sicherheitsfunktionen wie Firewall-Schutz, Malware-Scan und Sicherheitsüberwachung.

5. **WooCommerce**: Wenn du einen Online-Shop betreiben möchtest, ist WooCommerce das führende E-Commerce-Plugin für WordPress.

6. **WPForms oder Contact Form 7**: Für die Erstellung benutzerfreundlicher Kontaktformulare.

7. **UpdraftPlus oder BackupBuddy**: Diese Plugins bieten Lösungen für die regelmäßige Sicherung deiner Website.

8. **WP Super Cache oder W3 Total Cache**: Diese Plugins verbessern die Geschwindigkeit und Performance deiner Website durch Caching.

9. **Elementor oder Beaver Builder**: Beliebte Page-Builder-Plugins, die ein einfaches Drag-and-Drop-Interface zur Gestaltung von Seiten bieten.

10. **Smush oder EWWW Image Optimizer**: Diese Plugins helfen dabei, die Größe von Bildern zu reduzieren und somit die Ladezeiten der Seite zu verbessern.

Es ist wichtig, nicht zu viele Plugins zu installieren, da dies die Website verlangsamen kann. Wähle Plugins, die spezifisch für die Bedürfnisse und Ziele deiner Website sind.

> ### Aufgabe: Verwaltung von Plugins
>
> Die Seite soll um gewisse Funktionalitäten erweitert werden. Suche und test dazu entsprechende Plugins, um diese Funktionalität zu erreichen:
>
> #### 1. Sicherung der Website
> Suche ein Plugin, das es ermöglicht die Website in regelmäßigen Abständen zu sichern. Mithilfe dieses Tools soll es auch einfach möglich sein, die gesamte WordPress-Installation auf einen anderen Server zu transferieren. 
> 
> Verwende dieses Plugin, um nach jeder Stunde ein Backup zu erstellen. Speichere anschließend dieses Backup auf einem deiner Speichermedien (OneDrive, ...).
> 
> #### 2. Verwaltung von Medien
> Die Medienverwaltung von WordPress wird sehr schnell unübersichtlich. Suche ein Plugin, das es ermöglicht Medien in verschiedene Kategorien einzuteilen. Lege folgende Kategorien an und sortiere die Bilder richtig ein:
> - Kontakt (Portraits, \...)
> - Projekt
> - News
> - ...
> 
> #### 3. Bildergalerie für Medien
> Es sollen mehrere Bilder in einer Bildergalerie dargestellt werden. Bei einem
Klick auf ein Bild soll dieses bildschirmfüllend dargestellt werden. Befinden sich mehrere Bilder auf
einer Seite, so soll es möglich sein, sich durch die Bilder zu klicken. Vergib Bilduntertitel und stelle sicher, dass diese sauber angezeigt werden.
> 
> #### 4. Einbinden von Quelltext
> Suche ein Plugin, das es ermöglicht Quelltext in Seiten und Blogbeiträgen einzubinden. Teste das Plugin mit
Quelltext aus den Sprachen:
> - CSS
> - HTML
> - JavaScript
> - PHP
> - Java
>
> #### 5. Tabellen
> Suche ein Plugin, das es ermöglicht Tabellen in Seiten und Blogbeiträgen einzubinden. Benutze das Plugin,
um die Kontaktinformationen auf der Seite Kontakt formatiert darzustellen.
> 
> #### 6. Erstellen eines Kontaktformulars
> Suche ein Plugin, das es ermöglicht Formulare in Seiten
und Blogbeiträgen einzubinden. Benutze das Plugin, um auf der Seite
*Kontakt* ein Kontaktformular zu erstellen. Folgende Funktionalität
sollte gegeben sein:
> 
> - Überprüfung der Eingaben (Pflichtfelder ausgefüllt, \...)
> - Anzeigen einer Bestätigungs-Seite, wenn das Formular abgeschickt wurde
> - Speichern der abgesendeten Formulardaten in der Datenbank
> - E-Mail Benachrichtigung an den Benutzer der Website
> - E-Mail Benachrichtigung an den Administrator der Website
>
> #### 7. Suchmaschinenoptimierung
> Suche ein Plugin, das es ermöglicht die Seite auf Suchmaschinentauglichkeit hin zu optimieren. Passe die Einstellungen und die Inhalte auf der Website entsprechend an.

## Website Transfer auf einen externen Anbieter

Damit die Website von aussen erreicht werden kann soll sie auf einen externen Anbieter transferiert werden.

> ### Aufgabe: Transfer auf einen externen Server
> 
> #### 1. Auswahl des Anbieters
> Suche dir einen Anbieter, der die Anforderungen für das Hosten einer WordPress-Seite erfüllt.
> 
> Hier einige beliebte kostenlose Anbieter:
> - [000Webhost](https://de.000webhost.com/){:target="_blank"}
> - [InfinityFree](https://www.infinityfree.com/){:target="_blank"}
> - [Byet.host](https://byet.host/){:target="_blank"}
> 
> Viele andere Anbieter, wie z.B. [IONOS](https://www.ionos.at/){:target="_blank"} bieten oft einen großzügigen Kündigungszeitraum an.
> 
> #### 2. Durchführen des Transfers
> Transferiere die lokale WordPress-Installation auf den gewählten Server. Verwende dazu eventuell ein Plugin, oder führe den Transfer manuell durch:
> - Transfer der Dateien mittels FTP-Client
> - Export der lokalen Datenbank über phpMyAdmin
> - Import der exportierten Datenbank auf dem Server
> - Anpassen der relevanten Einträge in der Datenbank


> ## Abgabe
> 
> Die Abgabe erfolgt über eine URL der fertigen Website:
> 
> * URL zur Website
> * URL zum Administrations-Interface von Wordpress
> * Benutzername und Passwort eines Administratorzugangs

> ## Checkliste für die Abgabe
> 
> **Projekt: Dokumentation der Diplomarbeit mit WordPress**
> 
> ### Grundsetup & Struktur
> 
> -[ ] WordPress ist korrekt eingerichtet (Titel, Untertitel, Sprache)
> -[ ] Sinnvolle Seitenstruktur vorhanden
> -[ ] Navigationsmenü logisch aufgebaut
> -[ ] Startseite ist bewusst gestaltet
> 
> ---
> 
> ### Theme & Child-Theme
> 
> -[ ] Geeignetes Parent-Theme ausgewählt (z. B. GeneratePress, Astra, Twenty Twenty-Four)
> -[ ] **Child-Theme erstellt und aktiviert**
> -[ ] Mindestens eine Anpassung im Child-Theme (CSS oder functions.php)
> -[ ] Theme passt zum Inhalt (kein „Zufallsdesign“)
> 
> 
> ---
> 
> ### Benutzerverwaltung & Rollen
> 
> -[ ] Mindestens zwei Benutzerkonten vorhanden
> -[ ] Ein zusätzlicher Benutzer mit Rolle „Redakteur“ angelegt
> -[ ] Redakteur kann Beiträge erstellen/bearbeiten, aber keine Plugins/Themes ändern
> -[ ] Redakteur hat mindestens einen Beitrag erstellt
> 
> ---
> 
> ### Inhalte
> 
> -[ ] **Mindestens 5 Seiten (+Impressum, +Datenschutz)**
> -[ ] **Mindestens 5 Beiträge (Posts)** zur Dokumentation der Diplomarbeit
> -[ ] Beiträge sind sinnvoll kategorisiert oder verschlagwortet
> -[ ] **Mindestens 3 Kommentare** (z. B. Feedback, Diskussion)
> -[ ] **Medien sinnvoll eingebunden** (Bilder, Grafiken, ggf. Videos, PDFs)
> -[ ] Texte sind verständlich, strukturiert und nicht nur Stichwörter
> 
> ---
> 
> ### Darstellung & Responsive Design
> 
> -[ ] Website ist **auf Desktop gut lesbar**
> -[ ] Website ist **auf Smartphone gut nutzbar**
> -[ ] Keine abgeschnittenen Texte oder Bilder
> -[ ] Schriftgrößen und Abstände sinnvoll gewählt
>
> ---
> 
> ### Plugins (praktischer Einsatz)
> 
> -[ ] **SEO-Plugin** (z. B. Yoast, RankMath) eingerichtet
> -[ ] **Sicherheits-Plugin** (z. B. Wordfence, iThemes Security)
> -[ ] **Cache/Performance-Plugin** (z. B. WP Super Cache, W3 Total Cache)
> -[ ] **Medienverwaltung** (z. B. Happy Files)
> -[ ] **Formular-Plugin** (z. B. Contact Form 7, WPForms)
> -[ ] **Quelltext** zur Darstellung von JS oder PHP oder ähnliches
> -[ ] Plugins sind **konfiguriert** und mit Inhalten befüllt, nicht nur installiert
> 
> ---
> 
> ### Design & Usability
> 
> -[ ] Einheitliches Farbkonzept
> -[ ] Einheitliche Schriftarten
> -[ ] Überschriften sinnvoll eingesetzt (H1–H3)
> -[ ] Gute Lesbarkeit (Kontrast!)
> -[ ] Seiten wirken aufgeräumt und professionell
> 
> ---
> 
> ### Recht & Technik (Basis)
> 
> -[ ] Impressum vorhanden
> -[ ] Datenschutzerklärung vorhanden
> -[ ] Medien sind lizenzfrei oder korrekt gekennzeichnet


> ## Bewertungsraster für die Abgabe
>
| Bereich           | Detail            | Kriterien                                                                                 | Punkte        |
|-------------------|-------------------|-------------------------------------------------------------------------------------------|---------------|
| **Design**        | Child-Theme       | Child-Theme korrekt erstellt & aktiv, Designanpassungen vorgenommen                       | **3 Punkte**  |
| **Design**        | Qualität          | Stimmiges Layout, Farben, Typografie                                                      | **3 Punkte**  |
| **Design**        | Responsive Design | Funktioniert auf Desktop & Mobil, Bilder und Inhalte werden korrekt dargestellt           | **2 Punkte**  |
| **Inhalte**       | Navigation        | Navigation & Seitenstruktur logisch und sinnvoll                                          | **2 Punkte**  |
| **Inhalte**       | Umfang            | Seiten, Posts, Kommentare und Medien vollständig                                          | **3 Punkte**  |
| **Inhalte**       | Qualität          | Klare, nachvollziehbare Beschreibung der Diplomarbeit                                     | **3 Punkte**  |
| **Erweiterungen** | Plugins           | Plugins (z. B. Formular, Quelltext) sinnvoll eingesetzt                                   | **6 Punkte**  |
| **SEO/Usability** | Suchmaschinenopt. | Meta-Texte, saubere URLs, sinnvolle Struktur                                              | **2 Punkte**  |
| **Gesamt**        |                   |                                                                                           | **24 Punkte** |






## Ressourcen
* [wordpress.org - Offizielle Seite](https://wordpress.org/){:target="_blank"}
* [developer.wordpress.org - Child Themes](https://developer.wordpress.org/themes/advanced-topics/child-themes/){:target="_blank"}
* [developer.wordpress.org - Tools and Resources](https://developer.wordpress.org/themes/basics/tools-resources/){:target="_blank"}
* [github.com - Create Block Theme Plugin](https://github.com/WordPress/create-block-theme){:target="_blank"}
* [www.smashingmagazine.com - WordPress Blog](https://www.smashingmagazine.com/category/wordpress/){:target="_blank"}
* [yoast.com - Suchmaschinenoptimierung für WordPress](https://yoast.com/wordpress-seo/){:target="_blank"}
