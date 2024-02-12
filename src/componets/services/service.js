import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Service({ searchData }) {
  // Use template literals to include dynamic data in the URL
  const apiUrl = `http://localhost:3007/transactionDB`;
  
  // Use the `useSWR` hook to fetch data
  const { data, error, isValidating } = useSWR(apiUrl, fetcher);

  // Handle loading state
  if (!data && isValidating) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (error) {
    return <p>An error has occurred.</p>;
  }

  // Render the data if available
  return (
    <div>
      <h1>
        {data && (
          <>
            hi {data.name} {/* Update this based on your data structure */}
          </>
        )}
      </h1>
    </div>
  );
}
