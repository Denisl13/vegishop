import "./BMFeminina.css";

function Bfeminina() {
  return (
    <section
      className="featured__feminina"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://plus.unsplash.com/premium_photo-1679415150838-a85a1bbb233b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
        transition: "background-image 0.5s ease",
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--buttons">
            {/*<button className="featured--button netflix-button">
              + Saiba Mais...
            </button>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bfeminina;
