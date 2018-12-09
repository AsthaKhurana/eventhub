var events = [
	{
	facebook: '',
	twitter: '',
	instagram: '',
	uploadImg: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
	name: 'logan Movie',
	description: 'Some quick example text to build on the card te and the xmas',
	date: '',
	fromTime: '5:00 pm',
	toTime: '8:00 pm',
	place: 'stamp',
	tags: ['movie', 'stamp']
	},
	{
	facebook: '',
	twitter: '',
	instagram: '',
	uploadImg: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
	name: 'Phul bharey angaarey',
	description: 'Some quick example text to build on the card title and it seems like trimmng is working',
	date: '',
	fromTime: '5:00 pm',
	toTime: '8:00 pm',
	place: 'stamp',
	tags: ['movie', 'stamp']
	}
];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function charLimit (str, limit) {
	var reducedStr = str;
	if(reducedStr.length > limit) {
		reducedStr = reducedStr.substring(0, limit-3) + '...';
	}
	return reducedStr;
}


// Injecting content in the event cards
$( "div .card-container" ).html(function() {
	var cardGroup = '';

  for (i=0; i<events.length; i++) {

  	var name = capitalizeFirstLetter(charLimit(events[i]['name'], 18));
  	var description = charLimit(events[i]['description'], 56);
  	var time = events[i]['fromTime'] + " - " + events[i]['toTime'];
  	var imageBg = 'background: url(' + events[i]["uploadImg"] + ') 20% 1% / cover no-repeat;';
  	var place = capitalizeFirstLetter(events[i]['place']);

  cardGroup += "<article id='card' class='card'><div class='wrapper' style='" + imageBg + "'><div class='date'><div class='black-bg'><span class='week-day'>TUE</span></div><div class='white-bg'><span class='day'>15</span><span class='month'>DEC</span></div></div></div><div class='card-body'><h5 class='card-title'>" + name + "</h5><div class='location'><img class='location-icon' src='assets/img/icons/location-icon.png' alt='Card image cap'><span class='location-placeholder'>" + place + "</span></div><div class='time'><img class='time-icon' src='assets/img/icons/clock-icon.png' alt='Card image cap'><span class='time-placeholder'>" + time + "</span></div><p class='card-text'>" + description + "</p></article>";

	}

	return cardGroup;
});


