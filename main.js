/**
 * Created by supermacy on 29/4/16.
 */
var async = require("async");
var GoogleSpreadsheet = require("google-spreadsheet");
var result={};
module.exports=function(key,name,callback){
    // The file should be present in the root folder and then its name should be passed
    // otherwise the name of the file should be relative .
    var filename='./'+name;
    // The second argument should be key of the api after registering in the google api.
    var doc = new GoogleSpreadsheet(key);
    var sheet;
    var result=[];
    async.series([
        // It checks wether the private key file it have is correct or not .If the file is missing or
        // not correct it returns the error.
        function setAuth(step) {
            var creds = require(filename);
            doc.useServiceAccountAuth(creds,function(err,data) {
                var is_nan=NaN;
                if(err && is_nan!=err )

                    callback(err);

            else
              step()
            },step);
        },
        function getInfoAndWorksheets(step) {
            //It gathers the information about the worksheet and google spreadsheet.
            doc.getInfo(function(err,info) {
                var is_nan=NaN;
                if(err && is_nan!=err )

                    callback(err)
                else if(info) {
                    sheet = info.worksheets[0];
                    result.sheetCount = info.worksheets.length
                    step();
                }
                else
                    callback(null,"Nothing to fetch")
            });
        },
        // This function extract the rows from the data which has been fetched from the above function.
        function workingWithRows(step) {

            sheet.getRows({
            }, function( err, rows ){
                var is_nan=NaN;
                if(err && is_nan!=err )
                    callback(err)
                else if(rows) {

                    var result_array = [], keys = [], length_keys;
                    for (var k in rows[0])
                        keys.push(k);
                    length_keys = keys.length;
                    for (var i = 0; i < rows.length; i++) {
                        var result_rows = {};
                        for (var j = 4; j < length_keys - 2; j++) {
                            var loop_keys = keys[j];
                            result_rows[loop_keys] = rows[i][loop_keys]
                        }
                        result_array.push(result_rows)
                        result.data = result_array;
                    }

                    callback(null, result)
                }
                else
                    callback(null,"Nothing to fetch");

       });
        }

    ]);
}

