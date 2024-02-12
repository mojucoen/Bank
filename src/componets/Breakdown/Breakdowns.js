import React, { useState } from 'react'
import useSWR from 'swr';
import './Breakdown.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Breakdowns() {
  
    const [breakdownsData, setbreakdownsData] = useState([]);
    const apiUrl = `http://localhost:3007/transactionDB`;
  
    const { data, error, isValidating } = useSWR(apiUrl, fetcher);
  
    // Use useEffect to update state when data changes
    React.useEffect(() => {
      if (data) {
        setbreakdownsData(data);
      }
    }, [data]);
  
    if (!breakdownsData.length && isValidating) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>An error has occurred.</p>;
    }
    const categoryTotal = {};
    breakdownsData.forEach(item => {
      categoryTotal[item.category] = (categoryTotal[item.category] || 0) + item.amount;
    });
  
  
    return (
    <div >
              <h1>Breakdown</h1>  

              {Object.keys(categoryTotal).map(category => (
        <div className='Box' key={category}>
          <div className='fontSize'>{categoryTotal[category]} : {category} </div>

        </div>
      ))}

    </div>
  )
}
