import './AboutProject.css';
import SectionContainer from '../SectionContainer/SectionContainer';

function AboutProject() {
  return (
    <section className='about-project'>
      <SectionContainer title={'О проекте'}>
        <div className='about-project__container'>
          <article>
            <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article>
            <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
          <div className='about-project__duration'>
            <figure className='about-project__duration-time about-project__duration-time_green'>1 неделя</figure>
            <figure className='about-project__duration-time about-project__duration-time_grey'>4 недели</figure>
            <p className='about-project__duration-name'>Back-end</p>
            <p className='about-project__duration-name'>Front-end</p>
          </div>
        </div>
      </SectionContainer>
    </section>

      

  )
}

export default AboutProject