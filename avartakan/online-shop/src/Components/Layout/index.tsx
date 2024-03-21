
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';


const Layout = (orderCaunt:any) => {
  console.log(orderCaunt)
  return (
    <div className='wrapper'>
      <Header orderCaunt={orderCaunt}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
