import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Header from "./components/Header/index.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" exact={true} Component={<Home />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
