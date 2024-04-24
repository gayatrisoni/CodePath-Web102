import { FunctionsRounded } from '@material-ui/icons';
import React, {Component, useState} from 'react'
import RecipeChoices from './RecipeChoices';
import drinksJson from './drinks.json'
import './baristaForm.css'

const BaristaForm = () => {
    

    const[currentDrink, setCurrentDrink] = useState('')
    const[trueRecipe, setTrueRecipe] = useState({})
    const[correct_temp, setCheckedTemp] = useState('')
    const[correct_syrup, setCheckedSyrup] = useState('')
    const[correct_milk, setCheckedMilk] = useState('')
    const[correct_blended, setCheckedBlended] = useState('')
    const[inputs, setInputs] = useState({
        'temperature' : '',
        'syrup' : '',
        'milk' : '',
        'blended' : ''
    })

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);

    }
    

    const onCheckAnswer = () => {

        if (!ingredients['temperature'].includes(inputs['temperature'])) {
            alert("For temperature, that isn't even an option!")
          }
        else if(trueRecipe.temp != inputs['temperature']){
            setCheckedTemp('wrong')
        }
        else {
            setCheckedTemp("correct");
        }
        
        if (!ingredients["syrup"].includes(inputs["syrup"])) {
            alert("This syrup input is not an option!")
        }
        else if(trueRecipe.temp != inputs['syrup']){
            setCheckedSyrup('wrong')
        }
        else {
            setCheckedSyrup("correct");
        }

        if (!ingredients["milk"].includes(inputs["milk"])) {
            alert("This milk input is not an option!")
        }
        else if(trueRecipe.temp != inputs['milk']){
            setCheckedMilk('wrong')
        }
        else {
            setCheckedMilk("correct");
        }

        if (!ingredients["blended"].includes(inputs["blended"])) {
            alert("This blended input is not an option!")
        }
        else if(trueRecipe.temp != inputs['blended']){
            setCheckedBlended('wrong')
        }
        else {
            setCheckedBlended("correct");
        }
        
    }

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });

        setCheckedTemp('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');
            
        getNextDrink();
    }

    return (
        <div>
            <h2>Hi, I would like to order a:</h2>
            <div className='drink-container'>
                <h2 className='mini-header'>{currentDrink}</h2>
                <button className='button' type='new-drink-button' onClick={onNewDrink} >"🔄"</button>
            </div>
            <form  className='container'>
                <div className='mini-container'>
                    <h3>Temperature</h3>
                    <div className="answer-space" id={correct_temp} >
                        {inputs["temperature"]} 
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="temperature"
                        choices={ingredients["temperature"]}
                        currentValue={inputs["temperature"]}
                    />
                </div>
                
                <div className='mini-container'>
                    <h3>Syrup</h3>
                    <div className="answer-space" id={correct_syrup} >
                        {inputs["syrup"]} 
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>

                <div className='mini-container'>
                    <h3>Milk</h3>
                    <div className="answer-space" id={correct_milk} >
                        {inputs["milk"]} 
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                    />
                </div>

                <div className='mini-container'>
                    <h3>Blended</h3>
                    <div className="answer-space" id={correct_blended} >
                        {inputs["blended"]} 
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>
            </form>

            <div className='button-container'>
                <button type='submit' className='button' onClick={onCheckAnswer}>
                    Check Answer
                </button>
            </div>
            

            

        </div>

    )
}

export default BaristaForm;