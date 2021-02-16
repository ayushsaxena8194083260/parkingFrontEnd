import React, { Component } from "react";
import '../../assets/css/signup.css'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { signup } from "../../actions/signup_action";


class signUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      phone: "",
      name: "",
      role:"service_provider",
      loader: false,
      errorMessage: ""
    }
  }
  onSave = (e) => {
    e.preventDefault();
    this.setState({
      loader: true
    })
  
    this.props
      .signup({
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
      })
      .then(response => {
        
        this.setState({
          loader: false
        })
  
        if (response.response.data.status === 200) {
          
          localStorage.setItem("token", response.response.data.data.token);
          this.props.history.push('/dashboard')
        } else {
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
    console.log(this.state, 'data')
};
 

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.loginResponse)
  }

  render() {
    return (
      <div className="signUpForm">

      <div className="content">
      <form className="signup" onSubmit={this.onSave} >

  <h3 className="ml-5 mb-4">Create account</h3>

  <h2>Already have an account? <span><Link to="/login">Sign In</Link></span></h2>

  <div className="signup__field">
    <input className="signup__input" type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name} />
    <label className="signup__label" htmlFor="name" >Username</label>
  </div>

  <div className="signup__field">
    <input className="signup__input" type="text" name="email" id="email" onChange={this.handleChange} value={this.state.email} />
    <label className="signup__label" htmlFor="email">Email</label>
  </div>

  <div className="signup__field">
    <input className="signup__input" type="password" name="password" id="password" onChange={this.handleChange} value={this.state.password} />
    <label className="signup__label" htmlFor="password">Password</label>
  </div>
  <div className="signup__field">
    <input className="signup__input" type="text" name="phone" id="phone" onChange={this.handleChange} value={this.state.phone} />
    <label className="signup__label" htmlFor="email">Phone</label>
  </div>
  <button type="submit">Sign Up</button>
</form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signUpResponse: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (data) => dispatch(signup(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(signUp);