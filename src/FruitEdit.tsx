import './forms.css'
import styles from './FruitEdit.module.scss'
interface EditProps {
    removeSelected: () => void
    addFruit: (evt: React.ChangeEvent<HTMLInputElement>) => void
    setFruit: () => void
}

function FruitEdit(props: EditProps) {
    return (
        <div className={styles.FruitEdit}>
            <button className={styles.FruitEdit__btn} onClick={props.removeSelected}>
                Remove Selected
            </button>
            <div className={`${styles.FruitEdit__addingfruit} m-4`}>
                <input
                    type="text"
                    id="namefield"
                    className={`opacity-30 w-4/6 hover:opacity-50 ${styles.FruitEdit__inp}`}
                    onChange={(evt) => props.addFruit(evt)}
                />
                <button className={`${styles.FruitEdit__btn} ${styles['FruitEdit--btn_dark']}`} onClick={props.setFruit}>
                    {/*                 //<button className={`${styles.FruitEdit__btn}`} onClick={props.setFruit}>*/}
                    Add
                </button>
            </div>
        </div>
    )
}

export default FruitEdit
