---
title: Charts & Graphics – Mermaid und Plotly
description: Kompakte Beispiele mit Mermaid und Plotly (JSON)

category: Divers
topic: Charts und Graphics

layout: default

sitemap_exclude: n
---

# {{page.title}}

Dieses Dokument zeigt Beispiele mit `Mermaid` und `Plotly`.

## Mermaid – Diagrammbeispiele

Dokumentation und Beispiele unter [mermaid.ai](https://mermaid.ai/).


### Flowchart

> #### MCV Framework Simple
> <div class="mermaid">
> ---
> title: MVC-Framework Simple
> ---
> flowchart TD
>   User([User])
>   Controller[Controller]
>   Model[Model]
>   View[View]
>   
>   User -- "Request" --> Controller
>   Controller -- "Request Data" --> Model
>   Model -- "Response Data" --> Controller
>   Controller -- "Send Data" --> View
>   View -- "Response" --> User
> </div>
> <sub>MVC Flowchart</sub>

> #### MCV Framework
> <div class="mermaid">
> flowchart TD
>     U([User / Browser]) -.->|1. HTTP Request| C(Controller)
>     C -->|2. Validiert Input & steuert Ablauf| M(Model)
>     M -.->|3. Lädt Daten| D[(Datenbank)]
>     D -.->|4. Speichert Daten| M
>     M -->|5. Business-Daten| C
>     C -->|6. Wählt View + übergibt Daten| V(View)
>     V -.->|7. HTML/JSON Response| U
> 
>     classDef userClass fill:#5499C7,stroke:none, color:white;
>     class U userClass;
>     classDef dbClass fill:#ffffff,stroke:#999999, color:#999999;
>     class D dbClass;
> </div>
> <sub>MVC Flowchart mit Bezeichnungen</sub>

### Sequence Diagram

> #### MVC-Ablaufdiagramm
> <div class="mermaid"> 
> sequenceDiagram
>     autonumber
>     actor U as User
>     participant C as Controller
>     participant M as Model
>     participant D as DB
>     participant V as View
> 
>     U->>C: Request
>     C->>M: Aktion auslösen
>     M->>D: Daten lesen/schreiben
>     D-->>M: Ergebnis
>     M-->>C: Daten
>     C->>V: Rendern
>     V-->>U: Response
> </div>
> <sub>MVC-Ablaufdiagramm</sub>

### ER-Modelle

> #### ER-Modell für einen einfachen Webshop
> <div class="mermaid">
> erDiagram
>     KUNDE ||--o{ BESTELLUNG : gibt_auf
>     KUNDE ||--o{ ADRESSE : hat
>     BESTELLUNG ||--|{ BESTELLPOSITION : enthaelt
>     PRODUKT ||--o{ BESTELLPOSITION : wird_bestellt
>     KATEGORIE ||--o{ PRODUKT : gruppiert
>     BESTELLUNG ||--o| ZAHLUNG : wird_bezahlt_durch
> 
>     KUNDE {
>         int kunde_id PK
>         string vorname
>         string nachname
>         string email
>         datetime erstellt_am
>     }
> 
>     ADRESSE {
>         int adresse_id PK
>         int kunde_id FK
>         string strasse
>         string plz
>         string ort
>         string land
>     }
> 
>     BESTELLUNG {
>         int bestellung_id PK
>         int kunde_id FK
>         datetime bestelldatum
>         string status
>         decimal gesamtbetrag
>     }
> 
>     BESTELLPOSITION {
>         int positions_id PK
>         int bestellung_id FK
>         int produkt_id FK
>         int menge
>         decimal einzelpreis
>     }
> 
>     PRODUKT {
>         int produkt_id PK
>         int kategorie_id FK
>         string name
>         decimal preis
>         int lagerbestand
>     }
> 
>     KATEGORIE {
>         int kategorie_id PK
>         string name
>         string beschreibung
>     }
> 
>     ZAHLUNG {
>         int zahlung_id PK
>         int bestellung_id FK
>         string zahlart
>         decimal betrag
>         datetime bezahlt_am
>     }
> </div>

### Klassendiagramm

> #### Klassendiagramm Bankkonto
> <div class="mermaid">
> classDiagram
>   class BankAccount{
>     +String owner
>     +BigDecimal balance
>     +deposit(amount) bool
>     +withdrawal(amount) int
> }
> </div>

> #### Klassendiagramm Vererbung
> <div class="mermaid">
> classDiagram
>   class Animal
>   Vehicle <|-- Car
> </div>

> #### Klassendiagramm mit Generics
> <div class="mermaid">
> classDiagram
> class Square~Shape~{
>     int id
>     List~int~ position
>     setPoints(List~int~ points)
>     getPoints() List~int~
> }
> 
> Square : -List~string~ messages
> Square : + setMessages(List~string~ messages)
> Square : +getMessages() List~string~
> Square : +getDistanceMatrix() List~List~int~~
> </div>

> #### Klassendiagramm mit Relations
> <div class="mermaid">
> classDiagram
> classA <|-- classB : implements
> classC *-- classD : composition
> classE o-- classF : aggregation
> </div>

## Plotly: Data Apps for Production

Dokumentation und Beispiele unter [plotly.com](https://plotly.com/).

### Linienchart

<script type="application/json" data-plotly data-plotly-max-width="820px" data-plotly-height="420px">
{
    "data": [
        {
            "x": ["W1", "W2", "W3", "W4", "W5", "W6"],
            "y": [45, 52, 61, 68, 74, 83],
            "mode": "lines+markers",
            "type": "scatter",
            "name": "Fortschritt"
        }
    ],
    "layout": {
        "title": "Lernfortschritt pro Woche",
        "xaxis": { "title": "Woche" },
        "yaxis": { "title": "Punkte" }
    },
    "config": {
        "responsive": true
    }
}
</script>

### Kreisdiagramm

<script type="application/json" data-plotly data-plotly-max-width="820px" data-plotly-height="420px">
{
    "data": [
        {
            "labels": ["Planung", "Implementierung", "Testing"],
            "values": [25, 55, 20],
            "type": "pie",
            "textinfo": "label+percent",
            "hoverinfo": "label+value+percent"
        }
    ],
    "layout": {
        "title": "Aufwand nach Phase"
    },
    "config": {
        "responsive": true
    }
}
</script>

## Weitere Bibliotheken (nur Links)

- [Cytoscape.js](https://js.cytoscape.org/) – spezialisiert auf Netzwerk-/Graphdarstellungen mit sehr guter Layout- und Interaktionskontrolle.
- [AntV G6](https://g6.antv.antgroup.com/) – moderne Graph-Engine für komplexe Knoten-Kanten-Diagramme mit vielen Anpassungsmöglichkeiten.
- [Apache ECharts](https://echarts.apache.org/) – leistungsstarke Library für Datenvisualisierung (Line, Bar, Heatmap, Graph u. a.).
- [Vega-Lite](https://vega.github.io/vega-lite/) – deklarative JSON-Sprache für reproduzierbare, analytische Charts.
