import React from 'react'
import { kids } from '../assets';

const Childhood = () => {
  return (
    <section id="childhood" className='min-h-screen flex lg:flex-row flex-col py-6'>
        <div className='flex lg:w-[100%] h-[30%]'>
        <img src={kids} className='object-scale-down'></img>
        </div>
        <div className='flex lg:w-[35%] sm:pl-8 pl-4 pr-4 pt-4   font-quicksand text-justify'>
        <p className='text-white'>Dzīves mērķu sākumi meklējami jau agrā bernībā, kad vēl daudz kas par pasauli nav vēl zināms, un jau jāveido ambiciozi mērķi par to, ko vēlies darīt savā dzīves gaitā.
<br className='py-4'></br><br></br>Vēl neejot skolā un būdams ļoti mazs bērns, protams, tās profesijas, kas interesēja visvairāk, bija tās, par kurām varēja kļūt tikai nozīmīgi cilvēki, piemēram, prezidents, astronauts, slavens aktieris un daudzi citi. Kad biju jaunāks tad man arī vieno no profesijām, par kuru ļoti gribēju kļūt bija astronauts.
<br></br><br></br>Šajā attēlā to parādu pievienojot melnbalto filtru visam pārējām, izņemot puisim izceļot viņu. Tiek pievienoti vairāki balti puscaurspīdīgi apļi, lai izveidotu mākoņus, līdzīgi kā tas tiek darīts multenēs vai citā vizuālos medijos, lai vizualizētu, ko konkrētā persona domā tajā laikā. Makonīša galā tiek pievienots attēls ar kosmosa kuģa izlidošanu, kas tiešā veidā simbolizē astronauta profesiju, tā kā viens no viņu galvenajiem uzdevumiem ir doties ekspedīcijās arpus Zemes. 
<br></br><br></br>Attēli tiek ņemti no Pexels.com, kurus pēc tam apstrādāju Photoshop lietotnē.</p>
        </div>
    </section>
  )
}

export default Childhood