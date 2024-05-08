fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then( response => response.json() )
  .then( data => {
    
  const pokemoni = document.getElementById("poke")
  pokemoni.innerHTML = ""

  data.results.forEach( pokePoke => {
    // Získání URL obrázku 
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokePoke.name}`)
    .then( response => response.json() )
    .then( pokeData => {
    
      const imageUrl = pokeData.sprites.front_default

      const elementPoke = document.createElement("div")
      elementPoke.innerHTML = `
        <section>
        <img src="${imageUrl}" alt="">
        <p><strong>${pokePoke.name}</strong></p>
        </section>`
      pokemoni.appendChild(elementPoke)
    })
  })
})

if (img === null) {
  body.style.display === "none"
}