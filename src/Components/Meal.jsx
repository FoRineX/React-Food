import { Link } from "react-router-dom";

export function Meal(props) {
    const {strMeal, strMealThumb, idMeal} = props;
    return <div className="card">
    <div className=" card-image">
    <Link to={`/meal/${idMeal}`}><img src={strMealThumb} alt={strMeal}/></Link>
    </div>
    <div className="card-content">
    <span className="card-title">{strMeal}</span>
    </div>
    <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">Reciepe</Link>
    </div>
    </div>
}