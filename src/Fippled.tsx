import { motion } from "motion/react"
import { useState } from "react"

const Fippled = () => {
    const[isfippled  , setIsfippled] = useState(false)
  return (
    <motion.div onClick={()=> setIsfippled(!isfippled)} 
    variants={{
        front : {rotateY : 0},
        back:{rotateY : 180},
    }} 
    initial='front'
    animate={isfippled ? 'back' : 'front'}
    transition={{duration:1}}
    >
        <motion.div className="w-80 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d">
            <div className="absolute inset-0 bg-white flex items-center
            justify-center text-xl font-bold">
              Front Side 
            </div> 
            <div className="absolute inset-0 bg-blue-500 flex items-center
            justify-center text-xl font-bold rotate-y-180">
              Back Side 
            </div>  
        </motion.div>
    </motion.div>
  )
}

export default Fippled
