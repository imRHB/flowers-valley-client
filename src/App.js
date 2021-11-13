import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import RoseBouquets from './Pages/Bouquet/RoseBouquets/RoseBouquets';
import Contact from './Pages/Contact/Contact';
import BouquetDetails from './Pages/Details/BouquetDetails/BouquetDetails';
import PlaceOrder from './Pages/Details/PlaceOrder/PlaceOrder';
import NotFound from './Pages/Error/NotFound/NotFound';
import Home from './Pages/Landing/Home/Home';
import Occasions from './Pages/Occasions/Occasions/Occasions';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Dashboard from './Pages/User/Dashboard/Dashboard/Dashboard';
import Login from './Pages/User/Login/Login';
import PrivateRoute from './Pages/User/PrivateRoute/PrivateRoute';
import Registration from './Pages/User/Registration/Registration';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/rose-bouquet">
              <RoseBouquets></RoseBouquets>
            </Route>
            <Route path="/rose-bouquet/:bqId">
              <BouquetDetails></BouquetDetails>
            </Route>
            <PrivateRoute exact path="/place-order/:bqId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/occasion">
              <Occasions></Occasions>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            {/* Dashboard private route */}

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            {/* User login ang registration */}

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
