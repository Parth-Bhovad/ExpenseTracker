export async function fetchRate(currency) {
  const res = await fetch(
    `https://api.frankfurter.app/latest?from=USD&to=${currency}`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch exchange rate")
  }

  const data = await res.json()

  return data.rates[currency]
}