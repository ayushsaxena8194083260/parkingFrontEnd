import React, { Component } from "react";
import '../../assets/css/login.css'
import { connect } from 'react-redux';
import { otpVerification } from "../../actions/login_Action";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";


class OTP extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: this.props.location.state.data.email,
      otp:"",
      loader: false,
      errorMessage: ""
    
    }
    this.onSave = this.onSave.bind(this)
  }


onSave = (e) => {
  e.preventDefault();
  this.setState({
    loader: true
  })

  this.props
    .otpVerification({
      email: this.state.email,
      otp: this.state.otp,
    })
    .then(response => {
      
      this.setState({
        loader: false
      })

      if (response.response.data) {
        this.props.history.push('/resetPassword');
        this.props.history.push({
            pathname: "/parking/resetPassword",
             search: "",
             state: this.props.location.state.data.email}) 
      } else if (response.response.data.message){
        this.setState({
          errorMessage: response.response.data.message
        })
      }
    })
    .catch(error => {
      this.setState({
        loader: false
      })
      console.log(this.props);
      console.log("error: ", error)
    })
}
handleChange = e => {
    console.log(e);
    const _data = this.state;
    _data[e.target.name] = e.target.value
    this.setState({ _data });
};
componentWillReceiveProps(nextProps) {
    
  console.log(nextProps.loginResponse)
}


  render() {

    return (
      <div>
      <div class="text-center" >
          <div class="logo">OTP Verification</div>
      
          <div class="login-form-1">
            <form id="forgot-password-form" onSubmit={this.onSave}>
              <div class="etc-login-form">
                <p>We have sent Otp on {this.state.email}.</p>
              </div>
              <div class="login-form-main-message"></div>
              <div class="main-login-form">
                <div class="login-group">
                  <div class="form-group">
                    <label for="fp_email" class="sr-only">OTP</label>
                    <input type="text" class="form-control" id="fp_email" name="otp" onChange={this.handleChange} placeholder="OTP Verification" />
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
  return {
    otpVerification: state.otpVerification
  }
}

const mapDispatchToProps = dispatch => {
  return {
    otpVerification: (data) => dispatch(otpVerification(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OTP);