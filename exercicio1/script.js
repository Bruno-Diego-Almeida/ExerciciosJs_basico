
function entrar() {
let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')

let entrar =''
let mensagem = 'Você é personagem do filme The Matrix!' 

if (nome === "" || idade === "") {
    alert('Preencha os campos corretamente!');
}
if (nome ==='Thomas Anderson'|| nome ==='thomas anderson') {
    document.write(`<h1>Olá ${nome}, você é MAIOR de idade!</h1><h2>${mensagem}</h2>`)
} else if (nome!=="" && idade >= 18) {
    document.write(`<h1>Olá ${nome}, você é MAIOR de idade!</h1>`)
}
}

