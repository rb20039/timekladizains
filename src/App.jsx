import styles from './style';
import React, { useEffect, useState } from 'react';
import { Header, Road, LU, Childhood, Math, School, Science } from './components'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
export const Context = React.createContext()


const App = () => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const [languageEN, setLanguageEN] = useState(false)
  
  function toggleLanguage() {
    setLanguageEN(!languageEN);
  }

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
    <Context.Provider value={[languageEN, setLanguageEN]}>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primarythree ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='p-6'>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => setLanguageEN(!languageEN)}>{languageEN ? "EN" : "LV"}</button>
          </div>
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
      </Context.Provider>
  )
}

export default App