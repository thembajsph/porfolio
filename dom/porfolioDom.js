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


