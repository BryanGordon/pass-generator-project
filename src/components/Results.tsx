import { Generator } from '@/logic/generator'

export function Results () {
  const info = {
    letters: 'abcdefgh',
    numbers: '123',
    specials: '!@#$'
  }

  const data = Generator(info)

  return (
    <article className='bg-blue-400 p-10 pb-10 mx-80 mt-5 mb-5 rounded-lg'>
      <h2 className='text-h2 text-center'>Your new password</h2>
      <div className='flex justify-center pt-2'>
        <input value={data} type='text' className='mt-3 rounded-xl h-18 items-center text-center' />
      </div>
    </article>
  )
}
