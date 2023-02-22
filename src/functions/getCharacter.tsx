import { IItem } from '../DB/charactersList'

export function getCharacter(array: IItem[], id: number) {
  return array.filter((item) => item.id === id)[0]
}
