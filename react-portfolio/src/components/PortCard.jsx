//TODO - add "link" to props, and make the image link to the deployed project.


const PortCard = ({title, desc, img}) => {
    const testImage = img;

    return(
        <div className="portCard">
            <h2>{title}</h2>
            <p>{desc}</p>
            <img src={testImage} alt="" />
        </div>
    )
}

export default PortCard

