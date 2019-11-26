$(document).ready(function () {
    svg4everybody({});
    // -- quality
    $('input[type=radio][name=quality]').on('change', function() {
        switch ($(this).val()) {
            case 'min':
                //before clear class
                $('.quality-label').removeClass('label-black');
                $('.quality-label__desc').removeClass('span-visible');
                // add class
                $('.quality-label--min').addClass('label-black');
                $('.quality-label__desc--min').addClass('span-visible');
            break;
            case 'mid':
                //before clear class
                $('.quality-label').removeClass('label-black');
                $('.quality-label__desc').removeClass('span-visible');
                // add class
                $('.quality-label--min, .quality-label--mid').addClass('label-black');
                $('.quality-label__desc--mid').addClass('span-visible');
            break;
            case 'max':
                //before clear class
                $('.quality-label').removeClass('label-black');
                $('.quality-label__desc').removeClass('span-visible');
                // add class
                $('.quality-label').addClass('label-black');
                $('.quality-label__desc--max').addClass('span-visible');
            break;
        }
    });
    // -- brightness
    // - ширина прогресса 270 равняется 100%. 145 = 50%. 72 = 25%. 
    $('.brightness-progress__value').css('width', 210);
    // --- выбор рамки тут можно выводить цену
    $('input[type=radio][name=frame__input]').on('change', function() {
        // console.log('test');
        var ramki_value = $(this).val();
        $('.ramki-price__value').html(ramki_value + ' р.');
        // console.log($(this).val());
    });

    
});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}
