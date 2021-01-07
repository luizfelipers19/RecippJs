import React from 'react'
import './style.css';
import style from './recipe.module.css';

const Recipe = ({title, image, calories, ingredients, fitlevel}) => {
    return (
        <div className={style.recipe}>
            <h2 className={style.titulo}>{title}</h2>
            <p className={style.calorias}> Calorias: {calories.toFixed(2)} kcal</p>
            <img className={style.image} src={image} alt=''></img>
            <p className={style.fitlevel}>Fit-Level: {fitlevel}</p>
         {  /* <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
                </ul> */}
            <button className={style.button}>Ver ingredientes!</button>
        </div>
    );
};

export default Recipe;
