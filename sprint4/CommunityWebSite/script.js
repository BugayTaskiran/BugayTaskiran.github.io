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



    // When the page loads, fetch a quote and display the modal
    $.ajax({
      url: 'https://api.quotable.io/random',
      type: 'GET',
      success: function(data) {
          $('#quoteText').text(`"${data.content}"`);
          $('#quoteAuthor').text(`- ${data.author}`);
          $('#quoteModal').css('display', 'block');
      },
      error: function() {
          $('#quoteText').text("Failed to load the quote.");
          $('#quoteModal').css('display', 'block');
      }
    });

    // When the user clicks on <span> (x), close the modal
    $('.close').click(function() {
        $('#quoteModal').css('display', 'none');
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        if (event.target.className === 'modal') {
            $('#quoteModal').css('display', 'none');
        }
    });
});


  