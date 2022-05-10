import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Home from './Home';
// import '/dynamic-table/src/asset/Nav.scss';
import Register from '../RegisterPage/Register';
import About from '../AboutPage/About';
import Contact from '../ContactPage/Contact';
import Err from '../Error/Err';


function Navbar() {
    return (
        <div>
            <Router>ّ
                <nav>
                    <ul>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/register">Register</Link>
                        <Link className='link' to="/contact">Contact Us</Link>
                        <Link className='link' to="/about">About Us</Link>
                    </ul>
                </nav>
                <Switch>
                    <Route path={"/"} component={Home} exact />
                    <Route path={"/register"} component={Register} />
                    <Route path={"/about"} component={About} />
                    <Route path={"/contact"} component={Contact} />
                    <Route path={"/"} component={Err} />
                </Switch>
            </Router>
        </div>
    );
}

export default Navbar;