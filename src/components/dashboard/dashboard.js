import React, { Component } from "react";
import '../../assets/css/dashboard.css'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Footer from '../footer/footer'
import { notification } from "../../actions/signup_action";
import { connect } from 'react-redux';
import numberPlate from '../../assets/images/Number-plate.png'
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://127.0.0.1:5000');

// import Loader from "../Loader/Loader";


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
           

        }
        // this.onSave = this.onSave.bind(this)

    }


  
    componentDidMount() {

      client.onopen = () => {
        console.log('WebSocket Client Connected');
      };
      client.onmessage = (message) => {
        const dataFromServer = JSON.parse(message.data);
        console.log('got reply! ', dataFromServer);
        if (dataFromServer.type === "message") {
          this.setState((state) =>
            ({
              messages: [...state.messages,
              {
                msg: dataFromServer.msg,
                user: dataFromServer.user
              }]
            })
          );
        }
      };



      // const publicVapidKey =  "BDh0NZ3s-HrMptqGupy6S1N7RAYvklF69niw_-drjohieArj4poUPhy8AWzul9InYc22h5McjTPnnD9qvIcJXS8";

      //   if ("serviceWorker" in navigator) {
      //       send().catch(err => console.error(err));
      //     }
          
      //     async function send() {
              
      //       console.log("Registering service worker...");
      //       const register = await navigator.serviceWorker.register("/worker.js", {
      //         scope: "/"
      //       });
      //       console.log("Service Worker Registered...");
          
            
      //       console.log("Registering Push...");
      //       const subscription = await register.pushManager.subscribe({
      //         userVisibleOnly: true,
      //         applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
      //       });
      //       console.log("Push Registered...");
          
      //       console.log("Sending Push...");
      //       await fetch("http://localhost:5000/api/notification", {
      //         method: "POST",
      //         body: JSON.stringify(subscription),
      //         headers: {
      //           "content-type": "application/json"
      //         }
      //       });
      //       console.log("Push Sent...");
      //     }
          
      //     function urlBase64ToUint8Array(base64String) {
      //       const padding = "=".repeat((4 - base64String.length % 4) % 4);
      //       const base64 = (base64String + padding)
      //         .replace(/\-/g, "+")
      //         .replace(/_/g, "/");
          
      //       const rawData = window.atob(base64);
      //       const outputArray = new Uint8Array(rawData.length);
          
      //       for (let i = 0; i < rawData.length; ++i) {
      //         outputArray[i] = rawData.charCodeAt(i);
      //       }
      //       return outputArray;
      //     }     
         
          
    }
  

    render() {

        return (
          <div className="content">           
               <div className=" Section shadow-lg">
              
                <div className=" border-bottom">
                  <div className="head">
                    <h2 className="heading">Car-Info</h2>
                    <div className="toggle">
                  <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                  <span className="con">Is-Blocked</span>
                  </label>
                  </div>
                  </div>
                
                </div>
                <div className="row mt-5 border-bottom">
                  <div className="col-md-5 mb-4">
                    <div className="carImage">
                      <img className="carImage" src={numberPlate} alt="numberPlate"></img>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="carDetails">
                    <table className="table">
                      <tbody>
                      <tr className="tab-row">
                        <td className="tab-col">Name:</td>
                        <td>Ayush Saxena</td>
                      </tr>
                      <tr className="tab-row">
                        <td className="tab-col">Car Number:</td>
                        <td>THE CEO 1</td>
                      </tr>
                      <tr className="tab-row">
                        <td className="tab-col">Entry Time:</td>
                        <td >11:00 AM</td>
                      </tr>
                      <tr className="tab-row">
                        <td className="tab-col">Entry Date:</td>
                        <td >2/15/2021</td>
                      </tr>
                     
                      </tbody>
                    </table>
                    </div>
                  </div>
                </div>
             <div className="row ml-4 mt-3">
             <div class="buttons">
                <button name="submitButton" class='submit' onclick="showSnackBar(event)">History</button>
                <button name="cancelButton" class='cancel' onclick="showSnackBar(event)">Block User</button>
                <button name="cancelButton" class='cancel' onclick="showSnackBar(event)">View User</button>

            </div>
             {/* <div class="btn-group btn-group-lg center ml" role="group" aria-label="...">
             <button type="button" class="btn btn-secondary">History</button>
             <button type="button" class="btn btn-secondary"  data-toggle="modal" data-target="#blockUser">Block User</button>
             <button type="button" class="btn btn-secondary"  data-toggle="modal" data-target="#exampleModal">View USer</button>
             </div>              */}
             </div>
              </div>
             
            
            {/* -----------------------------Modal----------------------------------- */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Car Owner</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="col-md-12">
            <div class="form-label-group">
              <label form="sign-email">Car Number</label>
              <input type="text" id="qe" name="qe" class="form-control" placeholder="Car Number" required
                ></input>
            </div>
            <div class="form-label-group">
              <label form="sign-email">Owners Name</label>
              <input type="text" id="qe" name="qe" class="form-control" placeholder="Owners Name" required
                ></input>
            </div>
            <div class="form-label-group">
              <label form="sign-email">Phone Number</label>
              <input type="text" id="qe" name="qe" class="form-control" placeholder="Phone Number" required
                ></input>
            </div>
            <div class="form-label-group">
              <label form="sign-email">Address</label>
              <input type="text" id="qe" name="qe" class="form-control" placeholder="Address" required
                ></input>
            </div>
          </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        {/* -----------------------------------------Block USer------------------------------ */}
        <div class="modal fade" id="blockUser" tabindex="-1" role="dialog" aria-labelledby="blockUserLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Reason To Block</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="col-md-12">
            <div class="form-label-group">
              <label form="sign-email">Reason To Block</label>
              <input type="text" id="qe" name="qe" class="form-control" placeholder="Reason To Block" required
                ></input>
            </div>
            <div class="form-label-group">
              <label form="sign-email">Owners Name</label>
              <input type="text" id="qe" name="qe" class="form-control" placeholder="Owners Name" required
                ></input>
            </div>
            <div class="form-label-group">
              <label form="sign-email">Car Number</label>
              <input type="text" id="qe" name="qe" class="form-control" placeholder="Car Number" required
                ></input>
            </div>
            <div class="form-label-group">
              <label form="sign-email">Date of Block</label>
              <input type="date" id="qe" name="qe" class="form-control" placeholder="Date of Block" required
                ></input>
            </div>
          </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        
             {/* <Footer></Footer> */}
                
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        notification: state.notification,
      
  
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      notification: (data) => dispatch(notification(data)),
  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);