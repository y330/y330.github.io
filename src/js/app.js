document.addEventListener("DOMContentLoaded", function() {
    new SweetScroll({});
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 30,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#ff6317"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 1.92,
                    color: "#80cbc4"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 15,
                random: !0,
                anim: {
                    enable: !0,
                    speed: 8,
                    size_min: 3,
                    sync: !0
                }
            },
            line_linked: {
                enable: !0,
                distance: 400,
                color: "#ffff00",
                opacity: .4,
                width: 2
            },
            move: {
                enable: !0,
                speed: 1,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !0,
                attract: {
                    enable: !0,
                    rotateX: 222,
                    rotateY: 1220
                }
            },
            nb: 100
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "bubble"
                },
                onclick: {
                    enable: !1,
                    mode: "bubble"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 600,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 100,
                    size: 12,
                    duration: 2,
                    opacity: 0.3,
                    speed: 0.21
                },
                repulse: {
                    distance: 20,
                    duration: .2
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    })
}, !1);
