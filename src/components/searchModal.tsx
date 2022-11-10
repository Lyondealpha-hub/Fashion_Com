import React,{useState} from 'react';
import { itemsInterface } from '../Interfaces/interface';


interface Props {
    searchinput : string,
    
}

const SearchModal = ({searchinput}:Props)=>{
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='w-5/6  h-full bg-black'>
                <h1 className='text-red-400'>Searching results...{searchinput}</h1>
                
            </div>
            

        </div>
    )
}

export default SearchModal;