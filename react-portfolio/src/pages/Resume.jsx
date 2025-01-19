import { headerStyle } from "../styles";

const Resume = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <h2 className={`${headerStyle} text-3xl font-bold mb-8`}>Resume!</h2>
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
