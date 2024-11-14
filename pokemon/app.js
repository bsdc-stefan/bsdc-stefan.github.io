console.log("pokemon app")

const container = document.querySelector('#container')

const newImg = document.createElement('img')
newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'

container.appendChild(newImg)

for (i=1; i <= 151; i++) {
    const newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    
    container.appendChild(newImg)

}
