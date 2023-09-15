import React from "react";

const Event = (props) => {
    // Assigning a variable to track who the opponent is
    const opponent = props.awayTeam !== 'FC Barcelona' ? props.awayTeam : props.homeTeam;

    return (
        <div className="m-5 p-8 bg-red-100 w-4/5 h-auto rounded-lg shadow-white shadow-sm text-center flex flex-col justify-center items-center">
            <img src={`../assets/clubs/${opponent}-logo.png`} alt={`${opponent}'s Club Logo`} className="w-32 h-32 object-cover rounded-full" />
            <div>
                <h2 className="text-blue-950 font-extrabold text-xl">
                    {props.homeTeam} vs {props.awayTeam}
                </h2>
            </div>
            <p className="italic text-black font-bold">{props.date}</p>
            <a href={props.matchInfo}>
                <button className="bg-red-700 hover:bg-red-800 w-48 mt-2 p-1 rounded font-bold text-center">Match Info</button>
            </a>
        </div>
    )
}

export default Event;
