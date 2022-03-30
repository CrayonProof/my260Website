window.onload=function(){
    var back = document.getElementById("back");
    var latest = document.getElementById("refreshData");
    var forward = document.getElementById("forward");
    let index_offset = 0;
    refreshLaunchData(index_offset);
    

    if(back) {
    back.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("back");
        index_offset--;
        refreshLaunchData(index_offset);
      });
    }
    if(latest) {
        latest.addEventListener("click", function(event) {
            event.preventDefault();
            console.log("refresh");
            index_offset = 0;
            refreshLaunchData(index_offset);
          });
        }
    
      if(forward) {
        forward.addEventListener("click", function(event) {
            event.preventDefault();
            console.log("forward");
            index_offset++;
            refreshLaunchData(index_offset);
          });
        }
  }

  function refreshLaunchData(index_offset) {
    const url = "https://api.spacexdata.com/v4/launches";
    fetch(url)
        .then(function(response) {
        return response.json();
        }).then(function(jsonArray) {
            const url = "https://api.spacexdata.com/v4/launches/latest";
            fetch(url)
            .then(function(response) {
            return response.json();
            }).then(function(latestjson) {
                launch_index = latestjson.flight_number - 1 + index_offset;
                let json = jsonArray[launch_index];
                let results = "<div class = 'glass launch-card' >";
                results += "<h2>Launch: " + json.name + "</h2>";
                results += "<div class = 'video-container'><iframe width='100%' height='100%' src='https://www.youtube.com/embed/" + json.links.youtube_id + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";
                results += "<div class = 'info-text'>";
                results += "<div class = 'flight-num-and-date'>";
                results += "<p>";
                if (json.date_local !== null) {
                    let date = new Date(json.date_local);
                    let dateString = date.toDateString();
                    if (index_offset > 0) {
                        results += "Flight number " + json.flight_number + " launches on " + dateString;
                    }
                    else {
                        results += "Flight number " + json.flight_number + " launched on " + dateString;
                    }  
                }
                else {
                    results += "Flight number " + json.flight_number;
                }
                results += "</p>";
                results += "</div>";
                if(json.details !== null) {
                    results += "<div class = 'summary'><p>" + json.details + "</p></div>";
                }
                if (json.links.wikipedia !== null) {
                    let pageurl = json.links.wikipedia;
                    let pageurlArray = pageurl.split("/");
                    let title = pageurlArray[pageurlArray.length - 1];
                    const url = "https://en.wikipedia.org/api/rest_v1/page/summary/"+ title +"?redirect=false";
                    fetch(url)
                    .then(function(response) {
                    return response.json();
                    }).then(function(json) {
                        summary = json.extract;
                        results += "<div class = 'summary'><p>" + summary + " –Wikipedia</p></div>";
                        results += "</div>";
                        document.getElementById("spacex-latest").innerHTML = results;
                    });
                }
                else {
                    results += "</div>";
                    results += "</div>";
                        document.getElementById("spacex-latest").innerHTML = results;
                }
            });
        });
  }
