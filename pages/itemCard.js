import React from 'react'

const ItemCard = ({item}) => {
  return (
    <div className="mx-5 border-b-2 w-1/2 p-5 flex items-center gap-5">
        <div className='w-48'>
            <img src={item.photoURL} alt={item.name}/>
        </div>
        <div className='flex flex-col'>
            <h1 className='font-semibold text-xl'>{item.name}</h1>
            <h1 className='text-lg'>₹ {item.price}</h1>
            <h1 className='text-md'><b>Qty: </b>{item.qty}</h1>
            <h1 className='text-md'><b>Total Price: </b>₹ {item.TotalProductPrice}</h1>
        </div>
    </div>
  )
}

export default ItemCard