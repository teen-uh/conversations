function dropdown() {
  console.log("push");
  var more = document.getElementById("s6");
  var element = document.getElementById("dropdown");
  var text = document.getElementById("more");
  element.classList.toggle("show");
  more.classList.toggle("s6-2");
  if (text.innerHTML == "More") {
    text.innerHTML = "Less";
  } else {
    text.innerHTML = "More";
  }
}

function show() {
  var element = document.getElementById("popupBasic");
  element.classList.toggle("show");
}
