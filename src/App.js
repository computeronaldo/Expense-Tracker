import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionSummary from "./components/TransactionSummary";
import TransactionsContainer from "./components/Transactions/TransactionsContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <TransactionSummary />
      <TransactionsContainer />
    </div>
  );
}

export default App;
