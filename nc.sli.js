export function NC_SLI(run) {
    const dist = Math.sqrt(
        run.move.x**2 +
        run.move.y**2 +
        run.move.z**2
    );

    return {
        dist,
        sli: dist * 4
    };
}
