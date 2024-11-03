import { useState } from 'react'
import ExpenseItem from '../ExpenseItem/index.jsx'
import FilterByYear from '../FilterByYear/index.jsx'
import styles from './Expenses.module.css'
const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021')
  const [filteredMonth, setFilteredMonth] = useState(null)

  const filteredExpenses = expenses.filter(expense => {
    const expenseYear = expense.date.getFullYear().toString()
    const expenseMonth = expense.date.getMonth() + 1

    return (
      expenseYear === filteredYear &&
      (!filteredMonth || expenseMonth === filteredMonth)
    )
  })

  return (
    <div>
      <FilterByYear
        selectedYear={filteredYear}
        onYearChange={setFilteredYear}
        onMonthChange={setFilteredMonth}
      />
      <div className={styles.expenses}>
        {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Expenses
