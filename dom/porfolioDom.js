const diplayText = document.querySelector(".cvText");
const cv = document.querySelector(".eventClass")



// diplayText.addEventListener("mouseover", function() {
//    // box.classList.add("red")
//     document.querySelector(".cvText").classList.remove("hidden")
// });

diplayText.addEventListener("mouseout", function() {
    //box.classList.remove("red")
  //  diplayText.innerHTML = "";
    document.querySelector(".cvText").classList.add("hidden")
});

cv.addEventListener("mouseover", function() {
    // box.classList.add("red")
     document.querySelector(".cvText").classList.remove("hidden")
 });
 
//  cv.addEventListener("mouseout", function() {
//      //box.classList.remove("red")
   
//      document.querySelector(".cvText").classList.add("hidden")
//  });






var isPop = false;

function animateButton() {
  if (isPop == 0) {
    document.getElementById("btn1").style.transform =
      "translateX(-62px) rotate(1080deg)";
    document.getElementById("btn2").style.transform =
      "translateX(-124px) rotate(1080deg)";
    document.getElementById("btn3").style.transform =
      "translateX(-186px) rotate(1080deg)";
    document.getElementById("btn4").style.transform =
      "translateX(-248px) rotate(1080deg)";
    document.getElementById("btn5").style.transform =
      "translateY(-52px) rotate(1080deg)";
    document.getElementById("btn6").style.transform =
      "translateY(-104px) rotate(1080deg)";
    document.getElementById("btn7").style.transform =
      "translateY(-156px) rotate(1080deg)";
    document.getElementById("btn8").style.transform =
      "translateY(-208px) rotate(1080deg)";
    document.getElementById("btn9").style.transform =
      "translateY(-260px) rotate(1080deg)";

    // document.getElementById("btn1").style.transform = "";

    isPop = true;
  } else {
    document.getElementById("btn1").style.transform = "translateX(0)";
    document.getElementById("btn2").style.transform = "translateX(0)";
    document.getElementById("btn3").style.transform = "translateX(0)";
    document.getElementById("btn4").style.transform = "translateX(0)";
    document.getElementById("btn5").style.transform = "translateY(0)";
    document.getElementById("btn6").style.transform = "translateY(0)";
    document.getElementById("btn7").style.transform = "translateY(0)";
    document.getElementById("btn8").style.transform = "translateY(0)";
    document.getElementById("btn9").style.transform = "translateY(0)";

    isPop = false;
  }
}
