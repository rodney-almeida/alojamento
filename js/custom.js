function getYear(){var currentDate=new Date();var currentYear=currentDate.getFullYear();document.querySelector("#displayYear").innerHTML=currentYear}
getYear();function openNav(){document.getElementById("myNav").classList.toggle("menu_width");document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")}
$(document).on("click",'[data-toggle="lightbox"]',function(event){event.preventDefault();$(this).ekkoLightbox()});function getDate(){var today=new Date().toISOString().split("T")[0];document.getElementById("date").value=today}
getDate()