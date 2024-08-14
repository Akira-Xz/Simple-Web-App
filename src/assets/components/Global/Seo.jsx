import { Helmet } from "react-helmet"
import { url } from "../../config";

const Seo = (props) => {
    const { attributes } = props
    return <>
        <Helmet>
            <title>SALRAM® | {attributes.metaTitle.toUpperCase()}</title>
            <meta name="description" content={attributes.metaDescription} />
            <meta name="keywords" content={attributes.keywords} />
            <meta property="og:image" content={attributes?.metaImage?.data?.attributes?.url ? `${url}${attributes?.metaImage?.data?.attributes?.url}` : `${url}/uploads/mask_group3_d42d3eeef3.webp`} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </Helmet>
    </>
}

export default Seo