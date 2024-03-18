import React, { useState } from "react";

export default function AccordianItem({ title, description, price }) {
  const [visible, setVisible] = useState(false);
  const [sign, setSign] = useState('+')
  const singleClickHandler = () => {
    setVisible(prev => !prev)
    if(sign === '+')
    {
        setSign('-')
    }
    else
    setSign('+')

    
  };
  return (
    <>
      <div className="bg-rose-600 text-white w-1/2 mx-auto p-5 flex flex-row items-center justify-between flex-wrap
      transition-all
      ">
        <div className="w-1/2">
          <div className="">{title}</div>
          <div className="">{description}</div>
          <div className="">{price}</div>
        </div>
        <button 
        onClick={singleClickHandler}
        className="text-xl p-2 hover:font-bold transition-all"> {sign} </button>
        {visible && <ul className="hover:bg-blue-500 w-full  duration-1000 transition-all">
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cumque.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cumque.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cumque.</li>
      </ul>}
      </div>
      
    </>
  );
}
