import { Link } from "react-router-dom";
import './header.scss'

export default function Header() {
  return (
    <header className="header">
            <Link to={'/'}><h2>Planning App</h2></Link>
        <nav className="nav">
            <Link to={"/add"}>Add</Link>
            <Link to={"/calendar"}>Calendar</Link>
        </nav>
    </header>

  )
}
