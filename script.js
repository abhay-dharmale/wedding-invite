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


const tl1 = gsap.timeline({ repeat: -1 });
tl1.to("#page-2 .main img", {
    rotationY: "20", 
    ease: "power1.inOut", 
    duration: 1, 
    repeat: -1, 
    yoyo: true
});

gsap.from("#page-2 .main h3", {
    x: -1400,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: "#page-2 .main h3",
        scroller: "body",
        start: "top 75%",
        end: "top 55%",
    }
})


  gsap.from("#page-3 #info", {
    opacity: 0,
    scale: 0.6,
    duration: 1.5,
    stagger: 0.8,
    scrollTrigger: { 
        trigger: "#page-3 #info", 
        scroller: "body",
        start: "top 82%", 
        end: "top 35%",
        scrub: true,
    },
  });

  gsap.from("#page-4 .right .schedules", {
    x: 750,
    duration: 1,
    delay: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#page-4 .right .schedules",
        scroller: "body",
        start: "top 80%",
        end: "top 49%",
        scrub: 2
    }
  })

  gsap.to("#page-4 .left h1", {
    y: 5, 
    ease: "power3.in", 
    duration: 1, 
    repeat: -1, 
    yoyo: true, 
  });