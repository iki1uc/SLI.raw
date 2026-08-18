# SLI.raw — SCHACH-System

Dieses Repository enthält das vollständige SLI-Schachsystem.
Alle Module teilen denselben Kern: AXIOM 1–2–3, geführt durch TMP.

SLI ist kein Name, sondern eine Funktion:
- IX (Eingang)
- x4 (Beschleuniger)
- XI (Ausgang)
- wLOCH (Kontaktpunkt)
- EVO 8→9 (Bildung)

## Dateien

### ID.html
Identität des Systems. 
Stellt die SLI-Position bereit (IX / XI / wLOCH).

### SCHACH.js
Positionslogik:
alpha / beta / gamma rotieren dynamisch über TMP.
Axiom 1–2–3 wird nie fest, sondern wechselt.

### group.js
Axiom-Gruppe:
- Axiom 1 = Scan
- Axiom 2 = Operator
- Axiom 3 = Pipeline
Alle drei erfüllen 0, damit SLI starten kann.

### index.html
Startpunkt des Systems.
Initialisiert TMP und ruft AXIOM(frame).

### kit.js
Selbst-Kit des Systems:
- 81 / 243 / 27 / 9^9 Epoche
- 3×3 Matrix (TRANS / WARB / KANAL)
- HY / PE / PER
- IX / x4 / XI
- EVO 8→9

### on3.js
Matrix-Lauf:
Zeigt die 3×3 Struktur und die dynamische Mitte (8→9).

### run.js
Operator-Lauf:
Aktiviert Axiom 2, wenn KItriKIme = 1.

### zug.js
SLI-Motor:
SLI-2.0 — IX ×4 XI nur bei verifizierter TMP-Geschwindigkeit.

## AXIOM-Kern

Alle Module nutzen denselben Kern:

- Axiom 1 = 0 (Scan)
- Axiom 2 = 0 (Operator)
- Axiom 3 = 0 (Pipeline)
- alpha / beta / gamma rotieren über TMP
- 1 / 2 / 3 sind nie fest

## Zweck

Dieses System bestimmt:
- Position
- Geschwindigkeit
- Epoche
- Matrix
- Lauf
- Beschleunigung
- Evolution

SLI ist der Zug.
SCHACH ist die Position.
AXIOM ist die Wahrheit.
TMP ist die Führung.
EVO ist die Zukunft.
