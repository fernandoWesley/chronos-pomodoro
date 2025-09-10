import styles from './styles.module.css'

type HeadingProps = {
    children: React.ReactNode;    
}

export function Container({ children }: HeadingProps) {    
    return (
        <div className={styles.container}>
            <div className={styles.content}>                                       
                {children}                
            </div>
        </div>
    )
}