import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'


const Loader = () => {
    return (
        <div className="absolute z-20 bg-black/20 top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <Ring
                size="40"
                stroke="5"
                bgOpacity="0"
                speed="2"
                color="#ff541f"
            />
        </div>
    )
}

export default Loader