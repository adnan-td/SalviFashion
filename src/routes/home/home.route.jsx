import "./home.route.scss";
import homeimg from "../../assets/homeimg.png";
import HomeAbout from "./about/home.about";
import HomeWH from "../../assets/Rectangle 8.svg";
import HomeWHvector from "../../assets/Vector 1.svg";
import HomePC1 from "../../assets/homepc1.svg";
import HomePC2 from "../../assets/homepc2.svg";
// eslint-disable-next-line no-unused-vars
import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import CarouselFP from "../../components/carouselBootstrap/carousel";

const Home = () => {
  return (
    <>
      <ScrollContainer>
        <ScrollPage key="1">
          <Animator animation={batch(Sticky(), MoveOut(0, 50), Fade())}>
            <div className="home">
              <Animator animation={batch(MoveOut(-200, 0))}>
                <div className="home-left">
                  <p className="home-header header1">Sonakshi</p>
                  <p className="home-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque et dui maecenas odio nunc tempor, lorem vestibulum. Aliquam eleifend elementum phasellus venenatis. Mollis in est mauris, cursus arcu vel.</p>
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
              </Animator>
              <div className="home-center">
                <img alt="loading" src={homeimg} />
                <p className="img-text">2022</p>
              </div>
              <Animator animation={batch(MoveOut(200, 0))}>
                <div className="home-right">
                  <p className="home-text">"Fashion you can buy, but style you possess. The key to style is learning who you are, which takes years. It's about self expression and, above all, attitude."</p>
                  <div>
                    <div></div>
                    <p className="home-text-bottom">--Sujaram</p>
                  </div>
                  <p className="home-header header2">Collection</p>
                </div>
              </Animator>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage key="2">
          <div style={{ height: "50vh", width: "100vw", backgroundColor: "transparent", zIndex: "-1" }}></div>
        </ScrollPage>
        <ScrollPage key="3">
          <Animator animation={batch(StickyIn(), ZoomIn(2, 1))}>
            <HomeAbout />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <div className="home-fp">
        <div className="fp-header">
          <h3>Featured Products</h3>
          <a href=" ">View all</a>
        </div>
        <div className="home-fp-img">
          <CarouselFP />
        </div>
      </div>
      <div className="home-wh">
        <h2 className="wh-header">What we Have</h2>
        <div className="wh-left">
          <img alt="loading" src={HomeWH} />
          <img alt="loading" src={HomeWHvector} className="homewhv" />
        </div>
        <div className="wh-right">
          <div className="wh-rcontainer">
            <h3>Collections You'd Love</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere rutrum tellus et id ligula tristique donec. Egestas proin faucibus quis volutpat, urna pellentesque donec. Donec quam non sit ipsum mauris.</p>
            <div className="wh-collections">
              <div>
                <a href=" ">Sonakshi Collection</a>
              </div>
              <div className="right-align">
                <a href=" ">Priya Collection</a>
              </div>
              <div>
                <a href=" ">Parul Collection</a>
              </div>
              <div className="right-align">
                <a href=" ">Monica Collection</a>
              </div>
              <div>
                <a href=" ">Varsha Collection</a>
              </div>
              <div className="right-align">
                <a href=" ">Anita Collection</a>
              </div>
            </div>
            <div className="wh-rlower">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Posuere rutrum.</p>
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
      <div className="home-pc">
        <p className="pc-h1">Popular Collections</p>
        <p className="pc-h2">Sonakshi Collection</p>
        <div className="pc-main">
          <div className="pc-ml">
            <img alt="loading" src={HomePC1} />
            <div className="pc-ml-quote">
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere rutrum tellus et id ligula tristique donec. Egestas proin faucibus quis”</p>
              <p>-Rachel Quinn</p>
            </div>
          </div>
          <div className="pc-mm">
            <img alt="loading" src={HomePC2} />
          </div>
          <div className="pc-mr">
            <div className="pc-mr-arrows">
              <a href=" ">
                <div>
                  <i class="fa-solid fa-angle-left"></i>
                </div>
              </a>
              <a href=" ">
                <div>
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </a>
            </div>
            <div className="pc-mr-circle">
              <h3>One of a Kind</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere rutrum tellus et id ligula tristique donec. Egestas proin faucibus quis volutpat.</p>
              <h4>28 Models</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hc"></div>
    </>
  );
};

export default Home;
