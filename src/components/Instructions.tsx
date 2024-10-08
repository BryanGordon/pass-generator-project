import { useState } from 'react'
import { Slider } from './ui/slider'

export function Instructions () {
  const [isActivateUpper, setIsActivateUpper] = useState(false)
  const [isActivateLower, setIsActivateLower] = useState(false)
  const [isActivateNumber, setIsActivateNumber] = useState(false)
  const [isActivateSpecial, setIsActivateSpecial] = useState(false)
  const [lenghtValue, setLenghtValue] = useState(12)

  return (
    <article className='bg-blue-400 p-20 pb-20 mx-80 mt-5 rounded-lg'>
      <h2 className='text-h2 text-center'>Generation instructions</h2>

      <form className='pt-12'>
        <section className='flex flex-row justify-around'>

          <div className='flex flex-col items-center'>
            <h4 className='text-h4 content-center'>Enable uppercase</h4>
            <input type='checkbox' checked={isActivateUpper} className='w-[19px] h-[19px] mt-3' />
          </div>

          <div className='flex flex-col items-center'>
            <h4 className='text-h4'>Enable lowercase</h4>
            <input type='checkbox' checked={isActivateLower} className='w-[19px] h-[19px] mt-3' />
          </div>

          <div className='flex flex-col items-center'>
            <h4 className='text-h4'>Enable numbers</h4>
            <input type='checkbox' checked={isActivateNumber} className='w-[19px] h-[19px] mt-3' />
          </div>

          <div className='flex flex-col items-center'>
            <h4 className='text-h4'>Enable special characters</h4>
            <input type='checkbox' checked={isActivateSpecial} className='w-[19px] h-[19px] mt-3' />
          </div>

        </section>

        <section>

          <div className='pt-12'>
            <h3 className='text-h3 text-center'>Password lenght</h3>
            <div className='w-1/6 my-0 mx-auto text-center pt-5'>
              <Slider defaultValue={[lenghtValue]} value={[lenghtValue]} max={15} step={1} />
            </div>
          </div>

          <div className='flex justify-center pt-12'>
            <button className='bg-slate-500 py-3 px-8 rounded-lg'>Generate</button>
          </div>

        </section>

      </form>
    </article>
  )
}
