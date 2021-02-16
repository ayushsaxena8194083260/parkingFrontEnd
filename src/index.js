import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import './index.css';
import "./assets/css/style.css";
import "./assets/css/demo.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/animate.min.css";
import store from "./redux/store";
import LogIn from "./components/login/login";
import ForgetPassword from "./components/login/forgetPassword";
import OTP from './components/login/otp'
import ResetPassword from './components/login/resetPassword'
import signUp from "./components/signup/signup";
import AdminLayout from "./layouts/Admin";
import login from "./components/login/login";


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Reacts"
    };
  }

 

  isLogin() {
    let token = localStorage.getItem("token")
    return token ? true : false
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/parking/login" render={props => <LogIn {...props} />} />
            <Route path="/parking/signup" component={signUp} />
            <Route path="/parking/forgetPassword" component={ForgetPassword} />
            <Route path="/parking/resetPassword" component={ResetPassword} />
            <Route path="/parking/otp" component={OTP} />

             <Route path="/parking" render={props => (
              this.isLogin()
              ? <AdminLayout {...props} />
              : <Redirect to="/parking/login" />
            )} />
            <Redirect from="/" to="/parking/login" /> 
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
