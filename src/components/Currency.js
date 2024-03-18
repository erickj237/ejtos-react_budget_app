import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div className="alert alert-info d-flex  flex-md-row">
            <label htmlFor="currencySelect" className="form-label">Currency:</label>
            <select 
                id="currencySelect" 
                className="form-select form-select-sm mx-lg-2  w-75"
                value={currency} 
                onChange={handleCurrencyChange}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;
