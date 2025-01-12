

const PortCard = () => {
    const testImage = `./src/assets/SMPTE_Color_Bars.png`;

    return(
        <div className="portCard">
            <h2>Card Header</h2>
            <p>I'm a card!</p>
            <img src={testImage} alt="" />
            {/* <img src="src\assets\SMPTE_Color_Bars.png" alt="" /> */}
        </div>
    )
}

export default PortCard

