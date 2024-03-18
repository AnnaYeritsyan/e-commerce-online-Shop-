import { ProductItemType } from "../../types/types";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalDialog from "../Modal/Modal";
import { useState } from "react";
import { Box } from "@mui/material";

const Cart = ({ product, addToOrder, removeFromCart }: { product: any, addToOrder: any, removeFromCart:any }) => {

  const [modal, setModal] = useState<boolean>(false);
  const [sendOrder, setSendOrder] = useState<ProductItemType[]>([]);
  
  const openModal = (selectedProduct: ProductItemType) => {
    setModal(true);
    addToOrder(selectedProduct);  
    console.log(selectedProduct);
   removeFromCart(selectedProduct)
  }

  return (
    <>
      {product && product.length > 0 ? (
        <Box sx={{
          width:'100%', 
          display:'flex', 
          flexDirection:'row', 
          flexWrap:"wrap",
          justifyContent:'space-around'
          }}>
        {/*  */}
          {product.map((item: ProductItemType, index: number) => (
            <Card  key={index} sx={{ maxWidth: 345 }}>
              <div>
              <CardMedia
                sx={{ height: 140, width: 400 }}
                image={item.imageUrl}
                title={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {item.price}
                </Typography>
              </CardContent>
              <Button size="small" onClick={() => openModal(item)}>Confirm</Button>
            </div>
          </Card>))}
        
        </Box>
      ) : (
        <p>No products in cart</p>
      )}
      {modal ? <ModalDialog modal={modal} /> : null}
    </>
  );
};
export default Cart;
