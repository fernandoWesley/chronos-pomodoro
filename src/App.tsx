import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import { Footer } from './components/Footer'

import './styles/theme.css'
import './styles/global.css'

export function App() {    
    return (
        <>                
            <Container>
                <Logo />
            </Container>                        
           
            <Container>
                <Menu />
            </Container>
            
            <Container>
                <CountDown />
            </Container>
            
            <Container>
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
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    )
}