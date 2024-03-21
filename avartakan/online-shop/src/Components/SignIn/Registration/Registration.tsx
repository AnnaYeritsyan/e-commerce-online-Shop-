import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import '../signIn.css';
import { useAppDispatch } from '../../../store';
import { usersActions } from '../../../store/config';
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from '../Login/Login';
import { ChangeEvent } from 'react';

const Registration = () => {
    const dispatch = useAppDispatch()
    const [inputError, setInputError] = useState('');
    const navigate = useNavigate();
    const [creds, setCreds] = useState({
        lastname: "",
        firstname: "",
        username: "",
        password: ""
    })

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        console.log(creds)
        setCreds({
            ...creds,
            [ev.target.name]: ev.target.value
        })
    }
    const isValidForm = (formData: any) => {
        const { email, password, firstName, lastName } = formData;
        return true;
    };

    const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        console.log(e)
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const entries = Object.fromEntries(formData);
        console.log(entries.firstname)
      
        if (isValidForm(entries)) {
            navigate('/')
        }
        // dispatch(usersActions.register(entries, () => {

        // }))
        console.log(e)
    };
    const classes = useStyles();
    return (
        // <Box className='reg-login-page'>
        //     <h2>Register</h2>
        //     <form onSubmit={formSubmitHandler}>
        //         <Box className='form-item'>
        //             <Box className='form-field with-icon'>
        //                 <input type='email' name='email' placeholder='Email:' />
        //                 <EmailOutlinedIcon />
        //             </Box>
        //         </Box>
        //         <Box className='form-item'>
        //             <Box className='form-field with-icon'>
        //                 <input type='text' name='firstName' placeholder='FirstName:' />
        //                 <PersonIcon />
        //             </Box>
        //         </Box>
        //         <Box className='form-item'>
        //             <Box className='form-field with-icon'>
        //                 <input type='text' name='lastName' placeholder='LastName:' />
        //                 <PersonIcon />
        //             </Box>
        //         </Box>
        //         <Box className='form-item'>
        //             <Box className='form-field with-icon'>
        //                 <input type='password' name='password' placeholder='Password:' />
        //                 <LockOutlinedIcon />
        //             </Box>
        //             <Box className='form-error'>{inputError}</Box>
        //         </Box>
        //         <Box className='form-submit'>
        //             <button type='submit'>Sign Up</button>
        //         </Box>
        //     </form>
        //     <Box className='change-sign-form'>
        //         <p>
        //             If you have an account? <Link to='/login'>Sign In here</Link>
        //         </p>
        //         <p>
        //             Back to <Link to='/'>Home</Link>
        //         </p>
        //     </Box>
        // </Box>
        <Grid container component="main" className={classes.root} >
            <CssBaseline />
            {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
            <Grid
                className={classes.size}
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={1}
                square
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form}  onSubmit={formSubmitHandler}>
                        <TextField

                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="firstname"
                            label="FirstName"
                            name="firstname"
                            autoFocus
                            type='text'
                            placeholder='Firstname:'
                            value={creds.firstname}
                            onChange={handleChange}
                        />
                        <TextField

                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="LastName"
                            name="lastname"
                            autoFocus
                            type='text'
                            placeholder='Lastname:'
                            value={creds.lastname}
                            onChange={handleChange}
                        />

                        <TextField

                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoFocus
                            type='text'
                            placeholder='Username:'
                            value={creds.username}
                            onChange={handleChange}
                        />
                        <TextField

                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={creds.password}
                            // placeholder='Password:'
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}

                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>

                                <Link href="/login" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>  
                                <Box className='change-sign-form'>
            </Box>
                            </Grid>
                           
                        </Grid>
                        <Box mt={5}>
                            {/* <Copyright /> */}
                        </Box>
                    </form>
                </div>
            </Grid>
           
        </Grid>
    );
};

export default Registration;
