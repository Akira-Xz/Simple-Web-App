import { useEffect, useState } from "react";
import CheckSchedule from "./checkSchedule"
import { t } from "i18next";
const Schedule = (props) => {
    const { item, field, setValue } = props
    const [scheduleData, setScheduleData] = useState(item.data);    

    const handleCheckChange = (updatedItem) => {
        const updatedData = scheduleData.map(d =>
            d.value === updatedItem.value
                ? { ...d, ...updatedItem }
                : d
        );        
        setScheduleData(updatedData);
        setValue(field.name, updatedData);
    };

    return <>
        {item.placeholder && <label for={item.name} className="body-small-1 font-lexend !font-normal uppercase">{t(`myMembership.${item.translate}`)}</label>}
        <div className="input-form  flex flex-col gap-y-[11px]">
            {scheduleData.map((q, iq) => {                
                return (<CheckSchedule item={q} handleCheckChange={handleCheckChange} />)
            })}
        </div>
    </>
}

export default Schedule