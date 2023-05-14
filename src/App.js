
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import MusicPlayer from "./components/MusicPlayer";
import Carousel from "./components/Carousel";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
          <MusicPlayer />
          <AboutMe />
          <Carousel />
          <Skills />
          <Contact />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


