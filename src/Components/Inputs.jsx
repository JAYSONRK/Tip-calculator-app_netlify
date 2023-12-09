import React, { useState, useEffect } from "react";
import Dollar from "../images/icon-dollar.svg";
import People from "../images/icon-person.svg"

const Inputs = (prop) => {
    const [userInput, setInput] = useState({
        bill: '',
        tip: '',
        customtip: '',
        people: ''
    });
    const [inputError, setError] = useState([]);
    useEffect(() => {
        if (prop.resetInput) {
          const reset = {
            bill: "",
            tip: "",
            customtip: "",
            people: "",
          };
          setInput(reset);
        }
      }, [prop.resetInput]);

    const inputData = (event) => {
       const  {name, value} = event.target;
       setInput((prev) => {
        return {
            ...prev,
            [name] : value
        }
       });
        
    }

    const submitData = (data) => {
        data.preventDefault();

        const error = {
            bill: '',
            tip: '',
            customtip: '',
            people: ''
        };

        if (!userInput.bill) {
            error.bill = "Cant't be blank";
        } else if (+userInput.bill === 0) {
            error.bill = "Cant't be zero";
        } else if (+userInput.bill < 0 ) {
            error.bill = "Invalid input"
        }

        if (!userInput.people) {
            error.people = "Cant't be blank";
        } else if (+userInput.people === 0) {
            error.people = "Cant't be zero";
        } else if (+userInput.people < 0 ) {
            error.people = "Invalid input"
        }

        setError(error);

        let output = {}
        if (!userInput.customtip) {
            let tipAmmount = ((userInput.bill * (userInput.tip || userInput.customtip)/100)/ userInput.people).toFixed(2);
            output.tip = tipAmmount;
            let total = ((userInput.bill /userInput.people) + (userInput.bill * userInput.tip/100)/ userInput.people).toFixed(2);
            output.total = total;
        } 
        else  {
            let tipAmmount = ((userInput.bill * (userInput.customtip)/100)/ userInput.people).toFixed(2);
            output.tip = tipAmmount;
            let total = ((userInput.bill /userInput.people) + (userInput.bill * userInput.customtip/100)/ userInput.people).toFixed(2);
            output.total = total;
        }
        if (isFinite(output.tip) && isFinite(output.total)) {
            prop.userData(output);
        }  
    }

    return (<>
        <section className="inputs">
            <form onSubmit={submitData}>
                <div className="headings">
                    <label>Bill</label>
                    <div className="error">{inputError.bill}</div>
                </div>
                <div className="bill">
                    <input name="bill" type="number" placeholder="0" style={inputError.bill ? {outline : '2px solid rgba(245, 71, 71, 0.891)'} : {border: 'none'}} value={userInput.bill} onChange={inputData}/>
                    <img src={Dollar} alt="dollar"/>
                </div>
                
                <label>Select Tip %</label>
                <div className="tip">
                    <button name="tip" type="submit" value="5" onClick={inputData}>5%</button>
                    <button name="tip" type="submit" value="10" onClick={inputData}>10%</button>
                    <button name="tip" type="submit" value="15" onClick={inputData}>15%</button>
                    <button name="tip" type="submit" value="25" onClick={inputData}>25%</button>
                    <button name="tip" type="submit" value="50"onClick={inputData}>50%</button>   
                    <input name="customtip" type="number" placeholder="Custom" value={userInput.customtip} onChange={inputData} onMouseLeave={submitData}/>
                </div>
                
                <div className="headings">
                    <label>Number of People</label>
                    <div className="error">{inputError.people}</div>
                </div>
                <div className="people">
                    <input name="people" type="number" placeholder="0" style={inputError.people ? {outline : '2px solid rgba(245, 71, 71, 0.891)'} : {border: 'none'}} value={userInput.people} onChange={inputData} onMouseLeave={submitData}/>
                    <img src={People} alt="people"/>
                </div>
            </form>
        </section>
    </>)
}

export default Inputs;