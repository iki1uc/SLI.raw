export function COSMAT_CORE(row, norms){
    return {
        QI:      row.v - norms.v_kepler,
        IQQ:     row.dvdt,
        QUUEE:   row.theta - norms.theta_norm,
        tiiummm: row.f - norms.f_norm
    };
}
