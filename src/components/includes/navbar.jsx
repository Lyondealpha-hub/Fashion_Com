import { Link } from "react-router-dom";
import './styles/navbar.css'
const Navbar = ({action,url}) => {
    return (  
        <nav className="navbar">
            <div className="nav-content">
                {/* brand section */}
                <div className="brand">
                    <i class="bi bi-x-diamond-fill"></i>
                    <Link to ={'/allitems'} className="brand-link">{url}</Link>
                </div>

                <div className="navbar-btn">
                    <Link className="navbar-btn-item" to={'/RegisterUser'}>{action}</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;