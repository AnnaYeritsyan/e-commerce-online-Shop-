import {useState, FormEvent, ChangeEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import '.././signIn.css';
import {Box, Button, Typography} from '@mui/material';
import { useAppDispatch } from '../../../store';
import {usersActions} from "../../../store/config";

const LoginPage = () => {
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
        if(!creds.username || !creds.password) {
         return
        }
        
        dispatch(usersActions.login(creds, () => {
            navigate('/')
        }))
        localStorage.getItem("myKey");
let loc = localStorage.setItem('token', creds.username);
        console.log(loc)
    }
    return (
        <Box className='reg-login-page'>
            <Box>

         
             <Typography component={'h2'} variant='h2'>Login</Typography>
            <form onSubmit={formSubmitHandler} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
               
                <Box className={inputError.length ? 'form-item error-item' : 'form-item'}>
                    <Box className='form-field with-icon'>
                        <input
                            type='text'
                            name='username'
                            placeholder='Username:'
                            value={creds.username}
                            onChange={handleChange}/>
                        <PersonIcon/>
                    </Box>
                    <Typography component={'p'} className='api-sign-example'>api example: kminchelle</Typography>
                </Box>
                <Box className={inputError.length ? 'form-item error-item' : 'form-item'}>
                    <Box className='form-field with-icon'>
                        <input value={creds.password} type='password' name='password' placeholder='Password:' onChange={handleChange}/>
                        <PersonIcon/>
                    </Box>
                    <p className='api-sign-example'>api example: 0lelplR</p>
                    <Box className='form-error'>{inputError}</Box>
                    <Box className='form-success'>{inputSuccess}</Box>
                </Box>
                <Box className='form-submit'>
                    <Button type='submit'>
                        Sign In
                    </Button>

                </Box>
            </form>
            </Box>
            <Box className='change-sign-form'>
                <Typography component={'p'}>
                    If you haven&apos;t an account? <Link to='/register'>Sign Up here</Link>
                </Typography>
                <Typography component={'p'}>
                    Back to <Link to='/'>Home</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default LoginPage;
