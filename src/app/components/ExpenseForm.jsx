"use client"

import { useState } from "react"
import useExpenseHook from "../hooks/useExpense.hook";

export default function ExpenseForm() {
  console.log("Rendering ExpenseForm");

  const { addExpense } = useExpenseHook();

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("Food")

  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !amount) return

    const expense = {
      id: crypto.randomUUID(),
      name,
      amount: Number(amount),
      category
    }

    addExpense(expense)

    setName("")
    setAmount("")
    setCategory("Food")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-4"
    >

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded flex-1"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Marketing</option>
        <option>Utilities</option>
        <option>Other</option>
      </select>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Expense
      </button>

    </form>
  )
}