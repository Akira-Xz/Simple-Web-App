import { useEffect, useState } from "react"
import "react-sliding-pane/dist/react-sliding-pane.css"
import SlidingPane from "react-sliding-pane"
import { useNavigate } from "react-router-dom"
import ToggleSlidingMenu from "./ToggleSlidingMenu"
import { url } from "../../config"
// import ToggleSlidingMenu from "../components/Global/ToggleSlidingMenu"

const SlideMenuMob = (props) => {
    const { open = false, setOpen, navigation, icons } = props
    const navigate = useNavigate();
    return <>
        <SlidingPane
            className="slide-menu-header"
            overlayClassName="slide-menu-header-overlay"
            isOpen={open}
            hideHeader
            onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                setOpen(false)
            }}        
        >
            <div className="pt-[15px] pb-[30px]">
                <div className="px-[23px] flex gap-x-[20px] justify-between items-center">
                    <div>                        
                        <div className="max-w-[35px]"
                            onClick={() => {
                                navigate('/', {})
                                setOpen(false)
                            }}>
                            <img src={`${url}/uploads/logo_salram_original_11_cba849daf0.webp`} alt="" />
                        </div>
                    </div>
                    <div>
                        <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="17.1818" stroke="#010A35" stroke-width="1.63636" />
                            <path d="M20.3859 18.3827L25.9932 12.7754C26.2593 12.5098 26.409 12.1493 26.4093 11.7733C26.4096 11.3973 26.2606 11.0365 25.9949 10.7704C25.7293 10.5043 25.3688 10.3546 24.9928 10.3543C24.6168 10.3539 24.256 10.503 23.9899 10.7686L18.3827 16.3759L12.7754 10.7686C12.5093 10.5025 12.1484 10.353 11.772 10.353C11.3957 10.353 11.0348 10.5025 10.7686 10.7686C10.5025 11.0348 10.353 11.3957 10.353 11.772C10.353 12.1484 10.5025 12.5093 10.7686 12.7754L16.3759 18.3827L10.7686 23.9899C10.5025 24.256 10.353 24.6169 10.353 24.9933C10.353 25.3696 10.5025 25.7306 10.7686 25.9967C11.0348 26.2628 11.3957 26.4123 11.772 26.4123C12.1484 26.4123 12.5093 26.2628 12.7754 25.9967L18.3827 20.3895L23.9899 25.9967C24.256 26.2628 24.6169 26.4123 24.9933 26.4123C25.3696 26.4123 25.7306 26.2628 25.9967 25.9967C26.2628 25.7306 26.4123 25.3696 26.4123 24.9933C26.4123 24.6169 26.2628 24.256 25.9967 23.9899L20.3859 18.3827Z" fill="#010A35" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="max-w-[195px] py-[22px]">
                        <img src={`${url}/uploads/group_841_7d5bc2b76c.webp`} alt="" />
                    </div>
                </div>
                <div>
                    {navigation.map((item, i) => {
                        return (<ToggleSlidingMenu item={item} key={i} index={i} setOpen={setOpen} />)
                    })}
                </div>
                <div className="dividder-sliding"></div>
                <div className="flex gap-x-[22px] items-center justify-center pt-[30px]">
                    {icons.map((item, i) => {
                        return (<a href={item.href} className="max-w-[34px] h-[24px] bg-primaryr rounded-sm px-[2px] py-[2px]">
                            <img className="object-contain w-full h-full" src={`${url}${item?.icon?.data?.attributes?.url}`} alt="" />
                        </a>)
                    })}
                </div>
            </div>        
        </SlidingPane>
    </>
}

export default SlideMenuMob