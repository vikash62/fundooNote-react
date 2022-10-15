import React from 'react'
import { BrowserRouter, 
          Route, Switch
        } from "react-router-dom";
import Login from './pages/login/Login'
import Registration from './pages/signup/Register'
import ForgetPassword from './pages/ForgetPassword'
import Home from './pages/Home/Home';
import Archives from './pages/Archive/Archives';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Registration} />
           <Route exact path="/forget-password" component={ForgetPassword} />
        <Route exact path="/home" component={Home} />
         <Route exact path="/archive" component={Archives} />
        </Switch>
      </BrowserRouter>
     
    </div>
  )
}

export default App