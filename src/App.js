import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Tables from "./components/Tables";
import Search from "./components/Search";
import AddTransaction from "./components/AddTransaction";
import Navbar from "./components/Navbar";
const arr = [
  {
    date: "13-04-2024",
    description: "Loan",
    category: "Car Loan",
    amount: "$6900",
  },
  {
    date: "17-04-2024",
    description: "Deposit",
    category: "Savings",
    amount: "$986",
  },
  {
    date: "20-04-2024",
    description: "Withdrawal",
    category: "General use",
    amount: "$870",
  },
  {
    date: "23-04-2024",
    description: "Sales",
    category: "Investment",
    amount: "$1000",
  },
  {
    date: "25-04-2024",
    description: "Deposit",
    category: "Savings",
    amount: "$80",
  },
  {
    date: "28-04-2024",
    description: "Withdrawal",
    category: "School Fees",
    amount: "$285",
  },
];
function App() {
  const [data, setData] = useState(arr);
  const [search, setSearch] = useState("");
  function handleChange(e) {
    setSearch(e.target.value);
  }
  function handleUpdateData(newTransaction) {
    console.log(newTransaction)
    setData([...data, newTransaction])
  }

  const filtered = data.filter((transaction) => {
    return transaction.description.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="container">

      <Navbar />
      <Search handleChange={handleChange} searched={search} />
      <AddTransaction handleSubmit={handleUpdateData} />
      <Tables arr={filtered} />
    </div>
  );
}

export default App;