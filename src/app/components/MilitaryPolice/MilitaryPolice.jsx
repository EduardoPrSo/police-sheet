'use client';
import { useStore } from "@/app/stores/stores";
import { MilitaryRanks, MilitaryGraduations } from "@/app/utils/rankEnum";
import { useEffect, useState } from "react";
import SheetRow from "../SheetRow";

export default function MilitaryTable() {
    const {users} = useStore()
    const [members, setMembers] = useState({ oficiais: [], pracasGraduados: [], pracas: [] });

    useEffect(() => {
        const Military = users.filter(
            (item) => item.unity === "DPJM" || item.unity === "RP" || item.unity === "GTM" || item.unity === "GAR"
        );

        setMembers({
            oficiais: Military
                .filter(member => MilitaryRanks[member.rank] >= MilitaryGraduations.Oficiais)
                .sort((a, b) => {
                    if (MilitaryRanks[b.rank] !== MilitaryRanks[a.rank]) {
                        return MilitaryRanks[b.rank] - MilitaryRanks[a.rank];
                    }
                }),

            pracasGraduados: Military
                .filter(member => 
                    MilitaryRanks[member.rank] >= MilitaryGraduations["Praças Graduados"] &&
                    MilitaryRanks[member.rank] < MilitaryGraduations.Oficiais
                )
                .sort((a, b) => {
                    if (MilitaryRanks[b.rank] !== MilitaryRanks[a.rank]) {
                        return MilitaryRanks[b.rank] - MilitaryRanks[a.rank];
                    }
                }),

            pracas: Military
                .filter(member => MilitaryRanks[member.rank] < MilitaryGraduations["Praças Graduados"])
                .sort((a, b) => {
                    
                    if (MilitaryRanks[b.rank] !== MilitaryRanks[a.rank]) {
                        return MilitaryRanks[b.rank] - MilitaryRanks[a.rank];
                    }
                })
        });
    }, [users]);

    return (
        <div className="w-full flex flex-col border-b-2 border-black">
            <div className="w-full border-2 border-black border-b-0 font-bold flex items-center justify-center text-black bg-gray-400">
                POLICIA MILITAR
            </div>
            {members && members.oficiais.length > 0 && (
                <>
                    <div className="w-full border-2 border-black font-bold flex items-center justify-center text-black bg-gray-400">
                        OFICIAIS
                    </div>
                    <div className="flex flex-col">
                        {members.oficiais.map((key) => (
                            <SheetRow key={key.id} data={key}/>
                        ))}
                    </div>
                </>
            )}
            {members && members.pracasGraduados.length > 0 && (
                <>
                    <div className="w-full border-2 border-black font-bold flex items-center justify-center text-black bg-gray-400">
                        PRAÇAS GRADUADOS
                    </div>
                    <div className="flex flex-col">
                        {members.pracasGraduados.map((key) => (
                            <SheetRow key={key.id} data={key}/>
                        ))}
                    </div>
                </>
            )}
            {members && members.pracas.length > 0 && (
                <>
                    <div className="w-full border-2 border-black font-bold flex items-center justify-center text-black bg-gray-400">
                        PRAÇAS
                    </div>
                    <div className="flex flex-col">
                        {members.pracas.map((key) => (
                            <SheetRow key={key.id} data={key}/>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
