export function Instructions () {
  return (
    <article className='bg-blue-400 p-4 pb-20 mx-8 mt-5 rounded-lg'>
      <h2 className='text-h2 text-center'>Generation instructions</h2>

      <form className='flex flex-row justify-around pt-12'>
        <div className='flex flex-col items-center'>
          <h4 className='text-h4 content-center'>Enable uppercase</h4>
          <input id='raw' type='checkbox' className='w-[19px] h-[19px] mt-3' />
        </div>
        <div className='flex flex-col items-center'>
          <h4 className='text-h4'>Enable lowercase</h4>
          <input type='checkbox' className='w-[19px] h-[19px] mt-3' />
        </div>
        <div className='flex flex-col items-center'>
          <h4 className='text-h4'>Enable numbers</h4>
          <input type='checkbox' className='w-[19px] h-[19px] mt-3' />
        </div>
        <div className='flex flex-col items-center'>
          <h4 className='text-h4'>Enable special characters</h4>
          <input type='checkbox' className='w-[19px] h-[19px] mt-3' />
        </div>

      </form>
    </article>
  )
}
