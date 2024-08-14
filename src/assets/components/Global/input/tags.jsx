import { useEffect, useState } from 'react';
import { getMaskByType, url } from '../../../config';
import { useSelector } from 'react-redux';
import { t } from 'i18next';

const Tags = (props) => {
    const { item, field, setValue } = props
    const { data } = useSelector((state) => state.user)
    const taxonomies = data?.galleryForm?.TAXONOMIES || [];
    const [band, setBand] = useState(false)
    const [menu, setMenu] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        if (!item.gallery && item.edit && field.value && !band) {
            setSelected(field.value.split(',').map(Number))
            setBand(true)
        }
    }, [field.value])
    useEffect(() => {
        setMenu(JSON.parse(item.gallery ? document.querySelector('#gall-tax-input-text').value : document.querySelector('#event-input-text').value))
        if (item.gallery) {
            setSelected(taxonomies.map(taxonomy => parseInt(taxonomy.ID)))
        }
        if (!item.gallery) {
            setSelected([])
        }
    }, [])

    const toggleElement = (element) => {
        let newSelected;
        element = parseInt(element)

        if (element === 1) newSelected = [];
        else newSelected = selected.filter(i => i !== 1);

        if (newSelected.includes(element)) newSelected = newSelected.filter(e => e !== element);
        else newSelected = [...newSelected, element];

        setSelected(newSelected);
        setValue(field.name, newSelected);
    };

    return <>
        {item.placeholder && <label for={item.name} className="body-small-1 font-lexend !font-normal uppercase">{t(`myMembership.${item.translate}`)}</label>}
        <div className="relative flex flex-wrap gap-x-[10px] gap-y-[10px] uppercase body-3 font-athiti !font-semibold">
            {selected && menu && menu.length > 0 && menu.map((q, iq) => {
                const isSelected = selected.includes(parseInt(q.ID));
                return <><div
                    onClick={() => toggleElement(q.ID)}
                    className={`bg-accent text-black px-[30px] py-[10px] hover:text-white hover:bg-black transition-all-seg rounded-xl cursor-pointer
                    ${isSelected && '!bg-backgroundBordes !text-black'}`}
                    key={iq}>{q.NAM}</div></>
            })}
        </div>
    </>
}

export default Tags