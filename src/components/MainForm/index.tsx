
import { DefaultInput } from '../DefaultInput'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

export function MainForm() {
    const { setState } = useTaskContext();

    function handleClick() {
        setState(prevState => {
            return {
                ...prevState,
                formattedSecondsRemaining: '21:00'
            }
        })
    }
    return (
        <form className="form" action="">
            <button onClick={handleClick} type='button'>
                Clicar
            </button>
            <div className="formRow">
                <DefaultInput id='meuinput' type='text' labelText='task' placeholder='Digite Qualquer Coisa'/>
            </div>
            
            <div className="formRow">
                <p>Neste ciclo descanse por 25min.</p>
            </div>
            
            <div className="formRow">
                <Cycles />
            </div>
            
            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} color='green'/>
            </div>
        </form>
    )
}