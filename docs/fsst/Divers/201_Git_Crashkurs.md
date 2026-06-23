---
title: Git Crashkurs in 60 Minuten
description: Die wichtigsten Git-Grundlagen für eine 4. Klasse HTL

category: Fachspezifische Softwaretechnik
topic: Divers

type: assignment
layout: default

sitemap_exclude: n
---

<!-- markdownlint-disable MD022 MD009 MD012 MD028 MD036 MD040 -->

## Git Crashkurs in 60 Minuten

GIT ist ein verteiltes Versionskontrollsystem, das von Einzelpersonen und Teams verwendet wird, um die Entwicklung von Softwareprojekten zu verwalten. Es hilft bei der Nachverfolgung von Änderungen, erleichtert die Zusammenarbeit und ermöglicht es, zu früheren Versionen eines Projekts zurückzukehren.

**Arbeitsablauf mit Git**

> ```
> ┌─────────────────────┐
> │  Working Directory  │  (Lokale Dateien/Quellcode)
> └─────────┬───────────┘
>           │
>           │ git add <datei>  (Änderungen vormerken)
>           ▼
> ┌────────────────────┐
> │    Staging Area    │
> └─────────┬──────────┘
>           │
>           │ git commit -m "Nachricht"  (Änderungen festschreiben)
>           ▼
> ┌────────────────────┐
> │    Lokales Repo    │
> └─────────┬──────────┘
>           │
>           │ git push origin <branch>   (Änderungen hochladen)
>           ▼
> ┌─────────────────────┐
> │  Remote Repository  │   (z.B. GitHub)
> └─────────────────────┘
> ```

> ```
> ┌────────────────────┐
> │    Lokales Repo    │
> └────────────────────┘
>           ▲
>           │ git fetch   (Änderungen holen, ohne den aktuellen Stand zu übernehmen)
>           │
> ┌─────────┴───────────┐
> │  Remote Repository  │   (z.B. GitHub)
> └─────────────────────┘
> ```

> ```
> ┌────────────────────┐
> │    Lokales Repo    │
> └────────────────────┘
>           ▲
>           │ git pull   (Änderungen holen und sie direkt übernehmen)
>           │
> ┌─────────┴───────────┐
> │  Remote Repository  │   (z.B. GitHub)
> └─────────────────────┘
> ```


### 1. Git installieren

#### Kurze Theorie: Git installieren

Git ist das Werkzeug für Versionskontrolle. Es speichert Änderungen an Dateien und hilft, gemeinsam an Projekten zu arbeiten.

Auf macOS:

```bash
brew install git
```

Alternative:

- Git von [git-scm.com](https://git-scm.com) herunterladen und installieren.

Prüfen, ob Git installiert ist:

```bash
git --version
```

> #### Übung 1: Git auf dem Rechner prüfen
> {: .assignment }
>
> Öffne das Terminal und prüfe, ob Git installiert ist. Wenn nicht, installiere Git mit dem passenden Weg für dein System.
>
> **Gewünschtes Ergebnis:**
>
> - Der Befehl `git --version` zeigt eine Versionsnummer an.
> - Alle im Kurs können Git im Terminal starten.

### 2. Lokales Repository erzeugen

#### Kurze Theorie: Lokales Repository

Ein lokales Repository ist ein Ordner, den Git verwaltet. Dort speichert Git Änderungen in mehreren Schritten.

```bash
cd /pfad/zu/deinem/projekt
git init
git status
```

- `git init` macht aus einem Ordner ein Git-Repository.
- `git status` zeigt, was sich geändert hat.

> #### Übung 2: Erstes lokales Repo anlegen
> {: .assignment }
>
> Erstelle einen neuen Ordner für ein Mini-Projekt und mache daraus ein Git-Repository. Lege danach eine  einfache Textdatei an.
>
> **Gewünschtes Ergebnis:**
>
> - Der Ordner enthält ein lokales Git-Repository.
> - `git status` zeigt die neue Datei als ungetrackt an.

### 3. Remote Repository erzeugen und verbinden

#### Kurze Theorie: Remote Repository

Das Remote-Repository ist die Online-Version des Projekts, zum Beispiel auf GitHub oder GitLab. Dort wird der gemeinsame Stand gespeichert.

Auf der Plattform:

- Neues Repository anlegen
- Namen vergeben
- Wenn möglich leer erstellen, ohne README

Im Terminal verbinden:

```bash
git remote add origin <repo-url>
git remote -v
```

- `origin` ist der Standardname für das Remote.
- Die URL kommt von der Git-Plattform.

> #### Übung 3: Lokales Repo mit Remote verbinden
> {: .assignment }
> 
> Erstelle auf einer Git-Plattform ein leeres Repository und verbinde dein lokales Projekt damit.
> 
> **Gewünschtes Ergebnis:**
> 
> - `git remote -v` zeigt die korrekte URL.
> - Das lokale Projekt kennt sein Remote-Repository.

### 4. Änderungen vornehmen und pushen

#### Kurze Theorie: Änderungen speichern und pushen

Git arbeitet meist in drei Schritten:

```bash
git add .
git commit -m "erste version"
git push -u origin main
```

- `git add .` nimmt Änderungen auf.
- `git commit` speichert einen Zwischenstand.
- `git push` lädt den Stand hoch.

Falls Name und E-Mail noch nicht gesetzt sind:

```bash
git config --global user.name "Max Muster"
git config --global user.email "max.muster@example.com"
```

> #### Übung 4: Erste Änderung hochladen
> {: .assignment }
> 
> Ändere deine Textdatei, speichere sie, füge sie zu Git hinzu, erstelle einen Commit und lade ihn auf das Remote hoch.
> 
> **Gewünschtes Ergebnis:**
> 
> - Die Änderung ist mit einem Commit gespeichert.
> - Das Remote-Repository zeigt den neuen Stand.

### 5. In 2er-Teams zusammenarbeiten

#### Kurze Theorie: Zusammenarbeit zu zweit

Im Team arbeiten zwei Personen am selben Repository. Wichtig sind klare Absprachen und regelmäßiges Holen der Änderungen.

Typischer Ablauf:

```bash
git pull
git add .
git commit -m "beschreibung"
git push
```

Einfache Regeln für zu zweit:

- Vor dem Arbeiten immer `git pull` ausführen.
- Nicht gleichzeitig an derselben Zeile arbeiten.
- Kleine Änderungen machen und sofort hochladen.

> #### Übung 5: Zu zweit an einem Projekt arbeiten
> {: .assignment }
> 
> Bildet Paare. Eine Person macht eine Änderung und pusht sie. Danach holt die zweite Person die Änderung mit `git pull`, macht eine weitere Änderung und pusht wieder.
> 
> **Gewünschtes Ergebnis:**
> 
> - Beide können die Änderungen des Partners sehen.
> - Das Projekt bleibt synchron.

### 6. Branches erstellen

#### Kurze Theorie: Branches

Branches sind eigene Arbeitslinien. Sie helfen, neue Ideen getrennt vom Hauptstand zu testen.

```bash
git branch
git branch feature-xyz
git switch feature-xyz
```

Oder in einem Schritt:

```bash
git switch -c feature-xyz
```

- `git branch` zeigt vorhandene Branches.
- `git switch -c` erstellt einen neuen Branch und wechselt sofort dorthin.

Zurück zum Hauptbranch:

```bash
git switch main
```

> #### Übung 6: Einen neuen Branch erstellen
> {: .assignment }
> 
> Erstelle einen neuen Branch mit einem passenden Namen, wechsle darauf und mache dort eine kleine Änderung.
> 
> **Gewünschtes Ergebnis:**
> 
> - Ein neuer Branch existiert.
> - Die Änderung wurde nicht direkt auf `main`, sondern im Branch gemacht.

### Kurzüberblick

Wichtige Befehle aus diesem Kurs:

```bash
git init
git status
git remote add origin <repo-url>
git add .
git commit -m "nachricht"
git push
git pull
git branch
git switch -c <branch-name>
```
