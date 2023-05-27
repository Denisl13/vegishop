import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CosmPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Footer/footer";
import Bcosmeticos from "../BannerCosmeticos/Bcosm";
import { Cosmeticoimages } from "../BannerCosmeticos/SliderCosmeticos";
import { NavHeader } from "../../Header/header";

interface CardCosmPag1Props {
  img: string;
  title: string;
  description: string;
  stars?: number; // Adicionando a nova propriedade "stars"
}

function CardCosmPag1(props: CardCosmPag1Props) {
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
    <div className="card--master--Cosmeticos">
      <div className="card__corpo__Cosmeticos">
        <img
          src={props.img}
          className="card-imagem--Cosmeticos"
          alt={props.title}
        />
        <h2 className="card__titulo__Cosmeticos">{props.title}</h2>
        <p className="card__descricao__Cosmeticos">{props.description}</p>
      </div>
      <div className="card__stars__Cosmeticos">{props.stars && stars}</div>
      <button className="card__botao__Cosmeticos">View Recipe</button>
    </div>
  );
}

function CosmComPage1() {
  useEffect(() => {
    const handlePaginationClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Adiciona um evento de clique para as links de paginação
    const paginationLinks = document.querySelectorAll(".pagination a");
    paginationLinks.forEach((link) => {
      link.addEventListener("click", handlePaginationClick);
    });

    // Remove o evento de clique ao desmontar o componente
    return () => {
      paginationLinks.forEach((link) => {
        link.removeEventListener("click", handlePaginationClick);
      });
    };
  }, []);

  const imageIndex = 1; // Índice da imagem desejada de  SliderCosmeticos
  const imageUrl = Cosmeticoimages[imageIndex].image;

  return (
    <div>
      <div id="topo"></div>
      <NavHeader />
      <Bcosmeticos img={imageUrl} />
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
      </div>
      <div className="pagination">
        <a href="/cosmeticos">&laquo;</a>
        <Link to="/cosmeticos/pagination=1?" className="active">
          1
        </Link>
        <Link to="/cosmeticos/pagination=2?">2</Link>
        <Link to="/cosmeticos/pagination=3?">3</Link>
        <Link to="/cosmeticos">&raquo;</Link>
      </div>
      <Footer />
    </div>
  );
}

export default CosmComPage1;
