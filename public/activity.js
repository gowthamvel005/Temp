
var connection = new Postmonger.Session();
var payload = {};


connection.trigger('ready');

connection.on('initActivity', function(data) {
	if (data) {
		payload = data;
		console.log(payload);
	}
	var message;
	var hasInArguments = Boolean(
		payload['arguments'] &&
		payload['arguments'].execute &&
		payload['arguments'].execute.inArguments &&
		payload['arguments'].execute.inArguments.length > 0
	);
	var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};

  /*  var s = document.getElementById("mytext");
	document.getElementById('demo').value += s.value;*/

	 
});

function myFunction() {
	var first = document.getElementById('mytext').value;
	var last = document.getElementById('password').value;
//	var secound = document.getElementById('date').value;

	document.getElementById('demo').value = first + last ;
  }

connection.on('clickedNext', function() {
	payload.name = "Gowtham";
    payload['arguments'].execute.inArguments = [{"message": s}];
    payload['metaData'].isConfigured = true;	
	connection.trigger('updateActivity', payload);
});



