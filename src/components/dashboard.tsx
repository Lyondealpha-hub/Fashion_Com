import React,{ useState } from 'react';
import { MdAddShoppingCart, MdAgriculture, MdAndroid, MdBackpack, MdBook, MdChildCare, MdHelp, MdHistory, MdHome, MdNewReleases, MdOutlineAnalytics, MdPets, MdReport, MdSettings, MdSupervisedUserCircle } from 'react-icons/md';
import { GiClothes, GiHealthNormal, GiStockpiles } from 'react-icons/gi';
import add from '../pics/add.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';







const DashboardPage = ()=>{

    const [imagePreview, setImagePreview] = useState<string>(add);
    const [title, setTitle] = useState<string>('')
    const [price, setprice] = useState<string>("")
    const [description, setDescription] = useState<string>("") 

    // Image Preview Loader
    const convertfile=(files : FileList | null) => {
        if (files) {
            const fileRef = files[0] || ""
            const fileType: string = fileRef.type || ""
            console.log("This file is of type ", fileType);

            const reader = new FileReader()
            reader.readAsBinaryString(fileRef)

            // converting it to base64
            reader.onload = (ev:any) =>{
                setImagePreview(`data:${fileType}; base64, ${btoa(ev.target.result)}`)
            }

            
        }
    }


    const handlePost = async()=>{
        
       const posts = await axios.post("http://localhost:3001/products",{
            title : title,
            description: description,
            price: price,
            url:imagePreview,
        })

        

        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Items posted Successfully!!',
            showConfirmButton: false,
            timer: 1500
          })
          

        console.log("ADDED");
        
    }

   

    return(
        // Main container

        <div className="w-full inline-flex justify-between h-full">
            {/* left top container */}

            <div className="h-full w-1/4 shadow-2xl p-4 ml-4 ">
                <button className='m-0 h-14 self-center border-2 w-full px-6 bg-gray-400 rounded-full hover:bg-sky-500 cursor-pointer' type='button'>Category --</button>
                <ul className='py-20  w-full h-full justify-evenly text-left pt-10'>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdHome size={25} color={'grey'} /> <p className='pl-6'>Home</p></li>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'> <GiStockpiles size={25} color={'grey'}/> <p className='pl-6'>Store</p>  </li>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdHistory size={25} color={'grey'} /> <p className='pl-6'>OrderHistory</p></li>
                    
                    <li className='pb-6 text-xl  flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer   '><MdReport size={25} color={'grey'}/><p className='pl-6'>Report</p></li>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdHelp size={25} color={'grey'}/><p className='pl-6'>Help</p ></li>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdSettings size={25} color={'grey'}/><p className='pl-6'>Settings</p></li>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer '><MdNewReleases size={25} color={'grey'}/> <p className='pl-6'>New features</p></li>
                </ul>
            </div>
            {/* Right Top container */}
            <div className="w-3/4 ml-4 justify-evenly ">
                {/* Right Top layer  */}
                <div className='w-full inline-flex justify-evenly  h-2/5 ' >
                    <div className='shadow-2xl h-4/5 w-80 bg-blue-600'>
                        <li className='py-8 text-xl flex flex-row content-center px-6 hover:text-sky-500 cursor-pointer '><MdAddShoppingCart size={45} color={'#fff'}/> <p className='pl-6 text-4xl'>Orders</p></li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>

                    <div className='shadow-2xl h-4/5 w-80 bg-green-400'>
                        <li className='py-8 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer '><MdSupervisedUserCircle size={45} color={'#fff'}/> <p className='pl-6 text-4xl'>Visitors</p></li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>

                    <div className='shadow-2xl h-4/5 w-80 bg-orange-500'>
                        <li className='py-8 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer '><MdOutlineAnalytics size={45} color={'#fff'}/> <p className='pl-6 text-4xl'>Sales</p></li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                </div>
                {/* Right Bottom layer */}
                <div className='h-3/5  justify-evenly flex flex-row bg-slate-200'>
                    {/* Left Column layer */}
                    <div className=' w-3/6 border-r-2 border-black' >
                        <form className='flex flex-row justify-between h-full'>
                            {/* ImAGE UPLOADER */}
                            <div className='w-4/6 h-full justify-center px-2 '>
                                <img className='pt-4 h-5/6 w-full' src={imagePreview} />
                                <input className='w-full' type='file' onChange={(e)=>{convertfile(e.target.files)}} />
                            </div>
                            {/* INput feild container  */}
                            <div className='w-3/6 h-full  self-center  list-none'>
                                <li className='my-4 pb-6 text-xl flex flex-row items-center pr-4 hover:text-sky-500 cursor-pointer' ><input className='italic h-12 p-3 pr-8 self-center ml-4 w-11/12  border-b-2 focus-visible:border-b-sky-500 border-4 rounded-l-full outline-0' type='text' placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}} /></li>
                                <li className='my-4 pb-6 text-xl flex flex-row items-center pr-4 hover:text-sky-500 cursor-pointer'><input className='italic h-12 p-3 pr-8 self-center ml-4 w-11/12  border-b-2 focus-visible:border-b-sky-500 border-4 rounded-l-full outline-0' type='text' placeholder='Description' onChange={(e)=>{setDescription(e.target.value)}} /></li>
                                <li className='my-4 pb-6 text-xl flex flex-row items-center pr-4 hover:text-sky-500 cursor-pointer'><input className='italic h-12 p-3 pr-8 self-center ml-4 w-11/12  border-b-2 focus-visible:border-b-sky-500 border-4 rounded-l-full outline-0' type='text' placeholder='Price' onChange={(e)=>{setprice(e.target.value)}} /></li>
                                
                                
                            </div>
                        </form>
                        
                    </div>
                    {/* Right column layer */}
                    
                    <div className=' w-3/6 h-full'>
                        <div className='flex flex-row justify-between list-none px-4 pt-4 w-full'>
                            <li className='w-3/6'><h1 className='text-3xl italic justify-start'>Item Review</h1></li>
                            <li className='w-3/6'> <button onClick={()=>{handlePost()}} className='m-0 h-10 justify-end border-2 w-3/5 px-6 bg-gray-400 rounded-full hover:bg-sky-500 cursor-pointer text-2xl' >Post</button> </li>

                        </div>

                        <ul className='w-full p-2  h-5/6  flex text-left text-lg'>
                            <li className='w-3/6 h-11/12 bg-black'><img className='w-full h-full' src={imagePreview} /></li>
                            <ul className='pl-4 pt-6 text-2xl bg-red-400  flex-wrap w-3/6'>
                                <li className='font-bold flex'>Title : <h1 className='font-light'>{title}</h1> </li>
                                <li className='font-bold flex py-2 '>Description : <h1 className='font-light'>{description}</h1></li>
                                <li className='font-bold flex'>Price : <h1 className='font-light'>{price}</h1></li>
                                <li></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DashboardPage;