// SCHACH.js — Axiom 1–2–3 / alpha–beta–gamma / TMP-geführt

export const SCHACH = {

    // Axiom-Positionen (1–2–3)
    axiom: {
        one:   "alpha",
        two:   "beta",
        three: "gamma"
    },

    // TMP-Führung entscheidet, welche Rolle alpha/beta/gamma haben
    tmpRole(tmp) {
        // tmp = 0,1,2 → drei Zustände
        const roles = [
            { alpha: 1, beta: 2, gamma: 3 },
            { alpha: 2, beta: 3, gamma: 1 },
            { alpha: 3, beta: 1, gamma: 2 }
        ];
        return roles[tmp % 3];
    },

    // 8 → 9 Bildung (EVO)
    evolve(center) {
        return center === 8 ? 9 : center;
    },

    // Schach-Position (für SLI)
    position(ix, xi) {
        return {
            front: ix,
            back: xi,
            mid: (ix + xi) / 2
        };
    }
};
