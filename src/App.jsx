import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Provider from "./redux/Provider";

function App() {
  // const [counter, setCounter] = useState(0);

  return (
    <>
      <Provider>
        <Header />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
