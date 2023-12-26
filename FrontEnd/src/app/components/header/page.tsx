import Image from 'next/image'
import styles from './page.module.css'
import {motion} from 'framer-motion'

type ChildProps = {
  nick:string,
  changer:React.Dispatch<React.SetStateAction<number>>
};

export default function Header({nick,changer}:ChildProps) {

  return (
    <div className='headerWrapper'>
      <div className='header'>
        
        <motion.img 
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          className='dzindzin'
          src="/dzindzin.png" 
          alt="No PictureFound" 
          width={39}
          height={35}/>

        <motion.h3
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
         className='headerText'
         onClick={e=>changer(3)}
         >Events</motion.h3>

        <motion.h3
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
        className='headerText'
        onClick={e=>changer(5)}
        >Create your event</motion.h3>  

        <div className='namePhotoContainer'>
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }} 
            src="/logoOqiga1.png" 
            alt="No PictureFound" 
            width={30}
            height={30}/>

          <motion.h2
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          style={{"margin":"3%","color":"#FA5A50","cursor": "default"}}>
            {nick}</motion.h2>
                
        </div>
      </div>
    </div> 
  )
}
