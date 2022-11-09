import { createSlice } from '@reduxjs/toolkit';
import { mainState } from '../Interfaces/interface';
import Swal from 'sweetalert2';




// defining my initial state
const initialState : mainState = {
    notification : 0,
    Orderitem : [],
}

// checking for duplicate data 

const checker = (old_state:any, cart_new:any)=>{
    // looping through the initial array

    for(var duplicate = 0; duplicate < old_state.length; duplicate++){
        
        if(old_state[duplicate].id === cart_new.id){
            return true

        }else{
            return(false)
        }

        
    }

    
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
        
            if(checking){
                
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Item Already added to cart!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })  
                
            }else{
                console.log('Added');
                state.Orderitem.push(item.payload)

                // incrementing the cart icon by number of items
                state.notification += 1

            }
            
            
            // console.log(checker(state,item.payload));
            

            
            
        }
    }
})

export const {clickedViewedItem} = cartSlice.actions;
export default cartSlice.reducer;

