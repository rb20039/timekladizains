import React, { useContext } from 'react'
import { kids } from '../assets';
import { Context } from '../App';
const Childhood = () => {
  const [languageEN, setLanguageEN] = useContext(Context)
  return (
    <section id="childhood" className='min-h-screen flex lg:flex-row flex-col py-6'>
        <div className='flex lg:w-[100%] h-[30%]'>
        <img src={kids} className='rounded-l-xl object-scale-down'></img>
        </div>
        <div className='flex lg:w-[35%] sm:pl-8 pl-4 pr-4 pt-4   font-quicksand text-justify'>
        <p className='text-white'>{languageEN ? "The beginnings of life's goals can be traced back to early childhood, when a lot of things about the world are still unknown, and you have to create ambitious goals about what you want to do in the course of your life." : "Dzīves mērķu sākumi meklējami jau agrā bernībā, kad vēl daudz kas par pasauli nav vēl zināms, un jau jāveido ambiciozi mērķi par to, ko vēlies darīt savā dzīves gaitā."}
<br></br><br></br>{languageEN ? "Before going to school and being a very young child, of course the professions that interested me the most were those that only important people could become, for example, president, astronaut, famous actor and many others. When I was younger, one of the professions I really wanted to become was an astronaut." : "Vēl neejot skolā un būdams ļoti mazs bērns, protams, tās profesijas, kas interesēja visvairāk, bija tās, par kurām varēja kļūt tikai nozīmīgi cilvēki, piemēram, prezidents, astronauts, slavens aktieris un daudzi citi. Kad biju jaunāks tad man arī vieno no profesijām, par kuru ļoti gribēju kļūt bija astronauts."}
<br></br><br></br>{languageEN ? "In this image I show it by adding a black and white filter to everything else except the guy highlighting him. Several white semi-transparent circles are added to create clouds, similar to what is done in cartoons or other visual media, to visualize what the person is thinking at the time. An image of a spaceship taking off is added to the end of the mace, which directly symbolizes the profession of an astronaut, as one of their main tasks is to go on expeditions around the Earth." : "Šajā attēlā to parādu pievienojot melnbalto filtru visam pārējām, izņemot puisim izceļot viņu. Tiek pievienoti vairāki balti puscaurspīdīgi apļi, lai izveidotu mākoņus, līdzīgi kā tas tiek darīts multenēs vai citā vizuālos medijos, lai vizualizētu, ko konkrētā persona domā tajā laikā. Makonīša galā tiek pievienots attēls ar kosmosa kuģa izlidošanu, kas tiešā veidā simbolizē astronauta profesiju, tā kā viens no viņu galvenajiem uzdevumiem ir doties ekspedīcijās arpus Zemes."}
<br></br><br></br>{languageEN ? "Images are taken from Pexels.com, which I then processed in Photoshop." : "Attēli tiek ņemti no Pexels.com, kurus pēc tam apstrādāju Photoshop lietotnē."}</p>
        </div>
    </section>
  )
}

export default Childhood