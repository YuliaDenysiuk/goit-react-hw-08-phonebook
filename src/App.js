import 'App.css';
import {Switch, Route} from 'react-router-dom';
import {AppBar} from 'components/AppBar';
import {RegisterView, LoginView, ContactsView} from 'views';

function App() {
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
