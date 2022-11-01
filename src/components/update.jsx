import { MdEmail, MdLocationCity, MdLocationOn, MdLock, MdOutlinePermIdentity, MdPassword, MdPersonOutline, MdPhone, MdWorkspaces } from 'react-icons/md';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';



const Update = ()=>{

    const {id} = useParams();
    const [customerAddressData, setCustomerAddressData] = useState([]);

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");


    const setAllValues = ()=>{
        setTitle(customerAddressData.title)
        setCompany(customerAddressData.company)
        setAddress1(customerAddressData.address1)
        setAddress2(customerAddressData.address2)
        setZip(customerAddressData.zip)
        setCity(customerAddressData.city)
    }

    

    useEffect(()=>{
        
            axios.get(`http://localhost:7253/api/getCustomerAddress/${id}`)
            .then((response)=>{
                try{
                    setCustomerAddressData(response.data.customerAddress)
                    console.log(response.data.customerAddress);
                }catch(err){
                    console.log(err);
                }
            })


        
    },[id])

    const handleUpdate = ()=>{
        if(title === ''|| company==='' || address1==='' || address2==='' || zip==="" || city===''){
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'All Input fields required',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            axios.put(' http://localhost:7253/api/updateCustomerAddress', {
            CustomerAddressBasicAttribute:{
                ID: id,
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
        }).then((response)=>{
            if(response){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Item updated successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
        }
        
    }

    return(
        <div className="update_body">
            <div className="update_template">
                <h1 className="header">Update CustomerAddress</h1>

                <div className='upd_options'>
                    <div className='left_upd_option'>
                        <li><Link to={'/search'}>Back</Link></li>
                    </div>

                    <div className='right_upd_option'>
                        <button style={{outline:'none',float:'right',backgroundColor:'rgb(18, 168, 18)', color:'#fff', padding:'8px 12px', borderRadius:'8px', fontSize:'18px',cursor:'pointer'}} type='button' onClick={()=>{handleUpdate()}}> Update all</button>
                        {/* <li><Link onClick={()=>{handleUpdate()}} to={'/search'} >Set all</Link></li> */}
                    </div>
                </div>

                <form className="form">
                    <section >
                            <label htmlFor="title">Show previous value of Title :  <button style={{width:'100px', padding:'5px 8px'}} type='button' onClick={()=>{setTitle(customerAddressData.title)}}  className = 'setvalue'>Show </button></label>
                        <div className="upd_form_fields">
                            <li> <MdPersonOutline size={20} /></li>
                            <input name="title" id="title" defaultValue={title} type='text' placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}  />
                        </div>
                            
                    </section>

                    <section >
                            <label htmlFor="company">Show previous value of Company : <button style={{width:'100px', padding:'5px 8px'}} type='button' onClick={()=>{setCompany(customerAddressData.company)}}  to={''} className = 'setvalue'>Show </button></label>
                        <div className="upd_form_fields">
                            <li> <MdWorkspaces size={20} /></li>
                            <input name="company" id="company" defaultValue={company} type='text' placeholder='Company' onChange={(e)=>{setCompany(e.target.value)}} />
                        </div>
                            
                    </section>

                    <section >
                            <label htmlFor="address1">Show previous value of Address1 :  <button style={{width:'100px', padding:'5px 8px'}} type='button' onClick={()=>{setAddress1(customerAddressData.address1)}} to={''} className = 'setvalue'>Show </button></label>
                        <div className="upd_form_fields">
                            <li> <MdLocationOn size={20} /></li>
                            <input name="address1" id="address1" defaultValue={address1} type='text' placeholder='address1' onChange={(e)=>{setAddress1(e.target.value)}} />
                        </div>
                            
                    </section>

                    <section >
                            <label htmlFor="address2">Show previous value of Address2 :   <button style={{width:'100px', padding:'5px 8px'}} type='button' onClick={()=>{setAddress2(customerAddressData.address2)}} to={''} className = 'setvalue'>Show </button></label>
                        <div className="upd_form_fields">
                            <li> <MdLocationOn size={20} /></li>
                            <input name="address2" id="address2" defaultValue={address2} type='text' placeholder='address2' onChange={(e)=>{setAddress2(e.target.value)}}  />
                        </div>
                            
                    </section>

                    <section >
                            <label htmlFor="zip">Show previous value of Zip :  <button style={{width:'100px', padding:'5px 8px'}} type='button' onClick={()=>{setZip(customerAddressData.zip)}} to={''} className = 'setvalue'>Show </button></label>
                        <div className="upd_form_fields">
                            <li> <MdOutlinePermIdentity size={20} /></li>
                            <input name="zip" id="zip" defaultValue={zip} type='text' placeholder='Zip' onChange={(e)=>{setZip(e.target.value)}} />
                        </div>
                            
                    </section>

                    <section style={{marginBottom:'10px'}} >
                            <label htmlFor="city">Show previous value of City :   <button style={{width:'100px', padding:'5px 8px'}} type='button' onClick={()=>{setCity(customerAddressData.city)}} to={''} className = 'setvalue'>Show </button></label>
                        <div className="upd_form_fields">
                            <li> <MdLocationCity size={20} /></li>
                            <input name="city" id="city" defaultValue={city} type='text' placeholder='City' onChange={(e)=>{setCity(e.target.value)}} />
                        </div>
                            
                    </section>
                </form>

            </div>

        </div>
    )
}

export default Update;