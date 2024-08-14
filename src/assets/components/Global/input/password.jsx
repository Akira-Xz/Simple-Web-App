import { useState } from 'react';
import { getMaskByType, url } from '../../../config';
import { t } from 'i18next';

const Password = (props) => {
    const { item, field } = props
    const mask = getMaskByType(item.type);
    const [showPassword, setShowPassword] = useState(false)
    return <>
        {item.placeholder && <label for={item.name} className="body-small-1 font-lexend !font-normal uppercase">{t(`myMembership.${item.translate}`)}</label>}
        <div className="relative">
            <input
                {...field}
                className="input-form body-2 !pr-[42px]"
                // placeholder={item.placeholder}
                type={showPassword ? 'text' : item.type} id={item.name} name={item.name} />
            <div onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[30%] right-[22px] w-[20px] h-[20px] cursor-pointer "><img className="w-full h-full object-contain" src={`${url}/wp-content/uploads/2024/07/8666618_eye_icon_1.webp`} alt="" /></div>
        </div>
    </>
}

export default Password