import { t } from 'i18next';
import { getMaskByType, url } from '../../../config';

const CheckBox = (props) => {
    const { item, field } = props
    const mask = getMaskByType(item.type);
    return <>
        <div className="flex items-start gap-x-[10px]">
            <input
                {...field}
                className="input-form body-2 !w-fit !mt-[5px]"
                type="checkbox"
                id={item.name}
                name={item.name}
                checked={field.value} // Utilizar `checked` en lugar de `value`
                onChange={(e) => field.onChange(e.target.checked)} // Actualizar el valor del checkbox
            />
            {item.placeholder && <label for={item.name} className="body-small-1 font-lexend !font-normal uppercase">{t(`myMembership.${item.translate}`)}</label>}
        </div>
    </>
}

export default CheckBox