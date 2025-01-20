import { headerStyle } from "../styles";

const Resume = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className={`${headerStyle}`}>Resume - Click <a href="../src/assets/resume.pdf" download="JoshKramerResume" className="underline">Here</a> to Download</h2>
      <iframe
        src="../src/assets/resume.pdf#toolbar=0"
        width="600"
        height="800"
        className="border-none mb-10"
      ></iframe>
    </div>
  );
};

export default Resume;
