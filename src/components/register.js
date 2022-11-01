import axios from 'axios'
import { useState} from "react";
import { MdEmail, MdLocationCity, MdLocationOn, MdLock, MdOutlinePermIdentity, MdPassword, MdPersonOutline, MdPhone, MdWorkspaces } from 'react-icons/md';
import Swal from 'sweetalert2';


const Register = ()=>{

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    

    const [loading, setloading] = useState(false)

    const submitBtn = ()=>{

        if(title == ''|| company=='' || address1=='' || address2=='' || zip=="" || city==''){
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'All Input fields required',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            axios.post('http://localhost:7253/api/createCustomerAddress',{
            CustomerAddressBasicAttribute:{
                CustomerID: 1,
                AddressTypeID: 1,
                DivisionID: 1,
                Title: title,
                Company: company,
                Address1: address1 ,
                Address2: address2,
                Zip: zip,
                City: city,
                RegionID: 1,
                CountryID: 1,
            }
        }).catch((err)=>{
            console.log(err);
        })
     }


        
    }
    

    // const submitBtn = async ()=>{
        
    //     setloading(true)
    //     const response = await Axios.post('http://localhost:7253/api/createCustomerAddress',
    //     {
    //         method : 'Post',
    //         crossorigin : true
    //     },
    //     {
            
    //         CustomerID: 1,
    //         AddressTypeID: 1,
    //         DivisionID: 1,
    //         Title: title,
    //         Company: company,
    //         Address1: address1 ,
    //         Address2: address2,
    //         Zip: zip,
    //         City: city,
    //         RegionID: 1,
    //         CountryID: 1,
            
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //         setloading(false)
    //     })
        
    //     console.log(response);
    //     setloading(false)
    // }


    return (
        <div className="register_body">
       
            <div className="register_template">
             <h1 className="header">Customer Identity Details</h1> 

            <form className="form">
                    <div className='form_fields'>
                         <li> <MdPersonOutline size={20} /></li>
                        <input type='text' placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}  />
                    </div>

                    <div className='form_fields'>
                         <li> <MdWorkspaces size={20} /></li>
                        <input type='text' placeholder='Company name' onChange={(e)=>{setCompany(e.target.value)}}  />
                    </div>
                    <br/>
                    <div className='form_fields'>
                          <li><MdLocationOn size={20}  /></li> 
                        <input type='text' placeholder='Address 1' onChange={(e)=>{setAddress1(e.target.value)}}  />
                    </div>
                    <br/>
                    <div className='form_fields'>
                        <li><MdLocationOn size={20}  /></li>
                        <input type='text' placeholder='Address 2' onChange={(e)=>{setAddress2(e.target.value)}}  />
                    </div>
                    <br/>
                    <div className='form_fields'>
                        <li> <MdOutlinePermIdentity size={20}/> </li>
                        <input type='text' placeholder='ZIPCode' onChange={(e)=>{setZip(e.target.value)}}  />
                    </div>
                    <br/>
                    <div className='form_fields'>
                        <li><MdLocationCity size={20}  /></li>
                        <input type='text' placeholder='City' onChange={(e)=>{setCity(e.target.value)}}  />
                    </div>

                    

                    
                    <p style={{ textAlign: 'left',marginLeft:'45px',marginTop:'8px' }}> <small> By clicking Sign Up/Register, you agree to <span style={{ color: 'black' }}> our Terms and Conditions, Data Policy</span> and acknowledge you read the <span style={{color:'black'}}> Privacy Policy.</span> </small> </p>
                    
                {!loading && <button style={{backgroundColor:'rgb(18, 168, 18)', color:'#fff'}} type='button' onClick={()=>submitBtn()} > Register</button>}
                {loading && <button type='button' onClick={()=>submitBtn()} > Hold on...</button>}

                    <br/>
                    <div className='links' style={{display:'inline-flex', margin:'35px 0', fontSize:'18px'}}>
                        <li style={{marginLeft:'0',listStyle:'none',padding:'0 50px'}}> <span style={{fontSize:'17px'}}>Already a Member??</span> <a style={{color:'#000'}} href='/Login'>Login now</a> </li>
                        
                    </div>
            </form>
        
        </div>
    </div>
            
    );
}

export default Register;