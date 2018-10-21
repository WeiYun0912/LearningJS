# App應用列表

## 介紹
利用JAVASCRIPT的節點(node)操作，實作出類似 Google Play 商店內的App應用程式列表，並在某一欄位插入廣告，如下圖


[Icon出處](https://icons8.com/)


![image](https://github.com/WeiYun0912/LearningJS/blob/master/App%E6%87%89%E7%94%A8%E5%88%97%E8%A1%A8/App.png) 

## 程式碼區塊

初始化變數
```javascript=
var oBox = document.getElementById('box');
var oSection = null; // 
var oName = null; // 連結名稱
var oHead = null; // 創建img用
var oContent = null; //內容
var oText = null; // 標頭
```

利用節點操作創建App程式列表
```javascript=
for(var i=0;i<5;i++){
        oSection = document.createElement('div');
	oSection.className = 'section';
	oBox.appendChild(oSection); //添加子元素

	oName = document.createElement('a');
	oName.href = '#';
	oSection.appendChild(oName); //添加子元素

	oHead = document.createElement('img');
	oHead.src = 'img/icon_0'+i+'.png';
	oName.appendChild(oHead); //添加子元素

	oText = document.createTextNode((i+1)+',App應用');
	oName.appendChild(oText); //添加子元素

	oContent = document.createElement('p');
	oContent.innerHTML = '練習練習練習練習練習練習練習練習練習練習';

	oSection.appendChild(oContent); //添加子元素
}
```
