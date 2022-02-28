import Menu from "../../components/menu";
import down from "../../img/down.png"
import ilustracao from "../../img/Ilustração.png"
import "./style.css"

export default function Home() {
    return (
        <div style={{ display:'flex', flexDirection:'column'}}>
            <div>
                <Menu />
            </div>
            <div className="banner">
                <button style={{ fontSize: '30px', background: "transparent", color: 'white', borderColor: 'white', borderRadius: '42px', padding: '16px 50px', marginBottom: '90px', marginTop: '32pc' }}>ver mais</button>
                <img src={down}></img>
            </div>
            <div style={{position:'relative', display: 'flex', top:'1070px'}}>
                <div><img src={ilustracao}></img></div>
                <div>
                    <h3>Sobre nós</h3>
                    <div>
                        Criamos projetos de qualidade e valor para pequenas empresas e as ajudamos a crescer no mercado com com uma identidade própria e exclusiva pra se destacar no no mundo digital
                    </div>
                </div>
            </div>
        </div>
    );
}