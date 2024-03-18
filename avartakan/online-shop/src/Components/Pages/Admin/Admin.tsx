import { Box, Button, Rating, TextField, } from '@mui/material';
import { ChangeEvent, useState, KeyboardEvent, SyntheticEvent } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import {MovieDTO} from "../../../store/users/users.slice";
import { v4 } from 'uuid';
import { ProductItemType } from '../../../types/types';
import { useAppDispatch } from '../../../store';
import { usersActions } from '../../../store/config';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
// import moment from 'moment'
// import {usersActions} from "../../../store/users/config";
// import {useAppDispatch} from "../../../store";

const Admin = () => {
    const [newProduct, setNewProduct] = useState<ProductItemType>(
        {
            id: v4(),
            imageUrl: "",
            name: "",
            price: "",
            description: "",
        }
    )

    const dispatch = useAppDispatch()
    const [image, setImage] = useState<any>({ preview: "", raw: "" });

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        console.log(ev.target.value)
        setNewProduct({
            ...newProduct,
            [ev.target.name]: ev.target.value
        });

        if (ev.target.name === 'imageUrl' && ev.target.files && ev.target.files[0]) {
            setImage({
                preview: URL.createObjectURL(ev.target.files[0]),
                raw: ev.target.files[0]
            });
        }
    };


    const handleSaveProduct = () => {
        console.log(newProduct)
        const formData = new FormData();
        formData.append("image", image.raw);
        dispatch(usersActions.addNewProduct(newProduct))
        setNewProduct(
            {
                id: v4(),
                imageUrl: "",
                name: "",
                price: "",
                description: "",
            }
        )
        setImage({ preview: "", raw: "" })
    }
    return (
        <div>
            <Box>Admin  page</Box>
            <Box sx={{
                width: '100px',
                display: "flex",
                gap: '1rem'
            }}>

            </Box>
            <div className="flex-col w-full mt">
                <TextField
                    name="name"
                    value={newProduct.name}
                    onChange={handleChange}
                    placeholder="Title"
                    sx={{ margin: "25px" }}
                />
                <TextField
                    name="description"
                    value={newProduct.description}
                    onChange={handleChange}
                    placeholder="Description"
                    sx={{ margin: "25px" }}
                />
                <TextField
                    name="price"
                    value={newProduct.price}
                    onChange={handleChange}
                    placeholder="price"
                    sx={{ margin: "25px" }}
                />
                {
                    image.preview ?
                        <img src={image.preview}
                            alt={image.preview}
                            width={140}
                            style={{ margin: '25px' }}
                        />
                        : null
                }

                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file
                    <VisuallyHiddenInput type="file" onChange={handleChange} name='imageUrl' />
                </Button>
            </div>
            <Button variant='contained' onClick={handleSaveProduct}>
                Save
            </Button>

        </div>
    );
};
export default Admin;