let listaAtores = [

    {
  
      nome: 'Keanu Reeves',
  
      personagem: 'Neo',
  
      filme: 'The Matrix',
  
    },
  
    {
  
      nome: 'David Prowse',
  
      personagem: 'Darth Vader',
  
      filme: 'Star Wars Episódios IV-VI',
  
    },
  
    {
  
      nome: 'Bruce Wayne',
  
      personagem: 'Batman',
  
      filme: 'Batman - O Início'
  
    },
  
  ]

let ator = ''

for (let filmes of listaAtores) {

    ator += 
    ` <div class="box">
        <h1>${filmes.nome}</h1>
        <p>interpreta o personagem ${filmes.personagem} no filme ${filmes.filme}</p>
    </div>
    `

}

document.querySelector(`#container`).innerHTML = ator
