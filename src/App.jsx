import { BrowserRouter } from "react-router-dom";
import "./App.css";
import UserProvider from "./components/context/UserProvider";
import NavBar from "./components/NavBar/NavBar";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>  
      </UserProvider>
    </>
  );
}

export default App;
