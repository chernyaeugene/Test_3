import React from "react";


function Game({ questions, question, onclickVariant, step }) {
    const percent = Math.round((step / questions.length) * 100);

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percent}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}?</h1>
            <ul>
                {question.variants.map((text,index) => <li onClick={() => onclickVariant(index)} key={index}>{text}</li>)}
            </ul>
        </>
    );
}
export default Game