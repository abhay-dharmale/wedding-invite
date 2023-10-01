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
    y: -100,
    delay: 0.5,
    duration: 0.7,
})

gsap.from("#page-2 .right .image-cont-2", {
    scale: 0.9,
    duration: 3,
    scrollTrigger: { 
        trigger: "#page-2 .right .image-cont-2", 
        scroller: "body",
        start: "top 500", 
        end: "top 100",
        scrub: true,
    },
  });

  gsap.from("#page-2 .left .content .main-span", {
    opacity:0,
    duration: 3,
    scrollTrigger: { 
        trigger: "#page-2 .left .content .main-span", 
        scroller: "body",
        start: "top 90%", 
        end: "top 55%",
    },
  });

  gsap.from("#page-3 #info", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: { 
        trigger: "#page-3 #info", 
        scroller: "body",
        start: "top 75%", 
        end: "top 30%",
        scrub: true,
        markers:true
    },
  });