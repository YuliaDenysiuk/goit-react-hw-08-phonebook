import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.isLoggedIn);

    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>);
}

export default PrivateRoute;