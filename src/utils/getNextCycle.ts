export function getNextCycle(currentCycle: number) {
    return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}

/**
 * 0 -> 1
 * 1 -> 2
 * 2 -> 3
 * 3 -> 4
 * 4 -> 5
 * 5 -> 6
 * 6 -> 7
 * 7 -> 8
 * 8 -> 1
 */