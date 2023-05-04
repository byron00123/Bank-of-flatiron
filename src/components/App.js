import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";
import Search from "./Search";
import TransactionsList from "./TransactionsList";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Bank of Flatiron</h2>
      </div>
      <AccountContainer />
      <Search />
      <TransactionsList transactionsEvent={transactions} />
    </div>
  );
}

export default App;
