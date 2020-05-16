var anchors = document.querySelectorAll(".navigation__link");

for (var i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", handler, false);
}

function handler() {
  // now "this" is the element
  document.getElementById("navi-toggle").checked = false;
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].style.display = "none";
  }
}
///////////////////////////////////////////////////////////////
var menuToggler = document.getElementById("navi-toggle");

menuToggler.addEventListener("click", menuHandler, false);

function menuHandler() {
  if (menuToggler.checked) {
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].style.display = "inline-block";
    }
  } else {
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].style.display = "none";
    }
  }
}

///////////////////////////////////////////////////////////////
emailjs.init("user_yIGHRgRcEHaN8aR5kQyFN");

var onloadCallback = function() {
  grecaptcha.render("html_element");
};

window.onload = function() {
  document
    .getElementById("contact_template")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      if (grecaptcha.getResponse() == "") {
        alert("Check reCAPTHCA box before submitting your message");
      } else {
        // generate the contact number value
        this.contact_number.value = (Math.random() * 100000) | 0;
        emailjs.sendForm("contact_service", "contact_template", this).then(
          function(response) {
            alert("Your message was sent successfully");
            document.getElementById("contact_template").reset();
          },
          function(error) {
            alert("failed to send your message... Please Try again");
          }
        );
      }
    });
};

//////////////////////////////////////////////////////////////
