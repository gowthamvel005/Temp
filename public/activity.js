
var connection = new Postmonger.Session();
var payload = {};
var s;

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

    var s = document.getElementById("mytext");
	document.getElementById('demo').value += s.value;

	var f = document.getElementById("password");
	document.getElementById('demo').value += f.value;
	
	var t = document.getElementById("data");
	document.getElementById('demo').value += t.value;
	
});

function myFunction() {
	s = document.getElementById("mytext").value;
	document.getElementById("demo").innerHTML = s;

	f = document.getElementById("password").value;
	document.getElementById("demo").innerHTML = f;

	t = document.getElementById("data").value;
	document.getElementById("demo").innerHTML = t;
  }

connection.on('clickedNext', function() {
	payload.name = "Gowtham";
    payload['arguments'].execute.inArguments = [{"message": s}];
    payload['metaData'].isConfigured = true;	
	connection.trigger('updateActivity', payload);
});



