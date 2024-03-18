import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button } from '@mui/material';
import logo from '../../accets/Img/logo.png'
import Avatar from '@mui/material/Avatar';


const Header = () => {
  let getuserName =localStorage.getItem("token");
  return (
    <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to='/' className='logo'>
        <img src={logo} />
      </Link>

      <div className='header-nav'>

        <Link to='/'>
          home
        </Link>
        <Link to='/products'>
          products
        </Link>

        <Link to='/orders'>
          orders
        </Link>

        <Link to='/profile'>
          profile
        </Link>

      </div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '250px',
          justifyContent: 'space-around',
        }}>
           {
          getuserName === 'Admin' ? <Link to='/admin'>
          admin
           </Link> :null
        }
        <Link to='/cart'>
          <ShoppingCartIcon />
        </Link> 
       
       
        <Link to='/login'>
          <Button variant='contained' 
          sx={{
            bgcolor:'#BAAE01'
          }}
          >Login/LogOut</Button>
         
        </Link>
        <Link to='/profile'>
        <Avatar>{getuserName}</Avatar>
        </Link>
       
      </Box>
    </header>
  );
};

export default Header;
