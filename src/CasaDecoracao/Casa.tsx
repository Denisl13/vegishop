import "./Casa.css";
import "./Fontes/fonte.css";
import Bcasa from "../BannerCasa/Bcasa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/footer";
import Sep from "../Separador/Sep";
import { NavHeader } from "../Header/header";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";

interface CardCasaProps {
  img: string;
  title: string;
  description: string;
  stars?: number;
}
function CardCasa(props: CardCasaProps) {
  const filledStars = props.stars ? Math.floor(props.stars) : 0;
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FontAwesomeIcon
        icon={faStar}
        color={i < filledStars ? "#f99304" : "#ddd"}
        size="1x"
      />
    </span>
  ));
  return (
    <div className="card--master--Casa">
      <div className="card__corpo__Casa">
        <img src={props.img} className="card-imagem--Casa" alt={props.title} />
        <h2 className="card__titulo__Casa">{props.title}</h2>
        <p className="card__descricao__Casa">{props.description}</p>
      </div>
      <div className="card__stars__Casa">{props.stars && stars}</div>
      <button className="card__botao__Casa">Saiba Mais...</button>
    </div>
  );
}

function Cosmeticos() {
  return (
    <div className="grid--container--Casa">
      <NavHeader />
      <Bcasa />
      <Sep title="Casa & Decoração" />
      <div className="grid-container-Casa">
        <div className="grid--item--Casa item-1">
          <div className="wrapper__Casa">
            <CardCasa
              img="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Resfriamento com óleo mineral em montagens de PC"
              description="O PC com óleo mineral oferece vários benefícios que o tornam uma boa opção.."
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://plus.unsplash.com/premium_photo-1674644778241-3fca269f5dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=484&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://images.unsplash.com/photo-1632935190508-bd46801c14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
      </div>
      <div className="grid-container-Casa">
        <div className="grid--item--Casa item1">
          <div className="wrapper__Casa">
            <CardCasa
              img="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=630&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={1}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://images.unsplash.com/photo-1634822929331-ee4dc2c97fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={4}
            />
          </div>
        </div>
      </div>
      <BvoltaTop />
      <Footer />
    </div>
  );
}

export default Cosmeticos;
