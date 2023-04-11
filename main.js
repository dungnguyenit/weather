var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var content = document.querySelector(".content");
var time = document.querySelector(".time");

async function changeWeaterUI(capitalSearch) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=dd9b4661fc9b074ff38688ca4135aa3b`;
  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod == 200) {
    console.log(data);
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerText = data.main.humidity + "%";
    value.innerText = Math.floor(data.main.temp - 273.15);
    shortDesc.innerText = data.weather[0].main;
    time.innerText = new Date().toLocaleString("vi");
  } else {
    content.classList.add("hide");
    console.log("Ero");
  }
}

search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    let capitalSearch = search.value.trim();
    changeWeaterUI(capitalSearch);
  }
});
changeWeaterUI('Hà Tĩnh');

