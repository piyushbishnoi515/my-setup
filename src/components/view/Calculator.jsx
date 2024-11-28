import { useState } from 'react';
import React from 'react'

const Calculator = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    return (
        <div>

            <div className='flex justify-end  mx-auto '>
                <h2 className='p-[15px] w-[200px]      bg-yellow-400 border  font-semibold text-xl text-center my-8'>piyush : {toggle ? "sachin" : "Bishnoi"}</h2>
                <button className='p-[15px] w-[200px]  bg-red-400 border  text-white font-medium text-2xl' onClick={() => setToggle(!toggle)}>Change Name</button>
            </div>
            <div className='flex justify-center text-center items-center py-8'><p className='p-[15px] w-[150px] bg-red-700 border rounded-xl text-white font-medium text-2xl mr-7'>{count}</p></div>
            <div className='flex justify-center
            '>
                <button className='p-[15px] w-[150px] mx-[100px] my-[20px] bg-green-400 border  text-white font-medium text-2xl mr-7' onClick={() => setCount(count + 1)}>Plus</button>
                <button className='p-[15px] w-[150px] mx-[100px] my-[20px] bg-green-400 border  text-white font-medium text-2xl mr-7' onClick={() => setCount(count - 1)}>Minus</button>
                <button className='p-[15px] w-[150px] mx-[100px] my-[20px] bg-green-400 border  text-white font-medium text-2xl mr-7' onClick={() => setCount(count * 2)}>multiply</button>
                <button className='p-[15px] w-[150px] mx-[100px] my-[20px] bg-green-400 border  text-white font-medium text-2xl mr-7' onClick={() => setCount(count / 2)}>divide</button>
            </div>
            <div>
            </div>
            <div className='min-h-screen'></div>
        </div>
    )
}

export default Calculator