import './Promo.css';
import { Link } from 'react-router-dom';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__text'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <Link to="/" className='promo__button'>Узнать больше</Link>
        </div>
        <div className='promo__icon'></div>
      </div>
    </section>
  )
}

export default Promo;