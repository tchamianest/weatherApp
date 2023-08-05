
const apiKey="45526cd62690fd54eb82848d5ef7c394";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


async function checkWeather(city){
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   var data= await response.json();

   console.log(data);
   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
   document.querySelector(".wind").innerHTML=`${data.wind.speed}km/h`;
   const temp=document.querySelector(".temp");
   temp.innerHTML =`${Math.round(data.main.temp)} °C` 


   const cloud=document.querySelector(".weather-icon");

   if(data.main.temp < 15 && data.main.temp > 12){
      cloud.src="images/rain.png"
   }else if(data.main.temp >= 15 && data.main.temp <20){
      cloud.src="images/mist.png"
   }else if(data.main.temp > 20 && data.main.temp <26){
      cloud.src="images/drizzle.png"
   }else if(data.main.temp >= 27 && data.main.temp <35){
      cloud.src="images/clouds.png"
   }else{
      cloud.src="images/snow.png"
   }
}
document.addEventListener("DOMContentLoaded", () => {
   const sample = document.querySelector("#inputtext"); 
   const searchBtn = document.querySelector("#button");

   searchBtn.addEventListener("click", () => {
       checkWeather(sample.value);
   });
});
