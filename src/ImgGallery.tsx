
import { motion } from "motion/react"
const ImgGallery = () => {

  const img = [
 {
     src :"https://tse1.mm.bing.net/th?id=OIP.SRk8SrNw0E1chKl3jsNpfAHaEo&pid=Api&P=0&h=180",
     caption:"Goku",
 },
 {
    src :"https://tse2.mm.bing.net/th?id=OIP.sdCapZZaaHC5GOfAsqB1AgAAAA&pid=Api&P=0&h=180",
    caption:"All",
},
{
    src :"https://tse2.mm.bing.net/th?id=OIP.vcgtp41PhOMNIhQuFhwBfwHaEK&pid=Api&P=0&h=180",
    caption:"Sayian",
},
{
    src :"https://tse2.mm.bing.net/th?id=OIP.IHfepLnnO2z_2fL7OTommQHaEo&pid=Api&P=0&h=180",
    caption:"Vegeta",
},
{
    src :"https://tse2.mm.bing.net/th?id=OIP.JOSv2kQNrR9x9VpU2ChdwwHaEK&pid=Api&P=0&h=180",
    caption:"Nim-bus",
},
  ]


  return (
    <motion.div className="w-[80%] flex">
       {
        img.map((m , index) =>(
            <motion.div
              key={index}
              className="relative  min-[1rem] overflow-hidden rounded-lg shadow-lg px-2 border-red-700"
              whileHover={{scale:1.05}}
            >
              <img src={m.src} alt={m.caption} />
              <motion.div className="absolute inset-0 flex items-center justify-center bg-black 
              bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
               whileHover={{opacity:1}}
              >
                <p>{m.caption}</p>
              </motion.div>
            </motion.div>
        ))
       }
    </motion.div>
  )
}

export default ImgGallery
