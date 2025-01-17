const PortCard = ({ title, desc, img, link }) => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg w-80">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </a>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default PortCard;
