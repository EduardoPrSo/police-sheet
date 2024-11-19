'use client'
import { useEffect, useState } from "react";
import { useStore } from "../stores/stores";
import { MilitaryRanks } from "../utils/rankEnum";
import SheetRow from "./SheetRow";

export default function () {
    const [SSP, setSSP] = useState()
    const {users} = useStore()

    useEffect(() => {
        const SSP = users.filter((item) => item.unity === "SSP");

        setSSP(SSP.sort((a, b) => {
            if (MilitaryRanks[b.rank] !== MilitaryRanks[a.rank]) {
                return MilitaryRanks[b.rank] - MilitaryRanks[a.rank];
            }
            
            return a.badge - b.badge; 
        }));

    }, [users]);

    return (
        <div className="w-full flex flex-col">
            <div className="w-full border-2 border-black font-bold flex items-center justify-center text-black bg-gray-400">
                SSP - SECRETARIA DE SEGURANÇA PÚBLICA
            </div>
            <div className="flex flex-col">
                {SSP && SSP.map((key)=>(
                    <SheetRow key={key.id} data={key}/>
                ))}
            </div>
        </div>
    )
}