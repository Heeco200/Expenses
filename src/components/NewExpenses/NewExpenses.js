import React from 'react'
import { useState } from 'react';
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpence = (props) => {
    const [show, setShow] = useState(false)
    const dataExpenseForm = (data) => {
        const expenseInfo = {
            ...data,
            id: Math.random()*10
        }
        props.inform(expenseInfo)
    }
    const isShow = () => {
        setShow(!show)
    }
    return(
        <div className='new-expense'>
            {
                show?<ExpenseForm getData={dataExpenseForm} shown={isShow}/> : <button onClick={isShow}>Add new Expense</button>
            }
        </div>
    );
};

export default NewExpence;