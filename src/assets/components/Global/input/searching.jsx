import InputMask from 'react-input-mask';
import { getMaskByType } from '../../../config';

const Searching = (props) => {
    const { item, field } = props
    const mask = getMaskByType(item.type);

    return <>
        {/* {item.placeholder && <label for={item.name} className="body-small-1 font-lexend !font-normal uppercase">{item.placeholder}</label>} */}
        <div className="relative">
            <input
                {...field}
                className="input-form body-2 !bg-white !rounded-none !border-t-0 !border-x-0"
                value={item.value}
                placeholder={item.placeholder}
                type={item.type} id={item.name} name={item.name} />
            {/* {item.icon && <div className="absolute top-[24%] right-[17px] w-[25px] h-[25px]"><img className="w-full h-full object-contain" src={`${item.icon}`} alt="" /></div>} */}
        </div>
    </>
}

export default Searching