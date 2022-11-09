import React from "react";
import{ useState, useEffect} from 'react';
import prada from '../pics/prada.jpg'
import { MdArrowBack, MdDelete } from 'react-icons/md';
import { useNavigate, useParams } from "react-router-dom";
import { itemsInterface, AddToCart_btn, mainState } from '../Interfaces/interface';
import axios from 'axios';
import { useSelector,useDispatch } from "react-redux";
import { clickedViewedItem } from '../features/Carthook';
import { RootState } from '../app/store';
import Swal from "sweetalert2";





const Cart = ()=>{

    // const viewedItem = useSelector((state)=>{state.clickedViewedItem.item})
    const view = useSelector((state:RootState)=> state.cart.Orderitem)

    // const selec = useSelector()

    const dispatch = useDispatch()

    const {id} = useParams();

    const [order, setOrder] = useState<itemsInterface[]>([])
    const [isclicked, setIsclicked] = useState<boolean>(false)

    

    const test = (item:itemsInterface,isclicked:boolean) => {
        if(isclicked == true){
            dispatch(clickedViewedItem(item))
            // console.log("This is for the redux watch bellow");
        
            // console.log(view);

            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Added to cart Successfully!!',
                showConfirmButton: false,
                timer: 1500
              })
            
        }
    }
    

    useEffect(()=>{
        axios.get(`http://localhost:3001/products/${id}`).
        then((response)=>{
            if(response){
                setOrder([response.data])
                //  console.log(response.data);
                
            }
        })
        
        
        
    },[])
   const navigate = useNavigate()

    const [quantity, setQuantity] = useState<number>(1)
    const [price, setPrice] = useState<number>(20)
    const [total, setTotal] = useState<number>(0)

    const TotalPrice = (price:number, add: boolean) : void =>{
        if(add === true){
            setTotal(quantity * price)
        }
    }


    const handleDelete =(item:itemsInterface, isclicked:boolean)=>{
        if(isclicked == true){
           view(view.filter((item:any)=>{
                return item.id != item
            }))
        }
        

    }

    // const addTocart = (id:itemsInterface):void =>{
    //     axios.get(`http://localhost:3001/products/${id}`).
    //     then((response)=>{
    //         if(response){
    //             addTocart(response.data)
    //             console.log(response.data);
                
    //         }
    //     })
    // }

   


    return(
        <div className="w-full h-screen  px-10 py-5">
            
            {order.map((item)=>{
                return(
                    <div className="w-full h-3/6 shadow-2xl flex flex-row">

                <div className="w-2/5 h-full bg-white border-r-2 border-black flex flex-row self-center justify-center items-center pb-6">
                        <img className="w-3/6" src={item.url} />


                </div>


                <div className="w-3/5 h-full  list-none justify-between flex flex-col p-6 ">
                    <li className="text-start "><h1 className="text-2xl justify-center items-center ">Item Name</h1>{item.title}</li>
                    <li className="text-start "><h1 className="text-2xl justify-center items-center">Item Code</h1>{item.id}</li>
                    <li className="text-start "><h1 className="text-2xl justify-center items-center">Item Description</h1>{item.description}</li>
                    <li className="text-start "><h1 className="text-2xl justify-center items-center">Item Price</h1>{item.price}</li>
                    <li className="text-end "><button className='m-0 h-14 self-center border-2  px-6 bg-gray-400 rounded-r-full hover:bg-sky-500 cursor-pointer' onClick={()=>{test(item,true)}} type="button">Add to cart</button></li>
                </div>

            </div>
                )
            })}
            <li className="w-full bg-red-400 inline-flex cursor-pointer"><MdArrowBack onClick={()=>{navigate(-1)}}  size={25} /><h1 className="text-xl italic text-left">Back</h1></li>

            <div className="w-full h-3/6 justify-between flex flex-col overflow-y-scroll">
                <div className="mt-4">
                 <table className="w-full ">
                    <thead className="w-full h-14 py-5 mt-4">
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </thead>

                    <tbody>
                        {view.map((item:any)=>{
                            return(
                                <tr>
                            <td><li className=" list-none self-center justify-center content-center"><img className="w-20  " src={item.url} /></li></td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                                <div className="flex flex-row w-full rounded-2xl outline-none border-none">
                                    <div className="w-2/6 h-12  border-2 bg-slate-400 "> <button onClick={()=>{setQuantity(quantity + 1 ); TotalPrice(item.price, true)}} type="button" className="w-full text-2xl self-center">+</button></div>
                                    <div className="w-2/6 h-full  self-center"> <h1>{quantity}</h1> </div>
                                    <div className="w-2/6 h-12 border-2 bg-slate-400"><button onClick={()=>{setQuantity(quantity - 1)}} className="w-full text-2xl self-center">-</button></div>
                                </div>
                            </td>
                            <td>{item.price}</td>
                            <td>{total}</td>
                            <td><li onClick={()=>{handleDelete(view, true)}} className=" w-full list-none  flex justify-center"><MdDelete   size={25}/></li></td>
                        </tr>
                            )
                        })}
                        
                    </tbody>
                 </table>
                </div>

                <div className="text-end">
                    <button className='m-0 h-14 self-center border-2  px-6 bg-gray-400 rounded-r-full hover:bg-sky-500 cursor-pointer'>Checkout</button>
                </div>

            </div>

        </div>
    );
}

export default Cart;