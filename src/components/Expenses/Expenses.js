import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter/ExpensesFilter'
import ExpensesList from './ExpensesList/ExpensesList'
import './Expenses.css'

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState('2020')

  const handleChangeFilter = selectYear => {
    setFilterYear(selectYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={handleChangeFilter}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  )
}

export default Expenses
