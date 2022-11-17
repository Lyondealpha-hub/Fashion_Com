import logo from '../pics/logo1.jpeg';
import React, { useState } from 'react';
import { MdSearch, MdShop, MdShoppingCart } from 'react-icons/md'
import { SlOptionsVertical} from 'react-icons/sl'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { clickedViewedItem } from '../features/Carthook';
import { RootState } from '../app/store';
import SearchModal from './searchModal';
import { itemsInterface } from '../Interfaces/interface';
import Search from './search';



const AdminNavbar = () =>{

    const navigate = useNavigate()
    
    return (
        <div className='fixed bg-white w-full h-42  '>

        
        <nav className="pl-8 w-full flex flex-col md:flex-row">
            
            <div className=" inline-flex w-full md:w-3/5">
                <div className="w-11/12 flex flex-row items-center">
                    <img className='w-32 text-start h-32 ' src={logo} />
                    <input  type='text' className='hidden md:block italic h-14 p-3 pr-10 self-center ml-6 w-11/12  border-b-2 focus-visible:border-b-sky-500 border-2 rounded-l-full outline-0' placeholder='Search here..'  />
                    <button   type='button' className='hidden md:block w-20 m-0 h-14 self-center border-2  px-6 bg-gray-400 rounded-r-full hover:bg-sky-500 cursor-pointer ' ><MdSearch /></button>
                </div>

                <div className="flex ">
                     <div className='inline-flex  items-center h-full text-lg px-4'>
                        <li className='cursor-pointer inline-flex '><MdShoppingCart   size={35}/><p className=' h-7 w-7 rounded-full bg-red-400'>{''}</p></li>
                        <li className='inline-flex md:hidden md:px-4 px-2'><MdSearch size={35}/></li>
                        <li className='inline-flex md:hidden md:px-4'><SlOptionsVertical size={30}/></li>
                    </div>
                </div>
            </div>

            <div className=" w-full md:w-2/5 md:p-0 md:ml-0">
                <ul className=' hidden md:block  items-center h-full w-full text-lg flex-col'>
                   
                    <div className='flex  items-center justify-evenly h-full w-full text-lg '>
                        <li className='cursor-pointer' onClick={()=>{navigate('/')}}>Home</li>
                        <li className='cursor-pointer'>Contact</li>
                        <li className='cursor-pointer' onClick={()=>{navigate('/admin')}}>Vendor Account</li>
                        <li className='cursor-pointer'>User Account</li>
                
                    </div>
                    
                </ul>
            </div>
        </nav>
        

        
        </div>
    
    );
}

export default AdminNavbar;