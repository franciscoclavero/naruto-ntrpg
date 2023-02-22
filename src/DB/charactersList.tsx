export interface IItem {
  id: number
  name: string
  sprite: string
}

export const charactersList: IItem[] = [
  {
    id: 1,
    name: 'Naruto',
    sprite: 'assets/characters/naruto.jpg',
  },
  {
    id: 2,
    name: 'Sasuke',
    sprite: 'assets/characters/sasuke.png',
  },
  {
    id: 3,
    name: 'Sakura',
    sprite: 'assets/characters/sakura.png',
  },
]
