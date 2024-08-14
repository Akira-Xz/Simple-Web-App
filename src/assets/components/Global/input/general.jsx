import InputMask from 'react-input-mask';
import { getMaskByType } from '../../../config';
import { t } from 'i18next';

const General = (props) => {
    const { item, field } = props
    const mask = getMaskByType(item.type);    
    return <>
        {item.placeholder && <label for={item.name} className="body-small-1 font-lexend !font-normal uppercase">{t(`myMembership.${item.translate}`)}</label>}
        <div className="relative">
            {mask && <InputMask
                {...field}
                mask={mask}
                className="input-form body-2 !pr-[42px]"
                id={item.name}
                name={item.name}
                value={item.value}
            >
                {(inputProps) => <input {...inputProps} />}
            </InputMask>}
            {!mask && <input
                {...field}
                className="input-form body-2"
                value={item.value}
                type={item.type}
                id={item.name}
                name={item.name}
            />}
            {item.icon && <div className="absolute top-[24%] right-[17px] w-[25px] h-[25px]"><img className="w-full h-full object-contain" src={`${item.icon}`} alt="" /></div>}
        </div>
    </>
}

export default General