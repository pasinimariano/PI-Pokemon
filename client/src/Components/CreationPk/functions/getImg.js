const randomImg = async () => {
    let number = await Math.floor(Math.random() * 890) + 1;
    let spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;

    return spriteURL
};

export default randomImg