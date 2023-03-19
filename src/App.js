
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Repos from "./components/Repos";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import MusicPlayer from "./components/MusicPlayer";

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
          <Repos />
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


