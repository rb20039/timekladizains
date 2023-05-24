import React from 'react'
import styles from '../style';
import { kids, road } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby, faSchool, faArrowRight, faAtom, faCode, faSquareRootVariable } from '@fortawesome/free-solid-svg-icons'

const Road = () => {
    return (
        <section id="road" className='min-h-screen flex flex-col py-6'>
            <div className='flex md:flex-row justify-around items-center flex-col flex-grow relative'>

                <a href="#childhood" className={`${styles.flexCenter} md:absolute relative md:left-[5%] left-[-20%] top-[40%] w-[140px] h-[140px] rounded-full bg-black p-[5px] cursor-pointer text-right`}>
                    <div className={`${styles.flexCenter} bg-shadowstwo w-[100%] h-[100%] rounded-full hover:bg-shadows`}>
                        <FontAwesomeIcon icon={faBaby} className="text-[60px]" />
                    </div>
                </a>
                <a href="#school" className={`${styles.flexCenter} md:absolute relative md:left-[25%] left-[-10%] relative top-[65%] w-[140px] h-[140px] rounded-full bg-black p-[5px] cursor-pointer text-right`}>
                    <div className={`${styles.flexCenter} bg-shadowstwo w-[100%] h-[100%] rounded-full hover:bg-shadows`}>
                        <FontAwesomeIcon icon={faSchool} className="text-[60px]" />
                    </div>
                </a>
                <a href="#science" className={`${styles.flexCenter}  md:absolute relative top-[20%] md:left-[45%] left-[0%] w-[140px] h-[140px] rounded-full bg-black p-[5px] cursor-pointer text-right`}>
                    <div className={`${styles.flexCenter} bg-shadowstwo w-[100%] h-[100%] rounded-full hover:bg-shadows`}>
                        <FontAwesomeIcon icon={faAtom} className="text-[60px]" />
                    </div>
                </a>
                <a href="#math" className={`${styles.flexCenter}  md:absolute top-[55%] relative md:left-[65%] left-[10%] w-[140px] h-[140px] rounded-full bg-black p-[5px] cursor-pointer text-right`}>
                    <div className={`${styles.flexCenter} bg-shadowstwo w-[100%] h-[100%] rounded-full hover:bg-shadows`}>
                        <FontAwesomeIcon icon={faSquareRootVariable} className="text-[60px]" />
                    </div>
                </a>
                <a href="#LU" className={`${styles.flexCenter}  md:absolute relative top-[50%] md:left-[85%] left-[20%] w-[140px] h-[140px] rounded-full bg-black p-[5px] cursor-pointer text-right`}>
                    <div className={`${styles.flexCenter} bg-shadowstwo w-[100%] h-[100%] rounded-full hover:bg-shadows`}>
                        <FontAwesomeIcon icon={faCode} className="text-[60px]" />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Road