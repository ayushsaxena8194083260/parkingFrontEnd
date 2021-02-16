import React, { Component } from "react";
import '../../assets/css/footer.css'
// import $ from 'jquery'; 

// import Loader from "../Loader/Loader";


class Footer extends Component {
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
    }

    render() {

        return (
            <div>

<section class="footer">
  <div class="container">
    <div class="footer__content">
      <div class="footer__heading">
        <h2>Bhairab</h2>
      </div>
      <p class="mb-0">Content & Graphics © 2020 erothtech.com</p>

      <ul class="social__media">
        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </div>
</section>
           
            </div>
        );
    }
}


export default Footer;