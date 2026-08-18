export function COSMAT_LEARN(data){
    return {
        anomaly: Math.abs(data.QI) > 0.1 ||
                 Math.abs(data.QUUEE) > 0.01 ||
                 Math.abs(data.tiiummm) > 0.001
    };
}
