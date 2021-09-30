import React from 'react';
import './Meals.css'
import { Link, useHistory } from 'react-router-dom';


const Meals = (props) => {
    const {idMeal,strMealThumb,strYoutube,strArea,strMeal,strCategory}=props.meal
 const history = useHistory();
 
    const buttonClick=()=>{
        history.push("/home")

    }
    return (
        <div className="single-meal">
            <img style={{width:"200px",height:"200px"}} src={strMealThumb} alt="" />
            <h4>{strYoutube}</h4>
            <h4>{strArea}</h4>
            
            <h4>{strMeal}</h4>
            <h4>{strCategory}</h4>
          
            <Link to={`/singleMeal/${idMeal}`}>singleMeal</Link>
            <br />
           <Link to={`/singleMeal/${idMeal}`}>
               <button>see more this food</button>
           </Link>

           <br />
           <button onClick={buttonClick}>see single details</button>
            
        </div>
    );
};

export default Meals;