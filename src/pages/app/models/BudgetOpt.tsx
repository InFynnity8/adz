import React from 'react'

import BudgetChart from "@/components/charts/BudgetChart"

const BudgetOpt = () => {
  return (
    <div className='p-4 px-2'>
        <h1 className='font-bold text-3xl text-blue-950 mb-5'>Budget Optimization model</h1>
        <BudgetChart/>
    </div>
  )
}

export default BudgetOpt