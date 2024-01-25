---
title: Formulare mit PHP
description: Auswerten und Verarbeiten von Formularen in PHP

category: Webentwicklung
topic: Grundlagen von PHP
subtopic: Auswerten und Verarbeiten von Formularen in PHP

layout: default

sitemap_exclude: n
---

# Formulare in PHP
Es gibt 2 Methoden, wie man Formulardaten an den Server übermitteln kann:
* per **GET**
* per **POST**


## Formularübermittlung per GET
### Übermittlung der Variablen
```php
<form action="http://localhost/willkommen.php" method="get">
```
Mit der Übermittlung der Informationen per *GET* werden die Formulardaten an die URL angehängt, bevor die Anfrage an der Server geschickt wird:<br>
`http://http://localhost/willkommen.php?name=Christian`

Hinter dem `?` am Ende der URL kommen die Variablenname/Variablenwerte-Paare. Werden mehrere Variablen angegeben, so sind diese durch ein `&` voneinander getrennt:<br>
`http://localhost/willkommen.php?name=Christian&user_id=123`

**Achtung: Die Daten, die an den Server geschickt werden, können in der URL verändert werden!**


### Das superglobale Array $_GET
[https://www.php.net/manual/de/ - php.net Manual: Superglobals](https://www.php.net/manual/de/language.variables.superglobals.php){:target="_blank"}

Das Array `$_GET` ist superglobal, das heißt es ist immer verfügbar. Bei `$_GET` handelt es sich um ein assoziatives Array von Variablen. Assoziativ bedeutet, dass auch ein `String` als Index verwendet werden kann. 

Der `name` des Input-Elements, dessen Inhalt beim Senden übergeben wird, wird als Index verwendet:
```html
<input type="text" name="nickname">
```
```php
<?php
    // Alle GET Variablen werden in einem Array  $_GET gespeichert
    echo 'Hallo ' . $_GET["nickname"] . '!';
?>
```
Obiger Quelltext erzeugt die Ausgabe
```
Hallo Christian!
```


### Überprüfen der Eingabe

Je nach Einstellung des Servers kommt es zu einem Fehler, wenn eine Variable ausgelesen wird, die nicht gesetzt wurde. Daher sollte immer eine Überprüfung mit `isset()` durchgeführt werden.

{% highlight php linenos %}
<?php 
    // Überprüfen, ob es das Element im Array gibt
    if ( isset ($_GET[ "nickname" ]) ) {
        $name = $_GET[ "nickname" ]; 
    } else {
        // Fehlerbehandlung
        // ...
    }
    
    if ( $name ) {
        echo "Hallo $name!<br><br>";
    }		
?>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">

    <label>Nickname</label><br>
    <input type="text" name="nickname" value="<?php echo $name;?>">
    <br>
    <input type="submit" value="Per GET abschicken!">
    
</form>
{% endhighlight %}
*Beispiel eines Formulars mit Überprüfung der Daten*

Die globalen Variable `$_SERVER['PHP_SELF']` enthält den Pfad zur aktuellen Datei.

## Formularübermittlung per POST
### Übermittlung der Variablen
Passwörter oder andere Informationen, die nicht ersichtlich sein sollen, dürfen nicht per GET übertragen werden, da sie sonst für alle ersichtlich sind und auch verändert werden können.

`<form action="http://localhost/login.php" method="post">`

### Das superglobale Array $_POST

Auch das Array `$_POST` ist superglobal und assoziativ. Die Daten werden *"unsichtbar"* an den Server übergeben. So kann man darauf reagieren, ohne dass jeder sieht, welche Werte und Variablen verwendet werden.

### Vereinfachtes Beispiel einer Login-Seite

{% highlight php linenos %}
<?php
    // Passwörte kommen üblicherweise aus der Datenbank 
    // und sind verschlüsselt
    $hiddenUser = "admin";
    $hiddenPassword = "12345678";

    // Benutzer und Password aus dem Array auslesen
    $password = $_POST["password"];
    $user = $_POST["user"];

    // Passwort und Benutzer überprüfen
    if (( strcmp ($user, $hiddenUser) == 0) && 
        ( strcmp ($password, $hiddenPassword) == 0 )) {
        // Login erfolgreich
        // ...
        
    } else {
        // Login-Formular anzeigen
?>
<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
    <label>Benutzer</label>
    <input type="text" name="user"><br>

    <label>Password</label>
    <input type="type" name="password"><br>
    
    <input type="submit" value="Logindaten per POST übermitteln!">
</form>
<?php
    }
?>
{% endhighlight %}

## Aufgaben

### Aufgabe 1. Kontaktformular per GET


![](img/php_contact_form.png)
*Beispielhafte Umsetzung*

Erstelle ein Kontaktformular, das die einzelnen Felder auf die Syntax hin überprüft:

* Vorname – Mindestens 3 Buchstaben
* Nachname – Mindestens 3 Buchstaben
* E-Mail Adresse
* Telefonnummer – nur Zahlen

Sind alle Felder richtig ausgefüllt, so soll statt dem Formular eine Erfolgsmeldung angezeigt werden:
![](img/php_contact_form_finished.png)


#### Funktionalität

* Bereits richtige Eingaben sollen erhalten bleiben.
* Es sollen sprechende Fehlerhinweise direkt über den jeweiligen Formularfeldern angezeigt werden.
* Erweiterung: Passe das Aussehen des Formulars per *CSS* an.


### Aufgabe 2. Loginformular per POST

Erstelle eine Loginformular, dass den Benutzernamen und das zugehörige Passwort überprüft. Nur wenn Passwort und Benutzer richtig eingegeben werden, sollen geschützte Daten angezeigt werden.

Verwende [*Passwort-Hashing*](https://www.php.net/manual/de/book.password.php){:target="_blank"} für das Überprüfen des Passworts. Experimentiere mit verschiedenen Hashing-Algorithmen.

##### Hashing
```php
echo "Franz in MD5: " . hash('md5', 'Franz');
```
ergibt
```html
Franz in MD5: 13dd8a4dcb6c8720f0d67396d4d87fab
```


##### Password Hashing

Um die Sicherheit zu erhöhen, wird beim Passwort-Hashing zusätzlich zum *Hash* ein zufälliges *Salt* (*random salt*) gespeichert. So ergibt sich mit jedem Aufruf ein anderer Hash.
```php
echo "Default-Algorithmus für Passwort-Hashing: " . PASSWORD_DEFAULT . "<br>";
echo "Franz in " . PASSWORD_DEFAULT . ": " . 
        password_hash("Franz", PASSWORD_DEFAULT)."<br>";
echo "Franz in " . PASSWORD_DEFAULT . ": " . 
        password_hash("Franz", PASSWORD_DEFAULT);
```
ergibt
```html
Default-Algorithmus für Passwort-Hashing: 2y
Franz in 2y: $2y$10$3ry1mwAwToA7uz3UXu8gUOs10fPLCmf/W3T95dudPZeyr2ZntsRcm
Franz in 2y: $2y$10$t5kArDQ66XsOS2lPDsS0n.qhewWEFsrzaQgk./elN33QEdFwNnnkO
```


Um das das gehashte Passwort zu überprüfen kann jetzt nicht mehr einfach der generierte *Hash* direkt mit dem (in der Datenbank) gespeicherten *Hash* verglichen werden.

Die Überprüfung erfolgt mit `password_verify()`:
```php
// Passwort gerenieren (wird beim Erzeugen des Passworts gemacht)
$storedHash = password_hash("Franz", PASSWORD_DEFAULT);

// Passwort überprüfen (wird beim Überprüfen des Passworts gemacht)
if ( password_verify ( "Franz", $storedHash) ) {
    echo "Passwort ist richtig: " . $storedHash;
} else {
    echo "Passwort ist falsch";
}
```



#### Funktionialität
* Bereits richtige Eingaben sollen erhalten bleiben.
* Ermögliche mehrere Benutzer. Lege die notwendigen Daten dazu in einem Array ab.
* Es sollen sprechende Fehlerhinweise direkt über den jeweiligen Formularfeldern angezeigt werden.
* Passe das Aussehen des Formulars per *CSS* an.


## Ressourcen
* [https://web-development.github.io/php/ - PHP Basics](https://web-development.github.io/php/){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: Superglobals](https://www.php.net/manual/de/language.variables.superglobals.php){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: $_GET](https://www.php.net/manual/de/reserved.variables.get.php){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: $_POST](https://www.php.net/manual/de/reserved.variables.post.php){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: String-Funktionen](https://www.php.net/manual/de/ref.strings.php){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: Password Hashing](https://www.php.net/manual/de/book.password.php){:target="_blank"}
* [https://www.php.net/manual/de/ - php.net Manual: Einfaches Formular Tutorial](https://www.php.net/manual/de/tutorial.forms.php){:target="_blank"}
