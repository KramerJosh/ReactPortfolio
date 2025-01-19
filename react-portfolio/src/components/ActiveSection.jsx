import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Resume from "./Resume"



  const ActiveSection = ({choice}) => {  
    if (choice === 'About') {
        return (
            <div>  
              <About />
            </div>
          );
    } else if (choice === 'Portfolio') {
        return (
            <div>  
              <Portfolio />
            </div>
          );
    }
    else if (choice === 'Contact') {
        return (
            <div>  
              <Contact />
            </div>
          );
    }
    else if (choice === 'Resume') {
        return (
            <div>  
              <Resume />
            </div>
          );
    }
  };
  

  export default ActiveSection;
