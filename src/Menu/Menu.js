import { Link } from "react-router";
function Menu() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1f1f1f" }}>
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Courses" className="nav-link text-white">Courses</Link>
        </li>
        <li className="nav-item">
          <Link to="/Tutorial" className="nav-link text-white">Tutorial</Link>
        </li>
        <li className="nav-item">
          <Link to="/Practice" className="nav-link text-white">Practice</Link>
        </li>

        <li className="nav-item">
          <Link to="/Jobs" className="nav-link text-white">Jobs</Link>
        </li>
      </ul>
    </nav>

  )
}
export default Menu;