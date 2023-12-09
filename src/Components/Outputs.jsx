import React from "react";

const Outputs = (prop) => {
    return (<>
        <section className="outputs">
            <div className="tip-amount">
                <p>Tip Amount<br/><span>/ person</span></p>
                <h2>${prop.tip}</h2>
            </div>
            <div className="total-amount">
                <p>Total<br/><span>/ person</span></p>
                <h2>${prop.total}</h2>
            </div>
            <button type="submit" onClick={prop.resetData}>Reset</button>
        </section>
    </>)
}

export default Outputs;