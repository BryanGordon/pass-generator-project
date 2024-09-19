export function Results () {
  const random = Math.random().toString(36)
  console.log(random)
  return (
    <article className='bg-blue-400 p-4 pb-20 mx-8 mt-5 mb-5 rounded-lg'>
      <h2 className='text-h2 text-center'>Your new password</h2>
      <div className='flex justify-center pt-2'>
        <input type='text' className='mt-3 rounded-xl h-18 items-center' />
      </div>
    </article>
  )
}
