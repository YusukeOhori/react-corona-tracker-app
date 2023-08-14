import './App.css';
import TopPage from "./pages/TopPage";
import { useState, useEffect} from "react";
import countriesJson from "./countries.json";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import WorldPage from "./pages/WorldPage";


function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date:"",
    newConfirmed:"",
    totalConfirmed:"",
    newRecovered:"",
    totalRecovered:"",
  });
  const [allCountriesData, setAllCountriesData] = useState([]);
  

  const getCountryData = () => {
        fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
        .then(res => res.json())
        .then(data => {
          setCountryData({
            date:data[data.length-1].Date,
            newConfirmed:data[data.length-1].Confirmed - data[data.length-2].Confirmed,
            totalConfirmed:data[data.length-1].Confirmed,
            newRecovered:data[data.length-1].Recovered - data[data.length-2].Recovered,
            totalRecovered:data[data.length-1].Recovered,
          });
        })
       
    }
   
  useEffect(() =>{
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary").then(res => res.json()).then(data => setAllCountriesData(data.Countries))
  },[]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData}/>}/>
          <Route path ="/world" element={<WorldPage allCountriesData={allCountriesData}/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
