import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/index.jsx";
import { createContext, useState, useEffect } from "react";
import axios from "axios"
import './App.css'

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');


  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries")
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
    })
    console.log(responsive);
  }

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header>
            <Routes>
              <Route path="/" exact={true} Component={<Home />} />
            </Routes>
          </Header>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

export { MyContext }
