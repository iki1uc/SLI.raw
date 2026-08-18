export function NC_LEARN_SLI(run){
    const dist = Math.sqrt(
        run.vec.x**2 +
        run.vec.y**2 +
        run.vec.z**2
    );

    return {
        dist,
        sli: dist * 4
    };
}
