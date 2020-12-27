/* load perfect  */
document.addEventListener("DOMContentLoaded", function () {
	const sweetScroll = new SweetScroll({/* some options */ });
	// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
	// window.onscroll = function() {scrollFunction()};

	// function scrollFunction() {
	//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	//     document.getElementById("navbar").style.padding = "30px 10px";
	//     document.getElementById("my_name").style.fontSize = "25px";
	//   } else {
	//     document.getElementById("navbar").style.padding = "80px 10px";
	//     document.getElementById("my_name").style.fontSize = "35px";
	//   }
	// }
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS("particles-js", { particles: { number: { value: 30, density: { enable: !0, value_area: 800 } }, color: { value: "#ff0000" }, shape: { type: "triangle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } }, opacity: { value: .5, random: !1, anim: { enable: !1, speed: 1, opacity_min: .1, sync: !1 } }, size: { value: 3, random: !0, anim: { enable: !1, speed: 19.18081918081918, size_min: .1, sync: !1 } }, line_linked: { enable: !0, distance: 150, color: "#ffffff", opacity: .4, width: 1 }, move: { enable: !0, speed: 4, direction: "none", random: !0, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 1200 } }, nb: 80 }, interactivity: { detect_on: "canvas", events: { onhover: { enable: !1, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: !0 })
}, !1);