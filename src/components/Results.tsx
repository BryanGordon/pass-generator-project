export function Results () {
  const letters = 'abcdefgh'
  const number = '123'
  const specials = '!@#$'
  const length = 10
  const password = letters + number + specials

  const render = () => {
    let aux = ''
    let items = ''
    for (let x = 0; x < length; x++) {
      items = Math.floor(Math.random() * password.length)
      aux += password.charAt(items)
    }
    return aux
  }

  console.log('random function  ' + render())

  return (
    <article className='bg-blue-400 p-10 pb-10 mx-80 mt-5 mb-5 rounded-lg'>
      <h2 className='text-h2 text-center'>Your new password</h2>
      <div className='flex justify-center pt-2'>
        <input value={render()} type='text' className='mt-3 rounded-xl h-18 items-center text-center' />
      </div>
    </article>
  )
}
