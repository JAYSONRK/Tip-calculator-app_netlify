import React, { useState } from "react";
import Inputs from "./Inputs";
import Outputs from "./Outputs";
import Logo from "../images/logo.svg"

const Card = () => {
    const [userOutput, setOutput] = useState({
        tip: '0.00',
        total: '0.00',
        reset: false
    });

    const userData = (data) => {
        setOutput(data);
    }

    const resetData = () => {
        let reset = {
            tip: '0.00',
            total: '0.00',
            reset: true
        }
        setOutput(reset);
    }


    return (<>
        <div  className="logo">
            <img src={Logo} alt="logo"/>
        </div>
        <main className="card">
            <Inputs
                userData = {userData}
                resetInput = {userOutput.reset}
            />
            <Outputs
                tip={userOutput.tip}
                total={userOutput.total}
                resetData = {resetData}
            />
        </main>
    </>)
}

export default Card;