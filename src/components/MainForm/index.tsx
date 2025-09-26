
import { DefaultInput } from '../DefaultInput'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { PlayCircleIcon } from 'lucide-react'

import {styles} from './styles.module.css'

export function MainForm() {
    return (
        <form className="form" action="">
            <div className="formRow">
                <DefaultInput id='meuinput' type='text' labelText='task' placeholder='Digite Qualquer Coisa'/>
            </div>
            
            <div className="formRow">
                <p>Neste ciclo descanse por 5 min.</p>
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