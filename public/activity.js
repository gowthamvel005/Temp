
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
	document.getElementById('demo').value +=  s.options[s.selectedIndex].value;
	
});

function myFunction() {
	var x = document.getElementById("myText").value;
	document.getElementById("demo").innerHTML = x;
  }

connection.on('clickedNext', function() {
	payload.name = "Gowtham";
    payload['arguments'].execute.inArguments = [{"message": s}];
    payload['metaData'].isConfigured = true;	
	connection.trigger('updateActivity', payload);
});



