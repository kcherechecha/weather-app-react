import "./styles.css";
import SearchBar from "./SearchBar";
import Information from "./Information";
import Forecast from "./Forecast";
import Background from "./Background";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="upper-wrap">
          <Background />
          <div className="upper">
            <SearchBar />
            <Information />
          </div>
        </div>
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
