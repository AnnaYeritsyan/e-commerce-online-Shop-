import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../store";
import { useEffect } from "react";
import { usersActions } from "../../../../store/config";
import { useAppSelector } from "../../../../store";
import { userSelectors } from "../../../../store/config";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductItemProps } from "../../../../types/types";

const ProductsDetail:React.FC<any> = ({ addToCart})=> {
    const dispatch = useAppDispatch()
    const products = useAppSelector(userSelectors.selectAllProducts)
    useEffect(() => {
        dispatch(usersActions.getAllProducts())

    }, [dispatch])

    const { id } = useParams()

    const productBuy = () => {
        products.map((e:any)=>{
            if(e.id === id){
                 addToCart(e);
            }
        })
       
      
    }

    return (
        <div >
            productsdetail
            {
                products.map((e: any) => (
                    e.id === id ?
                        <Box>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt={e.imageUrl}
                                    height="140"
                                    image={e.imageUrl}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {e.description}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={productBuy}>Buy</Button>
                                </CardActions>
                            </Card>

                        </Box> :
                        null
                ))
            }
        </div>
    );
};
export default ProductsDetail;