import React from 'react'
import { useState } from 'react';
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const titleChangeHandler = (e) => {
        if (e.target.value.length > 0) {
            setTitle(e.target.value);
        } else {
            return;
        }
    }
    const amountChangeHandler = (e) => {
        if (e.target.value.length > 0 && e.target.value > 0) {
            setAmount(e.target.value);
        } else {
            return;
        }
    }
    const dateChangeHandler = (e) => {
        if (e.target.value.length > 0) {
            setDate(e.target.value);
        } else {
            return;
        }
    }
    const submitChangeHandler = (e) => {
        e.preventDefault();
        if (title.length > 0 && amount.length > 0 && date.length > 0) {
            const expensedata = {
                title,
                amount,
                date: new Date(date)
            }
        props.getData(expensedata)
        }

        setAmount('')
        setDate('')
        setTitle('')
    }
    return (
        <form onSubmit={submitChangeHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="title">Title</label>
                    <input value={title} onChange={titleChangeHandler} type="text" id="title" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input 
                        value={amount}
                        onChange={amountChangeHandler} 
                        type="number" 
                        id="amount" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                    <input value={date} onChange={dateChangeHandler} type="date" id="date" />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                    <button onClick={props.shown}>Cannel</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;