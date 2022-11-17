import React, {useState,useEffect} from 'react';
import { MdAgriculture, MdAndroid, MdBackpack, MdBook, MdChildCare, MdComputer, MdPets, MdPhone, MdSmartphone } from 'react-icons/md';
import { GiClothes, GiHealthNormal,GiHamburgerMenu } from 'react-icons/gi';
import land from '../pics/land.webp';
import land2 from '../pics/Online.jpg'
import { itemsInterface } from '../Interfaces/interface';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';





const LandingPage = ()=>{

    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    

    // switch to show or hide toggle content
    const [isActive, setIsActive] = useState<boolean>(true)
    const [catedomain, setCatedomain] = useState<itemsInterface[]>([])

    const [isclicked, setisclicked] = useState<boolean>(false)
    // menu toggler
    const burgertoggle = ()=>{
        setIsActive(!isActive)
    }

    // const handleCategory = (value:any) =>{
    //     setisclicked(!isclicked)
    //     if(!isclicked){
    //         var cate_div:itemsInterface[] = products.filter((cates:itemsInterface)=>cates.itemCate.toLowerCase().includes(value.toLowerCase()))
    //         console.log(cate_div);
        
    //     // let category:itemsInterface[] = products.filter((perSearched:itemsInterface)=>perSearched.itemCate.toLowerCase().includes(value))
    //     // setCatedomain(category)
    //     // console.log(products);
    //     }
        

    // }

        // set data to categories based on route navigation wanted to go with this approach 
        // but on a re-render the data is lost 

    // const redux_data = useSelector((state:RootState)=> state.Allproducts.Allitems)

    // const handleCategory = (path:string) =>{
    //     // var data:any = products
    //     navigate(path, { state :redux_data[0] })
    //     console.log(JSON.stringify(redux_data[0]) + "well done dude");
        
    // }

    // useEffect(() => {
    //   handleCategory('/home&garden')
    // }, [])



    return(
        // Main container

        <div style={{backgroundImage:`url(${land})`, backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',width:'100vw', }} className="w-full h-screen inline-flex justify-between pt-42 ">
            
            {/* left container */}

            <div className='w-2/6 mt-40 bg-transparent flex'>
                <button onClick={burgertoggle} className='flex items-center  rounded-none h-14 justify-center border-2 w-1/6 ml-4 bg-gray-400 md:rounded-full hover:bg-sky-500 cursor-pointer' type='button'><GiHamburgerMenu className='' /></button>

                {isActive && (
                    <div className=" h-4/5 hidden md:block h-11/12 w-full shadow-2xl  ml-4 bg-white mt-10 p-0 rounded-2xl">
                        <ul  className='  w-full h-4/5 justify-evenly text-left pt-10 '>
                            <li onClick={()=>{navigate('category/HomeandGarden')}} className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer '><MdAgriculture size={25} color={'grey'} /> <p className='pl-6 text-xl'>Home and Garden</p></li>
                            <li onClick={()=>{navigate('category/Fashion')}} className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'> <GiClothes size={25} color={'grey'}/> <p className='pl-6'>Fashion</p>  </li>
                            <li onClick={()=>{navigate('category/Health')}} className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdSmartphone size={25} color={'grey'} /> <p className='pl-6'>Phones</p></li>
                            <li onClick={()=>{navigate('category/Electronics')}} className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer '><MdComputer size={25} color={'grey'}/> <p className='pl-6'>Electronics</p></li>
                            <li onClick={()=>{navigate('category/BabyToys')}} className='pb-6 text-xl  flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer   '><MdChildCare size={25} color={'grey'}/><p className='pl-6'>Baby Toys</p></li>
                            <li onClick={()=>{navigate('category/Books')}} className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdBook size={25} color={'grey'}/><p className='pl-6'>Books</p ></li>
                            <li onClick={()=>{navigate('category/Pets')}} className=' text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdPets size={25} color={'grey'}/><p className='pl-6'>Pets</p></li>
                        </ul>
                    </div>
                )}
            </div>
            {/* Right container */}
            {/* style={{backgroundImage:`url(${land})`, backgroundRepeat:'no-repeat'}} */}
            <div className='h-full shadow-2xl w-3/4 ml-6 ' >
                {/* <img className='w-full h-screen' src={land2} /> */}
                {/*  */}

                 
            </div>

        </div>
    );
}

export default LandingPage;