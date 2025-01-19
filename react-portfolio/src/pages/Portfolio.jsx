// Put Portfolio Cards here
import PortCard from '../components/PortCard'
import projects from "../projects";
import { headerStyle } from '../styles';


function Portfolio() {
  return (
    <div id="portfolio">
      <h2 className={headerStyle}>Portfolio!</h2>
      <div className="flex justify-center items-center flex-wrap gap-4 mx-auto mt-8">
        {/* <PortCard /> */}
        {projects.map((project => {
          return (
            <PortCard key={project.id} desc={project.desc} img={project.img} title={project.title} link={project.link}/>
          )
        }))}

      </div>
    </div>
  );
}


export default Portfolio;
