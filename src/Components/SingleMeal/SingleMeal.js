import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './SingleMeal.css'


const SingleMeal = (props) => {
    // const {strMealThumb,strYoutube,strArea,strMeal,strCategory}=props.meals;
    const {meals}=useParams();

    
    const [meal,setMeal]=useState([]);
    
    const history=useHistory();
    
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`
       
        fetch(url)
        .then(res =>res.json())
        .then(data=>setMeal(data.meals[0]))

    },[])
    const butClick=()=>{
        history.push("/home")
    }
    console.log(meal);
    return (
        <div className="single">
            <h2>hi im a single meal  : {meals} </h2>
            <img style={{width:"600px",height:"400px"}} src={meal.strMealThumb} alt="" />
           
           
           <Link to="/meal.strYoutube">
           <h4>{meal.strYoutube}</h4></Link>

            <h4>{meal.strArea}</h4>
            <h4>{meal.strMeal}</h4>
            <h4>{meal.strCategory}</h4>
           <br />

           <button onClick={butClick}>see Home</button>
        </div>
    );
};

export default SingleMeal;