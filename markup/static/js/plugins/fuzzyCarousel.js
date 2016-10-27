let fuzzyCarousel = (selector, options) => {
    /*
    options: selector, width, count
    */
    let width = options.width;
    let count = options.count;
    let position = 0;
    let carousel = document.getElementById(selector);
    let list = carousel.querySelector('.carousel__list');
    let listElems = carousel.querySelectorAll('.carousel__item');
    let controlBox = carousel.querySelector('.carousel__controls');
    let dotBox = document.createElement('ul');
    let itemPosition = position;
    carousel.style.width = options.width+'px';
    
    addDotBox = () => {
        dotBox.className = 'carousel__dotbox';
        controlBox.appendChild(dotBox);
        for (let i = 0, len = listElems.length; i < len; i++) {
            let item = document.createElement('li');
            item.className = 'carousel__dot';
            item.setAttribute('data-position', -itemPosition);
            itemPosition = itemPosition + width;
            dotBox.appendChild(item);
            item.onclick = function () {
                list.style.marginLeft = this.dataset.position + 'px';
            };
        }
    };
    // addDotBox();
    if(options.dots) {
        addDotBox();
    }
    carousel.querySelector('.carousel__left').onclick = function () {
        let minPosition = Math.min(position + width * count, 0);
        if (position === minPosition) {
            minPosition = -(width * (listElems.length - count));
        }
        position = minPosition;
        list.style.marginLeft = position + 'px';
        return false;
    };
    carousel.querySelector('.carousel__right').onclick = function () {
        let maxPosition = Math.max(position - width * count, -width * (listElems.length - count));
        if (position === maxPosition) {
            maxPosition = 0;
        }
        position = maxPosition;
        list.style.marginLeft = position + 'px';
        return false;
    };
};