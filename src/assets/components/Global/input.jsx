import { url } from "../../config"
import CheckBox from "./input/checkbox"
import File from "./input/file"
import General from "./input/general"
import Password from "./input/password"
import Schedule from "./input/schedule"
import Searching from "./input/searching"
import Select from "./input/select"
import SelectDinamic from "./input/selectDinamic"
import Toggle from "./input/swtich"
import Tags from "./input/tags"
import TextArea from "./input/textarea"

const Input = (props) => {
    const { field, item, setValue } = props
    return <>
        {item.component === 'input' && <>
            <General item={item} field={field} />
        </>}
        {item.component === 'searching' && <>
            <Searching item={item} field={field} />
        </>}
        {item.component === 'password' && <>
            <Password item={item} field={field} />
        </>}
        {item.component === 'textarea' && <>
            <TextArea item={item} field={field} />
        </>}
        {item.component === 'checkbox' && <>
            <CheckBox item={item} field={field} />
        </>}
        {item.component === 'select' && <>
            <Select item={item} field={field} />
        </>}
        {item.component === 'selectDinamic' && <>
            <SelectDinamic item={item} field={field} />
        </>}
        {item.component === 'tags' && <>
            <Tags item={item} field={field} setValue={setValue} />
        </>}
        {item.component === 'toggle' && <>
            <Toggle item={item} field={field} />
        </>}
        {item.component === 'file' && <>
            <File item={item} field={field} setValue={setValue} />
        </>}
        {item.component === 'schedule' && <>
            <Schedule item={item} field={field} setValue={setValue} />
        </>}
        
    </>
}

export default Input