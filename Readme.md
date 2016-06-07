# Google APIs Node.js Client


This is a software which will convert the Spreadsheet into the JSON using Google API
### Beta Version

This library is in Beta version.

### Questions/problems?

* Ask your development related questions on [![Ask a question on Stackoverflow][overflowimg]][stackoverflow]
* If you've found an bug/issue, please [file it on GitHub][bugs].

## Installation

This library is distributed on `npm`. To add it as a dependency,
run the following command:

``` sh
$ npm install google-spreadsheet-json --save
```



## Example Usage

``` js
var GoogleSpreadsheetJSON = require('google-spreadsheet-json');

GoogleSpreadsheetJSON(YourKEY,fileNameFromBaseAddress,function(err,data){
    if(err)
        //Handle the error
    else
       //Do with the response
})
```

## Application Default Credentials
This library provides an implementation of application default credentials for Node.js.

The Application Default Credentials provide a simple way to get authorization credentials for use
in calling Google APIs.

They are best suited for cases when the call needs to have the same identity and authorization
level for the application independent of the user. This is the recommended approach to authorize
calls to Cloud APIs, particularly when you're building an application that uses Google Compute
Engine.
