filterSelection("all")
function filterSelection(c) {
var x, y, i, j;
var count = 0;
var d = "nothing";

if (c == "all") c = "";
if (c == "men" || c == "women") d = "unisex";

y = document.getElementsByClassName("feature__wrapper_rfv");
for (j = 0; j < y.length; j++) {
  count = 0;
  x = y[j].getElementsByClassName("feature__item_rfv_3_v2");
  for (i = 0; i < x.length; i++) {
    w3AddClass(x[i], "noshow");
    if (x[i].className.indexOf(c) > -1 || ( x[i].className.indexOf(d) > -1 && x[i].className.indexOf("adult") > -1 ) ) {
      if (count % 3 == 0){
        w3AddClass(x[i], "rowFirstElement");
        w3RemoveClass(x[i], "rowNotFirstElement");
      } else {
        w3RemoveClass(x[i], "rowFirstElement");
        w3AddClass(x[i], "rowNotFirstElement");
      }
      count += 1;
      w3RemoveClass(x[i], "noshow");
      w3AddClass(x[i], "show");
    }
  }
}
}



function w3AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
}
}

function w3RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
	arr1.splice(arr1.indexOf(arr2[i]), 1);     
  }
}
element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});
}