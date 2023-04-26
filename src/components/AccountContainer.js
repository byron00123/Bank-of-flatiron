import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import TransactionForm from "./TransactionForm";

function AccountContainer() {
  const [transactionsEvent, setTransactionsEvent] = useState([]);
  const [searchEvent, setSearchEvent] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        return response.json();
      })
      .then((data) => setTransactionsEvent(data))
      .catch((error) => console.error(error));
  }, []);

  const getSearch = (search) => {
    setSearchEvent(search);
  };

  const filteredTransactions = transactionsEvent.filter(
    (transaction) =>
      transaction.description
        .toLowerCase()
        .includes(searchEvent.toLowerCase())
  );

  function updatedTransactionEvents(addedTransactions) {
    const updatedTransactionEventsArray = [
      ...transactionsEvent,
      addedTransactions,
    ];
    setTransactionsEvent(updatedTransactionEventsArray);
  }

  function handleDelete(id) {
    const updatedTransactions = transactionsEvent.filter(
      (transaction) => transaction.id !== id
    );
    setTransactionsEvent(updatedTransactions);
  }

  return (
    <div>
      <Search getSearch={getSearch} />
      <TransactionForm addedData={updatedTransactionEvents} />

      <TransactionsList
        transactionsEvent={filteredTransactions}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default AccountContainer;
