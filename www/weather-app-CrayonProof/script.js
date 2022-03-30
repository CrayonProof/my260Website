
window.onload=function(){
    var button = document.getElementById("weatherSubmit");

if(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        const value = document.getElementById("weatherInput").value;
        if (value === "") {
            console.log("searchBox is empty");
            return;
        }
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=7fd60169ae5dc637999ba5f95719f26a";
        fetch(url)
            .then(function(response) {
            return response.json();
            }).then(function(json) {
                let results = "<div class = 'glass_card' >";
                results += '<h2>Weather in ' + json.name + "</h2>";
                for (let i=0; i < json.weather.length; i++) {
              results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
                }
                results += '<h2>' + json.main.temp + " &deg;F</h2>"
                results += "<p>"
                for (let i=0; i < json.weather.length; i++) {
                    results += json.weather[i].description
                    if (i !== json.weather.length - 1)
                        results += ", "
                }
                results += "</p>";
                results += '<p>Feels like: ' + json.main.feels_like + "&deg;F </p>"
                results += '<p>Humidity ' + json.main.humidity + "% </p> </div>"
                document.getElementById("weatherResults").innerHTML = results;
            });
            const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=7fd60169ae5dc637999ba5f95719f26a";
            fetch(url2)
              .then(function(response) {
                return response.json();
              }).then(function(json) {
                let forecast = "";
                for (let i=0; i < json.list.length; i++) {
                    forecast += "<div class = 'glass_card' >"
                    forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                    forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                    forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
                    forecast += "</div>"
                }
                document.getElementById("forecastResults").innerHTML = forecast;
              });
      });
    }
  }