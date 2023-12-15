import './Portfolio.css';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__container'>
        <PortfolioItem name='Статичный сайт' link='https://github.com/ChernousovAnton'/>
        <PortfolioItem name='Адаптивный сайт' link='https://github.com/ChernousovAnton'/>
        <PortfolioItem name='Одностраничное приложение' link='https://github.com/ChernousovAnton'/>
      </ul>
    </section>
  )
}

export default Portfolio;