import { t } from 'i18next';
import { getMaskByType, url } from '../../../config';

const Select = (props) => {
    const { item, field } = props
    const mask = getMaskByType(item.type);
    return <>
        {item.placeholder && <label for={item.name} className="body-small-1 font-lexend !font-normal uppercase">{t(`myMembership.${item.translate}`)}</label>}
        <div className="relative">
            <select
                {...field}
                id={item.name}
                name={item.name}
                // value={item.value || ''}
                className="input-form body-2 select-form !pr-[42px]">
                <option value="" >Elige uno:</option>
                {item.data.map((q, iq) => {
                    return (<option key={iq} value={q.value}>{q.text}</option>)
                })}
            </select>
            <div className="absolute top-[35%] right-[22px] w-[17px] h-[12px] cursor-pointer "><img className="w-full h-full object-contain" src={`${url}/wp-content/uploads/2024/07/group_7396.webp`} alt="" /></div>
        </div>
    </>
}

export default Select