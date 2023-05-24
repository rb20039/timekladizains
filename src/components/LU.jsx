import React, { useContext } from 'react'
import { Context } from '../App';
import { df } from "../assets"

const LU = () => {
  const [languageEN, setLanguageEN] = useContext(Context)
  return (
    <section id='LU' className='min-h-screen flex lg:flex-row flex-col p-6 relative'>
    <div className='bg-black absolute w-[100%] right- 0 left-0 h-[100%] z-[0] blur-xl'></div>
    <div className='flex lg:w-[100%] h-[30%] z-[1]'>
    <img src={df} className='rounded-l-xl object-scale-down pl-6 pt-8'></img>
    </div>
    <p className='z-[1] text-secondarytwo flex lg:w-[35%] lg:pr-10 sm:pl-8 pl-4 pr-6 pt-8 font-quicksand font-extrabold text-justify'>{languageEN? "After participating in the Small Mathematics University and receiving support from the teachers, it was clear in which direction I wanted to work in the future. Mathematics was a subject that I was both interested in and good at, so there were no two thoughts about what to study further, but I had to figure out how to specialize in it. There were several programs at LU that require mathematics, but the two that intrigued me the most were the programs from DF and FMOF. When choosing the program, I tried to understand what are the specific things that I want to do on a daily basis and what are my goals in life, what I want to do in my life. That was the moment I realized that I wanted to create something that could be used by several people to help with daily tasks or make life easier. By programming, you can use logical thinking to create new systems, programs, apps that others can use on a daily basis. In choosing the image, I used a moment from the DF advertisement, in which I got involved with my fellow students, adding lines of binary code in the background to emphasize the people in the picture and to add an association to programming and the Faculty of Computer Science." : "Piedaloties Mazajā matemātikas universitātē un saņemot atbalstu no skolotājiem, bija skaidrs, kādā virzienā es vēlējos turpmāk darboties. Matemātika bija priekšmets, kurš man gan interesēja, gan padevās, līdz ar to nebija divu domu, par ko iet tālāk macīties, taču bija jāizdomā, kādā veidā specializēties tajā. LU bija vairākas programmas, kurā ir nepieciešama matemātikas, taču tās divas kas mani ieintriģēja visvairāk, bija programmas no DF un FMOF. Izvēloties programmu, es mēģināju saprast, kas ir konkrēti tās lietas, ko vēlos darīt ikdienā un kādi ir mani dzīves mērķi, ko velos izdarīt savā dzīvē. Tas bija tas brīdis, kad es sapratu, ka es vēlos kaut ko izveidot, ko varētu izmantot vairāki cilvēki, kas palīdzētu ikdienas darbos vai atvieglotu dzīvi. Programmējot tu vari ar loģisko domāšanu izveidot jaunas sistēmas, programmas, lietotnes, ko citi var ikdienā lietot. Attēla izvēlē izmantoju momentu no DF reklāmas, kurā es ar savām kursa biedriem iesaistījos, pievienojot fonā binārā koda rindas, lai akcentētu bildē redzamos cilvēkus un lai pievienotu asociāciju programmēšanai un Datorikas fakultātei."}
</p>
    </section>
  )
}

export default LU