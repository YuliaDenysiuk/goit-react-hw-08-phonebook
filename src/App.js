import 'App.css';
import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {AppBar} from 'components/AppBar';
import { RegisterView, LoginView, ContactsView } from 'views';
import { authOperations } from 'redux/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (   
    <>
      <AppBar />      

      <Switch>
        <Route path='/register'>
          <RegisterView />      
        </Route>

        <Route path='/login'>
          <LoginView />      
        </Route>

        <Route path='/contacts'>
          <ContactsView />      
        </Route>
      </Switch>
    </>
  );
}

export default App;
