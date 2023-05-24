import React, { useContext } from 'react'
import { chalkboard } from "../assets";
import { Context } from '../App';
const Math = () => {
  const [languageEN, setLanguageEN] = useContext(Context)
  return (
    <section id="math" className='min-h-screen flex flex-col'>
        <img src={chalkboard} className='bg-secondarytwo rounded-t-3xl'></img>
        <p className='bg-secondarytwo rounded-b-3xl p-6'>{languageEN ? "When I got to high school, I had the opportunity to study with excellent teachers who both taught to explain the subject in a very interesting way, and who also motivated and inspired me to get involved in various activities and learn the subject in more depth. During this time, my life path was greatly influenced by my mathematics teacher Elīna Buliņa, who is also currently studying for a PhD at the Faculty of Physics, Mathematics and Optometry at the LU. At that time, she suggested visiting the Small University of Mathematics, which was organized for the students of the University of Warsaw, in order to learn new topics in mathematics, to get acquainted with potential Olympiad tasks, as well as to obtain a certificate, which then gives additional points for entering the university. During this time, I had the opportunity to visit the Science House of the Academic Center for the first time, which had just been put into operation. That was the moment when I realized that I wanted to study at the University of Latvia, but I hadn't fully decided on the program. When creating the image, I tried to visualize mathematical notation, where I used a blackboard image, to which I added text, formatting it, manipulating its position and tilt, as well as cropping the edges to try a different position on the homepage." : "Nonākot vidusskolā, man bija iespēja mācīties pie superīgiem skolotājiem, kuri gan mācēja ļoti interesanti izskaidrot vielu, gan arī kuri motivēja un iedvesmoja iesaistīties dažādos pasākumos un padziļinātāk apgūt mācību vielu. Šajā laikā manu dzīves ceļu ļoti ietekmēja mana matemātikas skolotāja Elīna Buliņa, kura arī šobrīd studē LU doktoranturā Fizikas, matemātikas un optometrijas fakultātē. Tajā laikā viņa ieteica apmeklēt Mazo matemātikas universitāti, ko rīkoja LU skolēniem, lai apgūtu jaunas tēmas matemātikās, iepazītos ar potenciāliem olimpiāžu uzdevumiem, kā arī iegūt sertifikātu, kas pēc tam dod papildus punktus pie iestāšanās universitātē. Šajā laikā man bija iespēja pirmo reizi apmeklēt Akadēmiskā centra Zinātņu māju, kura tikko bija tikko bija dota ekspluatācijai. Tas bija tas brīdis, kad es sapratu, ka es vēlos stude Latvijas Universitātē, taču nebiju līdz galam izlēmis par programmu. Veidojot attēlu mēģināju vizualizēt matemātiskos pierakstus, kur izmantoju tāfeles attēlu, kuram pievienoju tekstu, noformatējot to, manipulējot ar tā novietojumu un slīpumu, kā arī apgriežot malas, lai izmēģinātu citu novietojumu mājaslapā."}
</p>
    </section>
  )
}

export default Math