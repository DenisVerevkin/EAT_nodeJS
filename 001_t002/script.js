var letterSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
					  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
					  'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'н', 'м', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я',
					  'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'Н', 'М', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
var punctuationSet = [':',';',',','.','?','!',' ','—'];


module.exports = {

	letterSet:  letterSet,
	
	punctuationSet: punctuationSet,

	checkWrongChar: function (sourceString){

		for (var i=0; i<sourceString.length; i++){
			if ((letterSet.indexOf(sourceString[i])<0)&&(punctuationSet.indexOf(sourceString[i])<0)) {return false};
		}
		return true;
	},

	replacePart: function(sourceString, numberLetter, replacingString){

		var bufferString = sourceString;
		var i=0;
		var j;
		var k;
		
		while (i<sourceString.length){
			k = i;
			while (punctuationSet.indexOf(sourceString[k])!=-1) {k++;};
			j=k;
			while (letterSet.indexOf(sourceString[j])!=-1) {j++;};
			if ((j-k)>=numberLetter) {bufferString=bufferString.slice(0,k)+replacingString.slice(0,(numberLetter))+sourceString.slice(k+numberLetter);}
			i=j+1;
		}
		return bufferString;
	},

	replaceChar: function(sourceString, numberLetter, replacingString){

		var bufferString = sourceString;
		var i=0;
		var j;
		var k;

		var movLen=replacingString.length;
			
		while (i<bufferString.length){
			k = i;
			while (punctuationSet.indexOf(bufferString[k])!=-1) {k++;};
			j=k;
			while (letterSet.indexOf(bufferString[j])!=-1) {j++;};
			if ((j-k)>=numberLetter) {
				bufferString=bufferString.slice(0,(k-1)+numberLetter)+replacingString+bufferString.slice(k+numberLetter);
				i=j+movLen;
				}
			else {i=j+1;}
		}
		return bufferString;
	}
}
