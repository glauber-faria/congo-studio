import Form from "../../components/form";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import PortifolioList from "../../components/portifoliolist";
import down from "../../img/down.png"
import ilustracao from "../../img/Ilustração.png"
import boamassaimg from "../../img/carrousel/boamassa.png"
import manueimg from "../../img/carrousel/manue.png"
import glauberfariaimg from "../../img/carrousel/glauberfaria.png"
import helpfarma from "../../img/carrousel/helpfarma.png"
import "./style.css"
import { useEffect } from "react";


const carrousel =  [boamassaimg, glauberfariaimg, helpfarma, manueimg];
export default function Home() {
    useEffect(() => {
        const x = document.getElementsByClassName("banner"); 
        var i = 0;
        setInterval(() => {
            x[0].style.background = `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)), url(${carrousel[i]}) no-repeat`;
            x[0].style.backgroundPosition = `top, center`;
            x[0].style.backgroundSize = `contain, cover`;
            x[0].focus();
            i === (carrousel.length-1) ? i = 0: i++;
        }, 8000);
    }, []);
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <Menu />
            </div>
            <div className="banner">
                <button className="button">ver mais</button>
                <img src={down} alt="down"></img>
            </div>
            <div className="sobre">
                <div>
                    <img src={ilustracao} className="ilustracao" alt="ilustração"></img> 
                </div>
                <div>
                    <h3>Sobre nós</h3>
                    <div className="text">
                        Criamos projetos de qualidade e valor para pequenas empresas e as ajudamos a crescer no mercado com com uma identidade própria e exclusiva pra se destacar no no mundo digital.
                    </div>
                </div>
            </div>
            <div className="portifolio">
                <PortifolioList />
            </div>
            <div className="form">
                <Form />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}