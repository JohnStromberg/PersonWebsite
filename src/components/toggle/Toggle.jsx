import "./toggle.css"
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"
import {useContext} from "react"
import {ThemeContext} from "../../context"

const Toggle = () => {
    const theme = useContext(ThemeContext)


    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t-button-1" onClick={handleClick}>
            <div className="t">
                <div className="t-icon"><BsFillSunFill/></div>
                <div className="t-icon"><BsFillMoonFill/></div>
                <div className="t-button" style={{left: theme.state.darkMode ? 0 : 25}}></div>
            </div>
        </div>
    )
}

export default Toggle