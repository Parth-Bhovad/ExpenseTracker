"use client"
import useExpenseHook from "../hooks/useExpense.hook";

export default function ExpenseItem({ expense }) {
  const { deleteExpense } = useExpenseHook();

  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">

      {/* LEFT */}
      <div className="min-w-0">
        <p className="font-semibold truncate">
          {expense.name}
        </p>

        <p className="text-sm text-gray-500 truncate">
          {expense.category}
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <p className="font-bold">
          ${expense.amount.toFixed(2)}
        </p>

        <button
          onClick={() => deleteExpense(expense.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>

    </div>
  )
}