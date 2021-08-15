barba.init({
    prefetchIgnore: '/home/',

    transitions: [{
        name: 'opacity-transition',
        leave(data) {
            return gsap.to(data.current.container, {
                opacity: 0,
            });
        },
        enter(data) {
            return gsap.from(data.next.container, {
                opacity: 0
            });
        }
    }]
});

let rule = CSSRulePlugin.getRule(".landing-container h1 span::after");

var tl = gsap.timeline({
    defaults: {
        duration: 1
    }
})

tl.from('.anim1', {
    y: -50,
    stagger: 0.6,
    opacity: 0,
    delay: 2,
})