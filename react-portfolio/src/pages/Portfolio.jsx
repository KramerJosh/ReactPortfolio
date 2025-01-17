// Put Portfolio Cards here
import PortCard from '../components/PortCard'
import projects from "../projects";

// <>
// <h1>Products</h1>
// {products.map((product) => {
//   return (
//     <div key={product.id}>
//       <h1>{product.title}</h1>
//       <h2>{product.price}</h2>
//       <p>{product.description}</p>
//     </div>
//   );
// })}
// </>



function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio!</h2>
      <div className="cardHolder">
        {/* <PortCard /> */}
        {projects.map((project => {
          return (
            <PortCard key={project.id} desc={project.desc} img={project.img} title={project.title} />
          )
        }))}

      </div>
    </div>
  );
}

{/* function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio!</h2>
      <div className="cardHolder">
        <PortCard />
        <PortCard />
        <PortCard />
        <PortCard />
        <PortCard />
        <PortCard />
        <PortCard />
        <PortCard />
      </div>
    </div>
  );
} */}

export default Portfolio;
