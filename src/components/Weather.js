const Weather = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const getTemps = async () => {
    const getAPI = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/48629?unitGroup=us&key=${apiKey}&contentType=json`
    );
    const tempData = await getAPI.json();

    document.getElementById(
      "weather__temp"
    ).innerText = `${tempData.currentConditions.temp}° and ${tempData.currentConditions.conditions}`;
  };
  getTemps();

  return (
    <div className='weather'>
      <p className='weather__text'>
        Houghton Lake, Michigan: <span id='weather__temp'></span>
      </p>
    </div>
  );
};
export default Weather;
