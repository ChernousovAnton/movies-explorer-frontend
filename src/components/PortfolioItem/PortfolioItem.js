import "./PortfolioItem.css";

function PortfolioItem({ name, link }) {
  return (
    <li className="portfolio__item">
      <a
        className="portfolio__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </li>
  );
}

export default PortfolioItem;
