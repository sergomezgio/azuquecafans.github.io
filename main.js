//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function myFunction() {
  alert("*Mención a Core* uwu");
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
 function getTiempo(){
    $.get("https://api.openweathermap.org/data/2.5/weather?lat=40.5571635&lon=-3.2552766&appid=26b5cac6a6126f7d1ed8e695cea690f7",(data,status) => {
        alert(data.main.temp);
      });
  }