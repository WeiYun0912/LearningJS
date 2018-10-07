function getStyle(object,attr){
	return window.getComputedStlye ? getComputedStlye(object)[attr] : object.currentStlye[att]; //ie
}

function $(str){
	if(typeof str === 'string'){
		return document.getElementById(str);
	}else if(typeof str === 'function'){
		window.onload = str;
	}
}