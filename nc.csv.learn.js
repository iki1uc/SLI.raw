// nc.csv.learn.js — CSV → QI/IQQ/QUUEE/tiiummm

export function NC_CSV_LEARN(row){
    const x = Number(row.x);
    const y = Number(row.y);

    return {
        qi:       x * 1.1,
        iqq:      y * 1.2,
        quuee:    (x - y) * 0.7,
        tiiummm:  (x + y) * 0.3
    };
}
