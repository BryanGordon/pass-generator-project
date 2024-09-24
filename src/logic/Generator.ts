import { type Data } from '@/types/types'
const length = 15

export function Generator ({ letters, numbers, specials }: Data) {
  let aux:string = ''
  let items:number = 0
  const password = letters + numbers + specials

  for (let x = 0; x < length; x++) {
    items = Math.floor(Math.random() * password.length)
    aux += password.charAt(items)
  }
  return aux
}
