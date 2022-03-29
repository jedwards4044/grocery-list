import styles from './FruitAdd.module.scss'

interface FruitProps {
    indexOf: number
    name: string
    select: boolean
    checkChange: (indexOf: number) => void
}

function FruitAdd(props: FruitProps) {
    const { indexOf, name = 'orange', select, checkChange } = props
    return (
        <div className={`${styles.fruit} hover:border-4`}>
            <h3 className={select ? styles.fruit__checked : ''}>{name}</h3>
            <button className={`${styles.fruit__btn}`} onClick={() => checkChange(indexOf)}>
                Click
            </button>
        </div>
    )
}

export default FruitAdd
