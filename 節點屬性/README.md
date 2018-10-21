# 節點屬性

## 介紹
解析JAVASCRIPT的節點操作
___
### nodeType
nodeType = 1 時 屬於 元素節點 (html,body..)<br>
nodeType = 2 時 屬於 屬性節點 (span,p,a...)<br>
nodeType = 3 時 屬於 文本節點 (空格元素)<br>
<br>
文本節點(空格元素)
```html
<div>#################
########<span>hi</span>
</div>
```
```diff
- ### 的地方就代表空格元素
```
___

### nodeName
nodeName 代表 屬性的名稱 例如:
```html
<span id="ImSpan"></span>
```
這裡的nodeName就是 id

___

### nodeValue
待更...
___


## 程式碼區塊

初始化變數 取得box所有子節點
```js 
var box = $('box'); 
var nodes = box.childNodes; 
```
<br>

節點操作
```js
for(var i =0;i<nodes.length;i++){
	if(nodes[i].nodeType == 1){ //元素節點 
		// alert(nodes[i].nodeName); // #text p a span
		// 元素節點的nodeValue是(null)
		if(nodes[i].nodeName.toLocaleLowerCase() == 'span'){
			// alert(nodes[i].nodeValue); //null
			// alert(nodes[i].innerHTML);
		}
      
	}else if(nodes[i].nodeType == 2){ //屬性節點
		//屬性節點的nodeValue是(屬性值) EX:a
		// alert(nodes[i].nodeName);// A #text
		// alert(nodes[i].nodeValue);
	} else if(nodes[i].nodeType == 3){ //文本節點
		//文本節點的nodeValue是(文字內容)
		alert(nodes[i].innerHTML); 
		alert(nodes[i].nodeName);
		alert(nodes[i].nodeValue);
	}
}
```
```html
<div id="box">
	<p>heeee</p>
	<a href="#">Hi</a>
	<span id="ImSpan">hey!</span>
</div>
```
<br>
操作屬性節點 
```js
var i = document.getElementById('ImSpan').attributes[0];
// i.nodeType = 2
// i.nodeName = id
// i.nodeValue = ImSpan
```
```html
<span id="ImSpan">hey!</span>
```


待更...
