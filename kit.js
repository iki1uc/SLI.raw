// kit.js — SLI Selbst-Kit (Identität, Position, Epoche, Matrix, Geschwindigkeit)

export const SLIKIT = {

    // 1. Identität
    id: "SLI-C-01",
    axiom: "C",          // A = VADER, B = MAAT, C = SLI

    // 2. Eigene Achse (SLI ist nicht WORK, nicht FORK)
    axis: "SLI",

    // 3. Eigene Position (81-System)
    position: {
        base: 81,
        cube3: 27,           // 3^3
        epoch: 387420489,    // 9^9
        respo: 243           // 3 × 81
    },

    // 4. Eigene 3×3 Matrix
    matrix: {
        row1: ["TRANS", "WARB", "KANAL"],
        row2: ["HY", "PE", "PER"],
        row3: ["IX", "x4", "XI"],
        center: 8,           // 8 → 9 Bildung
        next: 9
    },

    // 5. Eigene Geschwindigkeit (TMP-RÄR)
    speed: {
        tmpFront: null,
        tmpBack: null,
        verified() {
            return this.tmpFront === this.tmpBack;
        }
    },

    // 6. Eigene 8→9 Bildung
    evolve() {
        return this.matrix.center === 8 ? 9 : this.matrix.center;
    }
};
