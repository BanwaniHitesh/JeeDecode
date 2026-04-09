import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Navbar = (param) => {

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">JEEDecode</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/physics" style={param.physicscolor ? { color: param.physicscolor } : {}}>
                                        Physics
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/maths" style={param.mathscolor ? { color: param.mathscolor } : {}}>
                                        Maths
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/chemistry" style={param.chemistrycolor ? { color: param.chemistrycolor } : {}}>
                                        Chemistry
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
