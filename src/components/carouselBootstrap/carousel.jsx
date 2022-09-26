import Carousel from "react-bootstrap/Carousel";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import fp1 from "../../assets/product-03.svg";
import fp2 from "../../assets/product-02.svg";
import fp3 from "../../assets/product-01.svg";

function CarouselFP() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="fp-container">
          <div>
            <img alt="loading" src={fp1} />
          </div>
          <div>
            <img alt="loading" src={fp2} />
          </div>
          <div>
            <img alt="loading" src={fp3} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="fp-container">
          <div>
            <img alt="loading" src={fp1} />
          </div>
          <div>
            <img alt="loading" src={fp2} />
          </div>
          <div>
            <img alt="loading" src={fp3} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="fp-container">
          <div>
            <img alt="loading" src={fp1} />
          </div>
          <div>
            <img alt="loading" src={fp2} />
          </div>
          <div>
            <img alt="loading" src={fp3} />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFP;
