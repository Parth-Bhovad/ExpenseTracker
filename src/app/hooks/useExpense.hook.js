import { useExpense } from "../context/useExpense.context";

export default function useExpenseHook() {
    const { expenses, setExpenses } = useExpense();

    function addExpense(expense) {
        setExpenses(prev => [...prev, expense])
    }

    function deleteExpense(id) {
        setExpenses(prev => prev.filter(e => e.id !== id))
    }

    return {
        expenses,
        addExpense,
        deleteExpense
    }
}