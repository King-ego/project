import "styled-components";
const Theme = {
    dark:{
        background: "#000",
        color: "#fff",
        reverse_background: "#fff",
        reverse_color: "#000",
        button: {
            background: "#fff",
            color: "#000",
            default: {
                initial: "#ccc",
                success: "#58ff58",
                warning: "#efe433",
                error: "#ff2424",
            }
        },
        link: {
            color: "#646cff"
        },
    },
    light: {
        background: "#fff",
        color: "#000",
        reverse_background: "#000",
        reverse_color: "#fff",
        button: {
            background: "#000",
            color: "#fff",
            default: {
                initial: "#ccc",
                success: "#58ff58",
                warning: "#efe433",
                error: "#ff2424",
            }
        },
        link: {
            color: "#0d1dfd"
        }
    }
}
export default Theme;