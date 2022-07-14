import { darkTheme } from "../components/Themes"

const ApplicationsConfig = {
    background: {
        color: {
          value: darkTheme.text
        },
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
      },
      fullScreen: {
        zIndex: 0
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: {
              enable: true,
              force: 60
            }
          }
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 10
          },
          grab: {
            distance: 200
          }
        }
      },
      particles: {
        color: {
          value: "#ffffff"
        },
        links: {
          color: {
            value: "#ffffff"
          },
          distance: 150,
          enable: true,
          opacity: 0.4
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200
            }
          },
          enable: true,
          outModes: {
            bottom: "out",
            left: "out",
            right: "out",
            top: "out"
          }
        },
        number: {
          density: {
            enable: true
          }
        },
        opacity: {
          random: {
            enable: true
          },
          value: {
            min: 0.1,
            max: 0.5
          },
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 0.1
          }
        },
        size: {
          random: {
            enable: true
          },
          value: {
            min: 0.1,
            max: 5
          },
          animation: {
            enable: true,
            speed: 20,
            minimumValue: 0.1
          }
        }
      }
}
export default ApplicationsConfig      