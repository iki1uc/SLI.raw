// SLI-2.0 — IX ×4 XI nur bei verifizierter Geschwindigkeit

export function SLI2(v, tmpFront, tmpBack, epoche) {

    const validTMP = (tmpFront === tmpBack);
    const validEpoche = [81, 243, 27, 387420489].includes(epoche);

    if (!validTMP || !validEpoche) {
        return { active: false, reason: "TMP/Epoche nicht verifiziert" };
    }

    const IX = v;
    const XI = v * 0.777;
    const BOOST = IX * 4;

    return {
        active: true,
        IX,
        BOOST,
        XI,
        wLOCH: (IX + XI) / 2
    };
}
