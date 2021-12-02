import s from './AuthNav.module.css';
import {NavLink} from 'react-router-dom';

function AuthNav() {
    return (<nav>
        <NavLink 
            exact
            to="/register" 
            className={s.link} 
            activeClassName={s.activeLink}>
            Registration
        </NavLink>
        <NavLink 
            to="/login" 
            className={s.link} 
            activeClassName={s.activeLink}>
            Login
        </NavLink>
        <NavLink 
            to="/contacts" 
            className={s.link} 
            activeClassName={s.activeLink}>
            Contacts
        </NavLink>
    </nav>)
}

export default AuthNav;