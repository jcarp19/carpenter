// import clearDay from "../_assets/clear-day.svg";

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

    let icon = tempData.currentConditions.icon;
    document.querySelector(".weather__icon").src = `../_assets/${icon}.svg`;
  };
  getTemps();

  return (
    <div className='weather'>
      Houghton Lake, Michigan:{" "}
      <img src='' alt='Weather Icon' className='weather__icon' />{" "}
      <span id='weather__temp'></span>
    </div>
  );
};
export default Weather;
