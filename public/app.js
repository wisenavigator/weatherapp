const apiKey = "78b0e547b34cd071ee8e877af8756aaf";

const geoCodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=oakville&limit=2&appid=${apiKey}`;

console.log(geoCodeUrl);

var country;
const getCoordinates = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

document.getElementById("get-weather").addEventListener("click", async () => {
  const city = document.getElementById("city-input").value;
  console.log("City entered is " + city);
  const geoCodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  console.log(geoCodeUrl);
  const coordinates = await getCoordinates(geoCodeUrl);
  console.log("Coordinates are " + JSON.stringify(coordinates, null, 2));
});
