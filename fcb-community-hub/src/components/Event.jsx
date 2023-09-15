import React from "react";
import FCB from "../assets/clubs/barcelona-logo.png"


const Event = (props) => {
    // Assigning a variable to track who the opponent is
    const opponent = props.awayTeam !== 'FC Barcelona' ? props.awayTeam : props.homeTeam;

     // Convert opponent's name to lowercase and replace spaces with hyphens using regex
    const opponentSlug = opponent.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="m-5 p-8 bg-red-100 w-4/5 h-auto rounded-lg shadow-white shadow-sm text-center flex flex-col justify-center items-center">
            {/* <img src={`../clubs/${opponentSlug}-logo.png`} alt={`${opponent}'s Club Logo`} className="w-32 h-32 object-cover" /> */}
            <img src={props.opponent} alt={`${opponent}'s Club Logo`} className="w-32 h-32 object-cover" />
            <div>
                <h2 className="text-blue-950 font-extrabold text-xl">
                    {props.homeTeam} vs {props.awayTeam}
                </h2>
            </div>
            <p className="italic text-black font-bold">{props.date}</p>
            <a href={props.matchInfo}>
                <button className="text-white bg-red-700 hover:bg-red-800 w-48 mt-2 p-1 rounded font-bold text-center">Match Info</button>
            </a>
        </div>
    )
}

export default Event;
