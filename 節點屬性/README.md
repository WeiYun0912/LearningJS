# 節點屬性

## 介紹
解析JAVASCRIPT的節點操作

nodeType = 1 時 屬於 元素節點 <br>
nodeType = 2 時 屬於 屬性節點 (span,p,a...) <br>
nodeType = 3 時 屬於 文本節點 <br>


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
				// alert(nodes[i].innerHTML);
				// alert(nodes[i].nodeName);// #text
				// alert(nodes[i].nodeValue);
	}
}
```

待更...
