// TopPage.js

import Title from "../components/Titles";
import Selector from "../components/Selector";
import Results from "../components/Results";
import Header from "../components/Header";


const TopPage = (props) => {
    return (
        <div className="top-page-container">
            <div>
                <Header />
                <Title />
                <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData}/>
                <Results countryData={props.countryData}/>
            </div>
        </div>
    );
};


export default TopPage;