import React, {useEffect, useState} from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { itemsInterface } from '../Interfaces/interface';
import axios from 'axios'
import Navbar from './navbar';





const Search = ()=>{

    const [products, setProducts] = useState<itemsInterface[]>([])

    const navigate = useNavigate()
    
    const [found, setFound] = useSearchParams()
    const itemFound = found.get('searchedProduct')
    
    // const {id} = useParams();
    const [searchitem, setSearchitem] = useState<itemsInterface[]>([])

    // const handleSearch = (id:string)=>{
    //     let searched:itemsInterface[] = products.filter((perSearched:itemsInterface)=>perSearched.title.toLowerCase().includes(id.toLowerCase()))
    //     setSearchitem(searched)

    //     console.log(searched + ' akmfaf');
            
    // }

    useEffect(()=>{
    
        axios.get("http://localhost:3001/products").
        then((response)=>{
            if(response){
                setSearchitem(response.data.filter((perSearched:itemsInterface)=>perSearched.title.toLowerCase().includes(itemFound!.toLowerCase())))
                    setProducts(response.data)
         
                // console.log(response.data);         
                
            }
        })

        // handleSearch(id!)
        // console.log(products);   
    },[])

   

    return (
        <div>
            <Navbar products={[]} />
            <div className='flex justify-center items-center w-full h-full rounded-xl'>
            <div className='w-11/12 h-full  rounded-xl shadow-2xl px-10 fixed bg-white top-32 bottom-30 left-12 right-4 overflow-y-scroll'>
                <h1 className='text-red-400 text-4xl italic'>Searching results... {itemFound}</h1>
                <div className='w-full h-full  justify-center items-center'>
                        
                        {searchitem.map((item)=>{
                            return (
                             <div className='w-full '>
                                <ul onClick={()=>{navigate(`/cart/${item.id}`)}} className='w-full flex flex-row items-center  cursor-pointer hover:bg-slate-300 rounded-lg'>
                                        <li className='text-white-400 px-2 py-2'><img className='w-40 h-22' src={item.url} /></li>
                                        <ul className='text-left px-10 flex'>
                                            <li className='text-white-400 px-2 flex-row font-bold'>ItemName : <h1 className='text-lg px-10 font-normal'> {item.title}</h1> </li>
                                            <li className='text-white-400 px-2 font-bold'>ItemCode : <h1 className='text-lg px-10 font-normal'> {item.id}</h1> </li>
                                            <li className='text-white-400 px-2 font-bold'>ItemPrice: <h1 className='text-lg px-10 font-normal'> {item.price}</h1> </li>
                                            <li className='text-white-400 px-2 font-bold'>Description:  <h1 className='text-lg px-10 font-normal'>{item.description}</h1> </li>
                                        </ul>
                                
                                    
                                </ul>
                            </div>
                            )
                        })}
                        
                            
                        
                      
                
                    
                </div>
            </div>

            
            

        </div>
        </div>
    );
}

export default Search;