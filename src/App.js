import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './component/Home/Login/Login';
import PrivateRoute from './component/Home/Login/PrivateRoute';
import { createContext, useState } from 'react';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import AddService from './component/Dashboard/AddService/AddService';
import Order from './component/Dashboard/Order/Order';
import ServiceList from './component/Dashboard/ServiceList/ServiceList';
import Review from './component/Dashboard/Review/Review';
import OrderList from './component/Dashboard/OrderList/OrderList';
import MangeService from './component/Dashboard/MangeService/MangeService';
import NotFound from './component/Home/NotFound/NotFound';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
 <Router>
   <Switch>
     <Route exact path='/'>
       <Home/>
     </Route>
     <Route path='/home'>
       <Home/>
     </Route>
     <Route path='/login'>
       <Login/>
     </Route>
     <PrivateRoute path='/dashboard'>
       <Dashboard/>
     </PrivateRoute>
     <PrivateRoute path='/order/:id'>
       <Order/>
     </PrivateRoute>
     <PrivateRoute path='/orderList'>
       <OrderList/>
     </PrivateRoute>
     <PrivateRoute path='/review'>
       <Review/>
     </PrivateRoute>
     <PrivateRoute path='/addService'>
       <AddService/>
     </PrivateRoute>
     <PrivateRoute path='/service'>
     <ServiceList/>
     </PrivateRoute>
     <PrivateRoute path='/makeAdmin'>
       <MakeAdmin/>
     </PrivateRoute>
     <PrivateRoute path='/mangeService'>
       <MangeService/>
     </PrivateRoute>
     <Route path='*'>
        <NotFound />
      </Route>
   </Switch>
 </Router>
 </UserContext.Provider>
  );
}

export default App;
