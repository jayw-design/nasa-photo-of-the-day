import React from "react";


function Landing ({image, title, date, explanation}) {


    return (
        <div>
            <h1>Hello from landing page</h1>
            <iframe width='600' height='400' src={image} type='video' alt='nasa image of the day' />
            <div className="descriptionContainer">
                <h2>{title}</h2>
                <h3>{date}</h3>
                <h4>{explanation}</h4>
            </div>
        </div>
    )
}


export default Landing