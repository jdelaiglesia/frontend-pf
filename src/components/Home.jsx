import { Navbar } from "./Navbar";
import { Featured } from "./Featured";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div>
      <div className="homeHeader">
        <Navbar />
      </div>
      <div className="homeBody">
        <Featured />
      </div>
      <div className="homeFooter">
        <Footer />
      </div>
    </div>
  );
};
