	
module.exports= {
	checkPalindrom: function(stringPalindrom){

	var charSet=   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
					'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'н', 'м', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
	
	var bufferString = '';

	// нормализуем	строку
	// 1) приводим все к нижнему регистру 
	stringPalindrom = stringPalindrom.toLowerCase();
	// 2) исключаем НЕ буквы и пробелы
	for (i=0; i<stringPalindrom.length; i++){
		if (charSet.indexOf(stringPalindrom[i])>=0) {bufferString = bufferString + stringPalindrom[i];}
	}
	
	// проверка на палиндром
	for (i=0; i<(bufferString.length/2); i++){
		k=(bufferString.length-1)-i;
		if (bufferString[i]!=bufferString[k]) {return 0;}
	}
	
	return 1;

	}
}