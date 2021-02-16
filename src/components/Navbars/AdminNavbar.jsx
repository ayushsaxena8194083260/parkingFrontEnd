import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import logoRight from "assets/img/proplify.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }

  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }

  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <div style={{ paddingRight: '20px', display: 'flex', alignItems: 'center' }}>
            {
              this.props.backButtonPath
                ? (
                  <Link to={this.props.backButtonPath}>
                    <i className="fa fa-arrow-circle-left backBtnIcon"></i>
                  </Link>
                )
                : ''
            }
            {/* <Navbar.Brand>
              <div style={{ paddingLeft: '50px' }}>{this.props.brandText}</div>
            </Navbar.Brand> */}
          </div>
          <div className="logo">
            <Link
              to="/admin/dashboard"
              className="simple-text logo-normal"
            >
              <img src={logoRight} alt="" className="logo_right" />
            </Link>
            <Navbar.Toggle onClick={this.mobileSidebarToggle} />
          </div>
        </Navbar.Header>
        <Navbar.Collapse>
          <AdminNavbarLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
