import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function PublicRoute({ children, redirectTo = '/', restricted = false, ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.isLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;

    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children }
        </Route>);
}

export default PublicRoute;