import './PortfolioItem.css';
import { Link } from 'react-router-dom';

function PortfolioItem({ name, link }) {
  return (
    <li className='portfolio__item'>
      <p className='portfolio__name'>{ name }</p>
      <Link to={link} className='portfolio__link' />
    </li>
  )
}

export default PortfolioItem;