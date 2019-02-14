$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 150
    },
    500
  );
});

var oferts = document.querySelectorAll(".ofert-img"),
aboutImg = document.querySelectorAll(".about-img")[0];

console.log(aboutImg)

window.addEventListener("scroll", function() {
var bottomWindow = (window.innerHeight*0.7) + window.scrollY,
aboutPosition = aboutImg.offsetTop - aboutImg.clientHeight/2;

if (bottomWindow > aboutPosition) {
     aboutImg.classList.add("about-show");
  }

  oferts.forEach(function(ofert) {
    var elementPosition = ofert.offsetTop + ofert.clientHeight;
    if (bottomWindow > elementPosition) {
      ofert.classList.add("ofert-show");
    }
  });
});
