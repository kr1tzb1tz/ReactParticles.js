/*
 *   @desc Default configuration for particles if one isn't provided as a prop.
 */
export default {
  particles: {
    number: {
      value: 30,
      density: {
        enable: false
      }
    },
    shape: {
      type: "image",
      image: {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
        width: 600,
        height: 400
      }
    },
    size: {
      value: 60,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 0,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 0,
        size: 48.72463273808071,
        duration: 10,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 1
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
