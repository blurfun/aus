import { Link } from 'react-router-dom'

// styles
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h2>帮孩子择校最适合的私校</h2>
        </Link>
      </nav>
    </div>
  )
}
