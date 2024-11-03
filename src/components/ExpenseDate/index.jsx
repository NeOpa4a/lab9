import styles from './ExpenseDate.module.css'

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()

  return (
    <div className={styles.expenseDate}>
      <div className={styles.expenseDateMonth}>{month}</div>
      <div className={styles.expenseDateYear}>{year}</div>
      <div className={styles.expenseDateDay}>{day}</div>
    </div>
  )
}

export default ExpenseDate
