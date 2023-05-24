import styles from './style';
import React, { useEffect, useState } from 'react';
import { Header, Road, LU, Childhood, Math, School, Science } from './components'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [buttonVisible, setButtonVisible] = useState(false);
  useEffect(() => {
    
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setButtonVisible(true)
        } else {
          setButtonVisible(false)
        }
      })

  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primarythree ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Road />
          <Childhood />
          <School />
          <Science />
          <Math />
          <LU />
        </div>
      </div>
        {buttonVisible && (
          <button onClick={scrollUp} className='animate-bounce z-[10] text-secondary text-[30px] fixed bottom-[50px] right-[50px] w-[50px] h-[50px]'><FontAwesomeIcon icon={faArrowUp} className="text-[60px]" /></button>
        )}
      </div>
  )
}

export default App