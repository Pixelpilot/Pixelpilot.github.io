---
title: Aufgabe 6 - Canvas2D - Partikelsystem
description: Javascript - Canvas 2D

category: Webentwicklung
topic: JavaScript - Teil 2

type: assignment
previewimage: img/canvas_particle.png
layout: default

sitemap_exclude: y
---

# Aufgabenstellung


![Beispielhafte Umsetzung](img/canvas_particle.png)
Es soll ein einfaches Partikelsystem erstellt werden.

### 1. HTML

```Javascript
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var particles = [];
var numParticles = 100;

function createParticles() {
  for (var i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 4 - 2,
      vy: Math.random() * 4 - 2,
      size: Math.random() * 10 + 5
    });
  }
}

function updateParticles() {
  for (var i = 0; i < numParticles; i++) {
    var particle = particles[i];
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > canvas.width) {
      particle.vx = -particle.vx;
    }
    if (particle.y < 0 || particle.y > canvas.height) {
      particle.vy = -particle.vy;
    }
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (var i = 0; i < numParticles; i++) {
    var particle = particles[i];
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function animate() {
  updateParticles();
  drawParticles();
  requestAnimationFrame(animate);
}

createParticles();
animate();
```
```Javascript
// Erstelle ein Array, um die Partikel zu speichern
let particles = [];

// Erstelle eine Funktion, um ein Partikel zu erstellen
function createParticle() {
  // Erstelle ein neues Partikel-Objekt mit zufälligen Eigenschaften
  let particle = {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: Math.random() * 10 - 5,
    vy: Math.random() * 10 - 5,
    radius: Math.random() * 10 + 5,
    color: "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
  };

  // Füge das Partikel dem Array hinzu
  particles.push(particle);
}

// Erstelle eine Funktion, um die Partikel zu animieren
function animateParticles() {
  // Lösche den Canvas
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  // Iteriere durch das Array der Partikel
  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];

    // Bewege das Partikel basierend auf seiner Geschwindigkeit
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Überprüfe, ob das Partikel den Rand des Canvas erreicht hat
    if (particle.x + particle.radius > window.innerWidth || particle.x - particle.radius < 0) {
      particle.vx = -particle.vx;
    }
    if (particle.y + particle.radius > window.innerHeight || particle.y - particle.radius < 0) {
      particle.vy = -particle.vy;
    }

    // Zeichne das Partikel auf dem Canvas
    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fillStyle = particle.color;
    context.fill();
  }

  // Rufe die Funktion erneut auf, um die Animation fortzusetzen
  requestAnimationFrame(animateParticles);
}

// Erstelle einen Canvas-Element
let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let context = canvas.getContext("2d");

// Passe die Größe des Canvas an die Größe des Fensters an
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Erstelle einige Partikel
for (let i = 0; i < 50; i++) {
  createParticle();
}

// Starte die Animation
animateParticles();
```

### Animationen in JavaScript

`requestAnimationFrame()` ist eine JavaScript-Funktion, die es ermöglicht, animierte Inhalte auf einer Webseite darzustellen. Es ermöglicht es dem Browser, die Animationen in Einklang mit der Bildwiederholrate des Bildschirms (normalerweise 60 FPS) auszuführen, was die Performance und Leistung der Animationen verbessert.

Wenn man eine Funktion mit `requestAnimationFrame()` aufruft, teilt man dem Browser mit, dass man eine Animation ausführen möchte, und der Browser plan die Animation in die nächste verfügbare Bildwiederholrate ein. Sobald die Animation bereit ist, wird die angegebene Funktion aufgerufen, damit man die Animation zeichnen kann.

Der Aufruf von requestAnimationFrame sollte innerhalb der Funktion sein, die die Animation zeichnet, damit die Animation in einer Schleife ausgeführt werden kann.

Beispiel:
```Javascript
function animate() {
  //animation code
  requestAnimationFrame(animate);
}

animate();
```
In diesem Beispiel wird die `animate`-Funktion aufgerufen, die die Animation zeichnet und dann wird `requestAnimationFrame()` innerhalb dieser Funktion aufgerufen, um sicherzustellen, dass die animate-Funktion in der nächsten Bildwiederholrate erneut aufgerufen wird.

## Ressourcen

* [MDN Web Docs - CanvasRenderingContext2D](https://developer.mozilla.org/de/docs/Web/API/CanvasRenderingContext2D){:target="_blank"}