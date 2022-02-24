import React from "react";

const Head1 = ({ heading = "Heading", text }) => {
  return (
    <>
      <h2
        className="
            page-section-heading
            text-center text-uppercase text-secondary
            mb-0 
          "
      >
        {heading}
      </h2>
      {/* <!-- Icon Divider--> */}
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
    </>
  );
};
const Head2 = ({ heading = "Heading", text }) => {
  return (
    <>
      <h2
        className="
            page-section-heading
            text-center text-uppercase text-white
            mb-0 
          "
      >
        {heading}
      </h2>
      {/* <!-- Icon Divider--> */}
      <div className="divider-custom-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
    </>
  );
};

export { Head1, Head2 };
