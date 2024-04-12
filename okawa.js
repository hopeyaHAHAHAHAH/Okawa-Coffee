(function setGlowEffectRx() {
  const glowEffects = document.querySelectorAll(".glow-effect");

  glowEffects.forEach((glowEffect) => {
    const glowLines = glowEffect.querySelectorAll("rect");
    const rx = getComputedStyle(glowEffect).borderRadius;

    glowLines.forEach((line) => {
      line.setAttribute("rx", rx);
    });
  });
})();

var slideIndex = 0;

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();


function pressPost() {
  var displayText = document.getElementById("post");
  if (displayText.style.display === "none") {
    displayText.style.display = "block";
  } else {
    displayText.style.display = "none";
  }
}

function rateAgain() {
  document.getElementById("txtarea").value = "";
  document.getElementById("txtarea1").value = "";
  document.getElementById("rate-5").checked = false;
  document.getElementById("rate-4").checked = false;
  document.getElementById("rate-3").checked = false;
  document.getElementById("rate-2").checked = false;
  document.getElementById("rate-1").checked = false;

  var text = document.getElementById("post");
  text.style.display = "none";
}

