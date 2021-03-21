export default function Home () {
  return (
    <div className='p-8'>
      <h1 className='font-bold text-3xl text-gray-900'>Avoorder 🥑</h1>
      <p className='text-gray-900 mt-4 text-md'>Bestelle jetzt dein Avocado Toast. So wie du es haben willst. Sobald du bestellt hast, kümmern wir uns schnellstmöglich drum!</p>
      <form className='my-8'>
        <label className='block'>
          Menge 🥪
          <input type='number' min='1' max='10' value='1' className='rounded border-gray-400 mx-4 w-16' />
        </label>
        <label className='block my-8'>
          Salz 🧂
          <input type='checkbox' class='rounded text-green-500 mx-10' />
        </label>
        <label className='block my-8'>
          Chilli 🌶
          <input type='checkbox' class='rounded text-green-500 mx-9' />
        </label>
      </form>
      <button className='bg-green-500 rounded-md shadow-md text-white mt-8 p-3 font-semibold hover:bg-green-400 hover:shadow-lg transform hover:-translate-y-0.5 transition ease-linear'>Jetzt bestellen</button>
    </div>
  )
}
