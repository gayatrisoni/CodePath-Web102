import React, {Component, useState, useEffect} from 'react'

const RecipeChoices = ({handleChange, label, choices, currentValue}) => {
    return (
        <div className="radio-buttons">
            <input
                type = 'text'
                placeholder='Guess the ingredients'
                name = {label}
                value = {currentValue}
                onChange={handleChange}
                className='textbox'
            />
            {choices &&
                choices.map((choice) => (
                <li key={choice}>
                    {choice}
                </li>
                ))}
        </div>
    )

}

export default RecipeChoices