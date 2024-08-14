import { t } from 'i18next';
import { getMaskByType, url } from '../../../config';

const TextArea = (props) => {
    const { item, field } = props
    return <>
        {item.placeholder && <label for={item.name} className="body-small-1 font-lexend !font-normal uppercase">{t(`myMembership.${item.translate}`)}</label>}
        <textarea
            {...field}
            className="input-form body-2"
            id={item.name} name={item.name}
        >
            {/* {item.value && item.value}
            asda */}
        </textarea>
    </>
}

export default TextArea