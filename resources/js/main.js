// Start Smooth scrolling JS Code //

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate(
              {
                  scrollTop: $(hash).offset().top,
              },
              800,
              function () {
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
              }
          );
      } // End if
  });
});

// End Smooth scrolling JS Code //

//my writed code
$(document).ready(function () {
  // Sticky navbar
  $(".show--sticky-navbar-from-here").waypoint(function (direction) {
      if (direction == "down") {
          $("header").addClass("sticky");
      } else {
          $("header").removeClass("sticky");
      }
  });

  // Filter pluggin Mixitup(Fiveth Section)
  var mixer = mixitup(".appy-js");
});

// Mobile Nav open and close by click on bars icons
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
