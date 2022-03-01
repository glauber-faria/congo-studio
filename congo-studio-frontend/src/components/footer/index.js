import "./style.css";
import linkedinImg from "../../img/likedin.png";
import wppImg from "../../img/wpp-rodape.png";
import facebookImg from "../../img/facebook.png";
import instagramImg from "../../img/instagram.png";
export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-text">
                <b className="footer-bolder">Congo studio |</b> <span style={{fontWeight:'200px', fontSize:'17px'}}>desenvolvido por Glauber Faria</span>
            </div>
            <div className="footer-container-socialmedia">
                <div className="footer-text footer-bolder">Siga-nos</div>
                <img src={linkedinImg} className="footer-img"></img>
                <img src={wppImg} className="footer-img"></img>
                <img src={facebookImg} className="footer-img"></img>
                <img src={instagramImg} className="footer-img"></img>

            </div>
        </div>
    );
}
