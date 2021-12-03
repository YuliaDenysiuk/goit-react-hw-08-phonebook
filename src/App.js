import 'App.css';
import { Switch } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {AppBar} from 'components/AppBar';
import { Loader } from 'components/Loader';
import { authOperations, authSelectors } from 'redux/auth';
import { PublicRoute } from './components/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute';

const HomeView = lazy(() => import('./views/HomeView/HomeView.js' /* webpackChunkName: "home-page" */));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView.js' /* webpackChunkName: "register-page" */));
const LoginView = lazy(() => import('./views/LoginView/LoginView.js' /* webpackChunkName: "login-page" */));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView.js' /* webpackChunkName: "contacts-page" */));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.isRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (   
    <>
      {isRefreshing ? (<Loader />) : (
        <>
          <AppBar />     
      
          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute path='/' exact>
                <HomeView />      
              </PublicRoute>
              
              <PublicRoute path='/register' restricted>
                <RegisterView />      
              </PublicRoute>

              <PublicRoute path='/login' redirectTo = '/contacts' restricted>
                <LoginView />      
              </PublicRoute>

              <PrivateRoute path='/contacts' redirectTo = '/login'>
                <ContactsView />      
              </PrivateRoute>       
            </Suspense>
          </Switch>
        </>
      )}            
    </>
  );
}

export default App;
