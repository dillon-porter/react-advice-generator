import React from "react"


export default function Advice() {

    const [advice, setAdvice] = React.useState([])

    const getAdvice = async function() {
        const response = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
        const adviceResponse = await response.json()
        setAdvice(adviceResponse.slip)
    }
    
    React.useEffect(() => {
        getAdvice()
    }, [])

    return ( 
        <div className="container">
            <h1 className="advice">{`advice # ${advice.id}`}</h1>
            <p className="advice-text">{`"${advice.advice}"`}</p>
            <img className="divider" src="./images/pattern-divider-desktop.svg" alt="" />
            <button onClick={getAdvice} className="dice" aria-label="A dice for random advice quotes">
                <img className="dice-icon" src="./images/icon-dice.svg" alt="dice" />
            </button>
        </div>
    )
}