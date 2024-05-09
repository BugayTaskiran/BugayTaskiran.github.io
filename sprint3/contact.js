$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Validate form inputs
        var name = $('#name').val();
        var email = $('#email').val();
        var question = $('#question').val();

        if (name.trim() === '' || email.trim() === '' || question.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission (replace with actual AJAX call)
        alert('Form submitted successfully:\nName: ' + name + '\nEmail: ' + email + '\nQuestion: ' + question);
        $('#contactForm')[0].reset(); // Reset form
    });
});
