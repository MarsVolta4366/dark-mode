import { useEffect, useState } from "react"

const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    )

    const [buttonLabel, setButtonLabel] = useState(
        localStorage.getItem("theme") === "dark" ? "Light Mode" : "Dark Mode"
    )

    useEffect(() => {
        document.getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"))
    }, [])

    const switchThemes = () => {
        if (darkMode === false) {
            localStorage.setItem("theme", "dark")
            document.getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", localStorage.getItem("theme"))
            setDarkMode(true)
            setButtonLabel("Light Mode")
        } else {
            localStorage.setItem("theme", "light")
            document.getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", localStorage.getItem("theme"))
            setDarkMode(false)
            setButtonLabel("Dark Mode")
        }
    }

    return (
        <>
            <label className="switch">
                <button onClick={() => switchThemes()}>{buttonLabel}</button>
            </label>
        </>
    )
}

export default ThemeToggle