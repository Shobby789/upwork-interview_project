import "./PortfolioCard.css";

export default function PortfolioCard({ image, desc }) {
  return (
    <>
      <div className="portfolio-card mb-4">
        <img src={image} alt="Avatar" className="image" />
        <div className="overlay">
          <div className="text rounded-pill">{desc}</div>
        </div>
      </div>
    </>
  );
}
