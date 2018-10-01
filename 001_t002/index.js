	//'use strict'

    var requiresjs = require('./script');

	var sourceString = "Суть разработки программного обеспечения — Нужно проделать сто отверстий в стене, так что я сконструировал автоматическую дрель. В ней используются элегантные точные шестерни для непрерывной регулировки скорости и крутящего момента по мере необходимости. — Отлично, у неё идеальный вес. Загрузим сто таких дрелей в пушку, которые мы сделали, и выстрелим в стену.";
	var numberLetter = 3;
	var replacingString = "12345";

    
   // console.log(requiresjs.checkWrongChar(sourceString, letterSet, punctuationSet));

	if (!requiresjs.checkWrongChar(sourceString)) {console.log("Forbidden character(s) present!");}

    else {
        console.log(requiresjs.replaceChar(sourceString, numberLetter, replacingString));
//      console.log(requiresjs.replacePart(sourceString, numberLetter, replacingString)); 
    }
