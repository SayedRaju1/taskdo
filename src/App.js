import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import Home from './components/Home/Home';
// import Dashboard from './components/Dashboard/Dashboard/Dashboard';
// import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Order from './components/Order/Order';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import AddService from './components/AddService/AddService';
import Review from './components/Review/Review';
import MyServices from './components/MyServices/MyServices';
import ServiceList from './components/ServiceList/ServiceList';
import PrivateRoute from './components/Login/PrivateRoute';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/myServices">
            <MyServices></MyServices>
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/order/form">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/order/:title">
            <Order></Order>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
