import { itemsInterface } from '../Interfaces/interface';
import { useNavigate } from 'react-router-dom';



interface Props {
    lists : itemsInterface,
    
}

const ItemList = ({lists}: Props) =>{

    const navigate = useNavigate()
    
    return(
        <div className='shadow-2xl  w-full md:w-5/12 flex-wrap lg:w-80 sm:w-5/12 xl:w-80  justify-evenly pt-2 px-2 m-6 h-5/6 md:h-5/12 list-none text-left rounded-lg'>
            {/* Image div */}
            <div className="w-full h-4/6 bg-fuchsia-100">
                <img className='w-full h-full' src={lists.url} />
            </div>
            {/* details */}
            <ul className='w-full '>
                <li className=" pl-4 pt-2 font-bold flex"> ItemName <h1  className=' pr-2  font-normal'> :{lists.title} </h1></li>
                <li className=" pl-4 font-bold flex">ItemPrice  GHC<h1 className=' pr-2 font-normal'> :{lists.price}</h1> </li>
                <li className=" pl-4 font-bold flex">ItemCategory <h1 className=' pr-2 font-normal'> :{lists.itemCate}</h1> </li>
                <li className=" pl-4 font-bold flex">Description <h1 className=' pr-2 font-normal text-base'> : {lists.description}</h1> </li>
            </ul>

            <li className="text-end "><button className='mb-8 h-10 self-center border-2  px-6 bg-gray-400 rounded-full hover:bg-sky-500 cursor-pointer'  type="button" onClick={()=>{navigate(`cart/${lists.id}`)}}>View</button></li>

        </div>
    );
            
        
}

export default ItemList;