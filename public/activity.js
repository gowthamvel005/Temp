
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
	var s = document.getElementById("mytext").value;
	document.getElementById("demo").innerHTML = s;
  
	var password =document.getElementById("password").value;
    document.getElementById("demo").innerHTML = password;

	var date =document.getElementById("date").value;
	document.getElementById("demo").innerHTML = date;
  }

connection.on('clickedNext', function() {
	payload.name = "Gowtham";
    payload['arguments'].execute.inArguments = [{"message": s}];
    payload['metaData'].isConfigured = true;	
	connection.trigger('updateActivity', payload);
});



