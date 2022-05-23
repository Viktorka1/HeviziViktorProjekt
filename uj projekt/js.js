document.getElementById("btn").addEventListener("click", load);

function load() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "valami.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      let items = JSON.parse(this.responseText);
      let output = "";
      for (let i in items) {
        output +=
          '<div class="items">' +
          '<img src="'+items[i].picture+'" width="500" height="400">' +
          "<ul list-style-type: none>" +
          "<li> " +
          items[i].name +
          "</li>" +
          "<li> " +
          items[i].description + 
          "</li>" +
          "<li> " + 
          items[i].price + 
          "</li>"+
          
          "</ul>" +
          "</div>";
      }
      document.getElementById("it").innerHTML = output;
    }
  };

  xhr.send();
}