import { Navbar } from "./Navbar";
import { Featured } from "./Featured";
import { Footer } from "./Footer";
import Products from "./Products/Products";

export const Home = () => {
  console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    <div>
      <div className="homeHeader">
        <Navbar />
      </div>
      <div className="homeBody">
        <Featured />
      </div>
      <div className="homeProducts">
        <Products />
      </div>
      <div className="homeFooter">
        <Footer />
      </div>
    </div>
  );
};
