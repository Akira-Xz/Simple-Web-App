import { useState } from "react"
import { url } from "../../config"
import { useNavigate } from "react-router-dom"

const ToggleSlidingMenu = (props) => {
    const { item, i, setOpen } = props
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate();
    return <>
        <div>
            <div className="dividder-sliding"></div>
            {item.links.length > 0 ? <a onClick={() => setIsHovered(!isHovered)} className="relative flex items-center justify-between !pl-[25px] !pr-[32px] bg-white py-[15px] cursor-pointer  transition-all-seg">
                <span className="title-h5-big uppercase">{item.titulo}</span>
                <div className={`transition-transform duration-300 ${isHovered && '!rotate-90'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
                        <path d="M1.70959 12.1949L7.89076 6.89815C7.99034 6.81277 8.07027 6.70686 8.12508 6.58769C8.17988 6.46852 8.20825 6.3389 8.20825 6.20773C8.20825 6.07656 8.17988 5.94694 8.12508 5.82777C8.07027 5.7086 7.99034 5.60269 7.89076 5.51731L1.70959 0.220572C1.11959 -0.284926 0.208252 0.134175 0.208252 0.91099L0.208252 11.506C0.208252 12.2828 1.11959 12.7019 1.70959 12.1949Z" fill="#010A35" />
                    </svg>
                </div>
            </a> : <a onClick={() => {
                if (!(i != 1)) return
                navigate(item.link, {})
                setOpen(false)
            }} className="relative flex items-center justify-between !pl-[25px] !pr-[32px] bg-white py-[15px] cursor-pointer  transition-all-seg">
                <span className="title-h5-big uppercase">{item.titulo}</span>
            </a>}
            {isHovered && <div className="dividder-sliding"></div>}
            <div className={` text-primary text-menu bg-blueBackground py-[13px] !pl-[25px] !pr-[32px] transition-all duration-300  cursor-pointer
            flex flex-col gap-y-[11px]
                ${!isHovered && 'h-0 !p-0 !m-0 overflow-hidden'}`}>
                {item.links.map((child, o) => {
                    return (<a onClick={() => {
                        navigate(child.href, {})
                        setOpen(false)
                    }} className="body-1 uppercase" key={o}>{child.label}</a>)
                })}
            </div>
        </div>
    </>
}

export default ToggleSlidingMenu