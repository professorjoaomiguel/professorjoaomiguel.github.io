# Project Guidelines & User Profile (Site Repository)

## User Profile (Global Context)

- **User:** Prof. Me. João Miguel Lac Roehe (joao.roehe@senairs.org.br)
- **Role:** Professor na Faculdade de Tecnologia SENAI Porto Alegre
- **Preferred Language:** Português (Brasil)
- **Contact:** Telegram [@professorjoaomiguel](http://t.me/professorjoaomiguel)
- **Courses Taught (Unidades Curriculares):**
  - **S122 - Internet das Coisas** (ESP32, MicroPython, C++ Arduino, Raspberry Pi, MQTT, Node-RED, Grafana)
  - **Sistemas Embarcados (Lab SE)** (ESP32 UNO, MicroPython, Shield 9-em-1)
  - **Programação Básica**

## Repository Overview

This is the **GitHub Pages site repository** for [@professorjoaomiguel](https://github.com/professorjoaomiguel).
The main goal is to host a clean, highly performant, accessible, and premium landing page explaining the teacher's profile and providing links to course repositories.

## Tech Stack & Design System

- **Core:** Plain HTML5 and Vanilla CSS3.
- **Styling Philosophy:** Modern, minimalist, and responsive. 
  - Automatic light/dark mode support based on `prefers-color-scheme`.
  - HSL tailored color palette (Slate & Indigo Accent).
  - Modern typography: Google Fonts `Outfit`.
  - Accessible design (focus-visible styles, proper HTML5 landmark tags, appropriate aria-attributes).
- **SEO & Semantics:**
  - Proper heading hierarchies (single `<h1>` for page title).
  - Embedded **JSON-LD Schema.org** markup for semantic indexing.

## What to Keep in Mind (For AI Assistants)

- Maintain all CSS variables on `:root` and `@media (prefers-color-scheme: dark)`.
- Keep the site documentation-only and statically served (no complex backend logic or frameworks unless requested).
- Write comments and text in elegant **Português (Brasil)**.
