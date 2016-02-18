$(function(){

	makeSchedule(startEnd, commands);
	
	
});

var startEnd = 
{ 
	startTime:123456789, // timestamp 
	endTime:133456999    // timestamp 
} 
 
var commands = 
[ 
	{ 
	timestamp:123456889, 
	commandName:'Chat', 
	commandType:'comment­o' 
	}, 
	{ 
	timestamp:123456799,// timestamp 
	commandName:'Lock', // human readable command 
	commandType:'lock'  // fontawesome name without fa­ 
	},
	{ 
	timestamp:123456999, 
	commandName:'Chat', 
	commandType:'comment­o' 
	}
	
]

var makeSchedule = function(time, events) {
	var parseTime = time;
	var start = convertTimestamp(parseTime.startTime);
	var end = convertTimestamp(parseTime.endTime);
	
	
	$(".start").children(".left").append(start);
	$(".start").children(".middle").append($("<i class='fa fa-circle'></i>"));
	$(".start").children(".right").append("Class Session Started");
	$(".end").children(".left").append(end);
	$(".end").children(".middle").append($("<i class='fa fa-circle'></i>"));
	$(".end").children(".right").append("Class Session Ended");
	
	sortedEvents = events.sort(function(a,b){
		return parseFloat(a.timestamp) - parseFloat(b.timestamp);
	});

	$.each(sortedEvents, function(index, value){
		var time = convertTimestamp(value.timestamp);
		$(".events").children(".left").append(time);
		debugger
	});

	

	
};


var convertTimestamp = function(timestamp) {
  var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
		ampm = 'AM',
		time;
			
	if (hh > 12) {
		h = hh - 12;
		ampm = 'PM';
	} else if (hh === 12) {
		h = 12;
		ampm = 'PM';
	} else if (hh == 0) {
		h = 12;
	}
	
	// ie: 2013-02-18, 8:35 AM	
	time = h + ':' + min + ' ' + ampm;
		
	return time;
};