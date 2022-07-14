import { darkTheme } from "../components/Themes"
const configLight = {
    
    background: {
        color: {
        value: darkTheme.text
        },
        image: "url('../assets/Images/undraw_progressive_app_m9ms.png')",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "20%"
    },
    fullScreen: {
        zIndex: 0
    },
    interactivity: {
        events: {
        onClick: {
            enable: true,
            mode: "repulse"
        },
        onHover: {
            enable: true,
            mode: "bubble"
        }
        },
        modes: {
        bubble: {
            distance: 250,
            duration: 2,
            opacity: 0,
            size: 0
        },
        grab: {
            distance: 400
        },
        repulse: {
            distance: 400
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
        opacity: 0.4
        },
        move: {
        attract: {
            rotate: {
            x: 600,
            y: 600
            }
        },
        enable: true,
        path: {},
        outModes: {
            bottom: "out",
            left: "out",
            right: "out",
            top: "out"
        },
        random: true,
        speed: 1,
        spin: {}
        },
        number: {
        density: {
            enable: true
        },
        value: 260
        },
        opacity: {
        random: {
            enable: true
        },
        value: {
            min: 0,
            max: 1
        },
        animation: {
            enable: true,
            speed: 1,
            minimumValue: 0
        }
        },
        size: {
        random: {
            enable: true
        },
        value: {
            min: 1,
            max: 3
        },
        animation: {
            speed: 4,
            minimumValue: 0.3
        }
        }
    }
}
export default configLight      