import { useMediaQuery } from "react-responsive"
import { isLaptop, lang } from "../../config"

const ButtonLink = (props) => {
    const { text, sty = "", link, iconCross } = props
    const isLaptopQuery = useMediaQuery(isLaptop)
    return <>

        <a
            href={`${link}${lang === 'es' ? '?lang=es' : ''}`}
            className={`transition-all-seg flex cursor-pointer items-center gap-x-[14px] title-h4-small text-secondary uppercase ${sty}`}>
            {iconCross && isLaptopQuery && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                <rect x="-0.000976562" y="6.34277" width="13.9661" height="2.37862" fill="#FDB200" />
                <rect x="8.08496" width="15.0646" height="2.20517" transform="rotate(90 8.08496 0)" fill="#FDB200" />
            </svg>}
            {iconCross && !isLaptopQuery && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8" fill="none">
                <rect y="3.36841" width="7.41665" height="1.26316" fill="#FDB200" />
                <rect x="4.29407" width="8" height="1.17105" transform="rotate(90 4.29407 0)" fill="#FDB200" />
            </svg>}
            {text}
        </a>
    </>
}

export default ButtonLink