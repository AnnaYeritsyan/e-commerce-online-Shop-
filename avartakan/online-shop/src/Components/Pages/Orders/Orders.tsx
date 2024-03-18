import { Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Orders = (order: any) => {
    console.log(order.order.length)
    const isdelivered: any = order.order
    console.log(isdelivered === true)
    return (
        <div >
            orders
            {(order.order).length > 0 ? order.order.map((o: any, idx: number) => (
                <Card sx={{
                    width: '345px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }} key={idx}>
                    <CardActionArea sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={o.imageUrl}
                            alt={o.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {o.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {o.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )) : <Box>not delivery</Box>
            }
        </div>
    );
};
export default Orders;