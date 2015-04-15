//collapse button
var button1 = document.getElementById("button-collapse");

button1.addEventListener("click", function(){
  var hideDiv = document.getElementById("bigDiv");
  hideDiv.setAttribute("style", "display:none");

  var banner = document.getElementById("banner");
  banner.setAttribute("style", "display:inline");

  var button2 = document.getElementById("button-expand");
  button2.setAttribute("style", "display:inline");


  //expand-button
  button2.addEventListener("click", function(){

    var banner = document.getElementById("banner");
    banner.setAttribute("style", "display:none");

    //show expandDiv with images and animation-delays
    var showDiv = document.getElementById("expandDiv");
    showDiv.setAttribute("style", "display:inline");
    var watch = document.getElementById("watch");
    watch.setAttribute("style", "-webkit-animation-delay:.5s;");
    var diplo = document.getElementById("diplo");
    diplo.setAttribute("style", "-webkit-animation-delay:1.5s;");
    var shop = document.getElementById("shop");
    shop.setAttribute("style", "-webkit-animation-delay:2s;");
    var nixon = document.getElementById("nixonSmall");
    nixon.setAttribute("style", "-webkit-animation-delay:2.25s;");

    //hide waveDiv
    var waveDiv = document.getElementById("waveDiv");
    waveDiv.setAttribute("style", "display:none");

    //show bigDiv to show expandDiv
    var bigDiv = document.getElementById("bigDiv");
    bigDiv.setAttribute("style", "display:inline");

    //hide expand-button
    var button2 = document.getElementById("button-expand");
    button2.setAttribute("style", "display:none");

  });
});
