import {ThunkAction} from "@reduxjs/toolkit";
import {RootState} from ".";
import {usersActions} from "./config";
import {loginApi, getAllProductsApi,   registerApi, addNewProductApi} from "../Components/API/api";
import { ProductItemType } from "../types/types";

export type Credentials = {
    username: string;
    password: string
}

export const register = (reg: any, cb: () => void): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
        const data = await registerApi(reg);
        dispatch(usersActions.signIn(data));
    } catch (error) {
        console.error('error fetching data', error);
    }
}


export const login = (payload: Credentials, cb: () => void): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
        const user = await loginApi(payload)
        dispatch(usersActions.signIn(user))
        if(cb) {
            cb()
        }
    } catch(err) {
        console.error(err)
    }
}

export const getAllProducts = (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
        const data = await getAllProductsApi();
        dispatch(usersActions.productData(data));
    } catch (error) {
        console.error('error fetching data', error);
    }
}


export const addNewProduct = (newProduct: ProductItemType):ThunkAction<void, RootState, unknown, any>=> async (dispatch) => {
    try {
        const response = await addNewProductApi(newProduct);
        dispatch(usersActions.setNewProduct(response))
    } catch(err) {

    }
}
