// Import Components
import { Navbar, Footer, Register } from "../../components/components";

// Import Hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewRegister = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser?.token) {
      navigate("/");
    } else {
      null;
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Register />
      </div>
      <Footer />
    </>
  );
};

export default ViewRegister;
