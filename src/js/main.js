new Select('#location', {
    placeholder: 'Location',
    data: [
        { id: '1', value: 'React' },
        { id: '2', value: 'Angular' },
        { id: '3', value: 'Vue' }
    ]
});
new Select('#activity', {
    placeholder: 'Activity',
    data: [
        { id: '1', value: 'React' },
        { id: '2', value: 'Angular' }
    ]
});
new Select('#grade', {
    placeholder: 'Grade',
    data: [
        { id: '1', value: 'React' },
        { id: '2', value: 'Angular' },
        { id: '3', value: 'Vue' },
        { id: '4', value: 'React Native' },
        { id: '5', value: 'Next' },
        { id: '6', value: 'Nest' }
    ]
});
new Select('#date', {
    placeholder: 'Date',
    data: [
        { id: '1', value: 'React' },
        { id: '2', value: 'Angular' },
        { id: '3', value: 'Vue' }
    ]
});

new Slider('.testimonials__slider', '.slider__item');

window.onload = () => {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(() => {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 700);
}

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '.explore',
})
.setClassToggle('.explore', 'fade-in')
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.app',
})
.setClassToggle('.app', 'fade-in')
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.testimonials',
})
.setClassToggle('.testimonials', 'fade-in')
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.stories__items',
})
.setClassToggle('.stories__items', 'fade-in')
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.destinations__items',
})
.setClassToggle('.destinations__items', 'fade-in')
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.header',
})
.setClassToggle('.header', 'fade-in')
.addTo(controller);