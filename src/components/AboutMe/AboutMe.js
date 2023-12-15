import './AboutMe.css';
import SectionContainer from '../SectionContainer/SectionContainer';
import myPhoto from '../../images/cat_opt.jpeg'

function AboutMe() {
  return (
    <section className='about-me'>
      <SectionContainer title={'Студент'}>
        <div className='about-me__container'>
          <div>
            <h3 className='about-me__title'>Виталий</h3>
            <h4 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h4>
            <p className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. 
              У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className='about-me__link' href="https://github.com/ChernousovAnton/movies-explorer-frontend">Github</a>
          </div>
          <img className='about-me__photo' src={myPhoto} alt='Фото студента'></img>
        </div>
      </SectionContainer>
    </section>
  )
}

export default AboutMe;