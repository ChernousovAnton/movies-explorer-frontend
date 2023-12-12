import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <div className="techs-section__container">
        <h2 className="techs-section__title">Технологии</h2>
        <div className='techs__container'>
          <h3 className='techs__title'>7 технологий</h3>
          <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs_list'>
            <li className='techs_item'>HTML</li>
            <li className='techs_item'>CSS</li>
            <li className='techs_item'>JS</li>
            <li className='techs_item'>React</li>
            <li className='techs_item'>Git</li>
            <li className='techs_item'>Express.js</li>
            <li className='techs_item'>mongoDB</li>
          </ul>
        </div>
    </div>
  </section>

  )
}

export default Techs;
