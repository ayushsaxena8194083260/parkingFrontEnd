import React, { Component } from "react";
import '../../assets/css/login.css'
import { connect } from 'react-redux';
import { resetPassword } from "../../actions/login_Action";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";


class ResetPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email:this.props.location.state,
      password: "",
      retype: "",
      loader: false,
      errorMessage: ""
    
    }
    this.onSave = this.onSave.bind(this)
console.log(props)
  }


onSave = (e) => {
  e.preventDefault();
  this.setState({
    loader: true
  })

  this.props
    .resetPassword({
      email: this.state.email,
      new_password: this.state.password,
      confirm_password: this.state.retype

    })
    .then(response => {
      
      this.setState({
        loader: false
      })

      if (response.response.data.status === 200) {
        this.props.history.push('/parking/login')
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
componentWillReceiveProps(nextProps) {
  console.log(nextProps)
}


  render() {
   
    return (
      <div>
      <div class="text-center" >
          <div class="logo">Reset password</div>
      
          <div class="login-form-1">
            <form id="forgot-password-form" onSubmit={this.onSave}>
              <div class="etc-login-form">
                <p>We have verified the otp Please reset your password here.</p>
              </div>
              <div class="login-form-main-message"></div>
              <div class="main-login-form">
                <div class="login-group">
                <div class="form-group">
                    <label for="fp_email" class="sr-only">New Password</label>
                    <input type="text" class="form-control" id="fp_email" name="new_password" onChange={this.handleChange} placeholder="New Password" />
                  </div>
                  <div class="form-group">
                    <label for="fp_email" class="sr-only">Confirm Password</label>
                    <input type="text" class="form-control" id="fp_email" name="confirm_password" onChange={this.handleChange} placeholder="Confirm Password" />
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
    resetPassword: state.resetPassword
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: (data) => dispatch(resetPassword(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);