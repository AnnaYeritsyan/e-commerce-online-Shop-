import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { userSelectors, usersActions } from "../../../store/config";
import ProductItem from "./ProductItem/ProductItem";
import { Typography, Box } from "@mui/material";
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { v4 } from "uuid";
import { ProductItemType, ProductsProps } from "../../../types/types";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Products: React.FC<ProductsProps> = ({ addToCart}) => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(userSelectors.selectAllProducts)
    const [filteredProduct, setFilteredProduct] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState<ProductItemType | null>(null);
    const [sorting, setSorting] = useState<string>('')

    useEffect(() => {
        dispatch(usersActions.getAllProducts())

    }, [dispatch])

    useEffect(() => {
        if (selectedCategory) {
            const filtered = products.filter((product: any) => product.id === selectedCategory.id);
            setFilteredProduct(filtered);
        } else {
            setFilteredProduct(products);
        }
    }, [selectedCategory, products]);


    const handleSorting = (event: SelectChangeEvent) => {
        const sortKey = event.target.value as string;
        setSorting(sortKey);
        const sortedProducts = [...filteredProduct];
        sortedProducts.sort((a, b) => {
            if (sortKey === 'price') {
                return parseFloat(a.price) - parseFloat(b.price);
            } else if (sortKey === 'name') {
                return a.name.localeCompare(b.name);
            }
            return 0;
        });
        setFilteredProduct(sortedProducts);
    }

    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <Typography component={'span'}
                    sx={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                    <Autocomplete
                        options={products.map((option) => ({ ...option, key: v4() }))}
                        getOptionLabel={(option: ProductItemType) => option.name}
                        id="movie-customized-option-demo"
                        onChange={(event: any, newValue: ProductItemType | null) => setSelectedCategory(newValue)}
                        sx={{ width: '220px' }}
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField {...params} label="Choose a filter product" variant="standard"
                              />
                        )}
                    />
                    <Box sx={{ width: '220px' }} >
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }} >sorting</InputLabel>
                            <Select
                                value={sorting}
                                label="Sort"
                                sx={{
                                    color: 'white',
                                }}
                                onChange={handleSorting}
                            >
                                <MenuItem value={'price'}>Price</MenuItem>
                                <MenuItem value={'name'}>Name</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Typography>
            </Box>
            <Typography component={'h1'} variant='h1'> Products page</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {filteredProduct.map(item => (
                    <ProductItem key={item.id} item={item} addToCart={addToCart} />
                ))}
            </Box>
        </div>
    );
};
export default Products;