/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/
let speed = 1.5


/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 90,
      "density": {
        "enable": true,
        "value_area": 630.6959730062122
      }
    },
    "color": {
      "value": "#fcdddd"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 0
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.31933578157432485,
        "opacity_min": 0.1193357815743249,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 180,
      "color": "#adb2ee",
      "opacity": 0.23,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 60,
        "rotateY": 120
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 239.50183618074365,
        "line_linked": {
          "opacity": 0.38810773223800665
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "fill"
  }
}

);
