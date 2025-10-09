
import { DefaultInput } from '../DefaultInput'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import React, { useRef } from 'react'
import { TaskModel } from '../../models/TaskModel'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes'

export function MainForm() {
    const { state, setState } = useTaskContext();

    //const  [taskName, setTaskName] = useState('');// Forma controlada, renderiza varias vezes o input
    //const numero = useRef(0); // Forma não controlada, não renderiza varias vezes o input, exemplo que pode ser utilizado ao invés do useState em formulários com muitos campos para evitar lentidão 
    const taskNameInput = useRef<HTMLInputElement>(null); // Forma não controlada, não renderiza varias vezes o input, outro exemplo que pode ser utilizado ao invés do useState em formulários com muitos campos para evitar lentidão 

    // ciclos
    const nextCycle = getNextCycle(state.currentCycle);      
    const nextCycleType = getNextCycleType(nextCycle);      

    function handlerCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        //numero.current += 1;        
        if (taskNameInput.current === null) return 

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert('Digite o nome da tarefa');
            return;
        }
        
        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        }

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                config: {...prevState.config},
                activeTask: newTask,
                currentCycle: nextCycle, // Conferir
                secondsRemaining, // Conferir
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // Conferir
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    function handleInterruptTask() {
        setState(prevState => {
            return {
                ...prevState,                
                activeTask: null,                
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
                tasks: prevState.tasks.map(task => {
                    if (prevState.activeTask && prevState.activeTask.id === task.id) {
                        return {...task, interruptDate: Date.now()};
                    }
                    return task;
                })
            }
        })
    }

    return (
        <form onSubmit={handlerCreateNewTask} className="form" action="">          
            <div className="formRow">
                <DefaultInput 
                    id='meuinput' 
                    type='text' 
                    labelText='task' 
                    placeholder='Digite algo' 
                    //value={taskName} 
                    //onChange={(e) => setTaskName(e.target.value)}
                    ref={taskNameInput} // quando tiver o ref não pode ter o value e o onChange
                    disabled={!!state.activeTask} // !! trasforma em booleano se tiver active task é true, senão false
                />
            </div>
            
            <div className="formRow">
                <p>Neste ciclo descanse por 25min.</p>
            </div>
            
            {state.currentCycle > 0 && (
                <div className="formRow">
                    <Cycles />
                </div>
            )}
            
            <div className="formRow">
                {!state.activeTask && (
                    <DefaultButton 
                        type='submit' 
                        icon={<PlayCircleIcon />} 
                        color='green'
                        aria-label='Iniciar nova tarefa'
                        title='Iniciar nova tarefa'
                        key='botao_submit'
                    />
                )}

                {!!state.activeTask && (
                    <DefaultButton 
                        type='button' 
                        icon={<StopCircleIcon />} 
                        color='red'
                        aria-label='Interromper tarefa atual'
                        title='Interromper tarefa atual'
                        onClick={handleInterruptTask}
                        key='botao_button'
                    />
                )}
                
            </div>
        </form>
    )
}