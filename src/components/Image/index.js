import { forwardRef , useState} from "react";
import images from '~/assets/images'
function Image({className, src, alt,  fallBack = images.noImage}, ref) {
    const [fallBackSrc, setFallback] = useState(src)
    return ( 
        <img
        ref={ref}
        className={className}
        src={ fallBackSrc}
        alt={alt}
        onError={() => {setFallback(fallBack)}}
        />
     );
}

export default forwardRef(Image);