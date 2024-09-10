import w_firma from "/Wfirma.svg";
import "../../styles/home/about.css";

const CoAbout = () => {
    return (
        <div className="div-content" style={{paddingTop: "10vw"}}>
            <img id="firma" src={w_firma} alt="firma" />
            <p><span>SOBRE MI</span><span id="chi">(CHI)</span></p>
        </div>
    );
}

export default CoAbout;