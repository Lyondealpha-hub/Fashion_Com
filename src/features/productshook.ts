import { createSlice } from '@reduxjs/toolkit';
import { itemsInterface, products } from '../Interfaces/interface';


const initialState :products= {
    Allitems : [],
}

export const productSlice = createSlice({
    name : 'Allproducts',
    initialState,

    reducers : {
        Products_div : (state, list) =>{
            // console.log('hi');
            state.Allitems.push(list.payload)
            
        }
    }
})

export const {Products_div} = productSlice.actions
export default productSlice.reducer;
