import { useState } from "react";
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
  
  // Main Component
//   const ActiveSection = () => {
//     const [isVisible, setIsVisible] = useState(false); // Step 1: State
  
//     const handleShowComponent = () => {
//       setIsVisible(true); // Step 2: Show component
//     };
  
//     return (
//       <div>
//         <button onClick={handleShowComponent}>Show Component</button>
  
//         {/* Step 3: Conditional Rendering */}
//         {isVisible && <HiddenComponent />}
//       </div>
//     );
//   };

  export default ActiveSection;





// const ActiveSection = ({choice}) => {
// console.log(`${choice}`)
// return (`${choice}`)
// } 

// export default ActiveSection