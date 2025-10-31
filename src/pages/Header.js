import {Link} from 'react-router';
import {BsFillSunFill} from "react-icons/bs";
import SearchBar from './SearchBar';
import {FaLaptopCode} from 'react-icons/fa';
import Menu from '../Menu/Menu';
import {FaBell} from "react-icons/fa";
import {FaProductHunt} from "react-icons/fa"; // “P” styled logo


function Header() {
    return (
        <div className="row"
             style={{backgroundColor: "#1f1f1f"}}
        >
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-lg-2">
                        <nav className="navbar navbar-light">
                            <div className="container">
                                <Link className="navbar-brand" href="#">
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "green",
                                        backgroundColor: "#1f1f1f"
                                    }}>
                                        <FaLaptopCode size={28} style={{marginRight: "8px"}}/>
                                    </div>
                                </Link>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-1 mt-2">
                        <SearchBar/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6"><Menu/></div>
            <div className="col-lg-3" style={{backgroundColor: "#1f1f1f"}}>
                <nav class="navbar navbar-light">
                    <div class="container">
                        <div>

                            <Link  class="navbar-brand" href="#">
                                <BsFillSunFill size={30} color="white"/>
                            </Link>
                        </div>
                        <div style={{marginRight:'20px'}}>

                            <Link>
                                <FaBell className='mr-5' size={25} color="white"/>

                            </Link>
                        </div>

                        <div style={{marginRight: "200px"}}>

                            <Link>
                                <FaProductHunt size={25} color='white'/>
                            </Link>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;