const randomImg = async () => {
  const number = await Math.floor(Math.random() * 649) + 1
  const spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${number}.gif`

  return spriteURL
}

export default randomImg
