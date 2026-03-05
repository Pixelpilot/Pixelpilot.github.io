---
title: Diagramm-Bibliotheken im Vergleich
description: Vergleich von Mermaid, Plotly, Vega-Lite, Cytoscape, AntV G6 und ECharts

category: Divers
topic: Diagramm-Bibliotheken

layout: default

sitemap_exclude: n
---


# {{page.title}}


## Ziel dieses Dokuments

In diesem Dokument steht der **Vergleich unterschiedlicher Diagramm-Bibliotheken** im Vordergrund.

Das fachliche Beispiel (MVC + verkettete Liste) dient nur als gemeinsamer Testfall, damit Unterschiede bei Layout, Syntax und Interaktivität sichtbar werden.

Verglichen werden insbesondere:

- Ausdrucksstärke der Syntax
- Kontrolle über Positionierung/Layout
- Interaktivität (Zoom, Hover, Drag)
- Aufwand für Einbindung und Wartung
- Eignung für statische Doku vs. App-UI


## Demo-Szenario (inhaltlich bewusst einfach)

> <div class="mermaid" style="text-align:center">
> ---
> title: MVC-Framework
> ---
> flowchart TD
>     User([User])
>     Controller[Controller]
>     Model[Model]
>     View[View]
> 
>     User -- "Request" --> Controller
>     Controller -- "Request Data" --> Model
>     Model -- "Response Data" --> Controller
>     Controller -- "Send Data" --> View
>     View -- "Response" --> User
> 
>     %% Styling to better match the visual positions in the image
>     linkStyle 0 stroke-width:1px,fill:none,stroke:black;
>     linkStyle 1 stroke-width:1px,fill:none,stroke:black;
>     linkStyle 2 stroke-width:1px,fill:none,stroke:black;
>     linkStyle 3 stroke-width:1px,fill:none,stroke:black;
>     linkStyle 4 stroke-width:1px,fill:none,stroke:black;
> </div>

`MVC` steht für `Model`, `View`, `Controller` und ist hier nur das gemeinsame Beispielszenario für die Bibliotheksvergleiche.

- `Model`: verwaltet Daten und Geschäftslogik.
- `View`: stellt Daten für Benutzer:innen dar.
- `Controller`: verarbeitet Requests und koordiniert Model und View.

Die inhaltliche Tiefe ist absichtlich reduziert, damit der Fokus auf der Visualisierung bleibt.


## Demo-Kontext kurz erklärt

### Model

Das Model enthält die Fachlogik der Anwendung, z. B.:

- Regeln (Validierung, Berechnungen, Zustände)
- Zugriff auf Datenbank oder andere Datenquellen
- Datenobjekte (z. B. `User`, `Produkt`, `Bestellung`)

Wichtig: Das Model kennt keine Benutzeroberfläche. Es arbeitet daten- und regelorientiert.

### View

Die View zeigt Informationen an und sorgt für eine verständliche Ausgabe:

- HTML-Seiten im Web
- JSON-Antworten für APIs
- Formulare, Tabellen, Statusmeldungen

Die View sollte möglichst wenig Logik enthalten. Fachregeln gehören ins Model.

### Controller

Der Controller ist die Schnittstelle zwischen Benutzeranfrage und Anwendung:

- nimmt HTTP-Requests entgegen
- validiert Eingaben (oder stößt Validierung an)
- ruft passende Model-Methoden auf
- wählt die richtige View und übergibt Daten

Der Controller trifft Ablaufentscheidungen, speichert aber keine Fachlogik dauerhaft.


## Erklärung zum Flowchart (Strukturdiagramm)

> <div class="mermaid">
> ---
> Title: MVC-Framework
> ---
> flowchart TD
>     U([🖥️ User / Browser]) -->|1. HTTP Request| C(Controller)
>     C -->|Validiert Input & steuert Ablauf| M(Model)
>     M -->|Lädt/Speichert Daten| D[(Datenbank)]
>     D --> M
>     M -->|Business-Daten| C
>     C -->|Wählt View + übergibt Daten| V(View)
>     V -->|HTML/JSON Response| U
> 
>     classDef userClass fill:#5499C7,stroke:none;
>     class U userClass;
>     classDef dbClass fill:#f0f0f0,stroke:#999999;
>     class D dbClass;
> </div>

<div class="mermaid">
flowchart TD
    U([User / Browser]) -->|&nbsp;1.&nbsp;| C(Controller)
    C -->|&nbsp;2.&nbsp;| M(Model)
    M -->|&nbsp;3.&nbsp;| D[(Datenbank)]
    D -->|&nbsp;4.&nbsp;| M
    M -->|&nbsp;5.&nbsp;| C
    C -->|&nbsp;6.&nbsp;| V(View)
    V -->|&nbsp;7.&nbsp;| U

    classDef userClass fill:#5499C7,stroke:none;
    class U userClass;
</div>

Das Flowchart zeigt die statische Sicht auf MVC:

1. Der `User/Browser` sendet eine Anfrage an den `Controller`.
2. Der `Controller` verwendet das `Model`, um Daten zu lesen oder zu ändern.
3. Das `Model` kommuniziert mit der `Datenbank`.
4. Das Ergebnis geht zurück zum `Controller`.
5. Der `Controller` übergibt Daten an die `View`.
6. Die `View` erzeugt die Antwort für den Browser.

Merksatz: **Controller steuert, Model rechnet, View zeigt.**


## Erklärung zum Sequence Diagram (Ablaufdiagramm)

<div class="mermaid">
sequenceDiagram
    autonumber
    actor U as User/Browser
    participant C as Controller
    participant M as Model
    participant D as Datenbank
    participant V as View

    U->>C: HTTP Request
    C->>M: Eingaben validieren / Aktion auslösen
    M->>D: Daten lesen/schreiben
    D-->>M: Ergebnisdaten
    M-->>C: Business-Daten
    C->>V: View + Daten rendern
    V-->>U: HTTP Response (HTML/JSON)
</div>

Das Sequence Diagram zeigt die dynamische Sicht, also die zeitliche Reihenfolge derselben Schritte.

- Jeder Pfeil ist eine konkrete Nachricht zwischen Komponenten.
- `autonumber` nummeriert die Schritte automatisch.
- Die Rückgaben (`-->>`) zeigen, wann Ergebnisse zurückkommen.

Für Schüler:innen wichtig: Dieses Diagramm hilft beim Debuggen, weil man genau sieht, **wer wann mit wem kommuniziert**.


## Warum ein gemeinsames Demo-Szenario sinnvoll ist

- Alle Bibliotheken visualisieren denselben Ablauf und sind dadurch direkt vergleichbar.
- Unterschiede in Lesbarkeit, Layoutkontrolle und Setup-Aufwand werden klarer.
- Entscheidungen für künftige Projekte lassen sich auf Basis desselben Beispiels treffen.


## Typische Fehler beim Bibliothekenvergleich

- Unterschiedliche Beispieldaten pro Library verwenden (kein fairer Vergleich)
- Ein Tool mit Auto-Layout mit einem manuell platzierten Layout vergleichen
- Performance ohne gleiche Datenmenge vergleichen
- Setup-Aufwand (CDN, Bundle, Rendering) in der Bewertung ignorieren

Praxisregel: **Gleicher Use Case, gleiche Daten, gleiche Zielgröße** ergibt den fairsten Vergleich.


## Hinweis zum inhaltlichen Scope

Die folgenden Inhalte sind **keine vollständige MVC-Lerneinheit**, sondern technische Beispielvisualisierungen für den Vergleich der Bibliotheken.


## Zusätzliches Diagramm: Knoten in eine verkettete Liste einfügen

<div class="mermaid">
flowchart TB
    subgraph Ausgang
        A1[A] --> B1[B]
        B1 --> C1[C]
        C1 --> N1[NULL]
    end

    subgraph TB Schritt_2
        A2[A] --> B2[B]
        B2 -.next.-> X2[X]
        X2 -.next.-> C2[C]
        C2 --> N2[NULL]
    end

    subgraph Nachher
        A3[A] --> B3[B]
        B3 --> X3[X]
        X3 --> C3[C]
        C3 --> N3[NULL]
    end
</div>

Kurz erklärt:

1. Neuer Knoten `X` wird erstellt.
2. `X.next` zeigt auf den bisherigen Nachfolger von `B` (also `C`).
3. `B.next` wird auf `X` umgebogen.

Wichtig: Genau diese Reihenfolge verhindert, dass der Rest der Liste verloren geht.


## Zusätzliches Diagramm: ER-Modell fuer einen einfachen Webshop

<div class="mermaid">
erDiagram
    KUNDE ||--o{ BESTELLUNG : gibt_auf
    KUNDE ||--o{ ADRESSE : hat
    BESTELLUNG ||--|{ BESTELLPOSITION : enthaelt
    PRODUKT ||--o{ BESTELLPOSITION : wird_bestellt
    KATEGORIE ||--o{ PRODUKT : gruppiert
    BESTELLUNG ||--o| ZAHLUNG : wird_bezahlt_durch

    KUNDE {
        int kunde_id PK
        string vorname
        string nachname
        string email
        datetime erstellt_am
    }

    ADRESSE {
        int adresse_id PK
        int kunde_id FK
        string strasse
        string plz
        string ort
        string land
    }

    BESTELLUNG {
        int bestellung_id PK
        int kunde_id FK
        datetime bestelldatum
        string status
        decimal gesamtbetrag
    }

    BESTELLPOSITION {
        int positions_id PK
        int bestellung_id FK
        int produkt_id FK
        int menge
        decimal einzelpreis
    }

    PRODUKT {
        int produkt_id PK
        int kategorie_id FK
        string name
        decimal preis
        int lagerbestand
    }

    KATEGORIE {
        int kategorie_id PK
        string name
        string beschreibung
    }

    ZAHLUNG {
        int zahlung_id PK
        int bestellung_id FK
        string zahlart
        decimal betrag
        datetime bezahlt_am
    }
</div>

Das ER-Diagramm bildet den Kern eines einfachen Shop-Backends ab:

- Ein `Kunde` kann mehrere `Bestellungen` und `Adressen` haben.
- Eine `Bestellung` besteht aus mehreren `Bestellpositionen`.
- Jede `Bestellposition` verweist auf genau ein `Produkt`.
- Produkte sind in `Kategorien` eingeordnet.
- Eine `Bestellung` kann optional eine `Zahlung` haben.


## Interaktive Grafik mit Plotly.js

Neben Mermaid kann auch `Plotly.js` eingebunden werden. Hier erfolgt die Beschreibung des Diagramms als `JSON`.

<script type="application/json" data-plotly data-plotly-max-width="820px" data-plotly-height="420px">
{
    "data": [
        {
            "x": [1, 2, 3, 4, 5, 6],
            "y": [45, 52, 61, 68, 74, 83],
            "mode": "lines+markers",
            "type": "scatter",
            "name": "Fortschritt",
            "line": { "width": 3 }
        }
    ],
    "layout": {
        "title": "Beispiel: Lernfortschritt pro Woche",
        "xaxis": { "title": "Woche" },
        "yaxis": { "title": "Punkte" },
        "margin": { "l": 60, "r": 20, "t": 60, "b": 60 }
    },
    "config": {
        "responsive": true
    }
}
</script>


## Alternative mit Vega-Lite (JSON)

Vega-Lite ist deklarativ: Das Diagramm wird vollständig als JSON-Spec beschrieben.

<div id="vegalite-beispiel" style="width: 100%; max-width: 820px; border: 1px solid #ddd; border-radius: 8px; padding: 8px;"></div>

<script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script>

<script type="application/json" data-vegalite-target="vegalite-beispiel">
{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Beispiel: Lernfortschritt mit Vega-Lite",
    "width": 760,
    "height": 320,
    "data": {
        "values": [
            { "Woche": "W1", "Punkte": 45 },
            { "Woche": "W2", "Punkte": 52 },
            { "Woche": "W3", "Punkte": 61 },
            { "Woche": "W4", "Punkte": 68 },
            { "Woche": "W5", "Punkte": 74 },
            { "Woche": "W6", "Punkte": 83 }
        ]
    },
    "layer": [
        {
            "mark": { "type": "line", "point": true, "strokeWidth": 3 },
            "encoding": {
                "x": { "field": "Woche", "type": "ordinal", "title": "Woche" },
                "y": { "field": "Punkte", "type": "quantitative", "title": "Punkte" },
                "tooltip": [
                    { "field": "Woche", "type": "ordinal" },
                    { "field": "Punkte", "type": "quantitative" }
                ]
            }
        }
    ],
    "title": "Vega-Lite: Lernfortschritt pro Woche"
}
</script>

<script>
    document.querySelectorAll('script[type="application/json"][data-vegalite-target]').forEach((configScript) => {
        const targetId = configScript.dataset.vegaliteTarget;
        const container = document.getElementById(targetId);

        if (!container) {
            return;
        }

        try {
            const spec = JSON.parse(configScript.textContent);
            vegaEmbed(`#${targetId}`, spec, { actions: false, renderer: 'svg' });
        } catch (error) {
            console.error('Ungültige Vega-Lite-JSON-Konfiguration für', targetId, error);
        }
    });
</script>


## Alternative mit mehr Layout-Kontrolle: Cytoscape.js

Bei `Cytoscape.js` kannst du Positionen, Knotenstile und Kanten sehr gezielt steuern.

<div id="cy-mvc" style="width: 100%; max-width: 980px; height: 460px; border: 1px solid #ddd; border-radius: 8px;"></div>

<script src="https://unpkg.com/cytoscape@3.30.2/dist/cytoscape.min.js"></script>
<script type="application/json" data-cytoscape-target="cy-mvc">
{
    "elements": [
        { "data": { "id": "user", "label": "User / Browser" }, "position": { "x": 90, "y": 230 } },
        { "data": { "id": "controller", "label": "Controller" }, "position": { "x": 330, "y": 230 } },
        { "data": { "id": "model", "label": "Model" }, "position": { "x": 570, "y": 140 } },
        { "data": { "id": "view", "label": "View" }, "position": { "x": 570, "y": 320 } },
        { "data": { "id": "db", "label": "Datenbank" }, "position": { "x": 820, "y": 140 } },
        { "data": { "id": "e1", "source": "user", "target": "controller", "label": "HTTP Request" } },
        { "data": { "id": "e2", "source": "controller", "target": "model", "label": "Business-Logik" } },
        { "data": { "id": "e3", "source": "model", "target": "db", "label": "Read/Write" } },
        { "data": { "id": "e4", "source": "db", "target": "model", "label": "Daten" } },
        { "data": { "id": "e5", "source": "controller", "target": "view", "label": "Render mit Daten" } },
        { "data": { "id": "e6", "source": "view", "target": "user", "label": "HTTP Response" } }
    ],
    "style": [
        {
            "selector": "node",
            "style": {
                "background-color": "#157878",
                "label": "data(label)",
                "color": "#ffffff",
                "text-wrap": "wrap",
                "text-max-width": 130,
                "text-valign": "center",
                "text-halign": "center",
                "font-size": 12,
                "width": 130,
                "height": 52,
                "shape": "round-rectangle"
            }
        },
        {
            "selector": "edge",
            "style": {
                "width": 2,
                "line-color": "#6c757d",
                "target-arrow-color": "#6c757d",
                "target-arrow-shape": "triangle",
                "curve-style": "bezier",
                "label": "data(label)",
                "font-size": 10,
                "text-background-color": "#ffffff",
                "text-background-opacity": 0.9,
                "text-background-padding": 2,
                "text-rotation": "autorotate"
            }
        }
    ],
    "layout": { "name": "preset" },
    "userZoomingEnabled": true,
    "userPanningEnabled": true,
    "boxSelectionEnabled": false
}
</script>

### Vergleich: Cytoscape.js mit Auto-Layout

Hier wird dieselbe Struktur mit automatischem Layout (`breadthfirst`) erzeugt.

<div id="cy-mvc-auto" style="width: 100%; max-width: 980px; height: 460px; border: 1px solid #ddd; border-radius: 8px;"></div>

<script type="application/json" data-cytoscape-target="cy-mvc-auto">
{
    "elements": [
        { "data": { "id": "user", "label": "User / Browser" } },
        { "data": { "id": "controller", "label": "Controller" } },
        { "data": { "id": "model", "label": "Model" } },
        { "data": { "id": "view", "label": "View" } },
        { "data": { "id": "db", "label": "Datenbank" } },
        { "data": { "id": "e1", "source": "user", "target": "controller", "label": "HTTP Request" } },
        { "data": { "id": "e2", "source": "controller", "target": "model", "label": "Business-Logik" } },
        { "data": { "id": "e3", "source": "model", "target": "db", "label": "Read/Write" } },
        { "data": { "id": "e4", "source": "db", "target": "model", "label": "Daten" } },
        { "data": { "id": "e5", "source": "controller", "target": "view", "label": "Render mit Daten" } },
        { "data": { "id": "e6", "source": "view", "target": "user", "label": "HTTP Response" } }
    ],
    "style": [
        {
            "selector": "node",
            "style": {
                "background-color": "#157878",
                "label": "data(label)",
                "color": "#ffffff",
                "text-wrap": "wrap",
                "text-max-width": 130,
                "text-valign": "center",
                "text-halign": "center",
                "font-size": 12,
                "width": 130,
                "height": 52,
                "shape": "round-rectangle"
            }
        },
        {
            "selector": "edge",
            "style": {
                "width": 2,
                "line-color": "#6c757d",
                "target-arrow-color": "#6c757d",
                "target-arrow-shape": "triangle",
                "curve-style": "bezier",
                "label": "data(label)",
                "font-size": 10,
                "text-background-color": "#ffffff",
                "text-background-opacity": 0.9,
                "text-background-padding": 2,
                "text-rotation": "autorotate"
            }
        }
    ],
    "layout": {
        "name": "breadthfirst",
        "directed": true,
        "padding": 30,
        "spacingFactor": 1.2
    },
    "userZoomingEnabled": true,
    "userPanningEnabled": true,
    "boxSelectionEnabled": false
}
</script>

<script>
    document.querySelectorAll('script[type="application/json"][data-cytoscape-target]').forEach((configScript) => {
        const targetId = configScript.dataset.cytoscapeTarget;
        const container = document.getElementById(targetId);

        if (!container) {
            return;
        }

        try {
            const config = JSON.parse(configScript.textContent);
            const cy = cytoscape({
                container,
                ...config
            });
            cy.fit(undefined, 20);
        } catch (error) {
            console.error('Ungültige Cytoscape-JSON-Konfiguration für', targetId, error);
        }
    });
</script>


## Alternative mit AntV G6

`AntV G6` eignet sich gut, wenn du Nodes, Kanten, Labels und Interaktion sehr fein steuern willst.

<div id="g6-mvc" style="width: 100%; max-width: 980px; height: 460px; border: 1px solid #ddd; border-radius: 8px;"></div>

<script src="https://unpkg.com/@antv/g6@4.8.24/dist/g6.min.js"></script>
<script type="application/json" data-g6-target="g6-mvc">
{
    "data": {
        "nodes": [
            { "id": "user", "label": "User / Browser", "x": 80, "y": 220 },
            { "id": "controller", "label": "Controller", "x": 300, "y": 220 },
            { "id": "model", "label": "Model", "x": 520, "y": 130 },
            { "id": "view", "label": "View", "x": 520, "y": 310 },
            { "id": "db", "label": "Datenbank", "x": 780, "y": 130 }
        ],
        "edges": [
            { "source": "user", "target": "controller", "label": "HTTP Request" },
            { "source": "controller", "target": "model", "label": "Business-Logik" },
            { "source": "model", "target": "db", "label": "Read/Write" },
            { "source": "db", "target": "model", "label": "Daten" },
            { "source": "controller", "target": "view", "label": "Render mit Daten" },
            { "source": "view", "target": "user", "label": "HTTP Response" }
        ]
    },
    "options": {
        "modes": {
            "default": ["drag-canvas", "zoom-canvas", "drag-node"]
        },
        "defaultNode": {
            "type": "rect",
            "size": [130, 46],
            "style": {
                "fill": "#157878",
                "stroke": "#157878",
                "radius": 6
            },
            "labelCfg": {
                "style": {
                    "fill": "#ffffff",
                    "fontSize": 12
                }
            }
        },
        "defaultEdge": {
            "type": "quadratic",
            "style": {
                "stroke": "#6c757d",
                "endArrow": true
            },
            "labelCfg": {
                "autoRotate": true,
                "style": {
                    "fill": "#555555",
                    "fontSize": 10,
                    "background": {
                        "fill": "#ffffff",
                        "padding": [2, 3, 2, 3],
                        "radius": 2
                    }
                }
            }
        },
        "nodeStateStyles": {
            "hover": {
                "lineWidth": 2,
                "stroke": "#0f5d62"
            }
        }
    }
}
</script>

<script>
    const g6Instances = [];
    document.querySelectorAll('script[type="application/json"][data-g6-target]').forEach((configScript) => {
        const targetId = configScript.dataset.g6Target;
        const container = document.getElementById(targetId);

        if (!container) {
            return;
        }

        try {
            const config = JSON.parse(configScript.textContent);
            const graph = new G6.Graph({
                container: targetId,
                width: container.clientWidth,
                height: container.clientHeight,
                ...(config.options || {})
            });

            graph.data(config.data || { nodes: [], edges: [] });
            graph.render();
            graph.on('node:mouseenter', (event) => graph.setItemState(event.item, 'hover', true));
            graph.on('node:mouseleave', (event) => graph.setItemState(event.item, 'hover', false));
            g6Instances.push({ graph, container });
        } catch (error) {
            console.error('Ungültige G6-JSON-Konfiguration für', targetId, error);
        }
    });

    window.addEventListener('resize', () => {
        g6Instances.forEach(({ graph, container }) => {
            if (!graph || graph.get('destroyed')) {
                return;
            }
            if (!container || !container.scrollWidth || !container.scrollHeight) {
                return;
            }
            graph.changeSize(container.clientWidth, container.clientHeight);
        });
    });
</script>


## Alternative mit ECharts

`ECharts` ist stark für interaktive Datenvisualisierung und unterstützt auch Graph-Diagramme.

<div id="echarts-mix" style="width: 100%; max-width: 980px; height: 420px; border: 1px solid #ddd; border-radius: 8px;"></div>
<div id="echarts-mvc-graph" style="width: 100%; max-width: 980px; height: 460px; border: 1px solid #ddd; border-radius: 8px; margin-top: 16px;"></div>

<script src="https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"></script>
<script type="application/json" data-echarts-target="echarts-mix">
{
    "title": { "text": "ECharts: Bar + Line Beispiel" },
    "tooltip": { "trigger": "axis" },
    "legend": { "data": ["Punkte", "Trend"] },
    "xAxis": { "type": "category", "data": ["W1", "W2", "W3", "W4", "W5", "W6"] },
    "yAxis": { "type": "value" },
    "series": [
        { "name": "Punkte", "type": "bar", "data": [45, 52, 61, 68, 74, 83] },
        { "name": "Trend", "type": "line", "smooth": true, "data": [44, 50, 59, 67, 73, 82] }
    ]
}
</script>

<script type="application/json" data-echarts-target="echarts-mvc-graph">
{
    "title": { "text": "ECharts: MVC als Graph" },
    "tooltip": {},
    "series": [
        {
            "type": "graph",
            "layout": "none",
            "roam": true,
            "label": { "show": true },
            "edgeSymbol": ["", "arrow"],
            "edgeSymbolSize": 8,
            "data": [
                { "id": "user", "name": "User / Browser", "x": 80, "y": 220, "symbolSize": [130, 46] },
                { "id": "controller", "name": "Controller", "x": 310, "y": 220, "symbolSize": [120, 46] },
                { "id": "model", "name": "Model", "x": 540, "y": 130, "symbolSize": [110, 46] },
                { "id": "view", "name": "View", "x": 540, "y": 310, "symbolSize": [100, 46] },
                { "id": "db", "name": "Datenbank", "x": 790, "y": 130, "symbolSize": [120, 46] }
            ],
            "links": [
                { "source": "user", "target": "controller", "label": { "show": true, "formatter": "HTTP Request" } },
                { "source": "controller", "target": "model", "label": { "show": true, "formatter": "Business-Logik" } },
                { "source": "model", "target": "db", "label": { "show": true, "formatter": "Read/Write" } },
                { "source": "db", "target": "model", "label": { "show": true, "formatter": "Daten" } },
                { "source": "controller", "target": "view", "label": { "show": true, "formatter": "Render mit Daten" } },
                { "source": "view", "target": "user", "label": { "show": true, "formatter": "HTTP Response" } }
            ],
            "lineStyle": { "width": 2, "curveness": 0.08 }
        }
    ]
}
</script>

<script>
    const echartsInstances = [];
    document.querySelectorAll('script[type="application/json"][data-echarts-target]').forEach((configScript) => {
        const targetId = configScript.dataset.echartsTarget;
        const container = document.getElementById(targetId);

        if (!container) {
            return;
        }

        try {
            const option = JSON.parse(configScript.textContent);
            const chart = echarts.init(container);
            chart.setOption(option);
            echartsInstances.push(chart);
        } catch (error) {
            console.error('Ungültige ECharts-JSON-Konfiguration für', targetId, error);
        }
    });

    window.addEventListener('resize', () => {
        echartsInstances.forEach((chart) => chart.resize());
    });
</script>

<script type="application/json" data-plotly data-plotly-max-width="820px" data-plotly-height="420px">
{
    "data": [
        {
            "x": ["Model", "View", "Controller"],
            "y": [78, 65, 89],
            "type": "bar",
            "name": "Punkte",
            "marker": {
                "color": ["#1f77b4", "#ff7f0e", "#2ca02c"]
            }
        }
    ],
    "layout": {
        "title": "Beispiel: Testergebnis nach MVC-Komponente",
        "xaxis": { "title": "Komponente" },
        "yaxis": { "title": "Punkte" },
        "margin": { "l": 60, "r": 20, "t": 60, "b": 60 }
    },
    "config": {
        "responsive": true
    }
}
</script>

<script type="application/json" data-plotly data-plotly-max-width="820px" data-plotly-height="420px">
{
    "data": [
        {
            "labels": ["Model", "View", "Controller"],
            "values": [35, 25, 40],
            "type": "pie",
            "textinfo": "label+percent",
            "hoverinfo": "label+value+percent"
        }
    ],
    "layout": {
        "title": "Beispiel: Zeitverteilung im MVC-Projekt"
    },
    "config": {
        "responsive": true
    }
}
</script>