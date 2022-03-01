import { useEffect, useState } from "react";

export default function PortifolioList() {
    const [portifolio, setPortifolio] = useState([
        {
            img: 'Ilustração',
            type: 'Ilustração',
            route: '/encontre',
        },
        {
            img: 'Ilustração',
            type: 'Redes Sociais',
            route: '/encontre',
        },
        {
            img: 'Ilustração',
            type: 'Sites & Apps',
            route: '/encontre',
        },
        {
            img: 'Ilustração',
            type: 'Identidade Visual',
            route: '/encontre',
        },
    ]);
    const [selected, setSelected] = useState('Identidade Visual');
    useEffect(() => {
        console.log(portifolio);
    }, []);

    return (
        <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
            {
                portifolio.map((item, i) => {
                    return (<div style={{margin:'10px 50px'}}>{item.type}</div>);
                })
            }
        </div>
    );
}