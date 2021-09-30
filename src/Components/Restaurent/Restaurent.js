import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Restaurent.css'


const Restaurent = () => {
   const [searchText,setsearchText]= useState('')
   const [meals,setMeals]=useState([])

   useEffect(()=>{
       const url=(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
       fetch(url)
       .then(res =>res.json()).then(data=>setMeals(data.meals))
   },[searchText])
      

   const searchButton= e =>{
       const searchTextValue=e.target.value;
    //    console.log(searchText)
       setsearchText(searchTextValue);

   }
    return (
        <div>
            <input onChange={searchButton} style={{width:"70%",height:"30px",marginTop:"17px"}} type="text" placeholder="search" />
            <div className="meal-container">
            {
                meals.map(meal=><Meals  meal={meal}></Meals>)
            }
            </div>
        </div>
    );
};

export default Restaurent;