import React,{useState} from 'react';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { itemsInterface } from '../Interfaces/interface';


interface Props {
    searchinput : string, 
    searcheditems : itemsInterface[],
}

const SearchModal = ({searchinput, searcheditems}:Props)=>{

    const navigate = useNavigate()


    return (
        <div className='flex justify-center items-center w-full h-3/6 rounded-xl'>
            <div className='w-3/6  rounded-xl shadow-2xl px-10 fixed bg-white overflow-y-scroll top-24 bottom-30 left-20 ml-24'>
                <h1 className='text-red-400'>Searching results...{searchinput}</h1>
                <div className='w-full h-full  justify-center items-center'>
    
                        {searcheditems.map((item)=>{
                        return(
                            <div className='w-full'>
                                <ul onClick={()=>{navigate(`cart/${item.id}`)}} className='w-full flex flex-row items-center p-1 cursor-pointer hover:bg-slate-300 rounded-lg'>
                                        <li className=' text-white-400 px-2 font-sans font-light   '><MdSearch color='grey' size={24}/></li>
                                        <li className='text-white-400 px-2'><img className='w-20 h-12' src={item.url} /></li>
                                        <li className='text-white-400 px-2 '> <h1 className='text-lg '>{item.title}</h1> </li>
                                
                                    
                                </ul>
                            </div>
                            // 
                        )
                    })}
                
                    
                </div>
            </div>

            
            

        </div>
    )
}

export default SearchModal;