import styles from './styles.module.css'

type DefaultInputProps = {
    id: string,
    labelText?: string
} & React.ComponentProps<'input'>;

//O ? na frente do labelText significa que é opcional
//...props serve para pegar todas propriedades do input, por exemplo title que não esta nos atributos acima
export function DefaultInput({ id, type, labelText, ...props }: DefaultInputProps) {
    return (
        <>
            {/* Duas formas de fazer uma condicional em react */}
            {/* {labelText ? <label htmlFor={id}>{labelText}</label> : ''}  usado se fosse necessário ter um else*/}
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input className={styles.input} type={type} id={id} {...props}/>
        </>
    )
}