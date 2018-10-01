function isOkJSON(filePath){
	
	
	getJSONFromFile(filePath001, function(text){
	var data = JSON.parse(text);	
	
	if (typeof(data.flag)!='boolean'){return false};
	if (!Array.isArray(data.myPromises)){return false};
	if (typeof(data.element)!='boolean'){return false};
	if (data.screenshot!=null){return false};
	if (typeof(data.elementText)!='string'){return false};
	if (data.allElementsText.indexOf("const")=(-1)){return false};
	if (data.counter<=10){return false};
	if (data.config!="Common"){return false};
	if (data.const.toLowerCase!="first"){return false};
	if (!(Array.isArray(data.parameters)&&(data.parameters.length==8))){return false};
	if (!(typeOf(data.decription)='string')&&(data.decription.length>5)&&(data.decription.length>13))){return false};
	
	
	
	})
}
	
function getJSONFromFile(filePath, callback){
	var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", filePath, true);
    rawFile.onreadystatechange = function(aTest, bTest) {
			if (rawFile.readyState === 4){ //&& rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);

}
