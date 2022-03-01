import "./style.css";
import wppImg from "../../img/wpp.png"
import mailImg from "../../img/mail.png"
export default function Form() {
    return (
        <div className="form-container">
            <div>
                <form className='form-form'>
                    <input type='text' placeholder='Nome' className='form-input'></input>
                    <input type='text' placeholder='Email' className='form-input'></input>
                    <input type='text' placeholder='Telefone' className='form-input'></input>
                    <textarea className='form-input' placeholder='Digite sua mensagem...'></textarea>
                    <div className='form-container-button'>
                        <button className='form-button'>Enviar</button>
                    </div>
                </form>
            </div>
            <div className='form-container-contato'>
                <div>
                    <h1 className='form-h1'> Informações de <br/>contato</h1>
                    <div className='form-contato-text'>Entre em contato com a gente para<br/> trocarmos uma idéia e peça seu<br/> orçamento.</div>
                </div>
                <div className='form-contato'>
                    <div>
                        <img src={wppImg}></img>
                    </div>
                    <div>
                        24 98883-4093
                    </div>
                </div>
                <div className='form-contato'>
                    <div>
                        <img src={mailImg}></img>
                    </div>
                    <div>
                        contato@congostudio.com
                    </div>
                </div>
            </div>
        </div>
    );
}