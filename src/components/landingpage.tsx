import React from 'react';
import { MdAgriculture, MdAndroid, MdBackpack, MdBook, MdChildCare, MdPets } from 'react-icons/md';
import { GiClothes, GiHealthNormal } from 'react-icons/gi';
import land from '../pics/land.webp';





const LandingPage = ()=>{

    

    return(
        // Main container

        <div className="w-full inline-flex justify-between h-full">
            
            {/* left container */}

            <div className="h-full w-1/4 shadow-2xl p-4 ml-4 ">
                <button className='m-0 h-14 self-center border-2 w-full px-6 bg-gray-400 rounded-full hover:bg-sky-500 cursor-pointer' type='button'>Category --</button>
                <ul className='py-20  w-full h-full justify-evenly text-left pt-10'>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdAgriculture size={25} color={'grey'} /> <p className='pl-6'>Home and Garden</p></li>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'> <GiClothes size={25} color={'grey'}/> <p className='pl-6'>Fashion</p>  </li>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><GiHealthNormal size={25} color={'grey'} /> <p className='pl-6'>Health and Beauty</p></li>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer '><MdAndroid size={25} color={'grey'}/> <p className='pl-6'>Electronics</p></li>
                    <li className='pb-6 text-xl  flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer   '><MdChildCare size={25} color={'grey'}/><p className='pl-6'>Baby Toys</p></li>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdBook size={25} color={'grey'}/><p className='pl-6'>Books</p ></li>
                    <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdPets size={25} color={'grey'}/><p className='pl-6'>Pets</p></li>
                </ul>
            </div>
            {/* Right container */}
            <div className=" shadow-2xl w-3/4 ml-6 " style={{backgroundImage:`url(${land})`, backgroundRepeat:'no-repeat'}}>
                {/* <img src={land} /> */}
                
            </div>

        </div>
    );
}

export default LandingPage;