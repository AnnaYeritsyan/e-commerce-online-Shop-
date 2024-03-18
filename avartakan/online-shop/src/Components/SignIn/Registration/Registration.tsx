import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';
import '../signIn.css';
import { useAppDispatch } from '../../../store';
import { usersActions } from '../../../store/config';

const Registration = () => {
    const dispatch = useAppDispatch()
    const [inputError, setInputError] = useState('');
    const navigate = useNavigate();

    const isValidForm = (formData: any) => {
        const { email, password, firstName, lastName } = formData;
        if (!email.length || !password.length || !firstName.length || !lastName.length) {
            setInputError('Please fill in all fields');
            return false;
        }

        return true;
    };

    const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const entries = Object.fromEntries(formData);
        if (!isValidForm(entries)) {
            navigate('/')
        }
        dispatch(usersActions.register(entries, () => {

        }))
        console.log(e)
    };

    return (
        <Box className='reg-login-page'>
            <h2>Register</h2>
            <form onSubmit={formSubmitHandler}>
                <Box className='form-item'>
                    <Box className='form-field with-icon'>
                        <input type='email' name='email' placeholder='Email:' />
                        <EmailOutlinedIcon />
                    </Box>
                </Box>
                <Box className='form-item'>
                    <Box className='form-field with-icon'>
                        <input type='text' name='firstName' placeholder='FirstName:' />
                        <PersonIcon />
                    </Box>
                </Box>
                <Box className='form-item'>
                    <Box className='form-field with-icon'>
                        <input type='text' name='lastName' placeholder='LastName:' />
                        <PersonIcon />
                    </Box>
                </Box>
                <Box className='form-item'>
                    <Box className='form-field with-icon'>
                        <input type='password' name='password' placeholder='Password:' />
                        <LockOutlinedIcon />
                    </Box>
                    <Box className='form-error'>{inputError}</Box>
                </Box>
                <Box className='form-submit'>
                    <button type='submit'>Sign Up</button>
                </Box>
            </form>
            <Box className='change-sign-form'>
                <p>
                    If you have an account? <Link to='/login'>Sign In here</Link>
                </p>
                <p>
                    Back to <Link to='/'>Home</Link>
                </p>
            </Box>
        </Box>
    );
};

export default Registration;
