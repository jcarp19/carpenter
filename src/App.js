import Preheader from "./components/Preheader";
import Header from "./components/Header.js";
import chair from "./_assets/AdobeStock_406966038_Preview-dark.jpg";
import Main from "./components/Main";

function App() {
  return (
    <div
      className='App'
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + chair})` }}
    >
      <Preheader />
      <Header />
      <Main />
    </div>
  );
}

export default App;
