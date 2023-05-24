import React from 'react'
import { school, microphone, radio } from "../assets";

const School = () => {
  return (
    <section id="school" className='min-h-screen flex flex-col relative justify-items-center'>
        <div className="w-[50%]">
        <p>Uzsākot skolu jau sākās veidoties pirmie iespaidi par dažādām nozarēm un profesijām. Ja bērnībā izveidoti mērķi bija visticamāk neiespējami realizēt, tad kļūstot vecākam mērķi kļūst jau reālāki. Savā laikā, kad gāju skolā, atceros ka vairāki mani klases biedri gribēja kļūt par tādiem speciālistiem, ar kuriem ikdienā nākas saskarties vai arī ar kuriem nodarboja vecāki. Tajā laikā ļoti aktuāli bija kļūt par policistu, frizieri, ugunsdzēsēju, administrator vai ko citu. </p>
        </div>
        <div className="w-[50%] right-0">
<p>Es skolas laikā gribēju kļūt par radio operatoru, jo tajā laikā aktīvi sekoju līdzi cilvēkam sociālajos mēdijos, kurš ikdienā vadīja radio pārraidi un stāstija par savu ikdienu savā profesijā. Man tas likās super interesanti veikt dažādas intervijas, stāstīt jokus vai kā citādi vadīt runāt radio pārraidē, taču nepagāja tik ilgs laiks, kad sapratu, ka tā nav īstā profesija, kas piemērota man.</p>
</div>
<div className="w-[50%] justify-self-start">
<p>Attēlu kompozīcijai izmantoju vairākus objektus, kuri tika apgriezti, noņemot no tiem fonu, un pievienots dzeltens filtrs, lai pieskaņotu mājaslapas tematikai. No attēliem tika izvēlēts mikrofons, skola un radio, tā kā tie visi bija kā simboli tam laikam, kad mēģināju izvēlēties nākotnes profesiju.</p>
        <img src={school} className="absolute w-[30%] h-[100%] left-[10%]"></img>
        <img src={microphone} className="absolute w-[30%] h-[100%] right-[10%] top-[33%]"></img>
        <img src={radio} className="absolute w-[30%] h-[100%] left-[10%] top-[66%]"></img>
    </div>
    </section>
  )
}
export default School