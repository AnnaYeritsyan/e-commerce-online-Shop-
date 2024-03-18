import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ProductItemType, User } from '../types/types';


type InitialState = {
    user: null | string,
    users:Array<User>
    allData:Array<User>
    productData:Array<ProductItemType>
    setNewProduct:Array<ProductItemType>
}
const initialState: InitialState = {
    user: null,
    users:[],
    allData:[],
    productData:[],
    setNewProduct:[]

}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        sliceprofile: (state, action) => {
            // state.users = action.payload;
            return {
            ...state,
           users : state.users.concat(action.payload)
            // ;
         } },   
         alldata: (state, action: PayloadAction<User[]>) => {
            return{
                ...state,
            allData : action.payload
            }
            
       
         },
         productData:(state, action:PayloadAction<ProductItemType[]>)=>{
            return{
                ...state,
                productData:action.payload
            }
         },
         setNewProduct: (state, action: PayloadAction<ProductItemType>) => {
            return {
                ...state,
                productData: state.setNewProduct.concat(action.payload)
            }
        }
        }
       
     
    // }
})

export const { sliceprofile } = userSlice.actions;

export default userSlice.reducer;