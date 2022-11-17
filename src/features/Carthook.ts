import { createSlice } from '@reduxjs/toolkit';
import { itemsInterface, mainState } from '../Interfaces/interface';
import Swal from 'sweetalert2';
import { MdAirlineSeatFlatAngled } from 'react-icons/md';




// defining my initial state
const initialState : mainState = {
    notification : JSON.parse(localStorage.getItem('cart_data')!) ?  JSON.parse(localStorage.getItem('cart_data')!).length :  0,
    Orderitem : !JSON.parse(localStorage.getItem('cart_data')!) ? [] : JSON.parse(localStorage.getItem('cart_data')!),
}

// delete an item object

const handleDelete = (old_state:itemsInterface[], cart_del:any)=>{
    console.log("you messed with the wrong dude "+cart_del[0]);
    
    for(let deleted = 0; deleted < old_state.length; deleted++){
        let temparr:any = []
        if([old_state[deleted]].findIndex !== cart_del.id){

            console.log([old_state[deleted]]);
            console.log("asd" + cart_del);
            
            
           return temparr.push(old_state[deleted])
            
            
            
            // old_state(()=>{
            //     [old_state[deleted]][0].filter(cart_del)
            // })
            // [old_state[deleted]][0].filter(cart_del)
        }
    }
}

// checking for duplicate data 

const checker = (old_state:itemsInterface[], cart_new:itemsInterface)=>{
    // looping through the initial array
    console.log(cart_new);
    
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
                // if the item does not exist push it into the array 
                console.log('Added');
                state.Orderitem.push(item.payload)
                localStorage.setItem('cart_data', JSON.stringify(state.Orderitem))

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

            
            
            
              var arrupdate =  handleDelete(JSON.parse(JSON.stringify(state.Orderitem)),item.payload);
            
                    // console.log("dellll " + arrupdate);
                    if (arrupdate == true) {
                        state.Orderitem = [arrupdate]
                        localStorage.setItem('cart_data', JSON.stringify(state.Orderitem))
                      Swal.fire(
                        'Deleted!',
                        'Your Cart item has been deleted.',
                        'success'
                      )
                      state.notification -= 1
                      
                      if(state.notification < 0){
                    state.notification = 0
                }
                    }
                
                  
            
        }
            
        
    }
})

export const {clickedViewedItem, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;

