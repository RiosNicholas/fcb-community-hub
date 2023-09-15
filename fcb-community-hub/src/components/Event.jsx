// import React from "react";
// import Alavez from '../assets/clubs/alavéz-logo.png';
// import AthleticClub from '../assets/clubs/athletic-club-logo.png';
// import CeltaVigo from '../assets/clubs/celta-vigo-logo.png';
// import Granada from '../assets/clubs/granada-logo.png';
// import Mallorca from '../assets/clubs/mallorca-logo.png';
// import RayoVallecano from '../assets/clubs/rayo-vallecano-logo.png';
// import RealBetis from '../assets/clubs/real-betis-logo.png';
// import RealMadrid from '../assets/clubs/real-madrid-logo.png';
// import RealSociedad from '../assets/clubs/real-sociedad-logo.png';
// import Sevilla from '../assets/clubs/sevilla-logo.png';

// const Event = (props) => {
//     // Assigning a variable to track who the opponent is
//     const opponent = props.awayTeam !== 'FC Barcelona' ? props.awayTeam : props.homeTeam;

//      // Convert opponent's name to lowercase and replace spaces with hyphens using regex
//     const opponentSlug = opponent.toLowerCase().replace(/\s+/g, '-');

//     return (
//         <div className="m-5 p-8 bg-red-100 w-4/5 h-auto rounded-lg shadow-white shadow-sm text-center flex flex-col justify-center items-center">
//             {/* <img src={`../clubs/${opponentSlug}-logo.png`} alt={`${opponent}'s Club Logo`} className="w-32 h-32 object-cover" /> */}
//             <img src={props.opponentLogo} alt={`${opponent}'s Club Logo`} className="w-32 h-32 object-cover" />
//             <div>
//                 <h2 className="text-blue-950 font-extrabold text-xl">
//                     {props.homeTeam} vs {props.awayTeam}
//                 </h2>
//             </div>
//             <p className="italic text-black font-bold">{props.date}</p>
//             <a href={props.matchInfo}>
//                 <button className="text-white bg-red-700 hover:bg-red-800 w-48 mt-2 p-1 rounded font-bold text-center">Match Info</button>
//             </a>
//         </div>
//     )
// }

// export default Event;
import React from "react";
import AlavezLogo from '../assets/clubs/alavéz-logo.png';
import AthleticClubLogo from '../assets/clubs/athletic-club-logo.png';
import CeltaVigoLogo from '../assets/clubs/celta-vigo-logo.png';
import GranadaLogo from '../assets/clubs/granada-logo.png';
import MallorcaLogo from '../assets/clubs/mallorca-logo.png';
import RayoVallecanoLogo from '../assets/clubs/rayo-vallecano-logo.png';
import RealBetisLogo from '../assets/clubs/real-betis-logo.png';
import RealMadridLogo from '../assets/clubs/real-madrid-logo.png';
import RealSociedadLogo from '../assets/clubs/real-sociedad-logo.png';
import SevillaLogo from '../assets/clubs/sevilla-logo.png';


const Event = (props) => {
    // Assigning a variable to track who the opponent is
    const opponent = props.awayTeam !== 'FC Barcelona' ? props.awayTeam : props.homeTeam;

    // Convert opponent's name to lowercase and replace spaces with hyphens using regex
    const opponentSlug = opponent.toLowerCase().replace(/\s+/g, '-');

    // Create a mapping between opponent slugs and logo imports
    const opponentLogos = {
        'alavéz': AlavezLogo,
        'athletic-club': AthleticClubLogo,
        'celta-vigo': CeltaVigoLogo,
        'granada': GranadaLogo,
        'mallorca': MallorcaLogo,
        'rayo-vallecano': RayoVallecanoLogo,
        'real-betis': RealBetisLogo,
        'real-madrid': RealMadridLogo,
        'real-sociedad': RealSociedadLogo,
        'sevilla': SevillaLogo,
    };
    
    // Get the opponent's logo based on the opponentSlug variable
    const opponentLogo = opponentLogos[opponentSlug];

    return (
        <div className="m-5 p-8 bg-red-100 w-4/5 h-auto rounded-lg shadow-white shadow-sm text-center flex flex-col justify-center items-center">
            <img src={opponentLogo} alt={`${opponent}'s Club Logo`} className="w-32 h-32 object-cover" />
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
