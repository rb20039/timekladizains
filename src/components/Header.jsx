import React from 'react'
import styles from '../style';
import { myface } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <section id="home" className='relative'>
        <div className={`sm:pt-16 py-6`}>
            <h1 className="sm:pl-8 pl-4 font-shrikhand lg:text-[72px] ss:text-[52px] text-[32px] text-primary">Mans ceļš līdz Latvijas Universitātei</h1>
            <div className='bg-repeat-x bg-center h-[100px] w-[100%] bg-[url("./assets/road.svg")]'>
            </div>
        </div>
        <div className={`flex md:flex-row flex-col ${styles.paddingTop} flex-grow`}>
            <div className="sm:pl-8 pl-4 z-[1] flex flex-col justify-around items-left w-full pb-4">
                <h2 className="sm:pt-16 pt-6 flex-1 font-shrikhand ss:text-[52px] text-[32px] text-primary underline">Rolands Baumanis, rb20039</h2>
                <p className="flex sm:pb-16 pb-6 font-semibold pr-4 text-justify font-quicksand text-[20px]">This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. This is something long. </p>
                <a href="#road">
                <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-black p-[5px] cursor-pointer text-right`}>
                 <div className={`${styles.flexCenter} bg-shadowstwo w-[100%] h-[100%] rounded-full hover:bg-shadows`}>
                 <FontAwesomeIcon icon={faArrowRight} className="text-[60px]" />
                 </div>
                </div>
                </a>
            </div>
            <div className="flex lg:w-[500px]">
                <img src={myface} alt="face" className="z-[1] w-[100%] h-[100%] relative"></img>
            </div>
            <div className='absolute z-[0] w-[100%] h-[200px] bottom-0 pink__gradient'></div>
        </div>
        
    </section>
  )
}

export default Header