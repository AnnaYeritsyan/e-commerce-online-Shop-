import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person';
import '.././signIn.css';
// import {Box, Button, Typography} from '@mui/material';
import { useAppDispatch } from '../../../store';
import { usersActions } from "../../../store/config";

// const LoginPage = () => {
//     const [inputError, setInputError] = useState('');
//     const [inputSuccess, setInputSuccess] = useState('');
//     const dispatch = useAppDispatch()
//     const navigate = useNavigate();
//     const [creds, setCreds] = useState({
//         username: "",
//         password: ""
//     })

//     const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
//         console.log(creds)
//         setCreds({
//             ...creds,
//             [ev.target.name]: ev.target.value
//         })
//     }
//     const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if(!creds.username || !creds.password) {
//          return
//         }

//         dispatch(usersActions.login(creds, () => {
//             navigate('/')
//         }))
//         localStorage.getItem("myKey");
// let loc = localStorage.setItem('token', creds.username);
//         console.log(loc)
//     }
//     return (
//         <Box className='reg-login-page'>
//             <Box>


//              <Typography component={'h2'} variant='h2'>Login</Typography>
//             <form onSubmit={formSubmitHandler} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

//                 <Box className={inputError.length ? 'form-item error-item' : 'form-item'}>
//                     <Box className='form-field with-icon'>
//                         <input
//                             type='text'
//                             name='username'
//                             placeholder='Username:'
//                             value={creds.username}
//                             onChange={handleChange}
// />
//                         <PersonIcon/>
//                     </Box>
//                     <Typography component={'p'} className='api-sign-example'>api example: kminchelle</Typography>
//                 </Box>
//                 <Box className={inputError.length ? 'form-item error-item' : 'form-item'}>
//                     <Box className='form-field with-icon'>
//                         <input 
// value={creds.password} 
// type='password'
//  name='password' 
//  placeholder='Password:'
//   onChange={handleChange}
//   />
//                         <PersonIcon/>
//                     </Box>
//                     <p className='api-sign-example'>api example: 0lelplR</p>
//                     <Box className='form-error'>{inputError}</Box>
//                     <Box className='form-success'>{inputSuccess}</Box>
//                 </Box>
//                 <Box className='form-submit'>
//                     <Button type='submit'>
//                         Sign In
//                     </Button>

//                 </Box>
//             </form>
//             </Box>
//             <Box className='change-sign-form'>
//                 <Typography component={'p'}>
//                     If you haven&apos;t an account? <Link to='/register'>Sign Up here</Link>
//                 </Typography>
//                 <Typography component={'p'}>
//                     Back to <Link to='/'>Home</Link>
//                 </Typography>
//             </Box>
//         </Box>
//     );
// };

// export default LoginPage;

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

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor:
           ' #0090AA',

        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    size: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },

    paper: {
        margin: theme.spacing(2, 6),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(0),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function LoginPage() {
    const [inputError, setInputError] = useState('');
    const [inputSuccess, setInputSuccess] = useState('');
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const [creds, setCreds] = useState({
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
    const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!creds.username || !creds.password) {
            return
        }

        dispatch(usersActions.login(creds, () => {
            navigate('/')
        }))
        localStorage.getItem("myKey");
    }

    const classes = useStyles();

    return (
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
                    <form className={classes.form} noValidate onSubmit={formSubmitHandler}>
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
                            placeholder='Password:'
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
                    
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
