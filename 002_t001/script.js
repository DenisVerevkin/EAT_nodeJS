
var fs = require('fs');
var json2xls = require('./node_modules/json2xls/lib/json2xls');
var fileNames = [];
var xlsArray = [];



module.exports = {

	fileNames: fileNames,
	xlsArray: xlsArray,

	xlsxConverter: function (pathJSON, pathXLS){

		fs.readdir( pathJSON, function (err, files) {
			fileNames=files;
			console.log(files);	
			for (var i=0; i<fileNames.length;i++){
				var fullFileName = (pathJSON+'/'+fileNames[i]); 

				xlsArray[i]=JSON.parse(fs.readFileSync (fullFileName));
				console.log(xlsArray[i]);
							}
			var xls = json2xls(xlsArray);
			fs.writeFileSync(pathXLS, xls, 'binary');
		} );
	},


	
}
