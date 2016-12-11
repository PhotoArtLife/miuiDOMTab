# miuiDOMTab
demo view:
![image](https://github.com/PhotoArtLife/miuiDOMTab/blob/master/images/dom.gif)

version  0.0.1 目前还不支持链式调用，想在下一个版本更新

受jquery的便捷class操作启发，开始抽离addClass、removeClass、toggleClass、hasClass等功能，简小方便，暂时只是引入写了一个小demo；
在一些小组件上面，React操作确实不便，便有了这个简单的class选择和添加删除器，可以直接引用；推荐小tab，小提示

基于原生js和css实现一款垂直操作的选项卡
# 引用方式：
```javascript
<scipt type="miuiDOM.js"></scipt></script>
```
或：
```javascript
require miuiDOM from '/path/miuiDOM.js'

import miuiDOM from '/path/miuiDOM.js'
```

```javascript
git clone git@github.com:PhotoArtLife/miuiDOMTab.git

addClass：miuiDOM.addClass( "#content ul li:first-child", "red" );

toggleClas：miuiDOM.toggleClass(".nav1","active");

removeClass：miuiDOM.removeClass("#line","two");

hasClass: 

miuiDOM.hasClass( "#content ul li", "green", function() {
    console.log( "有这样的Class" );
});
返回值为true或false
```
