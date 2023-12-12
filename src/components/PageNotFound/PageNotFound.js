import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className='page-not-found'>
      <h1 className='page-not-found__title'>404</h1>
      <p className='page-not-found__text'>Страница не найдена</p>
      <button className='page-not-found__back' onClick={ () => navigate(-1) }>Назад</button>
    </div>
  )
}

export default PageNotFound;