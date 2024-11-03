// App.js
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/index.jsx";
import Expenses from "./components/Expenses/index.jsx";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: "e1", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Math.random().toString() },
    ]);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  return (
    <div className="container">
      {!isFormVisible && (
        <button className="btn" onClick={toggleFormVisibility}>
          Add New Expense
        </button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onAddExpense={addExpenseHandler}
          onCancel={toggleFormVisibility}
        />
      )}
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
