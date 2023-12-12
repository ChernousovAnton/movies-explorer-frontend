import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function HeaderFooterLayout ({onMenuClick}) {
  return (
    <>
    <Header onMenuClick={onMenuClick}/>
    <Outlet />
    <Footer />
  </>
  )
}

export default HeaderFooterLayout;
