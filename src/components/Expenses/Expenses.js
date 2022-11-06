import React from 'react'
import { useState } from 'react'
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import './Expenses.css'

const Expenses = (props) => {
    const [select, setSelect] = useState(2022)
    const getSelectData = (sele) => {
        setSelect(sele)
    }
    const information = props.date.filter((item)=> {
        return item.date.getFullYear() === +select
    })

    return (
        <div className="expenses">
            <ExpensesFilter getSelect={getSelectData} selectedData={select}/>
            {information.map((item)=> {
                return (
                    <ExpenseItem key={item.id} price={item.amount} name={item.title} date={item.date} />
                )
            }
            )}
            {
                information.length === 0 ? <p>No Expense Found</p>: ''
            }
        </div>
    );
};

export default Expenses;