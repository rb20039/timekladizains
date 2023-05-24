import React, { useContext } from 'react'
import { science } from '../assets'
import { Context } from '../App';
const Science = () => {
  const [languageEN, setLanguageEN] = useContext(Context)
  return (
    <section id="science" className='min-h-screen flex flex-col lg:flex-row py-6'>
      <div className='flex lg:w-[35%] sm:pl-8 pl-4 pr-4 pt-4   font-quicksand text-justify'>
    <p className='text-white'>{languageEN ? "As you study longer and reach the end of elementary school, you have to make the first big choice for your future, because a large part of secondary schools have to choose a direction, which is then studied in more depth. Until then, I had not decided which direction to take, because everyone gave up, but I received a lot of support from my family and friends to continue studying in the exact direction, since my strongest subjects so far have been physics, chemistry, biology and mathematics. After listening to the others, I studied in the exact class in high school, where I studied chemistry in more depth and learned programming in the selected part. During this time, several teachers sent me to olympiads in exact subjects and advised me to get involved in all kinds of knowledge deepening activities. Although all the subjects I studied seemed interesting, none of them intrigued me enough that I would choose to do it for the rest of my life. When creating the image, I wanted to show a choice between the three natural sciences that I studied more deeply during school, which are physics, biology and chemistry. Since I originally thought to work in each of these directions, I made a comparison between all directions and added a filter to them, reducing the color brightness of the images." : "Ilgāk mācoties un nonākot līdz pamatskolas beigām, jau jāveic pirmā lielā izvēlē savai nākotnei, jo lielai daļai vidusskolu ir jāizvēlās virziens, kuru tad padziļinātak apgūst. Līdz tam nebiju izlēmis, kuru virzienu ņemt, jo padevās visi, taču saņēmu lielu atbalstu no savas ģimenes un draugiem, lai turpinu mācīties eksaktajā virzienā, jo mani stiprākie priekšmeti līdz šim ir bijis fizika, ķīmija, bioloģija un matemātika. Uzklausot pārējos, vidusskolā mācījos eksaktajā klasē, kur padzilinātāk mācījos ķīmiju un izvēlēs daļā apguvu programmēšanu. Šajā laikā vairāki skolotāji sūtīja mani uz olimpiadēm eksakstajos priekšmetos un ieteica iesaistīties visādos zināšanu padziļīnāšanas pasākumos. Lai gan visi apgūtie priekšmeti šķita interesanti, neviens no tiem mani neintriģēja tik ļoti, ka es izvēlētos ar to nodarboties visu savu atlikušo mūžu. Veidojot attēlu, vēlējos pārādīt izvēli starp trim dabaszinātņu virzieniem, kurus skolas laikā apguvu padziļinātāk, kas ir fizika, bioloģija un ķīmija. Tā kā sākotneji biju domājis katrā no šiem virzieniem darboties, tad saliku salīdzinājumu starp visiem virzieniem un pievienojot tiem filtru, mazinot krāsu spilgtumu attēliem."
    }</p>
    </div>
    <div className='flex lg:w-[100%] h-[30%]'>
      <img src={science}></img>
    </div>
</section>
  )
}

export default Science