import { Vec } from "./nc.matrix.js";

export function NC_RUN(packet) {
    const move = Vec.mul(packet.vector, packet.impulse.t);
    return { move };
}
