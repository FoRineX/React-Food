import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../Components/Preloader";

import { MealList } from "../Components/MealList";

import { Scroll } from "../Components/Scroll"


export function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const goBack = useNavigate();
    const back = () => goBack(-1);

    const [scrollShow, setScrollShow] = useState('');

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    // CUSTOM SCROLL //
   const handleScroll = () => { 
    window.scrollTo({top: 0, behavior: "smooth" });
    setScrollShow(0);
  };
  const handleScrollShow = () => setScrollShow(window.scrollY);
  
  useEffect(() => {window.addEventListener('scroll', handleScrollShow);
    return () => window.removeEventListener('scroll', handleScrollShow);
}, []);

    return <>
   <button className="btn" onClick={back}>Go back</button>
    {!meals.length ? <Preloader/> : <MealList meals = {meals} />}
    {scrollShow && <Scroll handleScroll = {handleScroll}/>}
    </>
}