import React, { Component } from "react";
import '../../assets/css/carList.css'
import FilterPopUp from "../filterPopUp/FilterPopUp";


class CarBlocked extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isShowFilterPopUp: false,

    };

  }
  componentDidMount() {
  }

  onModalClose() {
    this.setState({
    
      isShowFilterPopUp: false,
    
    });
  
  }
  onModalOpen () {
    
    this.setState({ isShowFilterPopUp: true })
}

  render() {
    return (
      <div className="content">
    <div className="top-head ">
     <div className="border-bottom">
       <p>Car Blocked</p>
     </div>
   </div>
   <div className="row mt-5 ">
       <div className="col-md-6">
        <div class="search-box">
          <input class="search-input" type="text" placeholder="Search something.." />
          <button class="search-btn"><i class="fa fa-search"></i></button>
        </div>
       </div>
       <div className="col-md-4"></div>
        <div className="col-md-1">
           <button className="filter-btn"><i className="fa fa-filter"></i></button>
        </div>
   </div>

   <div className="row  mt-5">
       <div className="col-md-12">
       <div id="no-more-tables">
            <table class="col-md-12 table-bordered table-striped table-condensed cf car-table">
        		<thead class="cf">
        			
                    <th>S.no</th>
                   <th>Name</th>
                   <th>Car Number</th>
                   <th>Entry Time</th>
                   {/* <th>View</th> */}
        			
        			
        		</thead>
                <tbody>
                   <tr>
                       <td>1</td>
                       <td>Ayush Saxena</td>
                       <td>UP23K1546 </td>
                       <td>10:00AM</td>
                       {/* <td><i className="fa fa-eye"></i></td> */}
                   </tr>
                   <tr>
                       <td>2</td>
                       <td>Harshit Johari</td>
                       <td>UP25AV0330 </td>
                       <td>10:00AM</td>
                       {/* <td><i className="fa fa-eye"></i></td> */}
                   </tr>
                   <tr>
                       <td>3</td>
                       <td>Ayush Saxena</td>
                       <td>UP23K1546 </td>
                       <td>10:00AM</td>
                       {/* <td><i className="fa fa-eye"></i></td> */}
                   </tr>
                   <tr>
                       <td>4</td>
                       <td>Harshit Johari</td>
                       <td>UP25AV0330 </td>
                       <td>10:00AM</td>
                       {/* <td><i class2Name="fa fa-eye"></i></td> */}
                   </tr>
                   <tr>
                       <td>5</td>
                       <td>Ayush Saxena</td>
                       <td>UP23K1546 </td>
                       <td>10:00AM</td>
                       {/* <td><i className="fa fa-eye"></i></td> */}
                   </tr>
                   <tr>
                       <td>6</td>
                       <td>Harshit Johari</td>
                       <td>UP25AV0330 </td>
                       <td>10:00AM</td>
                       {/* <td><i className="fa fa-eye" onClick={this.toggle}></i></td> */}
                   </tr>
               </tbody>
</table>
        </div>
       </div>
      
   </div>
        
      </div>
    );
  }
}


export default CarBlocked;
