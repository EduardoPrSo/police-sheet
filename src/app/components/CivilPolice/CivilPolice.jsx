'use client';
import { useStore } from "@/app/stores/stores";
import { CivilRanks, CivilGraduations } from "@/app/utils/rankEnum";
import { useEffect, useState } from "react";
import SheetRow from "../SheetRow";

export default function MilitaryTable() {
    const {users} = useStore()
    const [members, setMembers] = useState({ delegados: [], agentes: [] });

    useEffect(() => {
        const Civil = users.filter((item) => item.unity === "Polícia Civil");

        setMembers({
            delegados: Civil
                .filter(member => CivilRanks[member.rank] >= CivilGraduations.Delegado)
                .sort((a, b) => {
                    if (CivilRanks[b.rank] !== CivilRanks[a.rank]) {
                        return CivilRanks[b.rank] - CivilRanks[a.rank];
                    } 
                }),
            
            agentes: Civil
                .filter(member => CivilRanks[member.rank] < CivilGraduations.Delegado)
                .sort((a, b) => {
                    if (CivilRanks[b.rank] !== CivilRanks[a.rank]) {
                        return CivilRanks[b.rank] - CivilRanks[a.rank];
                    }
                })
        });
    }, []);

    return (
        <div className="w-full flex flex-col border-b-2 border-black">
            <div className="w-full border-2 border-black border-b-0 font-bold flex items-center justify-center text-black bg-gray-400">
                POLICIA CIVIL
            </div>
            {members.delegados.length > 0 && (
                <>
                    <div className="w-full border-2 border-black font-bold flex items-center justify-center text-black bg-gray-400">
                        DELEGADOS
                    </div>
                    <div className="flex flex-col">
                        {members.delegados.map((key) => (
                            <SheetRow key={key.id} data={key}/>
                        ))}
                    </div>
                </>
            )}
            {members.agentes.length > 0 && (
                <>
                    <div className="w-full border-2 border-black font-bold flex items-center justify-center text-black bg-gray-400">
                        AGENTES
                    </div>
                    <div className="flex flex-col">
                        {members.agentes.map((key) => (
                            <SheetRow key={key.id} data={key}/>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
