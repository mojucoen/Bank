import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Header/Navbar';
import Operations from './componets/Operations/Operations';
import Transaction from './componets/Transactions/Transaction';
import { useState } from 'react';
import Breakdowns from './componets/Breakdown/Breakdowns';

function App() {
  const [balance,setBalance]=useState(0)

  return (
 <Router>
      <div className="App">
        <Navbar balance={balance} />
        <Routes>
          <Route path="/" element={<Transaction setBalance={setBalance}  />} />
          <Route path="/Operations" element={<Operations  />} />
          <Route path="/Breakdowns" element={<Breakdowns />} />

        </Routes>
      </div>
    </Router>    
  );
}

export default App;
