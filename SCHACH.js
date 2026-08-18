// resumee.js — verbindet ID, Axiom, Kit, Run, Zug

import { SLIKIT } from "./kit.js";
import { SLI2 } from "./zug.js";

export function RESUMEE(v) {

    // 1. Identität aus ID.html (über kit.js)
    const id = SLIKIT.id;
    const axiom = SLIKIT.axiom;

    // 2. Position (81 / 243 / 27 / 9^9)
    const epoche = SLIKIT.position.epoch;

    // 3. Geschwindigkeit (TMP-RÄR)
    const tmpFront = SLIKIT.speed.tmpFront;
    const tmpBack  = SLIKIT.speed.tmpBack;

    // 4. SLI-2.0 Motor
    const sli = SLI2(v, tmpFront, tmpBack, epoche);

    // 5. 3×3 Matrix (TRANS / WARB / KANAL)
    const matrix = SLIKIT.matrix;

    // 6. 8 → 9 Bildung
    const evo = SLIKIT.evolve();

    return {
        id,
        axiom,
        epoche,
        matrix,
        evo,
        sli
    };
}
