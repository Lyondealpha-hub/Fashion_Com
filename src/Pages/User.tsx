import ItemList from "../components/itemList";
import LandingPage from "../components/landingpage";
import Navbar from "../components/navbar";
import React, { useState, useEffect } from "react";
import { itemsInterface } from '../Interfaces/interface';
import axios from "axios";
import SearchModal from "../components/searchModal";
import Search from "../components/search";
import { useDispatch } from "react-redux";
import { Products_div } from "../features/productshook";






const User = () =>{
    

    const [products, setProducts] = useState<itemsInterface[]>([])
    const dispatch = useDispatch()
     const [itemCate, setitemCate] = useState<string>('')


    useEffect(()=>{
        axios.get("http://localhost:3001/products").
        then((response)=>{
            if(response){
                setProducts(response.data)
                // console.log(response.data);
                //  dispatch(Products_div(response.data))
                console.log(response.data);
                
            }
            
        })    
        
    },[])

    // const [items, setItems] = useState<itemsInterface[]>([
    //     {title : 'Footwear', description: 'football wear', price: 20},
    //     {title : 'helmet', description: 'construction', price: 40, },
    //     {title : 'Footwear', description: 'football wear', price: 20,},
    //     {title: 'Rexona', description: 'body splash', price : 25,},
    //     {title: 'boxers', description :'men wear', price: 35}

    // ])'

    
    

    return(
        
        <div className="w-full h-full">
            
            <Navbar products={products} />
            
            <LandingPage  />

            {/* I will work on this more later */}
            {/* Items overview */}
            <div className="h-screen w-full   ">
                {/* <div className="flex justify-evenly mt-8 flex-wrap ">
                    <button className='flex items-center  rounded-none h-14 justify-center border-2 w-1/6 ml-4 bg-gray-400 md:rounded-full hover:bg-sky-500 cursor-pointer' type='button'>Featured</button>
                    <button className='flex items-center  rounded-none h-14 justify-center border-2 w-1/6 ml-4 bg-gray-400 md:rounded-full hover:bg-sky-500 cursor-pointer' type='button'>Featured</button>
                    <button className='flex items-center  rounded-none h-14 justify-center border-2 w-1/6 ml-4 bg-gray-400 md:rounded-full hover:bg-sky-500 cursor-pointer' type='button'>Featured</button>
                    <button className='flex items-center  rounded-none h-14 justify-center border-2 w-1/6 ml-4 bg-gray-400 md:rounded-full hover:bg-sky-500 cursor-pointer' type='button'>Featured</button>
                    <button className='flex items-center  rounded-none h-14 justify-center border-2 w-1/6 ml-4 bg-gray-400 md:rounded-full hover:bg-sky-500 cursor-pointer' type='button'>Featured</button>
                    <button className='flex items-center  rounded-none h-14 justify-center border-2 w-1/6 ml-4 bg-gray-400 md:rounded-full hover:bg-sky-500 cursor-pointer' type='button'>Featured</button>
                    <button className='flex items-center  rounded-none h-14 justify-center border-2 w-1/6 ml-4 bg-gray-400 md:rounded-full hover:bg-sky-500 cursor-pointer' type='button'>Featured</button>
                </div> */}
               

            {/* header */}
            <h1 className="py-10 text-5xl">Store Overview </h1>
            
                <div className="w-full justify-evenly flex flex-row h-full flex-wrap">
                    
                    {products.map((lists:itemsInterface, key:number)=>{
                    return  <ItemList lists={lists} key={key} />
            })}
                </div>
                
                
            </div>


            
           
        </div>
    )
}

export default User;