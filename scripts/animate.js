// barba.init({
//     prefetchIgnore: '/home/',

//     transitions: [{
//         name: 'opacity-transition',
//         leave(data) {
//             return gsap.to(data.current.container, {
//                 opacity: 0,
//             });
//         },
//         enter(data) {
//             return gsap.from(data.next.container, {
//                 opacity: 0
//             });
//         }
//     }]
// });

// var tl = gsap.timeline();

// tl.from('.anim1', {
//     y: -50,
//     stagger: 0.6,
//     opacity: 0,
//     delay: 2,
// })