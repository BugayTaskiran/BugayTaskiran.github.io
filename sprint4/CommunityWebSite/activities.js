$(document).ready(function() {
    // Initialize FullCalendar
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        eventLimit: true, 
        events: [
            {
                title: 'Event Title 1',
                start: '2024-03-21T14:00:00',
                end: '2024-03-21T16:00:00'
            },
            {
                title: 'Event Title 2',
                start: '2024-03-25T16:00:00',
                end: '2024-03-25T18:00:00'
            }
        ]
    });

    // Initialize DataTable
    var table = $('#eventsTable').DataTable({
        paging: false, // disable paging
        searching: false, // disable search
        info: false // disable info
    });

    // Initialize Datepicker
    $('#eventDate').datepicker({
        dateFormat: 'yy-mm-dd'
    });

    $('#addEventDialog').on('click', '#addEventSubmitBtn', function() {
        var title = $('#eventTitle').val();
        var date = $('#eventDate').val();
        var time = $('#eventTime').val();
        var place = $('#eventPlace').val();
    
        // Add event to calendar
        $('#calendar').fullCalendar('renderEvent', {
            title: title,
            start: date + 'T' + time + ':00',
            end: date + 'T' + time + ':00'
        }, true);
    
        // Add event to table
        table.row.add([
            title,
            date,
            time,
            place
        ]).draw();
    
        $('#addEventDialog').dialog("close");
    });

    // Show add event dialog
    $('#addEventBtn').click(function() {
        $('#addEventDialog').dialog("open");
    });
});

// Show add event dialog
$('#addEventBtn').click(function() {
    $('#addEventDialog').dialog("open");
});

/*
// Add Event button functionality
$('#addEventDialog').on('click', '#addEventSubmitBtn', function() {
    var title = $('#eventTitle').val();
    var date = $('#eventDate').val();
    var time = $('#eventTime').val();
    var place = $('#eventPlace').val();

    $.ajax({
        type: 'POST',
        url: '', 
        data: {
            title: title,
            date: date,
            time: time,
            place: place
        },
        success: function(response) {
            // Handle successful response
            // Add event to calendar
            $('#calendar').fullCalendar('renderEvent', {
                title: title,
                start: date + 'T' + time + ':00',
                end: date + 'T' + time + ':00'
            }, true);

            // Add event to table
            table.row.add([
                title,
                date,
                time,
                place
            ]).draw();

            $('#addEventDialog').dialog("close");
        },
        error: function(xhr, status, error) {
            // Handle error
            console.error(xhr.responseText);
        }
    });
});
*/