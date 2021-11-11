import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import RoseBouquets from './Pages/Bouquet/RoseBouquets/RoseBouquets';
import NotFound from './Pages/Error/NotFound/NotFound';
import Home from './Pages/Landing/Home/Home';
import Occasion from './Pages/Occasion/Occasion';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/User/Login/Login';
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
            <Route path="/rose-bouquet">
              <RoseBouquets></RoseBouquets>
            </Route>
            <Route path="/occasion">
              <Occasion></Occasion>
            </Route>

            <Route path="/dashboard">

            </Route>
            <Route path="/my-order">

            </Route>
            <Route path="/payment">

            </Route>
            <Route path="/add-product">

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
