import { Switch } from "@mui/material"
import { useEffect, useState } from "react"
import { isLaptop } from "../../../config"
import { useMediaQuery } from "react-responsive"
import { t } from "i18next"

const CheckSchedule = (props) => {
    const { item, handleCheckChange } = props
    const [check, setCheck] = useState(false)
    const [startTime, setStartTime] = useState(item.startTime || "");
    const [endTime, setEndTime] = useState(item.endTime || "");
        
    useEffect(() => {
        handleCheckChange({
            ...item,
            check: check,
            apertura: startTime,
            cierre: endTime,
        })
    }, [check, startTime, endTime])

    const handleTimeChange = (e) => {
        const { name, value } = e.target;
        if (name === "startTime") {
            setStartTime(value);
        } else if (name === "endTime") {
            setEndTime(value);
        }
    };
    return <>
        <div className="grid sm:grid-cols-2 items-center">
            <div className="grid grid-cols-3 gap-x-[10px] items-center">
                <div className="body-1 !font-semibold font-athiti uppercase">
                    {t(`myMembership.${item.translate}`)}
                    {/* {item.text} */}
                </div>
                <div>
                    <Switch
                        checked={check}
                        onChange={(e) => setCheck(e.target.checked)}
                    />
                </div>
                <div className="body-1 !font-normal font-athiti uppercase">
                    {check ? t('myMembership.open') : t('myMembership.closed')}
                </div>
            </div>
            {check && <div className="flex flex-wrap sm:justify-end gap-x-[15px] gap-y-[6px] items-center">
                <div><input onChange={handleTimeChange} name="startTime" type="time" className="py-[2px] px-[12px] border-[1px] border-black rounded-md" /></div>
                <div><input onChange={handleTimeChange} name="endTime" type="time" className="py-[4px] px-[12px] border-[1px] border-black rounded-md" /></div>
            </div>}
        </div >
    </>
}

export default CheckSchedule