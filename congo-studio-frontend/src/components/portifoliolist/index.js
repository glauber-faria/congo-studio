import { useEffect, useState } from "react";
import "./style.css";
import list from "./list.js";

export default function PortifolioList() {
    const [portifolio, setPortifolio] = useState(list);
    const [selected, setSelected] = useState(0);
    useEffect(() => {
    }, []);

    const onClick = (e) => {
        setSelected(parseInt(e.target.value));

    }
    const ProductsFilter = (props) => {
        const portifolioFilter = (portifolio.filter((value) => { return value.id === props.id }));
        return (
            <div className="portifolio-container-img">
                {portifolioFilter[0].product.map((product) => {
                    return (<img src={product.img} className="portifolio-images"></img>)
                })}
            </div>
        )
    }

    return (
        <div className="portifolio-container">
            <div className="portifolio-container-buttons">
                {
                    portifolio.map((item) => {
                        return (
                            <button className={selected === item.id ? "selected options" : "options"} onClick={(e) => onClick(e)} value={item.id} key={item.id} >{item.category}</button>
                        )
                    })
                }
            </div>
            <div style={{ marginTop: '80px', marginBottom:'80px'}}>
                <ProductsFilter id={selected} />
            </div>
        </div>
    );
}