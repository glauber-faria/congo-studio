import Menu from "../../components/menu";
import PortifolioList from "../../components/portifoliolist";
import down from "../../img/down.png"
import ilustracao from "../../img/Ilustração.png"
import "./style.css"

export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <Menu />
            </div>
            <div className="banner">
                <button className="button">ver mais</button>
                <img src={down}></img>
            </div>
            <div className="sobre">
                <div>
                    <img src={ilustracao} className="ilustracao"></img>
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
                <div>
                    <h1>Form</h1>
                </div>
                <div>
                    <div>
                        <h1> Informações de contato</h1>
                        <div>Entre em contato com a gente para trocarmos uma idéia e peça seu orçamento.</div>
                    </div>
                    <div>
                        24 98883-4093
                    </div>
                    <div>
                        contato@congostudio.com
                    </div>
                </div>
            </div>
        </div>
    );
}