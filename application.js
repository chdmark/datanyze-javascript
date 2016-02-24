$(function(){

	layoutCommands(startEnd, commands);


});

var startEnd =
{
	startTime:123456789, // timestamp
	endTime:133456999    // timestamp
};

var commands =
[
	{
	timestamp:123456889,
	commandName:'Chat',
	commandType:'cloud'
	},
	{
	timestamp:123456599,// timestamp
	commandName:'Lock', // human readable command
	commandType:'lock'  // fontawesome name without fa­
	},
	{
	timestamp:123456999,
	commandName:'Chat',
	commandType:'commenting-o'
	}

];

function layoutCommands(time, events) {
	var parseTime = time;
	var start = convertTimestamp(parseTime.startTime);
	var end = convertTimestamp(parseTime.endTime);
	var divCircle = "<div class='circle'>";
	var line = "<hr width='1' size='100px' margin='0 auto'>"
	var eventTime = "<div class='event-time'>"
	var eventComment =  "<div class='event-comment'>"

	$('.schedule-container').append($(line+ eventTime + start + "</div>" + divCircle +"<i id='start-circle' class='fa fa-circle fa-3x'></i></div>" + eventComment + "Class Session Started</div>"));
	$('#start-circle').css("color", "#41c3e5");
	$('.schedule-container').prepend($(eventTime +  end + "</div>"+ divCircle + "<i id='end-circle' class='fa fa-circle fa-3x'></i></div>"+ eventComment + "Class Session Ended</div>"));
	$('#end-circle').css("color", "#ff5050");
	sortedEvents = events.sort(function(a,b){
		return parseFloat(a.timestamp) - parseFloat(b.timestamp);
	});

	$.each(sortedEvents, function(index, value){
		var time = convertTimestamp(value.timestamp);
		$('.events-container').prepend($(line + "<div id=" + index + " class='event-time'>" + time + "</div>"+ divCircle + "<i class='fa fa-" +value.commandType + " fa-2x'></i></div>"))

	});

	
};


var convertTimestamp = function(timestamp) {
  var d = new Date(timestamp * 1000),	
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	
		dd = ('0' + d.getDate()).slice(-2),			
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),		
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

	
	time = h + ':' + min + ' ' + ampm;

	return time;
};
