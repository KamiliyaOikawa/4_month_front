import './App.css';
import About from "./components/About/AboutUs";
import Portfolio from "./components/Portfolio/Portfolio";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
  const info = {
    title: "I am title",
    body: "Lorem inpsum bla bla bla"
  }
  return (
      <>
        <About/>
        <Portfolio/>
        <AboutPage infop={info} />
      </>
  )
}

export default App;
 