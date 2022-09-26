import "./home.about.scss";
import aboutimg from "../../../assets/About-img.svg";

const HomeAbout = () => {
  return (
    <div>
      <div className="home-about">
        <div className="home-left-about">
          <p>About us</p>
          <div></div>
        </div>
        <div className="home-center-about">
          <div>
            <h3>Nothing Like Us</h3>
            <p className="hca-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere rutrum tellus et id ligula tristique donec. Egestas proin faucibus quis volutpat, urna pellentesque donec. Donec quam non sit ipsum mauris. In sed nunc ac suscipit magna
              pulvinar turpis. Et molestie et enim tincidunt consectetur bibendum maecenas.
            </p>
            <div className="hca-grid">
              <div className="hca-grid-item">
                <h4>4000+</h4>
                <p>No of Customers</p>
              </div>
              <div className="hca-grid-item">
                <h4>20 years</h4>
                <p>Lasting since</p>
              </div>
              <div className="hca-grid-item">
                <h4>7+</h4>
                <p>Transporting cities</p>
              </div>
              <div className="hca-grid-item">
                <h4>100%</h4>
                <p>Satisfaction</p>
              </div>
            </div>
            <p className="hca-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere rutrum tellus et id ligula tristique donec. Egestas proin faucibus quis volutpat, urna pellentesque donec. Donec quam non sit ipsum mauris.</p>
          </div>
        </div>
        <div className="home-right-about">
          <div className="hra-img-container">
            <img alt="loading" src={aboutimg}></img>
          </div>
          <div className="hra-lower">
            <div className="hra-underline"></div>
            <a href=" " className="home-circle-a">
              <div className="home-circle">
                <span className="char1">S</span>
                <span className="char2">h</span>
                <span className="char3">o</span>
                <span className="char4">p</span>
                <span className="char5"> </span>
                <span className="char6">p</span>
                <span className="char7">r</span>
                <span className="char8">o</span>
                <span className="char9">d</span>
                <span className="char10">u</span>
                <span className="char11">c</span>
                <span className="char12">t</span>
                <span className="char13">s</span>
                <span className="char14"> </span>
                <span className="char15">n</span>
                <span className="char16">o</span>
                <span className="char17">w</span>
                <span className="char18"> </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
