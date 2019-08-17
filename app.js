var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';



var apiInstance = new CloudmersiveConvertApiClient.ConvertDocumentApi();

var inputFile = Buffer.from(fs.readFileSync("C:\\temp\\input.pptx").buffer); // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
    console.log('Result bytes:')
  }
};
apiInstance.convertDocumentPptxToPdf(inputFile, callback);