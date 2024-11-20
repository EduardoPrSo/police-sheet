'use client'
import SSP from "./SSP"
import MilitaryPolice from "./MilitaryPolice/MilitaryPolice"
import CivilPolice from "./CivilPolice/CivilPolice"
import CATIPolice from "./CATIPolice/CATIPolice"
import { useState } from "react"

const screens = [
    <MilitaryPolice />,
    <CATIPolice />,
    <CivilPolice />
]

export default function Header(){
    const [screen, setScreen] = useState(0)

    return (
        <div className="bg-white w-screen h-screen p-2 absolute">
            <div className="w-full flex justify-center items-center h-44 bg-slate-800 relative">
                <div className="absolute top-2 right-2 h-10 bg-gray-400 rounded-md flex items-center px-1 py-2 gap-1">
                    <div onClick={()=>setScreen(0)} className={`${screen === 0 && "bg-slate-800"} cursor-pointer rounded-md p-1 w-8 h-8 flex justify-center items-center`}><img className="w-6 cursor-pointer" src="https://media.discordapp.net/attachments/715602905763283074/1306334083374387373/PM-PB.png?ex=673649eb&is=6734f86b&hm=5e9b19fbb42f9d1d22efce13e2a009a1d9d8a43052d9e3ffbec4602b05326712&=&format=webp&quality=lossless&width=671&height=671" alt="" /></div>
                    <div onClick={()=>setScreen(1)} className={`${screen === 1 && "bg-slate-800"} cursor-pointer rounded-md p-1 w-8 h-8 flex justify-center items-center`}><img className="w-6 cursor-pointer" src="https://media.discordapp.net/attachments/715602905763283074/1306334180073799780/BOPE.png?ex=67364a03&is=6734f883&hm=9da66167e608aa9e4ef26dd62a0fb1addbf99480d0bfd5885218860435307875&=&format=webp&quality=lossless" alt="" /></div>
                    <div onClick={()=>setScreen(2)} className={`${screen === 2 && "bg-slate-800"} cursor-pointer rounded-md p-1 w-8 h-8 flex justify-center items-center`}><img className="w-4 cursor-pointer" src="https://media.discordapp.net/attachments/715602905763283074/1306334057130360912/PC-CPX-PB.png.png?ex=673649e5&is=6734f865&hm=f57a78e4623a98433ea2cc4af02ebdeb2d93fab6f09b677d01e1c9989462f629&=&format=webp&quality=lossless&width=511&height=671" alt="" /></div>
                </div>
                <img className="h-5/6" src="https://media.discordapp.net/attachments/1197408220277391370/1306293345898987540/SSPC.png?ex=673623fb&is=6734d27b&hm=eda2ff23fc9da642df6a3b3d198bbce245194fa95b22d1439e8a5f144dd5c53a&=&format=webp&quality=lossless" alt="" />
            </div>
            <div className="w-full bg-white flex pt-1 justify-center flex-col font-bold">
                <div className="w-full h-8 bg-slate-800 grid grid-cols-[1fr,2fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] text-[.9rem] items-center text-center gap-2 text-white">
                    <h1>ID</h1>
                    <h1>NOME</h1>
                    <h1>DISTINTIVO</h1>
                    <h1>PATENTE</h1>
                    <h1>INSIGNIA</h1>
                    <h1>SERIAL</h1>
                    <h1>ADMISSÃO</h1>
                    <h1>PROMOÇÃO</h1>
                    <h1>UNIDADES</h1>
                    <h1>CURSOS</h1>
                    <h1>A.S.</h1>
                    <h1>ADV. CURSOS</h1>
                    <h1>ADVERTÊNCIAS</h1>
                    <h1>F.O.</h1>
                </div>
                <div className="w-full h-2 bg-white" />
                <div className="h-[44rem] w-full overflow-y-scroll flex flex-col scroll-container">
                    <div className="flex w-full h-auto justify-center items-center bg-slate-800 text-white">
                        SEGURANÇA PÚBLICA CPX.XP
                    </div>
                    <div className="flex flex-col w-full h-auto justify-center items-center bg-slate-800">
                        <SSP />
                        {screens[screen]}
                    </div>
                </div>
            </div>
        </div>
    )
}