import React, { useContext } from 'react'
import { Context } from '../App';
import { school, microphone, radio } from "../assets";

const School = () => {
  const [languageEN, setLanguageEN] = useContext(Context)
  return (
    <section id="school" className='relative'>
        <div className="flex flex-col content-around">
        <div className='relative py-6 my-6'>
        <img src={school} className='absolute lg:h-[100%] lg:w-[10%] h-[55%] w-[33%] lg:top-0 top-[20%] md:right-[70%] right-[60%] z-[0] bg-secondary rounded-3xl' ></img>
        <p className="pl-[50%] p-6 z-[1] text-justify text-secondarytwo">{languageEN ? "When starting school, the first impressions of various industries and professions began to form. If the goals created in childhood were most likely impossible to realize, then as you get older, the goals become more realistic. When I was at school, I remember that several of my classmates wanted to become the kind of specialists that they had to deal with on a daily basis or that their parents did. At that time, it was very important to become a policeman, hairdresser, firefighter, administrator or something else." : "Uzsākot skolu jau sākās veidoties pirmie iespaidi par dažādām nozarēm un profesijām. Ja bērnībā izveidoti mērķi bija visticamāk neiespējami realizēt, tad kļūstot vecākam mērķi kļūst jau reālāki. Savā laikā, kad gāju skolā, atceros ka vairāki mani klases biedri gribēja kļūt par tādiem speciālistiem, ar kuriem ikdienā nākas saskarties vai arī ar kuriem nodarboja vecāki. Tajā laikā ļoti aktuāli bija kļūt par policistu, frizieri, ugunsdzēsēju, administrator vai ko citu."}</p>
        </div>
        <div className='relative'>

          <div className='z-[1]'>
<p className="pr-[50%] p-6 z-[1] text-justify bg-secondary">{languageEN ? "I wanted to become a radio operator when I was in school, because at that time I was actively following a person on social media who hosted a radio show on a daily basis and talked about his daily life in his profession. I thought it was super interesting to do various interviews, tell jokes or otherwise host a talk radio show, but it didn't take long before I realized that it wasn't the right profession for me." : "Es skolas laikā gribēju kļūt par radio operatoru, jo tajā laikā aktīvi sekoju līdzi cilvēkam sociālajos mēdijos, kurš ikdienā vadīja radio pārraidi un stāstija par savu ikdienu savā profesijā. Man tas likās super interesanti veikt dažādas intervijas, stāstīt jokus vai kā citādi vadīt runāt radio pārraidē, taču nepagāja tik ilgs laiks, kad sapratu, ka tā nav īstā profesija, kas piemērota man."}</p>
</div>
<img src={microphone} className="absolute lg:h-[100%] lg:w-[10%] h-[50%] w-[30%] lg:top-0 top-[20%] ,md:left-[70%] left-[60%] z-[0]"></img>
</div>
<div className='relative py-6 my-6'>
<p className="pl-[50%] p-6 z-[1] text-justify text-secondarytwo">{languageEN ? "For the image composition, I used several objects that were cropped by removing the background from them, and a yellow filter was added to match the theme of the homepage. The microphone, school and radio were chosen from the images, as they were all symbols of the time when I was trying to choose a future profession." : "Attēlu kompozīcijai izmantoju vairākus objektus, kuri tika apgriezti, noņemot no tiem fonu, un pievienots dzeltens filtrs, lai pieskaņotu mājaslapas tematikai. No attēliem tika izvēlēts mikrofons, skola un radio, tā kā tie visi bija kā simboli tam laikam, kad mēģināju izvēlēties nākotnes profesiju."}</p>
<img src={radio} className="absolute lg:h-[100%] lg:w-[10%] h-[55%] w-[33%] lg:top-0 top-[20%] md:right-[70%] right-[60%] z-[0] bg-secondary rounded-3xl "></img>
</div>
</div>
    </section>
  )
}
export default School