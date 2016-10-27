window.fuzzyCarousel = function(selector, options) {
    /*
    options: selector, width, count
    */
    var width = options.width;
    var count = options.count;
    var position = 0;
    var carousel = document.getElementById(selector);
    var list = carousel.querySelector('.carousel__list');
    var listElems = carousel.querySelectorAll('.carousel__item');
    var itemPosition = position;
    carousel.style.width = options.width+'px';
    
    var controlBox = document.createElement('div');
    controlBox.className = 'carousel__controls';
    controlBox.innerHTML = 
        '<a href="#" class="carousel__button carousel__left"></a>'+
        '<a href="#" class="carousel__button carousel__right"></a>';
    carousel.appendChild(controlBox);

    addDotBox = function() {
        var dotBox = document.createElement('ul');
        dotBox.className = 'carousel__dotbox';
        controlBox.appendChild(dotBox);
        for (var i = 0, len = listElems.length; i < len; i++) {
            var item = document.createElement('li');
            item.className = 'carousel__dot';
            item.setAttribute('data-position', -itemPosition);
            itemPosition = itemPosition + width;
            dotBox.appendChild(item);
            item.onclick = function () {
                list.style.marginLeft = this.dataset.position + 'px';
            };
        }
    };


    if(options.dots) {
        addDotBox();
    }
    carousel.querySelector('.carousel__left').onclick = function () {
        var minPosition = Math.min(position + width * count, 0);
        if (position === minPosition) {
            minPosition = -(width * (listElems.length - count));
        }
        position = minPosition;
        list.style.marginLeft = position + 'px';
        return false;
    };
    carousel.querySelector('.carousel__right').onclick = function () {
        var maxPosition = Math.max(position - width * count, -width * (listElems.length - count));
        if (position === maxPosition) {
            maxPosition = 0;
        }
        position = maxPosition;
        list.style.marginLeft = position + 'px';
        return false;
    };
};