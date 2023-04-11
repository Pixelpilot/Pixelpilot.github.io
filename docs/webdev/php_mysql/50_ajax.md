---
title: AJAX
description: AJAX - Asynchrone Kommunikation mit dem Server

category: Webentwicklung
topic: Grundlagen von PHP
subtopic: AJAX - Asynchrone Kommunikation mit dem Server

layout: default

sitemap_exclude: n
---

# AJAX - Asynchrone Kommunikation mit dem Server

AJAX steht für "Asynchronous JavaScript and XML" und bezieht sich auf die Verwendung von JavaScript, um asynchrone HTTP-Anfragen an einen Webserver zu senden und darauf basierende Aktionen auszuführen, ohne dabei die gesamte Webseite neu laden zu müssen.

Mit PHP und AJAX können so dynamische Webseiten erstellt werden, die Benutzererfahrung verbessert und die Ladezeiten verringert werden.

Im Folgenden finden Sie ein Beispiel für die Verwendung von AJAX mit PHP und JavaScript:

## 1. Erstellen die Antwort der AJAX Anfrage

```php
// data.php

// Verbindung zur Datenbank herstellen
$conn = mysqli_connect($host, $username, $password, $dbname);

// Benutzer abrufen
$sql = "SELECT * FROM users;
$result = mysqli_query($conn, $sql);

// Array mit Daten erstellen
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}

// Array als JSON-String zurückgeben
echo json_encode($data);
```

## 2. JavaScript-Skript mit AJAX-Anfrage und Verarbeitung
```html
<!-- index.html -->

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <title>AJAX JSON Beispiel</title>
</head>
<body>
    <ul id="users-list"></ul>

    <script>
    // XMLHttpRequest-Objekt erstellen
    var xhr = new XMLHttpRequest();

    // Anfrage senden
    xhr.open('GET', 'data.php', true);
    xhr.send();

    // Antwort verarbeiten
    xhr.onreadystatechange = function() {
        
        // alles OK?
        if (xhr.readyState == 4 && xhr.status == 200) {
        
            var data = JSON.parse(xhr.responseText);
            var users = data.users;
            var studentsList = document.getElementById('users-list');

            for (var i = 0; i < students.length; i++) {
                var user = users[i];
                var listItem = document.createElement('li');
                listItem.innerHTML = user.name + ' (' + user.phone + ')';
                studentsList.appendChild(listItem);
            }
        }
    };
    </script>
</body>
</html>
```
## Ressourcen
* [w3schools.com - PHP - AJAX and PHP](https://www.w3schools.com/php/php_ajax_php.asp){:target="_blank"}