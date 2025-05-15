import { Link } from "react-router";

export default function Header({ name }) {
    return (
        <div> 
            Coucou {name} !
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
  }