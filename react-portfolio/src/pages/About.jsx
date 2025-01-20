import { headerStyle } from "../styles";
function About() {
  return (
    <div className="about flex flex-col items-center justify-center">
      <h2 className={headerStyle}>About</h2>
      <div className="flex space-x-8">
      <img src="@/assets/pfp.jpg" alt="" className="w-52 h-52 m-8 p-3"/>
      <div
        id="aboutHolder"
        className="inline-block m-8 border border-solid border-primary-color shadow-none p-3 mx-auto"
      >
        <h1 className="">Hello - and welcome to my internet page.</h1>
        <p className="m-0">
          I'm Josh Kramer, and I'm a Web Developer, Audio-Visualist, and Music
          Technologist.
        </p>
        <p className="m-0">
          I'll be using this website to showcase projects I've worked on.
        </p>
        <p className="m-0">This page was built using React and Tailwind, and deployed with Netflify.</p>
        <p className="m-0">
          Outside of Web Development, my interests include:
          <ul>
            <li>Spending time with my wife and our dog, Disco</li>
            <li>Cooking, especially Italian food, and</li>
            <li>Playing video games and writing music</li>
          </ul>
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
