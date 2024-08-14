import { useState } from "react";
import { uploadImage } from "../../../api/global";
import { t } from "i18next";

const File = (props) => {
    const { item, field, setValue } = props
    const [previews, setPreviews] = useState([]);
    // const [preview, setPreview] = useState(null);

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files).slice(0, item.limit);
        const newPreviews = [];

        for (let file of files) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newPreviews.push(reader.result);
                if (newPreviews.length === files.length) {
                    setPreviews(newPreviews);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return <>
        {item.placeholder && <label for={item.name} className="body-small-1 font-lexend !font-normal uppercase">{t(`myMembership.${item.translate}`)}</label>}
        <div>
            <input
                {...field}
                accept="image/png, image/jpeg, image/webp"
                className="input-form body-2"
                onChange={handleFileChange}
                multiple={item.limit > 1}
                type={item.type} id={item.name} name={item.name} />
            {previews && previews.length > 0 && (
                <>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-[10px] mt-[10px]">
                        {previews.map((preview, index) => (
                            <div key={index} className="w-fit h-[150px] lg:h-[250px]">
                                <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>                    
                </>
            )}
        </div>
    </>
}

export default File