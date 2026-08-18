// slilocher.js — Schnittpunkt WLOCH / SLOCH / SLI

export function SLILOCHER(work, fork, sli) {

    // WLOCH = weißes Loch (WORK)
    const white = work.vector.z;

    // SLOCH = schwarzes Loch (FORK)
    const black = fork.vector.z;

    // SLI = neutraler Übergang (SLI-Respo)
    const neutral = sli.vector.z;

    // Earth-Marker = Schnittpunkt aller drei Achsen
    const marker = (white + black + neutral) / 3;

    return {
        white,
        black,
        neutral,
        marker,
        meaning: "Schnittpunkt zwischen weißem, schwarzem und neutralem Loch"
    };
}
