import React,{useState, useEffect} from 'react';
import PublicIcon from '@material-ui/icons/Public';

const WeatherBox = () => {

    const [City,setCity] = useState(null);
    const [Search,setSearch] = useState("Delhi");
    console.log(Search);

    useEffect(() => {
        const weatherApi = async () =>{    //async is for the response from the api
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=11fa1f1ed4121455e8a7f00d1d92b4ef`;
            const response = await fetch(url); //await is for - it will wait to check either it has response or not
            console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        weatherApi();},[Search]
        );
     return(
        <>
        <div className="row top">
            <div className="col-lg-5 col-1"></div>
                <div className="col-lg-3 col-10 box">
                    <input type="text" value={Search} onChange={(event) => {setSearch(event.target.value)}} 
                    />
                </div>
                <div className="col-lg-4 col-1"></div>
                </div>

                
                {!City ? ( 
                <p className="nodata">No Data Found</p>) :
                    (
                    <div className="info">
                    <h1><PublicIcon className="public-icon"/><span className="search-city">{Search}</span></h1>
                                    <h2>{City.temp}&deg; Cel</h2>
                                    <p>Min{City.temp_min}&deg; Cel | Max {City.temp_max} &deg; Cel</p>
                </div>)
                }
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
        </>
    );
}

export default WeatherBox;