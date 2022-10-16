import React from 'react'

export default function AccountSummary() {
  return (
    <div className='row'>
        <div>
            <h4>Income</h4>
            <p className='money plus'>+$0.00</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>-$0.00</p>
        </div>
    </div>
  )
}
