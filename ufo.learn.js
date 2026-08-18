// ufo.learn.js — UFO/SETI Lernmodul

export function UFO_LEARN(row){
    const x = Number(row.x);
    const y = Number(row.y);
    const v = Number(row.v);

    return {
        qi:       v * 1.1,
        iqq:      v * 1.2,
        quuee:    (x - y) * 0.7,
        tiiummm:  (x + y) * 0.3,
        anomaly:  Math.abs((x - y) * 0.7) > 10
    };
}
