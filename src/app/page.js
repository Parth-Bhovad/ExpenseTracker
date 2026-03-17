import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import SummaryPanel from "./components/SummaryPanel"
import CurrencyConverter from "./components/CurrencyConverter"

export default function Home() {
  console.log("Rendering Home page");
  // const [expenses, setExpenses] = useState([])

  // function addExpense(expense) {
  //   setExpenses(prev => [...prev, expense])
  // }

  // function deleteExpense(id) {
  //   setExpenses(prev => prev.filter(e => e.id !== id))
  // }

  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Expense Tracker
      </h1>

      <div className="max-w-6xl mx-auto">

        <ExpenseForm />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          <div className="md:col-span-2">
            <ExpenseList />
          </div>

          <div className="space-y-6">
            <SummaryPanel />
            <CurrencyConverter />
          </div>

        </div>

      </div>

    </main>
  )
}