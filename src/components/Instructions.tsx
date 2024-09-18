export function Instructions () {
  return (
    <article className='bg-blue-400 p-4 pb-14 mx-8 mt-5 rounded-lg'>
      <h2 className='text-h2 text-center'>Generation instructions</h2>

      <form className='pt-12'>
        <section className='flex flex-row justify-around'>

          <div className='flex flex-col items-center'>
            <h4 className='text-h4 content-center'>Enable uppercase</h4>
            <input type='checkbox' className='w-[19px] h-[19px] mt-3' />
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

        </section>

        <section>

          <div className='pt-12'>
            <h3 className='text-h3 text-center'>Password lenght</h3>
            <div className='w-1/2 my-0 mx-auto text-center pt-5'>
              Slider
            </div>
          </div>

        </section>

      </form>
    </article>
  )
}
