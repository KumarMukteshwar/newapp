import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data,setData] = useState(null);

    useEffect(()=>{
        const fetchingData = async()=>{
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching Data:",error)
            }
        };
        fetchingData();
    },[])
  return (
    <div>
       <h2>Fetched Data:</h2>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>: {item.body}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default FetchData
