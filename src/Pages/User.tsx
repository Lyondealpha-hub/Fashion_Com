import ItemList from "../components/itemList";
import LandingPage from "../components/landingpage";
import Navbar from "../components/navbar";
import React, { useState, useEffect } from "react";
import { itemsInterface } from '../Interfaces/interface';
import axios from "axios";





const User = () =>{

    const [products, setProducts] = useState<itemsInterface[]>([])

    useEffect(()=>{
        axios.get("http://localhost:3001/products").
        then((response)=>{
            if(response){
                setProducts(response.data)
                console.log(response.data);
                
            }
        })

        console.log(products);
        
    },[])

    // const [items, setItems] = useState<itemsInterface[]>([
    //     {title : 'Footwear', description: 'football wear', price: 20},
    //     {title : 'helmet', description: 'construction', price: 40, },
    //     {title : 'Footwear', description: 'football wear', price: 20,},
    //     {title: 'Rexona', description: 'body splash', price : 25,},
    //     {title: 'boxers', description :'men wear', price: 35}

    // ])

    return(
        <div>
            <Navbar />
            <LandingPage />

            {/* I will work on this more later */}
            {/* Items overview */}
            <div className="h-screen w-full   ">
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