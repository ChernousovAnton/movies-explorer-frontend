import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function HeaderLayout ( {onMenuClick} ) {
  return (
    <>
    <Header onMenuClick={onMenuClick}/>
    <Outlet />
  </>
  )
}

export default HeaderLayout;