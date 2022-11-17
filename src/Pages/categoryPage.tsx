import React,{useState, useEffect} from 'react'
import { itemsInterface } from '../Interfaces/interface';
import Navbar from "../components/navbar";
import axios from 'axios'
import Search from '../components/search';
import Category from '../components/categories';


const CategoryPage = ()=>{

    const [products, setProducts] = useState<itemsInterface[]>([])



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

    return(
        <div>
            {/* <Navbar /> */}
            <Navbar products={products} />
            <div className='flex '>
                <Category />
            </div>
        </div>
    )
}

export default CategoryPage;