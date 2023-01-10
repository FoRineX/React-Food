import { Link } from "react-router-dom"

export function Header() {
    return <><nav className="grey">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Recipes book</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to={'/feedback'}>Feedback</Link></li>
      <li><Link to={'/contacts'}>Contacts</Link></li>    
      </ul>
    </div>
  </nav></> 
}
