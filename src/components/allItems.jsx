import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./includes/navbar";
import './styles/allitems.css'
import './includes/styles/allstyles.css';
import Swal from "sweetalert2";

const AllItems = () => {
    //temporal data
    const[items,setitems] = useState([])

    //search criteria
    const[searchinput,setsearchinput] = useState('');



    const handleSearch = ()=>{

            axios.get(`http://localhost:7253/api/getCustomerAddress/${searchinput}`)
            .then((response)=>{
                
            if(!response){
                console.log(response.status);
            }else{
                console.log(response.data)
                console.log('Message: Your data has been fetched successfully');
                setitems([response.data.customerAddress])
                
            }
        })
                
        
    }


    const handleDelete = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((response)=>{
            if(response.isConfirmed){
                axios.delete(`http://localhost:7253/api/DeleteCustomerAddress/${id}`)
                .catch((err)=>{
                    Swal.fire({
                        position: 'top',
                        icon: 'error',
                        title: 'Oops...error deleting item',
                        showConfirmButton: false,
                        timer: 2000
                        })
                })
                setitems('');
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: '1 item deleted',
                    showConfirmButton: false,
                    timer: 2000
                })
                
            }
        })
    }



   
    

    return (  
        <div className="all-items">
            {/* navbar component */}
            <Navbar action={'Register'} url={'/RegisterUser'}/>
            
            {/* search for an item */}
            <div className="items-table">
                <h1>CustomerAddress Search Filter</h1>

                {/* banner message box */}
                {/* {message.state && <div className="bmessage">
                    <h1 className='bmessage'>{message.message}</h1>
                </div>} */}

                {/*small message box*/}
                {/* {msg.state && <div className="msg">
                    <p className={msg.theme}>{msg.text}</p>
                </div>} */}

                {/* search box */}
                <div className="search">
                    <input onChange={(e)=>setsearchinput(e.target.value)} type="number" placeholder="Search item by id"/>
                    <Link onClick={()=> handleSearch()} className="search-link" to={'/search'}><i class="bi bi-search"></i> Search</Link>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th style={{width : '5%'}}>ID</th>
                            <th style={{width : '15%'}}>AddressTypeID</th>
                            <th style={{width : '40%'}}>DivisionID</th>
                            <th style={{width : '10%'}} >Title</th>
                            <th style={{width : '10%'}} >Company</th>
                            <th style={{width : '10%'}}>Address1</th>
                            <th style={{width : '10%'}}>Address2</th>
                            <th style={{width : '10%'}}>Zip</th>
                            <th style={{width : '10%'}}>City</th>
                            <th style={{width : '10%'}}>RegionID</th>
                            <th style={{width : '10%'}}>CountryID</th>
                            <th style={{width : '10%'}}>Actions</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {items && items.map((item)=>{
                            {console.log(item);}
                            return(
                                <tr key={item.id}>
                                    <td className="left">{item.id}</td>
                                    <td className="left">{item.addressTypeID}</td>
                                    <td className="left">{item.divisionID}</td>
                                    <td className="align-center">{item.title}</td>
                                    <td className="align-center">{item.company}</td>
                                    <td className="align-center">{item.address1}</td>
                                    <td className="align-center">{item.address2}</td>
                                    <td className="align-center">{item.zip}</td>
                                    <td className="align-center">{item.city}</td>
                                    <td className="align-center">{item.regionID}</td>
                                    <td className="align-center">{item.countryID}</td>

                                    <td className="td-action action">
                                        <Link to={`/update/${item.id}`} className="td-action-link edit"><i className="bi bi-pencil-fill"></i></Link>
                                        <Link  to={'/search'} onClick={()=>{handleDelete(item.id)}} className="td-action-link delete"><i className="bi bi-trash3-fill"></i></Link>
                                    </td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default AllItems;