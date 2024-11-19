'use client'
import Header from "./components/Header";
import { useEffect } from "react";
import { useStore } from "./stores/stores";
import { MilitaryRanks, CivilRanks, MilitaryInsignia } from "./utils/rankEnum";

export default function Home() {
    const { setUsers } = useStore();

    const getRankByIndex = (index, cat) => {
        const entry = Object.entries(cat).find(([key, value]) => value === index);
        return entry ? entry[0] : null;
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api');
            const data = await response.json();

            const newPoliceUsers = data.map((key) => ({
                id: key.user_id,
                name: `${key.name} ${key.name2}`,
                badge: key.user_id,
                rank: getRankByIndex(key.rank, key.division === "Polícia Civil" ? CivilRanks : MilitaryRanks),
                insignia: MilitaryInsignia[key.rank],
                serial: key.serial,
                admission: "-",
                promotion: "-",
                unity: key.division,
                dit: false,
                courses: {
                    approach: false,
                    followUp: false,
                    modulation: false,
                    disturbanceControl: false,
                    aph: false
                },
                as: false,
                advCourses: {
                    ab: false,
                    co: false,
                    ac: false
                },
                adv: 0,
                fo: 0
            }));

            setUsers(newPoliceUsers);
        }

        fetchData();
    }, []);

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-slate-800">
            <div className="w-screen h-screen flex justify-center items-center">
                <Header />
            </div>
        </div>
    );
}
