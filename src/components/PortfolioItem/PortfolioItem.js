import './PortfolioItem.css';

function PortfolioItem({ name, link }) {
  return (
    <li className='portfolio__item'>
      <a href={link} className='portfolio__name' target="_blank" rel="noopener noreferrer">{ name }</a>
      <a href={link} className='portfolio__link' target="_blank" rel="noopener noreferrer" />
    </li>
  )
}

export default PortfolioItem;