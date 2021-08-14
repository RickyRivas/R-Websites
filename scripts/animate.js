
let rule = CSSRulePlugin.getRule(".landing-container h1 span::after");

var tl = gsap.timeline({ defaults: {duration: 2} })

tl.from('.anim1', { y: -50, stagger: 0.6, opacity: 0 })
