import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Pages/Dashboard/Dasboard/Dashboard';
import Explore from './components/Pages/Explore/Explore';
import Booking from './components/Pages/Home/Booking/Booking';
import Login from './components/Pages/Login/Login/Login';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import Register from './components/Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Home from './components/Pages/Home/Home/Home';
import ProductDetails from './components/Pages/Home/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/product/:productId">
              <ProductDetails></ProductDetails>
            </Route>

            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
