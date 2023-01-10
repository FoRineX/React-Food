import { Link } from "react-router-dom";

export function Contact () {
    return  <> 
    <div className="contacts">
        <div className="phone">
            <p className="phoneText">WE W'D LOVE TO HEAR YOU  
            <i className="material-icons call">local_phone</i> 
            <a href="tel:123-456-7890">CLICK TO CALL</a>
            </p> 
        <p>ALSO AVAILABLE OUR <Link to={'/feedback'}>FEEDBACK FORM</Link></p>
        </div>
        
    </div>
  </>
 };