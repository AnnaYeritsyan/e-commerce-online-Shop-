import {Credentials} from "../../store/actions";
import { ProductItemType } from "../../types/types";


export const registerApi = async (userData: any) => {
    console.log(userData)
    // const data = await response.json();
    // Store token or session identifier in local storage
 
    try {
        const response = await fetch('http://localhost:3004/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Failed to register user');
        }

        return await response.json();
    } catch (error: any) {
        throw new Error(error.message);
    }
   
};

export const loginApi = async (payload: Credentials) => {
    try {
        const response = await fetch('http://localhost:3004/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        return await response.json()
    } catch (err: any) {
        throw new Error(err)
    }
}


export async function getAllProductsApi() {
    try {
        const response = await fetch('http://localhost:3004/products');

        if (!response.ok) {
            throw new Error('Failed to fetch users profile data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching usersProfile data:', error);
        throw error;
    }
}

export const addNewProductApi = async (newProduct: ProductItemType) => {
    try {
        const response = await fetch('http://localhost:3004/products', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(newProduct)
        });
        if (!response.ok) {
            throw new Error('Failed to fetch movie data');
        }
        return await response.json();
    } catch(err: any) {
        throw new Error(err)
    }
  }