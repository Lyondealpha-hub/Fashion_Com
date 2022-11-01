import Navbar from "./includes/navbar";
import pic from '../pics/ship.jpg';
import {FaAddressCard, FaBoxOpen} from 'react-icons/fa'
import {GiShipBow} from 'react-icons/gi';
import { Link } from "react-router-dom";


const Dashboard = ()=>{
    return(
        
        <div className="dashboard">
            
        
            <div className="landingpage_body">
                <div style={{backgroundImage:`url(${pic})`, width:'100%', height:'100%', backgroundSize:'cover', backgroundRepeat:'none',backgroundPosition:'center'}} className="landingpage_row1">
                    <h3 style={{textAlign:'center',color:'#000'}}>Welcome to PORT 360</h3>
                    cvbnm,.
                </div>

                <div className="landingpage_row2">
                    
                        <div className="content_divs">
                            <FaAddressCard style={{margin:'5px 0 0 175px', alignSelf:'center'}} size={70}  />
                            <h2 style={{fontStyle:'italic', textAlign:'center',margin:0,}}>CustomerAddress</h2>
                            <p style={{fontStyle:'italic', textAlign:'center',margin:0,}}>
                                Lorem ipsum dolor sit amet, consectetur
                                 
                            </p>
                             <button style={{width:'50%', marginTop:'45px',float:'right',marginRight:'12px'}} className="dashboad_link" type="button">CustomerAddress</button> 

                        </div>

                        <div className="content_divs">
                        <FaBoxOpen style={{margin:'5px 0 0 175px', alignSelf:'center'}} size={70} />
                            <h2 style={{fontStyle:'italic', textAlign:'center',margin:0,}}>Items</h2>
                            <p style={{fontStyle:'italic', textAlign:'center',margin:0,}}>
                                Lorem ipsum dolor sit amet, consectetur
                                 
                            </p>
                             <button style={{width:'50%', marginTop:'45px',float:'right',marginRight:'12px'}} className="dashboad_link" type="button">Item Details</button>
                        </div>

                        <div className="content_divs">
                        <GiShipBow style={{margin:'5px 0 0 175px', alignSelf:'center'}} size={70} />
                            <h2 style={{fontStyle:'italic', textAlign:'center',margin:0,}}>Shipper</h2>
                            <p style={{fontStyle:'italic', textAlign:'center',margin:0,}}>
                                Lorem ipsum dolor sit amet, consectetur
                                 
                            </p>
                             <button style={{width:'50%', marginTop:'45px',float:'right',marginRight:'12px'}} className="dashboad_link" type="button">Shipments</button>
                        </div>

                    
                </div>

            </div>

        </div>
    );
}

export default Dashboard;