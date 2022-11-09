import logo from '../pics/logo1.jpeg';
import { MdSearch, MdShop, MdShoppingCart } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { clickedViewedItem } from '../features/Carthook';
import { RootState } from '../app/store';


const Navbar = () =>{

    const navigate = useNavigate()

    const notification = useSelector((state:RootState)=> state.cart.notification )

    return (
        <nav className="pl-8 inline-flex justify-between  w-full">
            <div className=" inline-flex w-3/5">
                <img className='w-32 text-start h-32' src={logo} />
                <input type='text' className='italic h-14 p-3 pr-28 self-center ml-6 w-11/12  border-b-2 focus-visible:border-b-sky-500 border-2 rounded-l-full outline-0' placeholder='Search here..'  />
                <button  type='button' className='m-0 h-14 self-center border-2  px-6 bg-gray-400 rounded-r-full hover:bg-sky-500 cursor-pointer' ><MdSearch /></button>
            </div>

            <div className="ml-12 w-2/5">
                <ul className='inline-flex  items-center justify-evenly h-full w-full text-lg '>
                    <li className='cursor-pointer' onClick={()=>{navigate('/')}}>Home</li>
                    <li className='cursor-pointer inline-flex'><MdShoppingCart  onClick={()=>{navigate('/cart')}} size={35}/><p className=' h-7 w-7 rounded-full bg-red-400'>{notification}</p></li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer' onClick={()=>{navigate('/admin')}}>Vendor Account</li>
                    <li className='cursor-pointer'>User Account</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;