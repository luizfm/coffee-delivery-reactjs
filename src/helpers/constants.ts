import AmericanoImage from "../assets/americano.svg";
import ArabeImage from "../assets/arabe.svg";
import CafeComLeiteImage from "../assets/cafe-com-leite.svg";
import CafeGeladoImage from "../assets/cafe-gelado.svg";
import CapuccinoImage from "../assets/capuccino.svg";
import ChocolateQuenteImage from "../assets/chocolate-quente.svg";
import CubanoImage from "../assets/cubano.svg";
import ExpressoImage from "../assets/expresso.svg";
import ExpressoCremosoImage from "../assets/expresso-cremoso.svg";
import HavaianoImage from "../assets/havaiano.svg";
import IrlandesImage from "../assets/irlandes.svg";
import LatteImage from "../assets/latte.svg";
import MacchiatoImage from "../assets/macchiato.svg";
import MocaccinoImage from "../assets/mocaccino.svg";

export const MOCKED_PRODUCTS = [
  {
    id: `${new Date().getMilliseconds()}-expresso-tradicional`,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["tradicional"],
    price: 9.9,
    pictureUrl: ExpressoImage,
  },
  {
    id: `${new Date().getMilliseconds()}-expresso-americano`,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["tradicional"],
    price: 9.9,
    pictureUrl: AmericanoImage,
  },
  {
    id: `${new Date().getMilliseconds()}-expresso-cremoso`,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["tradicional"],
    price: 9.9,
    pictureUrl: ExpressoCremosoImage,
  },
  {
    id: `${new Date().getMilliseconds()}-expresso-gelado`,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["tradicional", "gelado"],
    price: 9.9,
    pictureUrl: CafeGeladoImage,
  },
  {
    id: `${new Date().getMilliseconds()}-cafe-com-leite`,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["tradicional", "com leite"],
    price: 9.9,
    pictureUrl: CafeComLeiteImage,
  },
  {
    id: `${new Date().getMilliseconds()}-latte`,
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["tradicional", "com leite"],
    price: 9.9,
    pictureUrl: LatteImage,
  },
  {
    id: `${new Date().getMilliseconds()}-capuccino`,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["tradicional", "com leite"],
    price: 9.9,
    pictureUrl: CapuccinoImage,
  },
  {
    id: `${new Date().getMilliseconds()}-macchiato`,
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["tradicional", "com leite"],
    price: 9.9,
    pictureUrl: MacchiatoImage,
  },
  {
    id: `${new Date().getMilliseconds()}-mocaccino`,
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["tradicional", "com leite"],
    price: 9.9,
    pictureUrl: MocaccinoImage,
  },
  {
    id: `${new Date().getMilliseconds()}-chocolate-quente`,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["tradicional", "com leite"],
    price: 9.9,
    pictureUrl: ChocolateQuenteImage,
  },
  {
    id: `${new Date().getMilliseconds()}-cubano`,
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["especial", "alcoólico", "gelado"],
    price: 9.9,
    pictureUrl: CubanoImage,
  },
  {
    id: `${new Date().getMilliseconds()}-havaiano`,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["especial"],
    price: 9.9,
    pictureUrl: HavaianoImage,
  },
  {
    id: `${new Date().getMilliseconds()}-arabe`,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["especial"],
    price: 9.9,
    pictureUrl: ArabeImage,
  },
  {
    id: `${new Date().getMilliseconds()}-irlandes`,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["especial", "alcoólico"],
    price: 9.9,
    pictureUrl: IrlandesImage,
  },
];
