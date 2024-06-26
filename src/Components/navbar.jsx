import React, { useState, useEffect } from "react";
import { useFormData } from "../infoContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const routes = ["/", "/address_info", "/review_info", "/submitted"];
  const currentIndex = routes.indexOf(location.pathname);
  const { formData, setFormData, resetFormData } = useFormData();

  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    const validateCurrentStep = () => {
      switch (location.pathname) {
        case "/":
          return formData.name && formData.email && formData.phone;
        case "/address_info":
          return (
            formData.address_1 &&
            formData.city &&
            formData.state &&
            formData.zip
          );
        case "/review_info":
          return true; // No additional validation needed for the review step
        default:
          return false;
      }
    };

    setCanProceed(validateCurrentStep());
  }, [location.pathname, formData]);

  const handleBack = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };
  const handleForward = () => {
    if (currentIndex < routes.length - 2) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("Complete_Info", JSON.stringify(formData));
    setTimeout(() => {
      navigate("/submitted");
    }, 1000); // Reduced delay to 1.5 seconds for better UX
  };
  const handleCreatNewForm=()=>{
    resetFormData();
    navigate('/');
  }

  return (
    <nav className="navbar">
      <h1>GurujiAstro</h1>
      {currentIndex < routes.length - 1 ? (
        <div className="btn-div">
          <button
            onClick={() => handleBack()}
            className="back-btn"
            disabled={currentIndex == 0}
            style={
              currentIndex == 0
                ? { color: "grey" }
                : { color: "rgb(6, 6, 176)" }
            }
          >
            <IoMdArrowRoundBack />
          </button>
          {currentIndex < routes.length - 2 ? (
            <button
              onClick={() => handleForward()}
              disabled={!canProceed}
              className="forward-btn"
              style={
                !canProceed ? { color: "grey" } : { color: "rgb(6, 6, 176)" }
              }
            >
              <IoMdArrowRoundForward />
            </button>
          ) : (
            <button onClick={() => handleSubmit()} className="submit">
              Submit
            </button>
          )}
        </div>
      ) : (
        <button className="save-new" onClick={handleCreatNewForm}>Save new Form</button>
      )}
    </nav>
  );
}

export default Navbar;
