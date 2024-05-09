$(document).ready(function() {
    $("#subscribe-btn").click(function() {
      var email = $("#email").val();
      if (email.trim() !== "") {
       
        // Ajax requests
        console.log("Subscribing email:", email);
        alert("Thank you for subscribing!");

        // Clear the input field
        $("#email").val("");
      } else {
        alert("Please enter a valid email address.");
      }
    });



    $(".scroll").on("click", function(event) {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            "easeInOutExpo"
        );
    });
});


  