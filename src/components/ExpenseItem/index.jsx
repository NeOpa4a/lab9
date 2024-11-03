import ExpenseDate from './../ExpenseDate/index.jsx'
import Card from './../Card/index.jsx'
import styles from './ExpenseItem.module.css'

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Card className={styles.expenseItem}>
      <ExpenseDate date={date} />
      <div className={styles.expenseItemDescription}>
        <h2>{title}</h2>
        <div className={styles.expenseItemPrice}>${amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
