import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import './ExpenseItem.css';

const Num = (props) => {
    // const [inc, setInc] = useState(0);
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <p className="expense-item__price">
                    {props.price}$
                </p>
                {/* <p>{inc}</p>
                <button onClick={()=> {
                    setInc(inc + 1)
                }}>+</button>
                <button onClick={()=> {
                    setInc(inc - 1)
                }}>-</button> */}
            </div>
        </div>
    );
};

export default Num;