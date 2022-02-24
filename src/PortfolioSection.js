import React from "react";
import Item from "./Item";
import Cabin from "./assets/img/portfolio/cabin.png";
import Cake from "./assets/img/portfolio/cake.png";
import Circus from "./assets/img/portfolio/circus.png";
import Game from "./assets/img/portfolio/game.png";
import Safe from "./assets/img/portfolio/safe.png";
import Submarine from "./assets/img/portfolio/submarine.png";
import { Head1 } from "./Head";

const PortfolioSection = () => {
  return (
    <>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <>
            <Head1 heading="Portfolio" />
          </>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            {/* <!-- Portfolio Item 1--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <Item image={Cabin} />
            </div>
            {/* <!-- Portfolio Item 2--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <Item image={Cake} />
            </div>
            {/* <!-- Portfolio Item 3--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <Item image={Circus} />
            </div>
            {/* <!-- Portfolio Item 4--> */}
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <Item image={Game} />
            </div>
            {/* <!-- Portfolio Item 5--> */}
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <Item image={Safe} />
            </div>
            {/* <!-- Portfolio Item 6--> */}
            <div className="col-md-6 col-lg-4">
              <Item image={Submarine} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
