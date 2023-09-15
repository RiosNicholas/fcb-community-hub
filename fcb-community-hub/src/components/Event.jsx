import React from "react";

const Event = (props) => {
    return (
        <div>
            <img></img>
            <h2 className="text-black">FCB at {props.opponent}</h2>
            <p>Match details</p>
            <button>Add to Calendar</button>
        </div>
    )
}

export default Event;