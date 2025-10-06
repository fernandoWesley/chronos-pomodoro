import styles from './styles.module.css'

type GenericHmtlProps = {
    children: React.ReactNode;
}

export function GenericHmtl({children}: GenericHmtlProps) {
    return (
        <div className={styles.genericHtml}>
            {children}
        </div>
    )
}