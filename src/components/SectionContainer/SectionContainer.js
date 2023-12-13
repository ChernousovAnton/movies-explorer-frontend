import "./SectionContainer.css";

function SectionContainer({ title, children }) {
  return (
    <div className="section-container">
      <h2 className="section-container__title">{title}</h2>
      {children}
    </div>
  );
}

export default SectionContainer;
