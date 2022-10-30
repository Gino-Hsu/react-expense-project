import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter/ExpensesFilter'
import './Expenses.css'

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState('2020')

  const handleChangeFilter = selectYear => {
    setFilterYear(selectYear)
  }

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={handleChangeFilter}
        />
        {props.items.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  )
}

export default Expenses
