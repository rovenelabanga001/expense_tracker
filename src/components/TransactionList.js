import React from "react";

const TransactionList = () => {
  return (
    <section className="not-header">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Category</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Income</td>
              <td>salary</td>
              <td>12th November 2024</td>
              <td>100000</td>
              <td>November Salary</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionList;
