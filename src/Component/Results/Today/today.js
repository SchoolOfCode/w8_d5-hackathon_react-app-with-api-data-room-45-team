import React from "react";

function Today({temp, desc, wind}) {
    return (
        <div>
            <p>{temp}</p>
            <p>{desc}</p>
            <p>{wind}</p>
        </div>
    );
}

export default Today;
