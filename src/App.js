import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/home/home.route";
import Navigation from "./components/navigation/navigation.component";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/animations/animatedpage";
import Footer from "./components/footer/footer.component";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  const location = useLocation();
  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <div>
                <Navigation />
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
                <Footer />
              </div>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <div>
                <Navigation />
                <AnimatedPage></AnimatedPage>
                <Footer />
              </div>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <div>
                <Navigation />
                <AnimatedPage></AnimatedPage>
                <Footer />
              </div>
            }
          ></Route>
          <Route
            path="/collections"
            element={
              <div>
                <Navigation />
                <AnimatedPage></AnimatedPage>
                <Footer />
              </div>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <div>
                <Navigation />
                <AnimatedPage></AnimatedPage>
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
