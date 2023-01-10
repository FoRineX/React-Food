import { Link } from "react-router-dom";

export function CategoryItem (props) {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;
    return <div className="card">
    <div className=" card-image">
     <Link to={`/category/${strCategory}`}><img src={strCategoryThumb} alt={strCategory}/></Link> 
    </div>
    <div className="card-content">
    <span className="card-title">{strCategory}</span>
      <p>{strCategoryDescription.slice(0, 60)}...</p>
    </div>
    <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">Choose</Link>
    </div>
    </div>
}