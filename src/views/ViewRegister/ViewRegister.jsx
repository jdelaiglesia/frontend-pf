// Import Components
import { Navbar, Footer, Register } from "../../components/components";

// Import Hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ViewRegister = () => {
  const navigate = useNavigate();
  const { localAuth } = useAuth();
  useEffect(() => {
    if (localAuth.token) {
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
