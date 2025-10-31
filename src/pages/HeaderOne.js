import {Link} from "react-router";

function HeaderOne() {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row' style={{marginTop: '1px'}}>
                        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#1f1f1f"}}>
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" style={{color:'#e9e9ea'}}>DSA</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Courses" className="nav-link" style={{color:'#e9e9ea'}}>Practice Problem</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Tutorial" className="nav-link" style={{color:'#e9e9ea'}}>C</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Practice" className="nav-link" style={{color:'#e9e9ea'}}>C++</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/Jobs" className="nav-link" style={{color:'#e9e9ea'}}>Java</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Jobs" className="nav-link" style={{color:'#e9e9ea'}}>Python</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Jobs" className="nav-link"style={{color:'#e9e9ea'}}>JavaScript</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Jobs" className="nav-link" style={{color:'#e9e9ea'}}>Data Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Jobs" className="nav-link"style={{color:'#e9e9ea'}}>Machine Learning</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Jobs" className="nav-link" style={{color:'#e9e9ea'}}>Course</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Jobs" className="nav-link" style={{color:'#e9e9ea'}}>Linux</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Jobs" className="nav-link" style={{color:'#e9e9ea'}}>DevOps</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderOne;