import { useEffect } from 'react'
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

const Loader = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);
    
    return (
        <div className="absolute z-[999] bg-black/60 backdrop-blur-sm h-screen left-0 right-0 flex justify-center items-center">
            <Ring
                size="54"
                stroke="6"
                bgOpacity="0"
                speed="2"
                color="#ff541f"
            />
        </div>
    )
}

export default Loader