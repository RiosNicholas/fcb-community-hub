import React from "react";
import Event from "./Event";
import Alavez from '../assets/clubs/alavéz-logo.png';
import AthleticClub from '../assets/clubs/athletic-club-logo.png';
import CeltaVigo from '../assets/clubs/celta-vigo-logo.png';
import Granada from '../assets/clubs/granada-logo.png';
import Mallorca from '../assets/clubs/mallorca-logo.png';
import RayoVallecano from '../assets/clubs/rayo-vallecano-logo.png';
import RealBetis from '../assets/clubs/real-betis-logo.png';
import RealMadrid from '../assets/clubs/real-madrid-logo.png';
import RealSociedad from '../assets/clubs/real-sociedad-logo.png';
import Sevilla from '../assets/clubs/sevilla-logo.png';

const EventContainer = () => {
    return (
        <div className="grid m-10 sm:grid-cols-1 md:grid-cols-2">
            <Event homeTeam='FC Barcelona' awayTeam='Real Betis' date='September 15, 2023' matchInfo="https://onefootball.com/en/match/2397169"/>
            <Event homeTeam='FC Barcelona' awayTeam='Celta Vigo' date='September 23, 2023' matchInfo="https://onefootball.com/en/match/2397181" />
            <Event homeTeam='Mallorca' awayTeam='FC Barcelona' date='September 26, 2023' matchInfo="https://onefootball.com/en/match/2397192" />
            <Event homeTeam='FC Barcelona' awayTeam='Sevilla' date='September 29, 2023' matchInfo="https://onefootball.com/en/match/2397201" />
            <Event homeTeam='Granada' awayTeam='FC Barcelona' date='October 8, 2023' matchInfo="https://onefootball.com/en/match/2397213" />
            <Event homeTeam='FC Barcelona' awayTeam='Athletic Club' date='October 22, 2023' matchInfo="https://onefootball.com/en/match/2397218" />
            <Event homeTeam='FC Barcelona' awayTeam='Real Madrid' date='October 28, 2023' matchInfo="https://onefootball.com/en/match/2397231" />
            <Event homeTeam='Real Sociedad' awayTeam='FC Barcelona' date='November 5, 2023' matchInfo="https://onefootball.com/en/match/2397245" />
            <Event homeTeam='FC Barcelona' awayTeam='Alavéz' date='November 12, 2023' matchInfo="https://onefootball.com/en/match/2397251" />
            <Event homeTeam='Rayo Vallecano' awayTeam='FC Barcelona' date='November 26, 2023' matchInfo="https://onefootball.com/en/match/2397263" />
        </div>
    )
}
export default EventContainer