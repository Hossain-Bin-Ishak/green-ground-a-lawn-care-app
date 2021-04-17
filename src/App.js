import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import OrderList from './components/Dashboard/Admin/OrderList/OrderList';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import BookingList from './components/Dashboard/User/BookingList/BookingList';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddService from './components/Dashboard/Admin/AddService/AddService';
import AddReview from './components/Dashboard/User/AddReview/AddReview';
import ManageServices from './components/Dashboard/Admin/ManageServices/ManageServices';
import Admin from './components/Dashboard/Admin/Admin/Admin';
import Booking from './components/Dashboard/User/Booking/Booking';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/services/:bookingId">
          <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
          <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/dashboard"> 
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addService"> 
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/manageServices"> 
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
          <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
          <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/booking">
          <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/MakeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route exact path="/home">
           <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;