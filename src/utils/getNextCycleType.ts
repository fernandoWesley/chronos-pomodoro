import { TaskModel } from "../models/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
    if (currentCycle % 8 === 0) return 'longBreakTime'; // Multiplo de 8
    if (currentCycle % 2 === 0) return 'shortBreakTime'; // Número par
    return 'workTime';
}