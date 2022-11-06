import React from "react";
import { useState } from "react";
import NewExpenses from "./components/NewExpenses/NewExpenses"
import Expenses from "./components/Expenses/Expenses"
import './App.css';
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [DUMMY_DATA, setDUMMY_DATA] = useState(expenses)
  const getData = (info)=> {
    setDUMMY_DATA((infor)=> {
        return [info, ...infor]
    });

    console.log(DUMMY_DATA, info);
  }
  return (
    <div className='App'>
      <NewExpenses inform={getData}/>
      <Expenses date={DUMMY_DATA}/>
    </div>
  );
}

export default App;
