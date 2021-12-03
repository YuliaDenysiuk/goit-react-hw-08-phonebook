import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function Navigation() {    
    const isLoggedIn = useSelector(authSelectors.isLoggedIn);

    return (<nav>
        <NavLink 
            exact
            to="/" 
            className={s.link} 
            activeClassName={s.activeLink}>
            General
        </NavLink>
        {isLoggedIn && (
            <NavLink
                to="/contacts" 
                className={s.link} 
                activeClassName={s.activeLink}>
                Contacts
            </NavLink>
        )}
    </nav>)
}

export default Navigation;