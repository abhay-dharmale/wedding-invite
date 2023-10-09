gsap.from('#page-1 .homepage h1', {
    opacity: 0,
    y: 100,
    delay: 0.5,
    duration: 0.8,
    // stagger: 2
})

gsap.from('#page-1 .homepage p', {
    opacity: 0,
    y: 100,
    delay: 0.7,
    duration: 0.8,
    stagger: 2
})

gsap.from('#page-1 .homepage .left .image-cont', {
    opacity: 0,
    x: -180,
    delay: 0.5,
    duration: 0.99,
    stagger: 2
})

gsap.from('#page-1 nav', {
    opacity: 0,
    // y: -100,
    delay: 0.4,
    duration: 2,
    // stagger: 0.5,
})


  gsap.from("#page-3 #info", {
    opacity: 0,
    scale: 0.6,
    duration: 1.5,
    stagger: 0.8,
    scrollTrigger: { 
        trigger: "#page-3 #info", 
        scroller: "body",
        start: "top 75%", 
        end: "top 30%",
        scrub: true,
    },
  });