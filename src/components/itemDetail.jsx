import { useEffect, useState } from "react";
import { Link ,useParams} from "react-router-dom";
import axios from "axios";
import Navbar from "./includes/navbar";
import './styles/allitems.css'
import './styles/itemDetail.css'
import './includes/styles/allstyles.css';

const ItemDetail = () => {
    //retrieving params
    const {id} = useParams();

    // data object
    const[itemData,setItemData] = useState('');

    //form message handler
    const[msg,setmsg] = useState({state: '', text : '', theme : ''});


    //fetch current item data
    useEffect(()=>{
        const fetchitems = async() =>{
            const res = await axios.get(`http://localhost:7253/api/getItem/${id}`)
            .catch((err)=>{
                // for error track purposes
                console.log(err);

                setmsg({state : true , text : 'Oop...something went wrong'})
            })
            console.log(res.data.data);
            setItemData([res.data.data]);
        }
        fetchitems();
    },[])

    return (  
        <div className="all-items">
            {/* navbar component */}
            <Navbar action={'Back'} url={'/allitems'}/>

            <div className="item-data">
                {itemData && itemData.map((item)=>{
                    <p>qqq</p>
                })}
            </div>
        </div>
    );
}

export default ItemDetail;