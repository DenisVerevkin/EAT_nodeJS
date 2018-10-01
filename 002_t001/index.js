	//'use strict'

    var requiresjs = require('./script');

	var pathJSON = './json';
    var pathXLS = './xls/result.xls';


    requiresjs.xlsxConverter(pathJSON, pathXLS);
