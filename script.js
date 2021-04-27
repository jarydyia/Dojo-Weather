var cookieBar = document.querySelector(".fixedBar");

var todayNumber1= document.querySelector("#todayNumber1");
var todayNumber2= document.querySelector("#todayNumber2");

var tomorrowNumber1= document.querySelector("#tomorrowNumber1");
var tomorrowNumber2= document.querySelector("#tomorrowNumber2");

var fridayNumber1 = document.querySelector("#fridayNumber1")
var fridayNumber2 = document.querySelector("#fridayNumber2")


var saturdayNumber1 = document.querySelector("#saturdayNumber1")
var saturdayNumber2 = document.querySelector("#saturdayNumber2")



function destroy(){
    cookieBar.remove();
};


function pickTempType(){
    todayNumber1.innerHTML = "75°"
    todayNumber2.innerHTML = "65°"

    tomorrowNumber1.innerHTML = "80°"
    tomorrowNumber2.innerHTML = "66°"

    fridayNumber1.innerHTML = "69°"
    fridayNumber2.innerHTML = "61°"

    saturdayNumber1.innerHTML = "69°"
    saturdayNumber2.innerHTML = "61°"

}