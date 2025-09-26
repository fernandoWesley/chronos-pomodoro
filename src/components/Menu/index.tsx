import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'dark' | 'light'

export function Menu() {   
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return storageTheme 
    });

    const nextThemeIcon = {
        'dark': <SunIcon />,
        'light': <MoonIcon />
    }

    function handleThemeChance(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();// Não segue o link da tag a

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        })       
    }

    // 3 FORMAS DE USAR O useEffect

    // useEffect(() => {
    //     console.log('useEffect sem dependência', Date.now());        
    // }) // É executado todas as vez que o componente renderizar na tela

    // useEffect(() => {
    //     console.log('useEffect com array de dependencias vazio', Date.now());        
    // },[]) // Executa apenas quando o React monta o componente na tela pela primeira vez

    useEffect(() => {
        //console.log('useEffect com array com depedencia, ou seja, theme mudou', Date.now());   
        document.documentElement.setAttribute('data-theme', theme);    
        localStorage.setItem('theme', theme); 
    },[theme])// Executa apenas quando o valor de theme muda
    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href='#' aria-label='Ir para a Home' title='Ir para a Home'>
                <HouseIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Ver histórico' title='Ver histórico'>
                <HistoryIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Configurações' title='Configurações'>
                <SettingsIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Mudar Tema' title='Mudar Tema' onClick={handleThemeChance}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}