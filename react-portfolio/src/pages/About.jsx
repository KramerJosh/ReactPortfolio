import { headerStyle } from "../styles";
function About() {
  return (
    <div className="about flex flex-col items-center justify-center">
      <h2 className={headerStyle}>About!</h2>
      <div id="aboutHolder" className="inline-block m-8 border border-solid border-primary-color shadow-none p-3 mx-auto">
  <p className="m-0">Hello - and welcome to my internet page.</p>
  <p className="m-0">I'm Josh Kramer, and I'm a Web Developer, Audio-Visualist, and Music Technologist.</p>
  <p className="m-0">I'll be using this website to showcase projects I've worked on.</p>
</div>
    </div>
  );
}

export default About;
