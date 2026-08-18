export function SLILOCHER(work, fork, sli) {

    const white   = work.vector.z;   // WLOCH
    const black   = fork.vector.z;   // SLOCH
    const neutral = sli.vector.z;    // SLI

    const marker = (white + black + neutral) / 3;

    return {
        white,
        black,
        neutral,
        marker,
        meaning: "Schnittpunkt zwischen WLOCH, SLOCH und SLI"
    };
}
export function SLILOCHER(work, fork, sli) {
    const white   = work.vector.z;   // WLOCH
    const black   = fork.vector.z;   // SLOCH
    const neutral = sli.vector.z;    // SLI
    const marker = (white + black + neutral) / 3;
    return { white, black, neutral, marker };
}
