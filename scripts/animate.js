
let rule = CSSRulePlugin.getRule(".landing-container h1 span::after");

// gsap.from(".anim1", { opacity: 0, duration: 1, y: -50, ease: "power2.easeInOut", stagger: 0.6 });
// gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });


var tl = gsap.timeline({ defaults: {duration: 2} })

tl.from('.anim1', { t: -50, stagger: 0.6, opacity: 0 })
