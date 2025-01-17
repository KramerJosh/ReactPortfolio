// Put Portfolio Cards here
import PortCard from '../components/PortCard'
import projects from "../projects";


function Portfolio() {
  return (
    <div id="portfolio">
      <h2 className='text-center text-2xl font-bold my-4'>Portfolio!</h2>
      <div className="flex justify-center items-center flex-wrap gap-4 mx-auto">
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


export default Portfolio;
