
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

	document.getElementById('demo').value = first +' '+ last ;
	
  }

  function createDataExtension(subFieldData, fieldListData, deName){
	    
	let soapMessage = '<?xml version="1.0" encoding="UTF-8"?>'
	+'<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">'
	+'    <s:Header>'
	+'        <a:Action s:mustUnderstand="1">Create</a:Action>'
	+'        <a:To s:mustUnderstand="1">{process.env.mcEndpoint}/Service.asmx</a:To>'
	+'        <fueloauth xmlns="http://exacttarget.com">'+authToken+'</fueloauth>'
	+'    </s:Header>'
	+'    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">'
	+'        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">'
	+'<Objects xsi:type="DataExtension">'
	+'<CategoryID>cateID</CategoryID>'
	+'<CustomerKey>'+deName+'</CustomerKey>'
			+'<Name>'+deName+'</Name>'
			+'<IsSendable>true</IsSendable>'
			+subFieldData
			+'<SendableSubscriberField>'
			+'    <Name>Subscriber Key</Name>'
			+'    <Value></Value>'
			+'</SendableSubscriberField>'
	+'<Fields>'
	+fieldListData
	+'</Fields>'
	+'</Objects>'
	+'        </CreateRequest>'
	+'    </s:Body>'
	+'</s:Envelope>';
	
	fetch("/create/dextension/", {
		method: "POST",
		body: JSON.stringify({
			name: deName,
			token: authToken,
			xmlData: soapMessage
		}),
	})
	.then(response => response.text())
	.then(dataValue => {
		console.log('Create DE Success: ', dataValue);
	})
	.catch((error) => {
		console.log('Create DE error: ', error);
	});
}



connection.on('clickedNext', function() {
	payload.name = "Gowtham";
    payload['arguments'].execute.inArguments = [{"message": s}];
    payload['metaData'].isConfigured = true;	
	connection.trigger('updateActivity', payload);
});



