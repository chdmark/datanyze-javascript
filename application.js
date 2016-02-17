var startEnd = 
{ 
	startTime:123456789, // timestamp 
	endTime:133456999    // timestamp 
} 
 
var commands = 
[ 
	{ 
	timestamp:123456799,// timestamp 
	commandName:'Lock', // human readable command 
	commandType:'lock'  // fontawesome name without fa­ 
	}, 
	{ 
	timestamp:123456889, 
	commandName:'Chat', 
	commandType:'comment­o' 
	} 
]

var makeSchedule = function(time, commands)