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
import AddProduct from './Pages/User/Dashboard/AddProduct/AddProduct';
import AddReview from './Pages/User/Dashboard/AddReview/AddReview';
import Dashboard from './Pages/User/Dashboard/Dashboard/Dashboard';
import ManageOrders from './Pages/User/Dashboard/ManageOrders/ManageOrders';
import MyOrder from './Pages/User/Dashboard/MyOrder/MyOrder';
import Payment from './Pages/User/Dashboard/Payment/Payment';
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
            <PrivateRoute path="/rose-bouquet/:bqId">
              <BouquetDetails></BouquetDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/place-order/:bqId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/occasion">
              <Occasions></Occasions>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/my-order">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/payment">
              <Payment></Payment>
            </Route>
            <Route path="/add-product">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/add-review">
              <AddReview></AddReview>
            </Route>
            <Route path="/manage-orders">
              <ManageOrders></ManageOrders>
            </Route>

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
