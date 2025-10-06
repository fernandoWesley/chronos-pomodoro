import { Home } from './pages/Home'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import './styles/theme.css'
import './styles/global.css'

// export type TaskStateModel = {
//     tasks: TaskModel[]; // Histórico, MainForn
//     secondsRemaining: number; //CountDown, Histórico, MainForm, Button
//     formattedSecondsRemaining: string; // Título, CountDown 
//     activeTask: TaskModel | null; //CountDown, Histórico, MainForm, Button
//     currentCycle: number; // Home
//     config: {
//         workTime: number; // MainForm
//         shortBreakTime: number; // MainForm
//         longBreakTime: number; // MainForm
//     };
// };

export function App() {
    return (
        <TaskContextProvider>
            <Home />
        </TaskContextProvider>
    )
}