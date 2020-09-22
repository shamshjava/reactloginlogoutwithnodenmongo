import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './component/Login';
import Logout from './component/Logout';
import Admin from './component/Admin';
import SecondPage from './component/SecondPage';
import ThirdPage from './component/ThirdPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/Admin' component={Admin}></Route>
          <Route path='/Logout' component={Logout}></Route>
          <Route path='/SecondPage' component={SecondPage}></Route>
          <Route path='/ThirdPage' component={ThirdPage}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
