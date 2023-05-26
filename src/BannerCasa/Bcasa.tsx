import "./Bcasa.css";

function Bcasa() {
  return (
    <section
      className="featured__casa"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
        transition: "background-image 0.5s ease",
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--buttons">
            {/*<button className="featured--button netflix-button">
              + Saiba mais...
            </button>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bcasa;
