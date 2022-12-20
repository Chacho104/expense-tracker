import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Using three slices of the useState function
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // using one useState function and passing in the object

    /*
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /*
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
        */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        /*
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            };
        });
        */
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /*setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            };
        });
        */
    };

    // Both options are absolutely fine. Up to you which one you use!

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  );
}

export default ExpenseForm;