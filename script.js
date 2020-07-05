//  my personal API
//  apiKey= "786dd1a7d0584cd0a7a388fa0171ce54"
//  API call for city name
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
 
 var inputValue =document.querySelector(".inputValue");
 var button=document.querySelector("button")
 var headerEl =document.querySelector(".cardHeader");
 var condition =document.querySelector(".condition");
 var temp =document.querySelector(".temp"); 
 var humidity =document.querySelector(".humidity");
 var windSpeed =document.querySelector(".wind-speed");
 var index =document.querySelector(".index");
  var citySearch=document.querySelector("#city")
var searchBtn=document.querySelector("#searchBtn")

searchBtn.addEventListener("click",function(){
  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&units=imperial&appid=${"786dd1a7d0584cd0a7a388fa0171ce54"}`, {
  method: 'GET' 
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
    var citySpan=document.createElement("span")
    citySpan.textContent=result.name
    headerEl.appendChild(citySpan)

    var dateSpan=document.createElement("span")
    dateSpan.textContent= " ("+ moment(result.dt,"X").format("MM/DD/YYYY") +")"
 headerEl.appendChild(dateSpan)
 var iconImg=document.createElement("img")
 
 var iconurl = "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png";

 iconImg.setAttribute("src",iconurl)
 headerEl.appendChild(iconImg)
})
.catch(error => {
  console.error('Error:', error);
});


  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citySearch.value}&appid=${"786dd1a7d0584cd0a7a388fa0171ce54"}`, {
  method: 'GET' 
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});


}); 

 



