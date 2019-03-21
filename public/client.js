document.getElementById("in-flight").style.display = "none";
document.getElementById("payment-page").style.display = "none";

document.getElementById("button").onclick = function(evt) {
  evt.preventDefault();
  document.getElementById("opening-page").style.display = "none";
  document.getElementById("in-flight").style.display = "block";
  
  setTimeout(function(){
    document.getElementById("in-flight").style.display = "none";
    document.getElementById("payment-page").style.display = "block";
  }, 2000);
  
};

function getRandomPosition() {
  var h = window.innerHeight - 50;
  var w = window.innerWidth - 50;
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  return [nh, nw];
}
