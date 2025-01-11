// Put Portfolio Cards here
import PortCard from "./PortCard";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio!</h2>
      <div className="cardHolder">
        <PortCard />
        <PortCard />
        <PortCard />
        <PortCard />
      </div>
    </div>
  );
}

export default Portfolio;
