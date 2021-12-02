import s from './AppBar.module.css';
import {AuthNav} from 'components/AuthNav';
import {UserMenu} from 'components/UserMenu';

function AppBar() {
    return (
        <header className={s.header}>
            <AuthNav />
            <UserMenu />
        </header>
    )
}

export default AppBar;