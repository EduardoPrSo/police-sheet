export default function (props){
    return (
        <div className="w-full h-8 bg-white grid grid-cols-[1fr,2fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] text-[.9rem] items-center text-center gap-2 font-normal text-black border border-black border-dashed border-t-0 last:border-b-0">
            <div>{props.data.id}</div>
            <div>{props.data.name}</div>
            <div>{props.data.rank}</div>
            <div className="flex items-center justify-center">
                {props.data.insignia === "-x-" || props.data.unity === "Polícia Civil" ? "-x-" : (
                    <img className="w-8" src={props.data.insignia} alt="-x-" />
                )}
            </div>
            <div>{props.data.serial}</div>
            <div>{props.data.admission}</div>
            <div>{props.data.promotion}</div>
            <div className="flex gap-2 justify-center">
            <div>{props.data.unity}</div>
                {props.data.dit && (
                    <div>DIT</div>
                )}
            </div>
            <div className="flex gap-2 justify-center">
                <input type="checkbox" readOnly checked={props.data.courses.approach} title="Abordagem" />
                <input type="checkbox" readOnly checked={props.data.courses.followUp} title="Acompanhamento" />
                <input type="checkbox" readOnly checked={props.data.courses.modulation} title="Modulação" />
                <input type="checkbox" readOnly checked={props.data.courses.disturbanceControl} title="Controle de Distúrbios" />
                <input type="checkbox" readOnly checked={props.data.courses.aph} title="APH" />
            </div>
            <div className="flex justify-center">
                <input type="checkbox" readOnly checked={props.data.as} />
            </div>
            <div className="flex gap-2 justify-center">
                <input type="checkbox" readOnly checked={props.data.advCourses.ab} title="Ab" />
                <input type="checkbox" readOnly checked={props.data.advCourses.co} title="Co" />
                <input type="checkbox" readOnly checked={props.data.advCourses.ac} title="Ac" />
            </div>
            <div className="flex gap-2 justify-center items-center">
                {Array.from({ length: 3 }, (_, i) => (
                    <input
                        key={i}
                        type="checkbox" 
                        readOnly
                        checked={i < props.data.adv}
                    />
                ))}
            </div>
            <div className="flex gap-2 justify-center items-center">
                {Array.from({ length: 2 }, (_, i) => (
                    <input
                        key={i}
                        type="checkbox" 
                        readOnly
                        checked={i < props.data.fo}
                    />
                ))}
            </div>
        </div>
    )
}