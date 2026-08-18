// ORAKEL Core – QI/IQQ · 81 · 243

import { RESPO_81_FINDER } from "./RESPO_81_FINDER.js";
import { QI } from "./QI.js";
import { IQQ } from "./IQQ.js";
import { RESPO_WHIRL } from "./RESPO_WHIRL.js";

export function ORAKEL_CORE(input) {

    const qi  = QI(input);
    const iqq = IQQ(qi);

    const respo81 = RESPO_81_FINDER.evaluate(input, {
        signal: 0.87,
        sync: 0.79,
        load: 0.33,
        errors: 1
    });

    const whirl243 = RESPO_WHIRL(respo81);

    return {
        input,
        qi,
        iqq,
        respo81,
        whirl243,
        stamp: Date.now()
    };
}
