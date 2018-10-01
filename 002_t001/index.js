	//'use strict'

    var requiresjs = require('./script');

	var pathJSON = './json';
	var pathXLS = './xls/result.xls';

   	if (requiresjs.xlsxConverter(pathJSON, pathXLS)) {console.log("It is done!");}

    else {
        console.log("JSON directory is empty");
    }
