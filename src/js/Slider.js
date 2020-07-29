class Slider {

    count;
    items;
    active = 0;

    constructor($sliderRef, $childRef) {
        this.$sliderRef = document.querySelector($sliderRef);
        this.$childRef = document.querySelector($sliderRef).querySelectorAll($childRef);

        this.#initSlider();
    }

    #initSlider() {
        this.items = Array.from(this.$childRef);
        this.count = this.items.length;
        
        document.querySelector('.slider__arrow.prev').addEventListener('click', this.prev)
        document.querySelector('.slider__arrow.next').addEventListener('click', this.next)
    }

    next = () => {
        if (this.active + 1 >= this.count) {
            this.active = 0;
        } else {
            ++this.active;
        }
        this.setCurrent(this.active);
    }

    prev = () => {
        if (!this.active) {
            this.active = this.count - 1;
        } else {
            --this.active;
        }
        this.setCurrent(this.active);
    }

    setCurrent(pos) {
        const items = Array.from(this.$childRef)
        for (let i in items) {
            items[i].classList.remove('active');
            if (i == pos) {
                items[i].classList.add('active');
            }
        }
    }

}