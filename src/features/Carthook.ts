import { createSlice } from '@reduxjs/toolkit';
import { mainState } from '../Interfaces/interface';
import Swal from 'sweetalert2';




// defining my initial state
const initialState : mainState = {
    notification : 0,
    Orderitem : [],
}

// delete an item object

const handleDelete = (old_state:any, cart_del:any)=>{
    
    for(let deleted = 0; deleted < old_state.length; deleted++){
        let temparr:any = []
        if([old_state[deleted]].findIndex !== cart_del.id){

            console.log([old_state[deleted]]);
            
           return temparr.push(old_state[deleted])
            
            
            
            // old_state(()=>{
            //     [old_state[deleted]][0].filter(cart_del)
            // })
            // [old_state[deleted]][0].filter(cart_del)
        }
    }
}

// checking for duplicate data 

const checker = (old_state:any, cart_new:any)=>{
    // looping through the initial array

    for(var duplicate = 0; duplicate < old_state.length; duplicate++){
        
        if([old_state[duplicate]][0].id === cart_new.id){
            return true
            // console.log("fuck its a duplicate item");
            
        }

        
    }

    return(false)
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers : {
        // this is an action function with a func name of clickedViewedItem
        clickedViewedItem : (state, item) => {

            //JSON PARSE AND STRINGIFY HELPS FORMAT THE ARRAY
            const checking = checker(JSON.parse(JSON.stringify(state.Orderitem)),item.payload);
            
            // console.log(JSON.parse(JSON.stringify(state)));
        
            if(checking === true){                
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Item Already Exists!!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  }) 
            }else{
                console.log('Added');
                state.Orderitem.push(item.payload)

                // incrementing the cart icon by number of items
                state.notification += 1

                
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Added to cart Successfully!!',
                    showConfirmButton: false,
                    timer: 1500
                 })
            
            }
            
            
            // console.log(checker(state,item.payload));
            

            
            
        },
        deleteItem : (state, item) =>{

            console.log("dellll");
            
            
              var arrupdate =  handleDelete(JSON.parse(JSON.stringify(state.Orderitem)),item.payload);
            
                
                    if (arrupdate == true) {
                        state.Orderitem = [arrupdate] 
                      Swal.fire(
                        'Deleted!',
                        'Your Cart item has been deleted.',
                        'success'
                      )
                      state.notification -= 1
                    }
                
                  
            
        }
            
        
    }
})

export const {clickedViewedItem, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;

