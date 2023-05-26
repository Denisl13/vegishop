import "./Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/footer";
import Sep from "../Separador/Sep";

interface HomePageProps {
  img: string;
  title: string;
  description: string;
  stars?: number; // Adicionando a nova propriedade "stars"
}
function CardHomepage(props: HomePageProps) {
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
    <div className="card--master--Homepage">
      <div className="card__corpo">
        <img
          src={props.img}
          className="card-imagem--Homepage"
          alt={props.title}
        />
        <h2 className="card__titulo__Homepage">{props.title}</h2>
        <p className="card__descricao__Homepage">{props.description}</p>
      </div>
      <div className="card__stars__Homepage">{props.stars && stars}</div>
      <button className="card__botao__Homepage">Saiba Mais...</button>
    </div>
  );
}

function Homepage() {
  return (
    <div className="grid--container--Homepage">
      <Sep title="Casa & Decoração" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1636138390765-c2497027eb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
      </div>
      <Sep title="Cosmético" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1636138390765-c2497027eb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
      </div>
      <Sep title="Moda Feminina" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1636138390765-c2497027eb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
      </div>
      <Sep title="Game" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1636138390765-c2497027eb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
      </div>
      <Sep title="Recomendados" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1636138390765-c2497027eb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
