import React, { Component } from "react";
import '../../assets/css/login.css'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { login } from "../../actions/login_Action";
import { signup } from "../../actions/signup_action";

// import Loader from "../Loader/Loader";


class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginEmail: "",
      loginPassword: "",
      userName: "",
      signupPassword: "",
      phone: "",
      signUpmail: "",
      loader: false,
      errorMessage: ""

    }
    // this.onSave = this.onSave.bind(this)

  }


  handleChange = e => {
    // console.log(e);
    const _data = this.state;
    _data[e.target.name] = e.target.value
    this.setState({ _data });
    // console.log(this.state, 'data')
  };

  componentDidMount() {
    document.querySelector('.img__btn').addEventListener('click', function () {
      document.querySelector('.cont').classList.toggle('s--signup');
    });

  
  }
  login = (e) => {
    this.props.history.push('/parking/dashboard')

    e.preventDefault();
    // this.setState({
    //   loader: true
    // })
  
    // this.props
    //   .login({
    //     email: this.state.loginEmail,
    //     password: this.state.loginPassword,
    //   })
    //   .then(response => {
        
    //     this.setState({
    //       loader: false
    //     })
  
    //     if (response.response.data.status === 200) {
          
    //       localStorage.setItem("token", response.response.data.data.token);
    //       this.props.history.push('/parking/dashboard')
    //     } else {
    //       this.setState({
    //         errorMessage: response.response.data.message
    //       })
    //     }
    //   })
    //   .catch(error => {
    //     this.setState({
    //       loader: false
    //     })
    //     console.log(this.props);
    //     console.log("error: ", error)
       
    //   })

    // console.log(this.state)

  }
  signup = (e) => {
    this.props.history.push('/parking/dashboard')

    e.preventDefault();
    this.setState({
      loader: true
    })
  
    // this.props
    //   .signup({
    //     name: this.state.userName,
    //     email: this.state.signUpmail,
    //     phone: this.state.phone,
    //     password: this.state.signupPassword,
    //   })
    //   .then(response => {
        
    //     this.setState({
    //       loader: false
    //     })
  
    //     if (response.response.data.status === 200) {
          
    //       localStorage.setItem("token", response.response.data.data.token);
    //       this.props.history.push('/parking/dashboard')
    //     } else {
    //       this.setState({
    //         errorMessage: response.response.data.message
    //       })
    //     }
    //   })
    //   .catch(error => {
    //     this.setState({
    //       loader: false
    //     })
    //     console.log(this.props);
    //     console.log("error: ", error)
       
    //   })

    // console.log(this.state)
  }

  render() {

    return (
      <div>
        <p className="tip"></p>
        <div className="cont">
          <div className="form sign-in">
            <form className="signup" onSubmit={this.login} >
              <h2>Welcome back,</h2>
              <label>
                <span>Email</span>
                <input type="email" name="loginEmail" onChange={this.handleChange} value={this.state.loginEmail} />
              </label>
              <label>
                <span>Password</span>
                <input type="password" name="loginPassword" onChange={this.handleChange} value={this.state.loginPassword} />
              </label>
              <p className="forgot-pass"><Link to="/parking/forgetPassword">Forgot Password?</Link></p>
              <button type="submit" className="submit">Sign In</button>
              <button type="button" className="fb-btn">Connect with <span>facebook</span></button>
            </form>
          </div>
          <div className="sub-cont">
            <div className="img">
              <div className="img__text m--up">
                <h2>New here?</h2>
                <p>Sign up and discover great amount of new opportunities!</p>
              </div>
              <div className="img__text m--in">
                <h2>One of us?</h2>
                <p>If you already has an account, just sign in. We've missed you!</p>
              </div>
              <div className="img__btn">
                <span className="m--up">Sign Up</span>
                <span className="m--in">Sign In</span>
              </div>
            </div>
            <div className="form sign-up">
              <form className="signup" onSubmit={this.signup} >
                <h2>Time to feel like home,</h2>
                <label>
                  <span>Name</span>
                  <input type="text" name="userName" onChange={this.handleChange} value={this.state.userName} />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="signUpmail" onChange={this.handleChange} value={this.state.signUpmail} />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" name="signupPassword" onChange={this.handleChange} value={this.state.signupPassword} />
                </label>
                <label>
                  <span>Phone</span>
                  <input type="number" name="phone" onChange={this.handleChange} value={this.state.phone} />
                </label>
                <button type="submit" className="submit ">Sign Up</button>
                {/* <button type="button" className="fb-btn button" >Join with <span>facebook</span></button> */}
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginResponse: state.login,
    signUpResponse: state.signup

  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (data) => dispatch(login(data)),
    signup: (data) => dispatch(signup(data))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);