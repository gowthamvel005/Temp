
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

    var s = document.getElementById("names");
	document.getElementById('mytext').value +=  s.options[s.selectedIndex].value;
	
});

function callme()
{
	var first = document.getElementById('mytext').value;
	var last = document.getElementById('password').value;
//	get the valus in the index.html
	document.getElementById('demo').value = first +' '+ last ;

}

connection.on('clickedNext', function() {
	payload.name = "Gowtham";
    payload['arguments'].execute.inArguments = [{"message": s}];
    payload['metaData'].isConfigured = true;	
	connection.trigger('updateActivity', payload);
});



