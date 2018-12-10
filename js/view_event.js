var modal = document.getElementById('myModal');

// var btn = document.getElementById("card");

var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
// }

$(document).on("click", "#card", function () {
	var eventId = $(this).data('id')-1;
	var time = events[eventId]['fromTime'] + ' - ' + events[eventId]['toTime'];
	var name = capitalizeFirstLetter(events[eventId]['name']);
	var place = capitalizeFirstLetter(events[eventId]['place']);

    modal.style.display = "block";

    $('.modal-title').html(name);
    $('#myModal .location-placeholder').html(place);
    $('#myModal .time-placeholder').html(time);
    $('.modal-text').html(events[eventId]['description']);

    var imageUrl = 'url(' + events[eventId]['uploadImg'] + ') 20% 1% / cover no-repeat';
    console.log(imageUrl);
    $(".modal-content .wrapper").get(0).style.setProperty("--background", imageUrl);
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// style='background: url(https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg) 20% 1% / cover no-repeat'
