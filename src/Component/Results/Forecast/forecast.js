import React from "react";

function Forecast({ fore }) {
    console.log(fore);
    return (
        
        <div>
            <p>{fore.map((item)=>{
                return (
                    <div>
                        <p>day :{item.day}</p>
                        <p>temperature: {item.temperature}</p>
                        <p>wind: {item.wind}</p>
                    </div>
                );
            })}</p>
        </div>
    );
}

export default Forecast;


