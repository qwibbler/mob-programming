function isPangram(string){
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return letters.every((letter) => string.toLowerCase().includes(letter))
}