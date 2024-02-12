import { useState } from 'react';
import './Transactions.css';

const apiUrl = 'http://localhost:3007/delBank/';


export default function Transactions({condition, amount, vendor, category, id ,setTransactionData}) {
 const [Amount,setAmount]=useState(amount)
 const [Vendor,setVendor]=useState(vendor)
 const [Category,setCategory]=useState(category)


 
  const handleDelete = async () => {
    try {
      const response = await fetch(apiUrl + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete');
      }
  


      
      // Parse the response body as JSON
      const responseData = await response.json();
  
      setTransactionData(responseData)

      console.log('Successfully deleted', responseData);
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };
  return (
    
    
    <div  className='TransactionC' >
      <div className='item1'>{Vendor}</div>
      <div className={condition ? 'item2G' : 'item2R'}>{condition? Amount : - Amount}</div>
      <div className='item3'>{ Category}</div>
      <button className="item4" onClick={handleDelete}>Delete</button>
    </div>
  );
}
