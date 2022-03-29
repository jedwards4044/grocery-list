import React, { useState } from 'react'
import './forms.css'
import FruitEdit from './FruitEdit'
import FruitAdd from './FruitAdd'
import styles from './Fruits.module.scss'

function Fruits() {
    const [fruits, setData] = useState([
        {
            name: 'grapefruit',
            selected: false,
        },
        {
            name: 'coconut',
            selected: false,
        },
        {
            name: 'berry',
            selected: false,
        },
    ])

    function checkChange(index: number) {
        const tempFruits = [...fruits]
        tempFruits[index].selected = !tempFruits[index].selected
        setData(tempFruits)
    }

    function removeSelected() {
        //Creates array of nonselected Items
        const remList = fruits.filter((fruits) => fruits.selected === false)
        //Sets State with new array
        setData(remList)
    }

    //Create fruitName variable and set to input value
    let fruitName: string = ''
    function addFruit(evt: React.ChangeEvent<HTMLInputElement>) {
        fruitName = evt.target.value
    }
    /*     function setFruit() {
        //Check to see if fruit is already in list or blank
        const checkFruit = fruits.filter((fruits) => fruits.name === fruitName)
        if (checkFruit.length !== 0 || fruitName === null || fruitName === '') {
            return
        } */
    function setFruit() {
        //Check to see if fruit is already in list
        //find or findIndex
        if (fruits.findIndex((fruits) => fruits.name === fruitName) >= 0 || fruitName === null || fruitName === '') {
            return
        }

        //Create array for new fruit
        const newFruit = {
            name: fruitName,
            selected: false,
        }

        //create new variable for state
        const newArr = [...fruits, newFruit]
        setData(newArr)
    }
    return (
        <div className={`${styles.fruits} border-4 border-neutral-700`}>
            <h1 className={`text-6xl ${styles.fruits__headText}`}>Grocery List</h1>
            {fruits.map((fruit, index) => (
                <FruitAdd indexOf={index} name={fruit.name} checkChange={checkChange} select={fruits[index].selected} key={index} />
            ))}
            <FruitEdit removeSelected={removeSelected} setFruit={setFruit} addFruit={addFruit} />
        </div>
    )
}

export default Fruits
