import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {AuthNav} from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { authSelectors } from 'redux/auth';

function AppBar() {
    const isLoggedIn = useSelector(authSelectors.isLoggedIn);
    
    return (
        <header className={s.header}> 
            <AuthNav />           
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}

AppBar.propTypes = {
    isLoggedIn: PropTypes.bool,
};

export default AppBar;