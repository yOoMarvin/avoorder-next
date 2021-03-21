// Mid-stage app for structural reference. No backend connection

import React, { useState } from 'react'

export default function Home () {
  const [quantity, setQuantity] = useState(1)
  const [salt, setSalt] = useState(false)
  const [pepper, setPepper] = useState(false)
  const [notification, setNotification] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    setQuantity(1)
    setSalt(false)
    setPepper(false)
    setNotification('Bestellung abgeschickt 🥳')
    setTimeout(() => {
      setNotification('')
    }, 2000)
  }

  return (
    <div className='p-8'>
      <h1 className='font-bold text-3xl text-gray-900'>Avoorder 🥑</h1>
      <p className='text-gray-900 mt-4 text-md'>Bestelle jetzt dein Avocado Toast. So wie du es haben willst. Sobald du bestellt hast, kümmern wir uns schnellstmöglich drum!</p>
      <form className='my-8'>
        <label className='block'>
          Menge 🥪
          <input type='number' min='1' max='10' value={quantity} onChange={(e) => setQuantity(e.target.value)} className='rounded border-gray-400 mx-4 w-16' />
        </label>
        <label className='block my-8'>
          Salz 🧂
          <input type='checkbox' class='rounded text-green-500 mx-10' checked={salt} onChange={() => setSalt(!salt)} />
        </label>
        <label className='block my-8'>
          Chilli 🌶
          <input type='checkbox' class='rounded text-green-500 mx-9' checked={pepper} onChange={() => setPepper(!pepper)} />
        </label>
      </form>
      <button onClick={handleSubmit} className='bg-green-500 rounded-md shadow-md text-white mt-8 p-3 font-semibold hover:bg-green-400 hover:shadow-lg transform hover:-translate-y-0.5 transition ease-linear'>Jetzt bestellen</button>
      <p className='my-10 text-green-500 text-lg font-bold'>{notification}</p>
    </div>
  )
}
