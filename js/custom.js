function getYear(){var currentDate=new Date();var currentYear=currentDate.getFullYear();document.querySelector("#displayYear").innerHTML=currentYear}
getYear();function openNav(){document.getElementById("myNav").classList.toggle("menu_width");document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")}
function myMap(){var mapProp={center:new google.maps.LatLng(40.712775,-74.005973),zoom:18,};var map=new google.maps.Map(document.getElementById("googleMap"),mapProp)}
$(document).on("click",'[data-toggle="lightbox"]',function(event){event.preventDefault();$(this).ekkoLightbox()});function getDate(){var today=new Date().toISOString().split('T')[0];document.getElementById('date').value=today}
getDate()