import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__baseband">
          <span className="footer__copy">&copy;{new Date().getFullYear()}</span>
          <ul className="footer__links">
            <li>
              <a className="footer__link" href="#">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Github
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
