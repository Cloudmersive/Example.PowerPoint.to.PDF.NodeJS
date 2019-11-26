const fs = require('fs');

var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR-API-KEY-HERE';



var apiInstance = new CloudmersiveConvertApiClient.ConvertDocumentApi();

var inputFile = Buffer.from(fs.readFileSync("C:\\temp\\input.pptx").buffer); // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {

    fs.writeFile("C:\\temp\\output.pdf", data,  "binary",function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });

    console.log('Successful - done.');
  }
};
apiInstance.convertDocumentPptxToPdf(inputFile, callback);

// Optionally, we can rasterize the PDF

apiInstance = new CloudmersiveConvertApiClient.EditPdfApi();

inputFile = Buffer.from(fs.readFileSync("C:\\temp\\output.pdf").buffer);

var callback2 = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {

    fs.writeFile("C:\\temp\\output2.pdf", data,  "binary",function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });

    console.log('Successful - done.');
  }
};

apiInstance.editPdfRasterize(inputFile, callback2);