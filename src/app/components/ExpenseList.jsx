"use client"

import ExpenseItem from "./ExpenseItem"
import { useExpense } from "../context/useExpense.context";

export default function ExpenseList() {
  const { expenses } = useExpense();

  if (expenses.length === 0) {
    return (
      <div className="bg-white p-6 rounded shadow text-gray-500 text-center">
        No expenses yet. Start by adding one above.
      </div>
    )
  }

  return (
    <div className="space-y-4">

      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
        />
      ))}

    </div>
  )
}