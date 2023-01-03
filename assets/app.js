/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// start the Stimulus application
import "./bootstrap";
import Navbar from "./js/components/Navbar";
import PrivateRoute from "./js/components/PrivateRoute";
import AuthContext from "./js/contexts/AuthContext";
import CustomerPage from "./js/pages/CustomerPage";
import CustomersPage from "./js/pages/CustomersPage";
import HomePage from "./js/pages/HomePage";
import PricingPage from "./js/pages/PricingPage";
import InvoicePage from "./js/pages/InvoicePage";
import InvoicesPage from "./js/pages/InvoicesPage";
import LoginPage from "./js/pages/LoginPage";
import RegisterPage from "./js/pages/RegisterPage";
import authAPI from "./js/services/authAPI";
// any CSS you import will output into a single css file (app.css in this case)
import "./styles/app.css";
import ErrorPage from "./js/pages/ErrorPage";
import CalendlyPage from "./js/pages/CalendlyPage";
import Footer from "./js/components/Footer";
import PelopsPage from "./js/pages/PelopsPage";

authAPI.setup();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated()
  );
  
  const NavbarWithRouter = withRouter(Navbar);
  const FooterWithRouter = withRouter(Footer);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >

      <HashRouter>
        <NavbarWithRouter />
        <FooterWithRouter />
          <Switch>
          <Route path="/pelops.io" component={PelopsPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/customers/:id" component={CustomerPage} />
            <PrivateRoute path="/invoices/:id" component={InvoicePage} />
            <PrivateRoute path="/customers" component={CustomersPage} />
            <PrivateRoute path="/invoices" component={InvoicesPage} />
            <Route path="/pricing" component={PricingPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/rendez-vous" component={CalendlyPage} />
            <Route path="/" component={ErrorPage} />
          </Switch>
      </HashRouter>
      <ToastContainer  position={toast.POSITION.BOTTOM_LEFT}/>
    </AuthContext.Provider>
  );
};
const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
