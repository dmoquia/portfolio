$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    stagePadding: 50,
    dots: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      600: {
        items: 3,
        stagePadding: 0,
      },
      1000: {
        items: 6,
      },
    },
  });
});
AOS.init();
window.onload = function () {
  setTimeout(function () {
    var x = document.querySelectorAll(".anime-containter");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "block";
      x[i].style.overflowX = "hidden";
    }
  }, 500);
};

$(document).ready(function () {
  $("#menu").click(function () {
    // Toggle navbar button animation
    $(this).toggleClass("active");

    // Toggle navbar menu
    $(".hideNav").slideToggle(500, function () {
      if ($(this).css("display") == "none") {
        // Remove inline class
        $(this).css("display", "");
      }
    });
    $(".menu-bar>i.fa-solid").toggleClass("fa-xmark");
  });
});

// alerts when contact sent
const alertElement = document.querySelector(".alert");

const showAlert = () => {
  alertElement.hidden = false;
};
const hideAlert = () => {
  alertElement.hidden = true;
};

const sendEmail = () => {
  Email.send({
    SecureToken: "7a872896-03b5-472e-8a76-cc758c1a4373",
    To: "dennis.moquia@gmail.com",
    From: "dennis.moquia@gmail.com",
    Subject: "New message from Portfolio site",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then(
    // message => alert("Sent successfully")

    setTimeout(() => {
      showAlert();
      setTimeout(() => {
        hideAlert();
      }, "4000");
    }, "2000")
  );
};
