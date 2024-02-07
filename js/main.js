document.getElementById("searchInput").addEventListener("keyup",function (e) {
    getcurrentweather(e.target.value)
    
})
var alldata;

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
function getcurrentweather(city) {
var api=new XMLHttpRequest();
api.open("get",` https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`)
api.send();
api.addEventListener("loadend",function () {
    if(api.status==200){
        alldata=JSON.parse(api.response);
        displayData(alldata)
        displayNext(alldata)
    } 
})
}


function displayData(data)
{
    let cartona =``
    var ex=new Date(data.current.last_updated.replace(" ","T"));
    cartona+=`
    
                    <div class="day1 ">
                        <div class="top-card  d-flex justify-content-between align-items-center p-2">
                            <span class="day">${days[ex.getDay()]}</span>
                            <span class="month">${ex.getDate()+monthNames[ex.getMonth()]}</span>
                        </div>
                        <div class="main-card ">
                            <div class="forecast ">
                                <div class="location">
                                    <p>${data.location.name}</p>
                                </div>
                                <div class="degree  d-flex justify-content-between align-items-center ">
                                    <div class="number">
                                    ${data.current.temp_c} <sup>o</sup> c
                                    </div>
                                    <div class="icon">
                                        <img src=" "https:${data.current.condition.icon}" "  alt="">
                                    </div>
                                </div>
                            </div>
                            <p class="wad3">${data.current.condition.text}</p>
                            <span class="pe-4 el7ala "> <i class="fa-solid fa-umbrella"></i> 20%</span>
                            <span class="pe-4 el7ala "> <i class="fa-solid fa-wind"></i>18km/h</span>
                            <span class="pe-4 el7ala "> <i class="fa-regular fa-compass"></i> East</span>
                        </div>
                    </div>
    `
    document.querySelector(".data-content").innerHTML=cartona;
}



function displayNext(data)
{
    var part1 =``;
    var part2 =``;

    part1+=`
                    <div class="day2 text-center">
                        <div class="day2-top p-2">
                            <span>${days[new Date(data.forecast.forecastday[1].date.replace(" ","T")).getDay()]}</span>
                        </div>
                        <div class="day2-main ">
                            <div class="icon">
                                <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="">
                            </div>
                            <div class="day2-degree py-5">
                                <div class="fs-2">${data.forecast.forecastday[1].day.maxtemp_c}<sub>o</sub>c</div>
                                <div>${data.forecast.forecastday[1].day.mintemp_c} <sub>o</sub></div>
                            </div>
                            <div class="day2-wad3 wad3">${data.forecast.forecastday[1].day.condition.text}</div>
                        </div>
                    </div>
    `
    part2+=`
                    <div class="day3 text-center ">
                        <div class="day3-top p-2 ">
                            <span>${days[new Date(data.forecast.forecastday[2].date.replace(" ","T")).getDay()]}</span>
                        </div>
                        <div class="day3-main ">
                            <div class="icon">
                                <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="">
                            </div>
                            <div class="day3-degree py-5">
                                <div class="fs-2">${data.forecast.forecastday[2].day.maxtemp_c} <sub>o</sub>c</div>
                                <div>${data.forecast.forecastday[2].day.mintemp_c} <sub>o</sub></div>
                            </div>
                            <div class="day3-wad3 wad3">${data.forecast.forecastday[2].day.condition.text}</div>
                        </div>
                    </div>
    `
    document.querySelector(".data-content-2").innerHTML =part1;
    document.querySelector(".data-content-3").innerHTML=part2;
}
getcurrentweather("cairo");

