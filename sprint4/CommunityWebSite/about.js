$(document).ready(function() {
    $("#load-team").click(function() {
        $.ajax({
            url: "data/team.json",
            type: "GET",
            dataType: "json",
            success: function(data) {
                var content = "<h2>Our Team</h2>";
                data.teamMembers.forEach(function(member) {
                    content += "<div><h3>" + member.name + "</h3><p>" + member.role + ": " + member.bio + "</p></div>";
                });
                $("#team-info").html(content);
            },
            error: function() {
                $("#team-info").html("<p>An error has occurred.</p>");
            }
        });
    });
});
