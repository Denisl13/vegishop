import Header from "../Header/header";
import { NavHeader } from "../Header/header";
import Banner from "../Banner/banner";
import Homepage from "../HomePage/Homepage";

function Home() {
  return (
    <>
      <Header black={false} /> {/*Logo + Nav a direita */}
      <NavHeader/> {/*scroll black javascript puro */}
      <Banner />
      <Homepage />
    </>
  );
}

export default Home;
