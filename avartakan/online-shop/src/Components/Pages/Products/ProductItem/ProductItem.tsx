import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import { ProductItemProps, ProductItemType as ProductItemType} from '../../../../types/types'


const ProductItem: React.FC<ProductItemProps> = ({ item, addToCart}) => {
    const navigate = useNavigate()
    const ref = React.useRef(item)
  
    const handleClick = () => {
      navigate(`/products/${ref.current.id}`);  
    //   console.log(ref)
      
    }
    const productBuy = () => {
        addToCart(item)
        // console.log(item)
    }

    return (
        <Card sx={{maxWidth: 345, width: 345, m:5}}>
            <CardMedia
                component="img"
                alt={item.name}
                height="240"
                image={item.imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' onClick={productBuy}>buy</Button>
                <Button size="small" onClick={handleClick}>Learn More</Button>
            </CardActions>
        </Card>
    )

};
export default ProductItem;