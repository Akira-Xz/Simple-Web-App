import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { isLaptop, lang, url } from "../../config"

const Button = (props) => {
    const { text, sty = "", link, disabled, onPress = () => { }, iconCross, iconWhats, iconPencil, action, params = '' } = props
    const isLaptopQuery = useMediaQuery(isLaptop)
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)
    return <>
        <a
            onClick={onPress}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href={`${link}${lang === 'es' ? '?lang=es' : ''}${params}`}
            // href={link}
            type={action}
            className={`transition-all-seg body-small-1 btn-global  ${disabled && 'btn-global-disabled'} ${sty}`}>
            {text}
            {iconCross && isLaptopQuery && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15.5 6.75H9.25V0.5H6.75V6.75H0.5V9.25H6.75V15.5H9.25V9.25H15.5V6.75Z" fill={disabled ? '#A2A2A2' : 'black'} />
            </svg>}
            {iconCross && !isLaptopQuery && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 16" fill="none">
                <path d="M15.5 6.75H9.25V0.5H6.75V6.75H0.5V9.25H6.75V15.5H9.25V9.25H15.5V6.75Z" fill={disabled ? '#A2A2A2' : 'black'} />
            </svg>}
            {iconPencil && <div className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]">
                <img className="w-full h-full object-contain" src={`${url}/wp-content/uploads/2024/07/9044434_edit_icon_2.webp`} alt="" />
            </div>}
        </a>
    </>
}

export default Button