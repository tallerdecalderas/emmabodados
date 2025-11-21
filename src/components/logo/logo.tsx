import {ImageUtils} from "@/utils/imgUtils"
import{ allImages} from "@/types/imgtype"

export const Logo = () => {
    return(
        <div>
            <ImageUtils 
            src={allImages.logo}
            alt="Emma Bodados Logo"
            className="w-32 h-auto"
            />
            
        </div>
    )
}