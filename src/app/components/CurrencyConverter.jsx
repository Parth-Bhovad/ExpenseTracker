"use client"

import { useState, useEffect } from "react"
import { fetchRate } from "../lib/currency"
import { useExpense } from "../context/useExpense.context";

export default function CurrencyConverter() {
  const { expenses } = useExpense();
  const [currency, setCurrency] = useState("EUR")
  const [rate, setRate] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const total = expenses.reduce((sum, e) => sum + e.amount, 0)

  useEffect(() => {

    async function loadRate() {
      try {

        setLoading(true)
        setError(false)

        const r = await fetchRate(currency);
        setRate(r)

      } catch {

        setError(true)

      } finally {

        setLoading(false)

      }
    }

    loadRate()

  }, [currency])

  const converted = rate ? (total * rate).toFixed(2) : null

  return (
    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-semibold mb-4">
        Currency Converter
      </h2>

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="border p-2 rounded mb-4"
      >
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
      </select>

      {loading && (
        <p className="text-gray-500">
          Fetching exchange rate...
        </p>
      )}

      {error && (
        <p className="text-red-500">
          Failed to load exchange rate
        </p>
      )}

      {!loading && !error && rate && (
        <p className="font-bold">
          Converted Total: {currency} {converted}
        </p>
      )}

    </div>
  )
}