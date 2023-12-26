import Image from 'next/image'
import styles from './page.module.css'
import { motion } from 'framer-motion';

type ChildProps = {
  pageChanger: React.Dispatch<React.SetStateAction<number>>;
};

export default function About({ pageChanger }: ChildProps) {

  return ( 
    <div className='container'>
      
      <div className='containerOfAHeader'>
        <div className='pseudo-header'>
          
          <motion.h4 className='signUp-logIn'
          initial={{y:-500}}
          animate={{y:0}}
          transition={{  type: 'spring',stiffness: 120,duration: 1, ease: 'easeInOut' }}
          whileHover={{
            scale: 1.3,
            transition: { duration: 1 },
          }} onClick={e=>pageChanger(1)}>Sign up</motion.h4>

          <motion.h4 className='signUp-logIn'
          initial={{y:-500}}
          animate={{y:0}}
          transition={{  type: 'spring',duration: 1,stiffness: 120, ease: 'easeInOut' }}
          whileHover={{
            scale: 1.3,
            transition: { duration: 1 },
          }} onClick={e=>pageChanger(2)}>log in</motion.h4>

        </div>
      </div>
        
      <div className='middleRow'>
        
        <div className='left'>
          <motion.h1 className='aboutText' 
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}> About us</motion.h1>
          <motion.h1 className='oqigaText'
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}> Oqiga</motion.h1>
        </div>
        
        <div className='right'>
          <motion.img 
          whileHover={{
            scale: 1.3,
            transition: { duration: 1 },
          }}
          src='/logoOqiga1.png'
          width={380}
          height={380}
          alt="Picture of the author"
          className='logoImage'
          />
        </div>

      </div>

      <div>
         <motion.p className="paragraph"
         whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
         }}>
        is a platform for helping people attend and organize parties.
        <br/>
        <br />
        It might sound silly but we really wanted to party around and being <br /> the shut-ins that we are, there were no options available. We did not know <br />where or even who organized such events, and we came up with this idea,<br /> so please enjoy :)
        </motion.p>
      </div>

    </div>
  )
}
