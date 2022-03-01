import ilustracaoBasqueteImg from "../../img/portifolio/ilustracao/basquete.png";
import ilustracaoSamuraiImg from "../../img/portifolio/ilustracao/samurai.png";
import ilustracaoCarpinteiroImg from "../../img/portifolio/ilustracao/carpinteiro.png";

import redesSociaisEncontreImg from "../../img/portifolio/redes-sociais/encontre.png";
import redesSociaisKeiseImg from "../../img/portifolio/redes-sociais/keise.png";

import embalagensManueImg from "../../img/portifolio/embalagens/manue.png";

import identidadeVisualBoaMassaImg from "../../img/portifolio/identidade-visual/boa-massa.png";
import identidadeVisualHelpFarmaImg from "../../img/portifolio/identidade-visual/helpfarma.png";
import identidadeVisualGlauberFariaImg from "../../img/portifolio/identidade-visual/glauber-faria.png";

const list = [
    {
        id: 0,
        category: "Todos",
        product: [
            {
                id: 4,
                name: "encontre",
                img: redesSociaisEncontreImg,
            },
            {
                id: 1,
                name: "baskettball",
                img: ilustracaoBasqueteImg,
            },
            {
                id: 7,
                name: "boa massa",
                img: identidadeVisualBoaMassaImg,
            },
            {
                id: 2,
                name: "samurai",
                img: ilustracaoSamuraiImg,
            },
            {
                id: 6,
                name: "manue",
                img: embalagensManueImg,
            },
            {
                id: 5,
                name: "keise",
                img: redesSociaisKeiseImg,
            },
        ]
    },
    {
        id: 1,
        category: "Ilustração",
        product: [
            {
                id: 1,
                name: "baskettball",
                img: ilustracaoBasqueteImg,
            },
            {
                id: 2,
                name: "samurai",
                img: ilustracaoSamuraiImg,
            },
            {
                id: 3,
                name: "carpinteiro",
                img: ilustracaoCarpinteiroImg,
            }
        ],
    },
    {
        id: 2,
        category: "Redes Sociais",
        product: [
            {
                id: 4,
                name: "encontre",
                img: redesSociaisEncontreImg,
            },
            {
                id: 5,
                name: "keise",
                img: redesSociaisKeiseImg,
            },
        ],
    },
    {
        id: 3,
        category: "Embalagens",
        product: [
            {
                id: 6,
                name: "manue",
                img: embalagensManueImg,
            },
        ],
    },
    {
        id: 4,
        category: "Identidade Visual",
        product: [
            {
                id: 6,
                name: "manue",
                img: embalagensManueImg,
            },
            {
                id: 7,
                name: "boa massa",
                img: identidadeVisualBoaMassaImg,
            },
            {
                id: 8,
                name: "helpfarma",
                img: identidadeVisualHelpFarmaImg,
            },
            {
                id: 9,
                name: "Glauber faria",
                img: identidadeVisualGlauberFariaImg,
            },
        ],
    },
    {
        id: 5,
        category: "Sites & Apps",
        product: [
            {
                id: 8,
                name: "helpfarma",
                img: identidadeVisualHelpFarmaImg,
            },
        ],
    },
]

export default list;