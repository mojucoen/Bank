import React, { useState } from 'react';
import './Operations.css';
import { useNavigate } from 'react-router-dom';

export default function Operations({ setTransactionData }) {
  const apiUrl = 'http://localhost:3007/AddTransaction/';
  const navigate = useNavigate()

  const [amount, setAmount] = useState('');
  const [vendor, setVendor] = useState('Transaction vendor');
  const [category, setCategory] = useState('Transaction category');
  
  const handleAdd = async (condition) => {
   console.log(condition)
    const updatedBody = {
      condition:condition,
      amount: amount,
      vendor: vendor,
      category: category,
    };

    try {
console.log(updatedBody)      

const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(updatedBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to add transaction');
      }

      console.log('Successfully added transaction');
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
 navigate("/")
  };

  return (
    <div className='OperationsForm'>
      <h1>Insert Transaction</h1>
      <input
        id="inputFormAmount"
        value={amount}
        onChange={(e) => {setAmount(e.target.value);
        }}
      />

      <input
        id="inputFormVendor"
        value={vendor}
        onChange={(e) => setVendor(e.target.value.toLowerCase())}
      />
      <input
        id="inputFormCategory"
        value={category}
        onChange={(e) => setCategory(e.target.value.toLowerCase())}
      />
      <div className='buttonFormO'>
        <button className="buttonFormG" onClick={() =>handleAdd(true)}>
          Deposit
        </button>
        <button className="buttonFormR" onClick={() => handleAdd(false)}>
  Withdraw
</button>
      </div>
    </div>
  );
}
