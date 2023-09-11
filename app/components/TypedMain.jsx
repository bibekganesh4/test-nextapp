'use client'
import React from 'react'
import Typed from "react-typed";

const TypedMain = () => {
  return (
    <div className="flex justify-center items-center">
    <p className="md:text-5xl sm:text-4xl text-xl font-bold">
      We Provide You Best
    </p>
    <Typed className="text-slate-400 md:text-5xl sm:text-4xl text-xl font-bold pl-2" strings={['LOANS','SAVINGS','INVESTMENTS','EXCHANGE']} typeSpeed={200} backSpeed={100} loop />
  </div>
  )
}

export default TypedMain