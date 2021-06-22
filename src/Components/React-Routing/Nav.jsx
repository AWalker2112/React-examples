import { Link } from 'react-router-dom';


const Nav = () => {
    return(
    <div>
        
        <Link to="/" className="btn btn-danger">Home</Link>
        <br/>
        <Link to="/about">About Us</Link>
        <br/>
        <Link to="/shop">Shop Now</Link>
    </div>
    )
}
export default Nav;