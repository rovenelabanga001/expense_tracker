import React from "react";

const TransactonsForm = () => {
  return (
    <section className="not-header">
      <div className="transaction-form-container">
        <h3 className="heading-big">Add Transaction</h3>
        <form className="transaction-form">
          <select>
            <option value="" disabled hidden>
              Transaction Type
            </option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Category"
          />
          <input type="date" name="date" id="date" placeholder="date" />
          <input type="number" name="amount" id="amount" placeholder="Amount" />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default TransactonsForm;
