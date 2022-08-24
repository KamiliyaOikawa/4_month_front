import './App.css';
import About from "./components/About/AboutUs";
import Portfolio from "./components/Portfolio/Portfolio";
import AboutPage from "./pages/aboutPage/AboutPage";
import Info from "./components/Info/Info";
import Inn from "./components/Inn/Inn";

function App() {
  const info = {
    title: "I am title",
    body: "Lorem inpsum bla bla bla"
  }
  const user = {
    name: "Anna",
    age: 19
  }

  return (
      <>
        <About/>
        <Portfolio/>
        <AboutPage infop={info} />
        <Info username={user}/>
        <Inn usernema={user}/>
      </>
  )
}

export default App;
 