export function Instructions () {
  return (
    <article className='bg-blue-400 p-4 pb-20 mx-8 mt-5 rounded-lg'>
      <h1 className=' w-1/2 my-0 mx-auto text-h2 text-center'>Generation instructions</h1>

      <div>
        <h4 className='text-h4'>Enable uppercase</h4>
        <input type='checkbox' />
        <h4 className='text-h4'>Enable lowercase</h4>
        <input type='checkbox' />
        <h4 className='text-h4'>Enable numbers</h4>
        <input type='checkbox' />
        <h4 className='text-h4'>Enable special characters</h4>
        <input type='checkbox' />
      </div>
    </article>
  )
}
