/* *
 * miuiDom - addClass / removeClass / toggleClass / hasClass
 * version  0.0.1 目前还不支持链式调用，想在下一个版本更新
 * MIT from Mich@PhotoArtLife
 * 在一些小组件上面，React操作确实不便，便有了这个简单的class选择和添加删除器，可以直接拿过来用，推荐小tab，小提示
* */
var miuiDOM = (function() {
    'use strict';

    var addClassMethod = function(xElements, xClass) {
        var elements = document.querySelectorAll(xElements);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList) {
                elements[i].classList.add(xClass);
            } else {
                elements[i].className += ' ' + xClass;
            }
        }
    }

    var removeClassMethod = function(xElements, xClass) {
        var elements = document.querySelectorAll(xElements);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList) {
                elements[i].classList.remove(xClass);
            } else {
                elements[i].className = elements[i].className.replace(
                    new RegExp('(^|\\b)' + xClass.split(' ').join(
                        '|') + '(\\b|$)', 'gi'), ' ');
            }
        }
    }

    var toggleClassMethod = function(xElements, xClass) {
        var elements = document.querySelectorAll(xElements);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList) {
                elements[i].classList.toggle(xClass);
            } else {
                var classes = elements[i].className.split(' ');
                var existingIndex = classes.indexOf(xClass);
                if (existingIndex >= 0) {
                    classes.splice(existingIndex, 1);
                } else {
                    classes.push(xClass);
                }
                elements[i].className = classes.join(' ');
            }
        }
    }

    var hasClassMethod = function(xElements, xClass, xCallback) {
        var elements = document.querySelectorAll(xElements);
        var xClass = " " + xClass + " ";
        for (var i = 0; i < elements.length; i++) {
            console.log(xClass);
            if ((" " + elements[i].className + " ").replace(
                /[\n\t]/g, " ").indexOf(xClass) > -1) {
                if (xCallback && typeof(xCallback) === "function") {
                    xCallback(elements[i]);
                }
            }
        }
    }
    
    return {
        addClass: addClassMethod,
        removeClass: removeClassMethod,
        toggleClass: toggleClassMethod,
        hasClass: hasClassMethod,
    };
})();

