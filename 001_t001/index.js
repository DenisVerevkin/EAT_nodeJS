
	//'use strict';

	var requirejs = require('./script');
	
	var strPalindrom001 = '   qqqqqw w qqqQq';
	var strPalindrom002 = 'qwertyuiopsdpoiuytrewq';
	var strPalindrom003 = 'Ароза упала на лапу Азора';
	var strPalindrom004 = 'Ар123оза 24323у234пала на214231 лапу214321 Азора';
		
	console.log(requirejs.checkPalindrom(strPalindrom001));	
	console.log(requirejs.checkPalindrom(strPalindrom002));	
	console.log(requirejs.checkPalindrom(strPalindrom003));	
	console.log(requirejs.checkPalindrom(strPalindrom004));	
