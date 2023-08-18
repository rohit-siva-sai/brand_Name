import React from 'react'

const Admin = () => {
  return (
    <div className='w-3/5 bg-white rounded-xl h-[800px] py-4'>
      <div className=''>
        <p className='font-bold text-xl px-6 text-gray-800 mb-4'>Quotes Received (0 of Maximun 20)</p>
        <div className="px-2 py-1 w-fit mx-6 hover:border-rose-600 border text-gray-600 hover:text-rose-600 rounded cursor-pointer">
            Compare Quotations
          </div>
      </div>
    </div>
  )
}

export default Admin
