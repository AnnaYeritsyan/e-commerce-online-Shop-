export  interface User {
    id: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    email: string;
    phone: string;
    date:any
}

export interface ProductItemType {
    id:string
    price:string
    name:string
    description:string
    imageUrl:string

}
export interface ProductsProps {
    addToCart: (product: ProductItemType) => void;

}

export interface ProductItemProps {
    item: ProductItemType
    addToCart: (product: ProductItemType) => void
}