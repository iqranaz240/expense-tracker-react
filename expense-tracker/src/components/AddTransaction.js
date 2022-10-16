import React from 'react'

export default function AddTransaction() {
  return (
    <div>
        <h3>Add New Transaction</h3>
        <form>
            <div className='form-control'>
                <label htmlFor='description'>Description</label>
                <input type='text'/>
            </div>
            <div className='form-control'>
                <label htmlFor='transactionAmount'>Transaction Amount</label>
                <input type='number'/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </div>
  )
}
