"use client"
import { useExpense } from "../context/useExpense.context";

export default function SummaryPanel() {
  const { expenses } = useExpense();

  const total = expenses.reduce((sum, e) => sum + e.amount, 0)

  const breakdown = expenses.reduce((acc, e) => {

    acc[e.category] = (acc[e.category] || 0) + e.amount

    return acc

  }, {})

  return (
    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-semibold mb-4">
        Summary
      </h2>

      <p className="text-lg font-bold mb-4">
        Total: ${total.toFixed(2)}
      </p>

      <div className="space-y-1">

        {Object.entries(breakdown).map(([cat, amount]) => (

          <p key={cat} className="text-gray-600">
            {cat}: ${amount.toFixed(2)}
          </p>

        ))}

      </div>

    </div>
  )
}