import React, { useState } from 'react';
import useSWR from 'swr';
import Transactions from './Transactions';
import './Transactions.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Transaction({setBalance}) {
  const [transactionData, setTransactionData] = useState([]);
  const apiUrl = `http://localhost:3007/transactionDB`;

  const { data, error, isValidating } = useSWR(apiUrl, fetcher);

  // Use useEffect to update state when data changes
  React.useEffect(() => {
    if (data) {
      setTransactionData(data);
    }
  }, [data]);

  if (!transactionData.length && isValidating) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred.</p>;
  }

  const totalBalance = transactionData.reduce((total, transaction) => {
    if (transaction.condition) {
      return total + transaction.amount;
    } else {
      return total - transaction.amount;
    }
  }, 0);
  
  setBalance(totalBalance);
  

  return (
    <div>
      {transactionData.map((entity) => (
        <Transactions
          key={entity._id}
          id={entity._id}
          amount={entity.amount}
          vendor={entity.vendor}
          category={entity.category}
          condition={entity.condition}
          setTransactionData={setTransactionData}
        />
      ))}

    </div>
  );
}
