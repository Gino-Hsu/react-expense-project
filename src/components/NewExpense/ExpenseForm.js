import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const handleTitleChange = e => {
    setEnteredTitle(e.target.value)

    // 必須要複製一個新的物件，所以方法二也不好：
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // })
    // 方法三，可以：
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: e.target.value }
    // })
  }

  const handleAmountChange = e => {
    setEnteredAmount(e.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // })

    // setUserInput(prevState => {
    //   return { ...prevState, enteredAmount: e.target.value }
    // })
  }

  const handleDateChange = e => {
    setEnteredDate(e.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // })

    // setUserInput(prevState => {
    //   return { ...prevState, enteredDate: e.target.value }
    // })
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={handleTitleChange} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={handleAmountChange}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022.12-31'
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
