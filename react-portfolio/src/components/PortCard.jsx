const PortCard = ({ title, desc, img, link, github }) => {
  return (
    <div className="bg-primary-color border-2 border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg w-80">
      <a href={link} target="_blank" rel="noopener">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </a>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white-color mb-2">{title}</h2>
        <p className="text-white-color">{desc}</p>
        <a href={github} className="text-secondary-color">link to github</a>
      </div>
    </div>
  );
};

export default PortCard;
