# App應用列表

## 介紹
利用JAVASCRIPT的節點(node)操作，實作出類似 Google Play 商店內的App應用程式列表，並在某一欄位插入廣告，如下圖


[Icon出處](https://icons8.com/)


![image](https://github.com/WeiYun0912/LearningJS/blob/master/App%E6%87%89%E7%94%A8%E5%88%97%E8%A1%A8/App.png) 

## 程式碼區塊

初始化變數
```js
var oBox = document.getElementById('box');
var oSection = null; // 
var oName = null; // 連結名稱
var oHead = null; // 創建img用
var oContent = null; //內容
var oText = null; // 標頭
```

利用節點操作創建App程式列表(無廣告插入)
```js
for(var i=0;i<5;i++){
        oSection = document.createElement('div'); //創建新元素div
	oSection.className = 'section'; // div的class = section
	oBox.appendChild(oSection); //添加子元素

	oName = document.createElement('a'); //創建新元素 a
	oName.href = '#'; // 連結設定(無)
	oSection.appendChild(oName); //添加子元素

	oHead = document.createElement('img'); //創建新元素 img
	oHead.src = 'img/icon_0'+i+'.png'; //圖片位址
	oName.appendChild(oHead); //添加子元素 

	oText = document.createTextNode((i+1)+',App應用'); //添加文本節點
	oName.appendChild(oText); //添加子元素

	oContent = document.createElement('p'); //創建新元素 p
	oContent.innerHTML = '練習練習練習練習練習練習練習練習練習練習'; //將文字添加到oContent 

	oSection.appendChild(oContent); //添加子元素
}
```

利用節點操作創建App程式列表(有廣告)
```js
for(var i=0;i<5;i++){
	if(i==3){
		oAd = document.createElement('div');
		oAd.className = 'section';
		oBox.appendChild(oAd);

		oName = document.createElement('a');
		oName.href = '#';
		oAd.appendChild(oName);

		oText = document.createTextNode('我是廣告標題');
		oName.appendChild(oText);

		oContent = document.createElement('p');
		oContent.innerHTML = '我是廣告內容';

		oAd.appendChild(oContent);
	}

        oSection = document.createElement('div'); //創建新元素div
	oSection.className = 'section'; // div的class = section
	oBox.appendChild(oSection); //添加子元素

	oName = document.createElement('a'); //創建新元素 a
	oName.href = '#'; // 連結設定(無)
	oSection.appendChild(oName); //添加子元素

	oHead = document.createElement('img'); //創建新元素 img
	oHead.src = 'img/icon_0'+i+'.png'; //圖片位址
	oName.appendChild(oHead); //添加子元素 

	oText = document.createTextNode((i+1)+',App應用'); //添加文本節點
	oName.appendChild(oText); //添加子元素

	oContent = document.createElement('p'); //創建新元素 p
	oContent.innerHTML = '練習練習練習練習練習練習練習練習練習練習'; //將文字添加到oContent 

	oSection.appendChild(oContent); //添加子元素
}
```

可以發現我們是在i=3(第三則內容)插入廣告，所以當我們想要把廣告插入在其他則內容時，
只要更動i就能把廣告插入在其他則內容中。
