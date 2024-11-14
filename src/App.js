import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  const [transactions, setTransactions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (transactionId) => {
    const updatedTransactions = transactions.filter((transaction) => {
      return transaction.id !== transactionId;
    });

    setTransactions(updatedTransactions);
  };

  const handleEditTransaction = (updatedTransaction) => {
    fetch(
      `https://expense-tracker-z3wf.onrender.com/transactions/${updatedTransaction.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(updatedTransaction),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update transaction");
        }
        return response.json();
      })
      .then((updatedTransaction) => {
        setTransactions((prevTransactions) => {
          return prevTransactions.map((transaction) =>
            transaction.id === updatedTransaction.id
              ? updatedTransaction
              : transaction
          );
        });
      })
      .catch((error) => console.error("Error updating transaction", error));
  };

  React.useEffect(() => {
    fetch(" https://expense-tracker-z3wf.onrender.com/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error getting transactions", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      {!isLoggedIn ? (
        <Login key="login" setIsLoggedIn={setIsLoggedIn} /> // Pass setIsLoggedIn as prop
      ) : !loading ? (
        <Outlet
          context={{
            transactions,
            setTransactions,
            handleAddTransaction,
            handleDeleteTransaction,
            handleEditTransaction,
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
