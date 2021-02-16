import React, { Component } from "react";
import '../../assets/css/forget-password.css'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { forgotPassword } from "../../actions/login_Action";
import Loader from "../Loader/Loader";
import {NotificationContainer, NotificationManager} from 'react-notifications';

class ForgetPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      loader: false,
      errorMessage: ""
    
    }
    this.onSave = this.onSave.bind(this);
    this.createNotification = this.createNotification.bind(this)

  }
  createNotification(type)  {

  
      switch (type) {
        
        case 'info':          
          NotificationManager.info('Info message');          
          break;
          
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
          default:

      }
    
  }

onSave = (e) => {
  e.preventDefault();
  this.setState({
    loader: true
  })

  this.props
    .forgotPassword({
      email: this.state.email,
    })
    .then(response => {
      
      this.setState({
        loader: false
      })

      if (response.response.data.status === 200) {
             
        this.props.history.push({
        pathname: "/parking/otp",
         search: "",
         state: response.response.data
        })
        NotificationManager.info('Info message');


      } else {
        this.setState({
          errorMessage: response.response.data.message
        })
      }
      return false
    })
    .catch(error => {
      this.setState({
        loader: false
      })
      console.log(this.props);
      console.log("error: ", error)
      return false
    })
    return false
}
handleChange = e => {
    console.log(e);
    const _data = this.state;
    _data[e.target.name] = e.target.value
    this.setState({ _data });
    console.log(this.state, 'data')
};


componentDidMount(){

}
  render() {
    return (
      <div>
  <div class="text-center styleForm" >
      <div class="logo">Forgot password</div>
  
      <div class="login-form-1">
        <form id="forgot-password-form" onSubmit={this.onSave}>
          <div class="etc-login-form">
            <p>When you fill in your registered email address, you will be sent instructions on how to reset your password.</p>
          </div>
          <div class="login-form-main-message"></div>
          <div class="main-login-form">
            <div class="login-group">
              <div class="form-group">
                <label for="fp_email" class="sr-only">Email address</label>
                <input type="text" class="form-control" id="fp_email" name="email" onChange={this.handleChange} placeholder="email address" />
              </div>
            </div>
            <button type="submit" class="login-button"><i class="fa fa-chevron-right"></i></button>
          </div>
          <div class="etc-login-form">
          <p>already have an account? <a><Link to="/parking/login">login here </Link></a></p>
            {/* <p>new user? <a href="#">create new account</a></p> */}
          </div>
        </form>
      </div>
      </div>
      </div>
    
   );
  }
}

const mapStateToProps = state => {
  console.log(state,'dddd')
  return {
    forgotPassword: state.forgotPassword
  }
}

const mapDispatchToProps = dispatch => {
  return {
    forgotPassword: (data) => dispatch(forgotPassword(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);