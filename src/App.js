import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter,Switch,Route} from 'react-router-dom'; 
import Login from './pages/Login';
import Register from './pages/Register';
import Secret from './pages/Secret'
import Logout from './pages/Logout';
import axios from 'axios';


const App = () => {


  return (

    <>
    <BrowserRouter>
   <Switch>
<Route exact path="/" component={Login}/>
   </Switch>
   <Switch>
<Route exact path="/register" component={Register}/>
   </Switch>
   <Switch>
<Route exact path="/secret" component={Secret}/>
   </Switch> 
   <Switch>
<Route exact path="/logout" component={Logout}/>
   </Switch>
    </BrowserRouter>

  
    </>
  )
}

export default App ;
