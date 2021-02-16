
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";
import routes from '../../routes/routes'
import logoRight from "../../assets/images/logosm.png";
import { connect } from 'react-redux';
// import { sidebarMenu } from "views/redux/index.js";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      isSidebarCollapsed: false,
      sidebarData: [],
    }
    this.CollapseSidebar = this.CollapseSidebar.bind(this);
  }

  CollapseSidebar() {
    this.setState({ isSidebarCollapsed: !this.state.isSidebarCollapsed })
  }


  activeRoute(routeName) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));

    // // sidebar
    // this.sidebarMenuData();
    // sidebar
  }


  // sidebar

  sidebarMenuData() {
    
        this.setState({
          sidebarData: routes.map((d) => d.name.toLowerCase()) || []
        })
        console.log(this.state.sidebarData)
     
  }

  // sidebar

  render() {
    // const sidebarBackground = {
    //   backgroundImage: "url(" + this.props.image + ")"
    // };

    
    return (
      <div
        id="sidebar"
        className={this.state.isSidebarCollapsed ? 'sidebar sidebar_collapsed' : 'sidebar'}

      // data-color={this.props.color}
      // data-image={this.props.image}
      >
        {/* {this.props.hasImage ? (
            <div className="sidebar-background" style={sidebarBackground} />
          ) : (
            null
          )} */}
        <div className="logo">
          <Link
            to="/admin/dashboard"
            className="simple-text logo-normal"
          >
            <img src={logoRight} alt="" className="logo_right" />
          </Link>
          <span onClick={this.CollapseSidebar} className="sidebarMainIcon"><i className="fa fa-bars"></i></span>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {routes
              
              .map((prop, key) => {
                  
                if (!prop.redirect)
                  return (
                    <li
                      className={
                        prop.upgrade
                          ? "active active-pro"
                          : this.activeRoute(prop.layout + prop.path)
                      }
                      key={key}
                    >
                      <NavLink
                        to={prop.layout + prop.path}
                        className="nav-link"
                        activeClassName="active_nav-link"
                      >
                        <i className={prop.icon} />
                        <p>{prop.name}</p>
                      </NavLink>
                    </li>
                  );
                return null;
              })}
          </ul>
          <ul id="logout_sidebar_button" class="nav ">
           
      <li >
        <a href="" className="flex">
                         <i className="fa fa-sign-out"/>
                         <p>Signout</p>
                      </a>
      
      </li>
  </ul>
        </div>
      </div>
    );
  }
}


// const mapStateToProps = state => {
//   return {
//     sidebarMenuAllData: state.sidebarMenu
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     sidebarMenu: (data) => dispatch(sidebarMenu(data))
//   }
// }

export default Sidebar;
