import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            if(newBudget <= 20000 && newBudget >= totalExpenses) {
                dispatch({ type: "SET_BUDGET", payload: newBudget });
            } else if (totalExpenses > 20000) {
                alert("Budget can't exceed $20,000")
            } else if(newBudget < totalExpenses){
                alert("You can't reduce the budget value lower than the spending")
            }
        } 
    }
    return (
<div className="alert alert-secondary">
    <label>Budget: {currency} </label>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onKeyDown={handleKeyDown} style={{ width: '100px' }}></input> 
</div>
    );
};
export default Budget;
