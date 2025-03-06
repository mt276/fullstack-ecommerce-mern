import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/index";
import { createContext, useState, useEffect } from "react";
import axios from "axios"
import './App.css'
import NewLetter from "./components/NewLetter";
import Footer from "./components/Footer";
import Product from "./pages/Product/Product";

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');


  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries")
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách quốc gia:", error);
    }
  };


  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />

          </Routes>
          <Routes>
            <Route path="/product" exact={true} element={<Product />} />

          </Routes>
          <NewLetter />
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

export { MyContext }
