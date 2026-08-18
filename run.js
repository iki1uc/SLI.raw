// AXIOM.js — universeller Axiom-Kern für alle Module

export function AXIOM(frame) {

    // TMP-Führung (0,1,2 → alpha/beta/gamma wechseln)
    const tmp = frame % 3;

    const roles = [
        { alpha: 1, beta: 2, gamma: 3 },
        { alpha: 2, beta: 3, gamma: 1 },
        { alpha: 3, beta: 1, gamma: 2 }
    ];

    const axiomMap = roles[tmp];

    // Axiom 1 – Scan
    const axiom1 = 0;

    // Axiom 2 – Operator
    const axiom2 = 0;

    // Axiom 3 – Pipeline
    const axiom3 = 0;

    return {
        axiom1,
        axiom2,
        axiom3,
        alpha: axiomMap.alpha,
        beta: axiomMap.beta,
        gamma: axiomMap.gamma
    };
}
