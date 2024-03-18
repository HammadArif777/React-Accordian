import React, { useEffect, useState } from 'react'
import AccordianItem from './AccordianItem';


function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);

  async function fetchData()
  {
    
    try{
      const response = await fetch('https://dummyjson.com/products/')
      const responseData = await response.json();
      setData(responseData.products)
      setLoading(false)
    }
    catch(error){
      console.log(error);
    }

  }
  useEffect(()=>{
    
    setLoading(true)
    setTimeout(()=>fetchData(),1500)
  },[]);
  

  return (
    <div>
       {loading? <svg viewBox="25 25 50 50">
  <circle r="20" cy="50" cx="50"></circle>
</svg>: 
data.map(product => <AccordianItem key={product.id} title={product.title} description={product.description} price={product.price}/>)
}
    </div>
  )
}

export default App